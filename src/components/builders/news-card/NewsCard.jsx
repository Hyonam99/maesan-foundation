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
                    <Avatar size='2xs' src={imgSrc}/> <Heading fontSize={{ base: '12px', sm: '14px' }}>{title}</Heading><small>12, May 2023</small>
                </Box>
                <Text height='64%' fontSize='16px'>{text.substring(0, 48)}...</Text>
                <Box className='link-box'><Link to='/news'>Read more</Link></Box>
            </Box>
        </Box>
    );
};

export default NewsCard;
