import { authController } from '@controllers';
import { Button, FormControl } from '@ui/components';
import { ValidationMessage } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';

import { FormControlInputTemplate, TChildrenArguments, withForm } from '../form';
import { Routes } from '../Router';

import './styles.scss';

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
            <FormControl className="text">
                <span>
                    You can <Link to={Routes.Registration}>register here!</Link>
                </span>
            </FormControl>
            <FormControlInputTemplate<TLoginForm>
                {...props}
                title="Login"
                placeholder="Enter your login"
                name="login"
                options={{
                    required: ValidationMessage.Required
                }}
            />
            <FormControlInputTemplate<TLoginForm>
                {...props}
                title="Password"
                placeholder="Enter your password"
                name="password"
                options={{
                    required: ValidationMessage.Required
                }}
                inputProps={{
                    type: 'password'
                }}
            />
            <div className="button-container">
                <Button
                    type="submit"
                    className="button--purple w-80"
                    disabled={formState.isSubmitting}
                >
                    Log In
                </Button>
            </div>
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
