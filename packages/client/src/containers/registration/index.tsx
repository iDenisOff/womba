import { Button } from '@ui/components';
import {
    emailValidation,
    loginValidation,
    nameValidation,
    passValidation,
    phoneValidation,
    ValidationMessage
} from '@utils';
import React from 'react';

import './styles.scss';

import { TChildrenArguments, withForm, FormControlInputTemplate } from '../form';

type TRegistrationForm = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    login: string;
    password: string;
    confirmPassword: string;
};
type RenderRegistrationFormProps = TChildrenArguments<TRegistrationForm>;
const onSubmit = (values: TRegistrationForm, helpers: RenderRegistrationFormProps) => {
    const { setError } = helpers;

    console.log(values);
};

const RenderRegistrationForm: React.FC<RenderRegistrationFormProps> = props => {
    const { formState, watch } = props;

    return (
        <>
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your name"
                name="name"
                title="Name"
                options={{
                    required: ValidationMessage.Required,
                    validate: nameValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your surname"
                name="surname"
                title="Surname"
                options={{
                    required: ValidationMessage.Required,
                    validate: nameValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your email"
                name="email"
                title="Email"
                options={{
                    required: ValidationMessage.Required,
                    validate: emailValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your phone"
                name="phone"
                title="Phone"
                options={{
                    required: ValidationMessage.Required,
                    validate: phoneValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your login"
                name="login"
                title="Login"
                options={{
                    required: ValidationMessage.Required,
                    validate: loginValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your password"
                name="password"
                title="Password"
                options={{
                    required: ValidationMessage.Required,
                    validate: passValidation
                }}
                inputProps={{
                    type: 'password'
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Enter your password"
                name="confirmPassword"
                title="Confirm password"
                options={{
                    required: ValidationMessage.Required,
                    validate: (val: string) => {
                        if (watch('password') !== val) {
                            return 'Пароли не совпадают';
                        }

                        return true;
                    }
                }}
                inputProps={{
                    type: 'password'
                }}
            />
            <div className="button-container">
                <Button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="button--purple w-80"
                >
                    Sign Up
                </Button>
            </div>
        </>
    );
};

export const RegistrationForm = withForm<TRegistrationForm>(
    {
        onValid: onSubmit,
        props: {
            defaultValues: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                login: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    RenderRegistrationForm
);
