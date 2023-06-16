import classnames from 'classnames';
import React from 'react';
import './styles.scss';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    ...rest
}) => {
    const classes = classnames(className, 'button');

    return <button {...rest} className={classes} />;
};
