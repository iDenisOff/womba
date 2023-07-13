import { dispatch } from "@redux/store";
import { loginUser, getOAuthId } from "@redux/user";
import { SigninRequest } from "@types";
import { Button } from "@ui/components";
import { ValidationMessage } from "@utils";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { DEFAULT_REDIRECT_URI } from "../../consts/auth";
import { FormControlInputTemplate, TChildrenArguments, withForm } from "../form";
import "./styles.scss";

type RenderLoginFormProps = TChildrenArguments<SigninRequest>;
const options = {
    required: ValidationMessage.Required
};
const RenderLoginForm: React.FC<RenderLoginFormProps> = props => {
    const OAuthId = useSelector(getOAuthId);

    return (
        <>
            <FormControlInputTemplate<SigninRequest>
                {...props}
                title="Логин"
                placeholder="Enter your login"
                name="login"
                options={options}
            />
            <FormControlInputTemplate<SigninRequest>
                {...props}
                title="Password"
                placeholder="Enter your password"
                name="password"
                options={options}
                inputProps={{
                    type: "password"
                }}
            />
            <div className="button-container">
                <Button type="submit" className="button--purple w-80">
                    Авторизоваться
                </Button>
            </div>
            {OAuthId && (
                <div className="button-container">
                    <Link
                        className="button--purple w-80 button"
                        to={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${OAuthId}&redirect_uri=${DEFAULT_REDIRECT_URI}`}
                    >
                        OAuth
                    </Link>
                </div>
            )}
        </>
    );
};

export const LoginForm = withForm<SigninRequest>(
    {
        onValid: data => {
            dispatch(loginUser(data));
        },
        props: {
            defaultValues: {
                login: "",
                password: ""
            }
        }
    },
    RenderLoginForm
);
