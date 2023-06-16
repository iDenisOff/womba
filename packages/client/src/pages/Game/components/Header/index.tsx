import React, { useState } from 'react';

import './styles.scss';

export const Header: React.FC = () => {
    const [score, setScore] = useState(340);
    const [bestScore, setBestScore] = useState(340);

    const startNewGame = () => {
        setScore(0);
    };

    return (
        <div className="header">
            <div className="header__block">
                <span className="header__block__title">Score</span>
                <div className="header__block__content">{score}</div>
            </div>
            <div className="header__block">
                <span className="header__block__title">Best</span>
                <div className="header__block__content">{bestScore}</div>
            </div>
            <div className="header__new">
                <button className="header__new_button" onClick={startNewGame}>
                    New Game
                </button>
            </div>
        </div>
    );
};
