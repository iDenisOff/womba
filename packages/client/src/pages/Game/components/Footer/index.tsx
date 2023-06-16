import React from 'react';

import './styles.scss';

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <span className="footer__title">Как играть</span>
            <br />
            <span className="footer__text">
                Используйте стрелки, чтобы перемещать плитки по полю. Когда две плитки с одинаковым
                номиналом соприкасаются, они сливаются в одну!
            </span>
        </div>
    );
};
