/* eslint-disable react/prop-types */
import React from 'react';
import './info-card.scss';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const InfoCard = ({ imgSrc, title, text, plateColor, linkTitle, linkUrl }) => {
    return (
        <Box
            height={linkTitle ? { base: '300px', md: '400px', lg: '458px' } : '458px'}
            boxShadow='md'
            rounded='md'
            backgroundColor={plateColor}
        >
            <Box height='100%' boxShadow='md' rounded='md' backgroundColor='white'>
                <Image
                    src={imgSrc}
                    objectFit='cover'
                    height={linkTitle ? { base: '40%', sm: '46%', md: '52%' } : '44%'}
                    width='100%'
                    alt='info-card'
                />
                <Box p={{ base: 2, sm: 3, md: 4 }} height={{ base: '44%', sm: '40%' }} className='info-card-content'>
                    <Heading as='h5' fontSize='1.2rem' textAlign='center' marginY={1}>
                        {title}
                    </Heading>
                    <Text fontSize={{ base: '15px', sm: '17px', md: '16px', lg: '17px' }} overflow='hidden'>
                        { (linkTitle && `${text.substring(0, 110)}...`) ?? text}
                    </Text>
                </Box>
                <Box px={4} className='link-box'>{linkTitle && <Link to={linkUrl}>{linkTitle}</Link>}</Box>
            </Box>
        </Box>
    );
};

export default InfoCard;
