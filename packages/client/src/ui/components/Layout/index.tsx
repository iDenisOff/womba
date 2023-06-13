import React from 'react';
import './style.scss';

type TLayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<TLayoutProps> = ({ children }) => {
    return <div className="layout">{children}</div>;
};

export default Layout;
