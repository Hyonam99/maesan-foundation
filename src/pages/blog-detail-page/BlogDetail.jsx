/* eslint-disable react/prop-types */
import React from 'react';
import { NewsContainer } from '../../components/component-exports';
import { Avatar, Box, Heading, Image } from '@chakra-ui/react';
import { newsContent } from '../../mocked-data/mocked-data';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong, FaLocationDot } from 'react-icons/fa6';

import './blog-detail.scss';

const BlogDetail = () => {
    const { blogId } = useParams();
    const navigate = useNavigate()

    const BlogItem = newsContent.find((item) => item.id === blogId);

    return (
        <>
            <section className='blog-detail'>
                <Heading textAlign='center' fontSize={{ base: '24px', md: '30px', lg: '36px' }}>Maesan News and Insights</Heading>

                <section className='blog-detail_content'>
                    <div className='blog-detail_content_navigation' onClick={() => { navigate(-1) }}> <FaArrowLeftLong /> go back</div>
                    <Heading fontSize={{ base: '18px', md: '22px', lg: '26px' }} >{BlogItem.subTitle}</Heading>
                    <Box height='md'>
                        <Image
                            src={BlogItem.image}
                            width='100%'
                            height='inherit'
                            objectFit='cover'
                            rounded='lg'
                        />
                    </Box>

                    <Box display='flex' alignItems={{ base: 'start', sm: 'center' }} gap={2}>
                        <Avatar size='xs' src={BlogItem.image}/>
                        <Heading fontSize={{ base: '16px', sm: '18px' }}>{BlogItem.title}</Heading>
                    </Box>
                    <Box display='flex' flexDirection={{ base: 'column', sm: 'row' }} alignItems={{ base: 'start', sm: 'center' }} gap={2}>
                        <small className='location'> <FaLocationDot color='#860707' size={20}/> Port Harcourt</small>
                        <small>12, May 2023</small>
                    </Box>
                    <p>{BlogItem.description}</p>
                </section>

                <section className='blog-detail_other-news'>
                    <Heading fontSize={{ base: '16px', md: '18px', lg: '22px' }} paddingLeft={8}>more news...</Heading>
                    <NewsContainer dataSource={newsContent} mini={3}/>
                </section>
            </section>
        </>
    );
};

export default BlogDetail;
