import React from 'react';
import { useForm } from 'react-hook-form';
import { UseFormProps } from 'react-hook-form/dist/types';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { SubmitErrorHandler, UseFormReturn } from 'react-hook-form/dist/types/form';

type OmitHandleSubmit<T> = Omit<T, 'handleSubmit'>;

export type TChildrenArguments<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
> = OmitHandleSubmit<UseFormReturn<TFieldValues, TContext, TTransformedValues>>;

export type TWithFormChildren<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
> = (props: TChildrenArguments<TFieldValues, TContext, TTransformedValues>) => React.ReactNode;

export type OwnSubmitHandler<
    TFieldValues extends FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
> = (
    data: TFieldValues,
    helpers: TChildrenArguments<TFieldValues, TContext, TTransformedValues>,
    event?: React.BaseSyntheticEvent
) => unknown | Promise<unknown>;

type TWithFormParams<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
> = {
    onValid: TTransformedValues extends FieldValues
        ? OwnSubmitHandler<TTransformedValues, TContext, TTransformedValues>
        : OwnSubmitHandler<TFieldValues, TContext, TTransformedValues>;
    onInvalid?: SubmitErrorHandler<TFieldValues>;
    props?: UseFormProps<TFieldValues, TContext>;
};

export function withForm<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
>(
    params: TWithFormParams<TFieldValues, TContext, TTransformedValues>,
    children: TWithFormChildren<TFieldValues, TContext, TTransformedValues>
) {
    return function WrappedComponent() {
        const { onValid, onInvalid, props } = params;
        const { handleSubmit, ...rest } = useForm<TFieldValues, TContext, TTransformedValues>(
            props
        );
        const onSubmit = (values: FieldValues, event?: React.BaseSyntheticEvent) => {
            // @ts-ignore
            onValid(values, rest, event);
        };

        return (
            // @ts-ignore
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>{children(rest)}</form>
        );
    };
}
