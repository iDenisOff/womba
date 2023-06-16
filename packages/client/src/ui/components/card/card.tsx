import classnames from 'classnames';
import React from 'react';
import './styles.scss';

type CardProps = React.HTMLAttributes<HTMLDivElement>;
export const Card: React.FC<CardProps> = ({ className, ...rest }) => {
    return <div className={classnames(className, 'card')} {...rest} />;
};
