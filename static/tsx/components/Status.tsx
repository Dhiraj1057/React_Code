import React from 'react';
import { Player, Opponent } from './types';

interface StatusProps {
    winner: Player | 'Draw' | null;
    currentPlayer: 'X' | 'O';
    playerName: string;
    player2Name: string;
    opponent: Opponent;
}

const Status: React.FC<StatusProps> = ({
    winner,
    currentPlayer,
    playerName,
    player2Name,
    opponent,
}) => (
    <div className="status">
        {winner
            ? winner === 'Draw'
                ? "It's a draw!"
                : `Winner: ${winner === 'X'
                    ? playerName
                    : opponent === 'Human'
                        ? player2Name
                        : 'Computer'
                }`
            : `Next player: ${currentPlayer === 'X'
                ? playerName
                : opponent === 'Human'
                    ? player2Name
                    : 'Computer'
            }`}
    </div>
);

export default Status;
