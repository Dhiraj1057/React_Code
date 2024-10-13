import React, { useState, useEffect } from 'react';
import Board from './Board';
import Setup from './Setup';
import Status from './Status';
import { Player, Level, Opponent, Rotation } from './types';
import { checkWinner } from './utils';
import { makeAIMove } from './ai';

export const updateBoard = (board: Player[], rotation: Rotation) => {
    switch (rotation) {
        case "Clockwise":
            return [board[3], board[0], board[1], board[6], board[4], board[2], board[7], board[8], board[5]];
        case "Anti-Clockwise":
            return [board[1], board[2], board[5], board[0], board[4], board[8], board[3], board[6], board[7]];
        case "Forward":
            return board.map((_, index) => board[(index - 1 + 9) % 9]);
        case "Backward":
            return board.map((_, index) => board[(index + 1 + 9) % 9]);
        default:
            return [...board];
    }
}

export const Game: React.FC = () => {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [rotation, setRotation] = useState<Rotation>('Normal');
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
    const [level, setLevel] = useState<Level>('Easy');
    const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
    const [opponent, setOpponent] = useState<Opponent>('Computer');
    const [playerName, setPlayerName] = useState<string>('Player 1');
    const [player2Name, setPlayer2Name] = useState<string>('Player 2');
    const [moveCount, setMoveCount] = useState<number>(0);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (currentPlayer === 'O' && !winner && opponent === 'Computer') {
            const timer = setTimeout(() => {
                const move = makeAIMove(level, board, rotation);
                handleClick(move);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentPlayer, winner, opponent]);

    const handleClick = (index: number) => {
        if (!isDisabled) setIsDisabled(true)
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        const updatedBoard = updateBoard(newBoard, rotation);
        setBoard(updatedBoard);
        setMoveCount(moveCount + 1);

        const gameWinner = checkWinner(updatedBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
        setMoveCount(0);
        setIsDisabled(false);
    };

    return (
        <div className="game-container">
            <div className="game">
                <h1 className="title">Tic-Tac-Toe</h1>
                <Setup
                    playerName={playerName}
                    setPlayerName={setPlayerName}
                    player2Name={player2Name}
                    setPlayer2Name={setPlayer2Name}
                    opponent={opponent}
                    setOpponent={setOpponent}
                    level={level}
                    setLevel={setLevel}
                    rotation={rotation}
                    setRotation={setRotation}
                    isDisabled={isDisabled}
                />
                <Board
                    squares={board}
                    onClick={handleClick}
                />
                <Status
                    winner={winner}
                    currentPlayer={currentPlayer}
                    playerName={playerName}
                    player2Name={player2Name}
                    opponent={opponent}
                />
                <button className="reset-button" onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </div>
    );
};