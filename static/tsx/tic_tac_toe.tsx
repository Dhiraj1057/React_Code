import React from 'react';
import { createRoot } from 'react-dom/client';
import { Game } from './components/Game';

const Bubble: React.FC = () => {
    const size = Math.random() * 60 + 40;
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        '--move-x': `${(Math.random() - 0.5) * 80}%`,
        '--move-y': `${(Math.random() - 0.5) * 80}%`,
        '--move-x2': `${(Math.random() - 0.5) * 80}%`,
        '--move-y2': `${(Math.random() - 0.5) * 80}%`,
        'animationDuration': `${Math.random() * 20 + 10}s`,
        'animationDelay': `-${Math.random() * 20}s`,
    }
    return <div className="bubble" style={style}></div >;
};

const Background: React.FC = () => (
    <div className="background">
        {Array.from({ length: 20 }).map((_, index) => (<Bubble key={index} />))}
    </div>
);

const Footer: React.FC = () => <footer>{new Date().getFullYear()} ©Dhiraj Kumar All Rights Reserved</footer>;

const TicTacToe: React.FC = () => <><Background /><Game /><Footer /></>;

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<TicTacToe />);
} else {
    alert('Root element not found');
}
