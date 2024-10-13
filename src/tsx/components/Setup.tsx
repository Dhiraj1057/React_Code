// Setup.tsx
import React from 'react';
import { Level, Opponent, Rotation } from './types';

interface SetupProps {
    playerName: string;
    setPlayerName: (name: string) => void;
    rotation: Rotation;
    setRotation: (rotation: Rotation) => void;
    player2Name: string;
    setPlayer2Name: (name: string) => void;
    opponent: Opponent;
    setOpponent: (opponent: Opponent) => void;
    level: Level;
    setLevel: (level: Level) => void;
    isDisabled: boolean;
}

const Setup: React.FC<SetupProps> = ({
    playerName,
    setPlayerName,
    rotation,
    setRotation,
    player2Name,
    setPlayer2Name,
    opponent,
    setOpponent,
    level,
    setLevel,
    isDisabled
}) => (
    <div className="setup">
        <div className="input-group">
            <label htmlFor="playerName">Your Name:</label>
            <input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                disabled={isDisabled}
            />
        </div>
        <div className="input-group">
            <label htmlFor="rotation">Rotation:</label>
            <select
                id="rotation"
                value={rotation}
                onChange={(e) => setRotation(e.target.value as Rotation)}
                disabled={isDisabled}
            >
                <option value="Normal">Normal</option>
                <option value="Clockwise">Clockwise</option>
                <option value="Anti-Clockwise">Anti-Clockwise</option>
                <option value="Forward">Forward</option>
                <option value="Backward">Backward</option>
            </select>
        </div>
        <div className="input-group">
            <label htmlFor="opponent">Opponent:</label>
            <select
                id="opponent"
                value={opponent}
                onChange={(e) => setOpponent(e.target.value as Opponent)}
                disabled={isDisabled}
            >
                <option value="Human">Human</option>
                <option value="Computer">Computer</option>
            </select>
        </div>
        {opponent === 'Human' && (
            <div className="input-group">
                <label htmlFor="player2Name">Opponent's Name:</label>
                <input
                    type="text"
                    id="player2Name"
                    value={player2Name}
                    onChange={(e) => setPlayer2Name(e.target.value)}
                    disabled={isDisabled}
                />
            </div>
        )}
        {opponent === 'Computer' && (
            <div className="input-group">
                <label htmlFor="level">Level:</label>
                <select
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value as Level)}
                    disabled={isDisabled}
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
        )}
    </div>
);

export default Setup;
