import { Player, Level, Rotation } from './types';
import { checkWinner } from './utils';
import { updateBoard } from './Game';

const minimax = (squares: Player[], depth: number, isMaximizing: boolean, rotation: Rotation): number => {
    const result = checkWinner(updateBoard(squares, rotation));
    if (result !== null) {
        return result === 'O' ? 1 : result === 'X' ? -1 : 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                squares[i] = 'O';
                let score = minimax(squares, depth + 1, false, rotation);
                squares[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                squares[i] = 'X';
                let score = minimax(squares, depth + 1, true, rotation);
                squares[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
};

const findBestMove = (squares: Player[], rotation: Rotation): number => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            squares[i] = 'O';
            let score = minimax(squares, 0, false, rotation);
            squares[i] = null;
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
};

const getRandomMove = (squares: Player[]): number => {
    const availableMoves = squares.reduce((acc: number[], square, index) =>
        square === null ? [...acc, index] : acc, []);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

export const makeAIMove = (
    level: Level,
    board: Player[],
    rotation: Rotation
): number => {
    switch (level) {
        case 'Hard':
            return findBestMove(board, rotation);
        case 'Medium':
            return Math.random() < 0.5 ? findBestMove(board, rotation) : getRandomMove(board);
        case 'Easy':
        default:
            return getRandomMove(board);
    }
};
