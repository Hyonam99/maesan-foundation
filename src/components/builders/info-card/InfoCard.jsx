/* eslint-disable react/prop-types */
import React from 'react';
import './info-card.scss'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const InfoCard = ({ imgSrc, title, text, plateColor, linkTitle, linkUrl }) => {
    return (
        <Box minHeight='458px' boxShadow='md' rounded='md' p={4} backgroundColor={plateColor}>
            <Box minHeight='450px' boxShadow='md' rounded='md' backgroundColor='white'>
                <Image src={imgSrc} objectFit='cover' height='44%' width='100%' alt='info-card'/>
                <Box p={4}>
                    <Heading as='h5' fontSize='1.2rem' textAlign='center' marginY={3}>{title}</Heading>
                    <Text>{text}</Text>
                </Box>
                <Box px={3}>
                    {linkTitle && <Link to={linkUrl}>{linkTitle}</Link>}
                </Box>
            </Box>
        </Box>
    )
};

export default InfoCard;
