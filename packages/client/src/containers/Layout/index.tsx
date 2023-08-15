import { Anonymous, Protection } from "@containers";
import {
    getUserAuthorized,
    loadUser,
    userInitialization,
    loadOAuthId,
    loginUserOAuth,
    getOAuthId
} from "@redux/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

import { DEFAULT_REDIRECT_URI } from "../../consts/auth";
import Layout from "../../ui/components/Layout";
import { Routes } from "../router/routes";

import "./styles.scss";

const RootLayout = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    const oAuthId = useSelector(getOAuthId);

    useEffect(() => {
        dispatch(loadOAuthId());
    }, [dispatch, oAuthId]);

    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");

    useEffect(() => {
        if (code) {
            dispatch(loginUserOAuth({ code: code, redirect_uri: DEFAULT_REDIRECT_URI }));
        }
    }, [dispatch, code]);

    const fetching = useSelector(userInitialization);
    const isAuthorized = useSelector(getUserAuthorized);

    useEffect(() => {
        if (!isAuthorized) {
            dispatch(loadUser());
        }
    }, [isAuthorized]);

    if (fetching) {
        return <div>Загрузка</div>;
    }

    return (
        <>
            <div className="header">
                <div className="header_logo">WOMBA 2048</div>
                <div className="header_nav">
                    <Anonymous>
                        <NavLink className="header_nav__item" to={Routes.Login}>
                            Sign In
                        </NavLink>
                        <NavLink className="header_nav__item" to={Routes.Registration}>
                            Sign Up
                        </NavLink>
                    </Anonymous>
                    <Protection>
                        <NavLink className="header_nav__item" to={Routes.LeaderBoard}>
                            Leaderboard
                        </NavLink>
                        <NavLink className="header_nav__item" to={Routes.Forum}>
                            Forum
                        </NavLink>
                        <NavLink className="header_nav__item" to={Routes.Rules}>
                            Rules
                        </NavLink>
                        <NavLink className="header_nav__item" to={Routes.Game}>
                            Game
                        </NavLink>
                    </Protection>
                </div>
            </div>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
};

export default RootLayout;
