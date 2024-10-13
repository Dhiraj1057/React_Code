import React from 'react';
import { Player } from './types';

interface SquareProps {
    value: Player;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
    < div
        className="square"
        onClick={onClick}
        style={value ? { animation: "0.3s ease 0s 1 normal forwards running fadeInScale" } : undefined}
    > {value}</div>
)

export default Square;
