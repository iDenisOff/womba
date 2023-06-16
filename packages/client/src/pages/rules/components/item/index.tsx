import React, { CSSProperties } from 'react';

import './styles.scss';

interface RulesItemProps {
    src: string;
    alt: string;
    arrow: string;
    arrowAlt: string;
    style: CSSProperties;
}

export const RulesItem: React.FC<RulesItemProps> = ({ src, alt, arrow, arrowAlt, style }) => {
    return (
        <div className="rulesItem">
            <img src={src} alt={alt} height="250px" />
            <img src={arrow} alt={arrowAlt} height="50px" style={style} />
        </div>
    );
};
