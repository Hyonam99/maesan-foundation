/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { NewsCard, CustomSpinner } from '../../component-exports';
import { Container } from '@chakra-ui/react';
import { getMaesanBlogs } from '../../../services/api-services'

import './news-container.scss'

const NewsContainer = ({ mini, selectedId }) => {

    const [blogs, setBlogs] = useState()

    useEffect(() => {
        getMaesanBlogs()
            .then(res => setBlogs(res.data))
    }, [selectedId])

    const filteredBlogs = blogs?.filter((blog) => selectedId ? blog._id !== selectedId : blog)

    return (
        <Container maxW='container.xl' className='news-container' p={5}>
            {!blogs
                ? <CustomSpinner />
                : filteredBlogs?.slice(0, mini).map((news, i) => (
                    <NewsCard
                        key={`news-${i + 1}`}
                        imgSrc={news.image}
                        theme={news.theme}
                        title={news.title}
                        sourceId={news._id}
                    />
                ))}
        </Container>
    )
};

export default NewsContainer;
