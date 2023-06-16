import { TChildrenArguments } from '@containers';
import { FormControl, FormError, Input, Label } from '@ui/components';
import classnames from 'classnames';
import React from 'react';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { FieldPath } from 'react-hook-form/dist/types/path';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

type FormControlInputTemplateProps<T extends FieldValues> = TChildrenArguments<T> & {
    title?: string;
    placeholder: string;
    name: FieldPath<T>;
    options?: RegisterOptions<T>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const FormControlInputTemplate = <T extends FieldValues>({
    register,
    formState: { errors },
    title,
    placeholder,
    name,
    options,
    inputProps = {}
}: FormControlInputTemplateProps<T>) => {
    const error = errors[name] as Record<string, string> | undefined;

    return (
        <FormControl>
            {title && <Label>{title}</Label>}
            <Input
                {...inputProps}
                placeholder={placeholder}
                {...register(name, options)}
                className={classnames({ 'input--error': error })}
            />
            {error && <FormError className="form-error--shown">{error.message}</FormError>}
        </FormControl>
    );
};
