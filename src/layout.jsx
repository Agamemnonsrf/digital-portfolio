import React from 'react';
import Sidenav from './Sidenav';

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidenav />
            <main className="main">{children}</main>
        </div>
    );
};

