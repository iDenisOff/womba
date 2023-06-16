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
                placeholder="Имя"
                name="name"
                title="Имя"
                options={{
                    required: ValidationMessage.Required,
                    validate: nameValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Фамилия"
                name="surname"
                title="Фамилия"
                options={{
                    required: ValidationMessage.Required,
                    validate: nameValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Email"
                name="email"
                title="Email"
                options={{
                    required: ValidationMessage.Required,
                    validate: emailValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Телефон"
                name="phone"
                title="Телефон"
                options={{
                    required: ValidationMessage.Required,
                    validate: phoneValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Логин"
                name="login"
                title="Логин"
                options={{
                    required: ValidationMessage.Required,
                    validate: loginValidation
                }}
            />
            <FormControlInputTemplate<TRegistrationForm>
                {...props}
                placeholder="Пароль"
                name="password"
                title="Пароль"
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
                placeholder="Пороль еще раз"
                name="confirmPassword"
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
            <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="button--purple w-100"
            >
                Зарегистрироваться
            </Button>
        </>
    );
};

export const RegistrationForm = withForm<TRegistrationForm>(
    {
        onValid: onSubmit,
        props: {
            defaultValues: {
                name: 'Oleg',
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
