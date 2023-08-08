/* eslint-disable react/prop-types */
import { Footer, NavBar } from 'components/component-exports';
import React from 'react';

import '../App.scss'

const UserLayout = ({ children }) => {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default UserLayout;
