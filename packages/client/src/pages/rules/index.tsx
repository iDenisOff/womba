import down from '@static/game/down.png';
import left from '@static/game/left.png';
import right from '@static/game/right.png';
import rightArrow from '@static/game/rightArrow.png';
import up from '@static/game/up.png';

import { RulesItem } from './components/item';

import './styles.scss';

export const RulesPage = () => {
    return (
        <div className="container">
            <p>
                1. В каждом раунде появляется плитка номинала «2» (с вероятностью 90%) или «4» (с
                вероятностью 10%)
            </p>
            <p>
                2. Нажатием стрелки игрок может скинуть все плитки игрового поля в одну из 4 сторон
            </p>
            <div className="container__row">
                <RulesItem
                    src={right}
                    alt="right"
                    arrow={rightArrow}
                    arrowAlt="rightArrow"
                    style={{}}
                />
                <RulesItem
                    src={up}
                    alt="up"
                    arrow={rightArrow}
                    arrowAlt="upArrow"
                    style={{ transform: 'rotate(-90deg)' }}
                />
                <RulesItem
                    src={left}
                    alt="left"
                    arrow={rightArrow}
                    arrowAlt="leftArrow"
                    style={{ transform: 'rotate(180deg)' }}
                />
                <RulesItem
                    src={down}
                    alt="down"
                    arrow={rightArrow}
                    arrowAlt="downArrow"
                    style={{ transform: 'rotate(90deg)' }}
                />
            </div>
            <p>3. За каждое соединение игровые очки увеличиваются на номинал получившейся плитки</p>
            <p>
                4. Игра заканчивается поражением, если после очередного хода невозможно совершить
                действие
            </p>
        </div>
    );
};
