/* eslint-disable react/prop-types */
import React from 'react';
import './info-card.scss';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const InfoCard = ({ imgSrc, title, text, plateColor, linkTitle, linkUrl }) => {
    return (
        <Box
            height='458px'
            boxShadow='md'
            rounded='md'
            p={3}
            backgroundColor={plateColor}
        >
            <Box height='100%' boxShadow='md' rounded='md' backgroundColor='white'>
                <Image
                    src={imgSrc}
                    objectFit='cover'
                    height='44%'
                    width='100%'
                    alt='info-card'
                />
                <Box p={{ base: 1, sm: 3, md: 4 }} height='40%'>
                    <Heading as='h5' fontSize='1.2rem' textAlign='center' marginY={1}>
                        {title}
                    </Heading>
                    <Text fontSize={{ base: '14px', sm: '15px', md: '17px' }}>
                        { (linkTitle && `${text.substring(0, 110)}...`) ?? text}
                    </Text>
                </Box>
                <Box px={4} className='link-box'>{linkTitle && <Link to={linkUrl}>{linkTitle}</Link>}</Box>
            </Box>
        </Box>
    );
};

export default InfoCard;
