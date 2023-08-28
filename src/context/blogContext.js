/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
    const token = localStorage.getItem('maesanAdminToken')
    const [stat, setStat] = useState()
    const [blogContent, setBlogContent] = useState()
    const [screen, setScreen] = useState('CREATE');

    return (
        <BlogContext.Provider
            value={{
                token,
                stat,
                setStat,
                blogContent,
                setBlogContent,
                screen,
                setScreen,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};
