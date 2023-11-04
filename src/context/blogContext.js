/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
    const token = localStorage.getItem('maesanAdminToken')
    const [stat, setStat] = useState()
    const [blogContent, setBlogContent] = useState()
    const getPes = JSON.parse(localStorage.getItem('persistBlog'))
    const [persistBlog, setPersistBlog] = useState(getPes ?? {
        title: '',
        theme: '',
        location: '',
        content: '',
        image: ''
    })
    const [screen, setScreen] = useState('CREATE');

    useEffect(() => {
        localStorage.setItem('persistBlog', JSON.stringify(persistBlog))
    }, [persistBlog])

    return (
        <BlogContext.Provider
            value={{
                token,
                stat,
                setStat,
                blogContent,
                setBlogContent,
                persistBlog,
                setPersistBlog,
                screen,
                setScreen,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};
