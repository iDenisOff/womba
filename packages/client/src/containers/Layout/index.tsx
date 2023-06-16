import { NavLink, Outlet } from 'react-router-dom';

import Layout from '../../ui/components/Layout';
import { Routes } from '../Router';
import './styles.scss';

const RootLayout = () => {
    return (
        <>
            <header>
                <nav className="header-navigation">
                    <h1>WOMBA 2048</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to={Routes.Login}>Login</NavLink>
                    <NavLink to={Routes.Forum}>Forum</NavLink>
                    <NavLink to={Routes.Registration}>Registration</NavLink>
                    <NavLink to={Routes.Rules}>Rules</NavLink>
                    <NavLink to={Routes.Game}>Game</NavLink>
                </nav>
            </header>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
};

export default RootLayout;
