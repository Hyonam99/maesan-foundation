/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { NewsContainer, CustomSpinner } from '../../components/component-exports';
import { Avatar, Box, Heading, Image } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong, FaLocationDot } from 'react-icons/fa6';
import { getMaesanBlog } from '../../services/api-services.js'

import './blog-detail.scss';

const BlogDetail = () => {
    const { blogId } = useParams();
    const navigate = useNavigate()

    const [blogDetail, setBlogDetail] = useState()

    useEffect(() => {
        getMaesanBlog(blogId)
            .then(res => setBlogDetail(res.data))
    }, [blogId])

    return (
        <>
            { !blogDetail
                ? <CustomSpinner />
                : <section className='blog-detail'>
                    <Heading textAlign='center' fontSize={{ base: '30px', md: '36px', lg: '42px' }}>Maesan News and Insights</Heading>

                    <section className='blog-detail_content'>
                        <div className='blog-detail_content_navigation' onClick={() => { navigate(-1) }}> <FaArrowLeftLong size={26} color='#d4af37'/></div>
                        <Heading fontSize={{ base: '20px', md: '24px', lg: '28px' }} >{blogDetail?.title}</Heading>
                        <Box height='md'>
                            <Image
                                src={blogDetail?.image}
                                width='100%'
                                height='inherit'
                                objectFit='cover'
                                rounded='lg'
                            />
                        </Box>

                        <Box display='flex' alignItems={{ base: 'start', sm: 'center' }} gap={2}>
                            <Avatar size='xs' src={blogDetail?.image}/>
                            <Heading fontSize={{ base: '16px', sm: '18px' }}>{blogDetail?.theme}</Heading>
                        </Box>
                        <Box display='flex' flexDirection={{ base: 'column', sm: 'row' }} alignItems={{ base: 'start', sm: 'center' }} gap={2}>
                            <small className='location'> <FaLocationDot color='#860707' size={20}/>{blogDetail?.location}</small>
                            <small>{new Date(blogDetail?.createdAt).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                        </Box>
                        <p>{blogDetail?.content}</p>
                    </section>

                    <section className='blog-detail_other-news'>
                        <Heading fontSize={{ base: '18px', md: '20px', lg: '24px' }} paddingLeft={8}>more news...</Heading>
                        <NewsContainer mini={3} selectedId={blogId}/>
                    </section>
                </section>
            }
        </>
    );
};

export default BlogDetail;
