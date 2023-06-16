import { ClassName } from '@types';
import { Card } from '@ui/components';
import classnames from 'classnames';
import React from 'react';
import './styles.scss';

export enum ErrorType {
    Application = 'application',
    Server = 'server'
}

type ErrorContainerProps = Partial<ClassName> & {
    type: ErrorType;
    header: string;
    code: string;
};

export const ErrorContainer: React.FC<ErrorContainerProps> = ({
    className,
    type,
    header,
    code
}) => {
    return (
        <Card>
            <div className={classnames('error-container', className)}>
                <h2 className="error-container__header">{header}</h2>
                <div
                    className={classnames('error-container__code', {
                        'error-container__code--application': type === ErrorType.Application,
                        'error-container__code--server': type === ErrorType.Server
                    })}
                >
                    {code}
                </div>
            </div>
        </Card>
    );
};
