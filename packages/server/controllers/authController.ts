import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../models/User";

const PASSWORD_REQUIRED_ERROR = "Validation error: Password is required";
const EMAIL_REQUIRED_ERROR = "Validation error: Email is required";
const PASSWORD_INVALID_ERROR = "Validation error: Password should be from 5 to 20 characters long";
const EMAIL_INVALID_ERROR = "Validation error: You should provide a valid email";

const JWT_MAX_AGE = 24 * 60 * 60;

const createToken = (userId: number) => {
    return jwt.sign({ id: userId }, `${process.env.JWT_SECRET}`, { expiresIn: JWT_MAX_AGE });
};

const createError = (message: string) => {
    const error = { email: "", password: "" };

    if (message.startsWith(PASSWORD_REQUIRED_ERROR)) {
        error.password = "Password is required";
    } else if (message.startsWith(PASSWORD_INVALID_ERROR)) {
        error.password = "Password should be from 5 to 20 characters long";
    }

    if (message.startsWith(EMAIL_REQUIRED_ERROR)) {
        error.email = "Email is required";
    } else if (message.startsWith(EMAIL_INVALID_ERROR)) {
        error.email = "You should provide a valid email";
    } else {
        error.email = "User with this email already exists";
    }

    return error;
};

export const signupController = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
        const user = await User.create({
            email,
            password
        });

        const token = createToken(user.id);

        response.cookie(`${process.env.JWT_COOKIE_NAME}`, token, {
            httpOnly: true,
            maxAge: JWT_MAX_AGE * 1000
        });

        response.status(201).json({ email: user.email, id: user.id });
    } catch (error) {
        let message = { email: "", password: "" };

        if (error instanceof Error) {
            message = createError(error.message);
        }

        response.status(403).json({ error: message });
    }
};
export const loginController = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
        const user = await User.login({ email, password });

        const token = createToken(user.id);

        response.cookie(`${process.env.JWT_COOKIE_NAME}`, token, {
            httpOnly: true,
            maxAge: JWT_MAX_AGE * 1000
        });

        response.status(201).json({ email: user.email, id: user.id });
    } catch (error) {
        if (error instanceof Error) {
            const { message } = error;

            response.status(403).json({ error: { message } });
        } else {
            response.status(403).json({ error: { message: "Unknown error" } });
        }
    }
};

export const logoutController = async (_request: Request, response: Response) => {
    response
        .cookie(`${process.env.JWT_COOKIE_NAME}`, "", { maxAge: 1 })
        .status(201)
        .json({ logout: "OK" });
};
