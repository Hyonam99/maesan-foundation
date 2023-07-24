import React from 'react';
import { Banner } from '../../components/component-exports';
import { Image } from '@chakra-ui/image';
import { newsContent } from '../../mocked-data/mocked-data';
import './blog.scss';

const Blog = () => {
    return (
        <>
            <Banner title='Blog' />
            <section className='blog_grid-container'>
                <section className='blog_grid-wrapper'>
                    {newsContent.map((item, i) => (
                        <article key={`grid-${i + 1}`}>
                            <Image
                                src={item.image}
                                objectFit='cover'
                                height='50%'
                                width='100%'
                                alt={`blog-card-${i}`}
                            />
                            <h3>{item.title}</h3>
                            <p>{item.subTitle}</p>
                        </article>
                    ))}
                </section>
            </section>
        </>
    )
};

export default Blog;
