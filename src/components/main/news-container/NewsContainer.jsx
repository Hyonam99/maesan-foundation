/* eslint-disable react/prop-types */
import React from 'react';
import { NewsCard } from '../../component-exports';
import { Container } from '@chakra-ui/react';

import './news-container.scss'

const NewsContainer = ({ mini, dataSource }) => {
    return (
        <Container maxW='container.xl' className='news-container' p={5}>
            {dataSource.slice(0, mini).map((news, i) => (
                <NewsCard key={`news-${i + 1}`} imgSrc={news.image} title={news.title} text={news.subTitle} sourceId={news.id}/>
            ))}
        </Container>
    )
};

export default NewsContainer;
