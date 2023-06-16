import { authController } from '@controllers';
import { Button, FormControl } from '@ui/components';
import { ValidationMessage } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';

import { FormControlInputTemplate, TChildrenArguments, withForm } from '../form';
import { Routes } from '../Router';

type TLoginForm = {
    login: string;
    password: string;
};

type RenderLoginFormProps = TChildrenArguments<TLoginForm>;

const onSubmit = (values: TLoginForm, helpers: RenderLoginFormProps) => {
    authController.signin(values);
};

const RenderLoginForm: React.FC<RenderLoginFormProps> = props => {
    const { formState } = props;

    return (
        <>
            <FormControlInputTemplate<TLoginForm>
                {...props}
                title="Логин"
                placeholder="Логин"
                name="login"
                options={{
                    required: ValidationMessage.Required
                }}
            />
            <FormControlInputTemplate<TLoginForm>
                {...props}
                title="Пароль"
                placeholder="Пароль"
                name="password"
                options={{
                    required: ValidationMessage.Required
                }}
                inputProps={{
                    type: 'password'
                }}
            />
            <FormControl>
                <Link to={Routes.Registration}>У вас нет аккаунта? Регистрация</Link>
            </FormControl>
            <Button type="submit" className="button--blue w-100" disabled={formState.isSubmitting}>
                Авторизоваться
            </Button>
        </>
    );
};

export const LoginForm = withForm<TLoginForm>(
    {
        onValid: onSubmit,
        props: {
            defaultValues: {
                login: '',
                password: ''
            }
        }
    },
    RenderLoginForm
);
