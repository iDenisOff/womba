import { NavLink, Outlet } from 'react-router-dom';

import Layout from '../../ui/components/Layout';
import { Routes } from '../Router';
import './styles.scss';

const RootLayout = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">WOMBA 2048</div>
                <div className="header_nav">
                    <NavLink className="header_nav__item" to="/">
                        Home
                    </NavLink>
                    <NavLink className="header_nav__item" to={Routes.Login}>
                        Sign In
                    </NavLink>
                    <NavLink className="header_nav__item" to={Routes.Registration}>
                        Sign Up
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
                </div>
            </div>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
};

export default RootLayout;
