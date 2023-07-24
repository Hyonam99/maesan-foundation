import React from 'react';
import { Banner, NewsContainer } from '../../components/component-exports';
import { newsContent } from '../../mocked-data/mocked-data';

const Blog = () => {
    return (
        <>
            <Banner title='Blog' />
            <NewsContainer dataSource={newsContent}/>
        </>
    )
};

export default Blog;
