import React from 'react';

import plusIcon from '../../../../static/plus.svg';
import { Theme } from '../../../../types/forum';

import './styles.scss';

export const Row: React.FC<Theme> = ({ title, themeCount, answerCount }: Theme) => {
    return (
        <div className="row">
            <button className="row_cell" onClick={() => console.log('onClick')}>
                {title}
            </button>
            <div className="row_cell">
                <span>{themeCount}</span>
                <button className="row_cell_button" onClick={() => console.log('onClick')}>
                    <img src={plusIcon} alt="plus" />
                </button>
            </div>
            <div className="row_cell">{answerCount}</div>
        </div>
    );
};
