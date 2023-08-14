import { getUserAuthorized, getUser } from "@redux/user";
import { Children } from "@types";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Routes } from "../router";

export function useProtection() {
    const isAuthorized = useSelector(getUserAuthorized);
    const user = useSelector(getUser);

    return { isAuthorized, user };
}

export function withProtection(Component: React.ElementType) {
    return function WrappedComponent(props: any) {
        const { isAuthorized, user } = useProtection();

        if (isAuthorized) {
            return <Component {...props} user={user} />;
        }

        return <Navigate to={Routes.Login} replace={true} />;
    };
}

export function withAnonymous(Component: React.ElementType) {
    return function WrappedComponent(props: any) {
        const { isAuthorized } = useProtection();

        if (isAuthorized) {
            return <Navigate to="/" replace={true} />;
        }

        return <Component {...props} />;
    };
}
export const Protection: React.FC<Children> = ({ children }) => {
    const { isAuthorized } = useProtection();

    return isAuthorized ? <>{children}</> : null;
};

export const Anonymous: React.FC<Children> = ({ children }) => {
    const { isAuthorized } = useProtection();

    return isAuthorized ? null : <>{children}</>;
};
