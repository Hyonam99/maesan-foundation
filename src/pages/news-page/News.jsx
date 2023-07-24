/* eslint-disable react/prop-types */
import React from 'react';
import { Banner, NewsContainer } from '../../components/component-exports';
import { newsContent } from '../../mocked-data/mocked-data';

const News = () => {
    return (
        <>
            <Banner title='News and Insights'/>
            <NewsContainer dataSource={newsContent}/>
        </>
    )
};

export default News;
