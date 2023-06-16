import classnames from 'classnames';
import React, { forwardRef } from 'react';
import './styles.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest }, ref) => {
    const classes = classnames(className, 'input');

    return <input {...rest} ref={ref} className={classes} />;
});
