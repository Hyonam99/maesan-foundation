/* eslint-disable react/prop-types */
import React from 'react';
import { NewsCard } from '../../component-exports';
import { Container } from '@chakra-ui/react';
import { newsContent } from '../../../mocked-data/mocked-data'

import './news-container.scss'

const NewsContainer = ({ mini }) => {
    return (
        <Container maxW='container.xl' className='news-container' p={5}>
            {newsContent.slice(0, mini).map((news, i) => (
                <NewsCard key={`news-${i + 1}`} imgSrc={news.image} title={news.title} text={news.subTitle}/>
            ))}
        </Container>
    )
};

export default NewsContainer;
