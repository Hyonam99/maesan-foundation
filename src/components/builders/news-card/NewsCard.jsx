/* eslint-disable react/prop-types */
import React from 'react';
import { Avatar, Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './news-card.scss'

const NewsCard = ({ imgSrc, title, text, plateColor, linkTitle, linkUrl }) => {
    return (
        <Box className='news-card'>
            <Image src={imgSrc} objectFit='cover' rounded='lg' width='100%'/>
            <Box className='news-card_content'>
                <Box className='news-card_content_avatar'>
                    <Avatar size='xs' src={imgSrc}/> <Heading fontSize={{ base: '16px', sm: '18px' }}>{title}</Heading><small>12, May 2023</small>
                </Box>
                <Text height={{ base: 'initial', sm: '4%', md: '64%' }} fontSize={{ base: '16px', sm: '16px', md: '16px' }} lineHeight={{ base: '5', sm: '8', md: 'initial' }}>{text.substring(0, 44)}...</Text>
                <Box className='link-box'><Link to='/news'>Read more</Link></Box>
            </Box>
        </Box>
    );
};

export default NewsCard;
