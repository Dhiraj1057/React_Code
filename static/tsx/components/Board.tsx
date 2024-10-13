import React from 'react';
import Square from './Square';
import { Player } from './types';

interface BoardProps {
    squares: Player[];
    onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((value, index) => (
            <Square
                key={index}
                value={value}
                onClick={() => onClick(index)}
            />
        ))}
    </div>
);

export default Board;
