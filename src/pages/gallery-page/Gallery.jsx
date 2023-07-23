/* eslint-disable quotes */
import React from 'react';
import { Banner } from '../../components/component-exports';
import { Image } from '@chakra-ui/image';
import { sampleImages } from '../../mocked-data/mocked-data';

import './gallery-page.scss'

const Gallery = () => {
    return (
        <>
            <Banner title='Gallery' />
            <section className='gallery_grid-container'>
                <section className='gallery_grid-wrapper'>
                    {sampleImages.map((item, i) => (
                        <article key={`grid-${i + 1}`}>
                            <Image
                                src={item}
                                objectFit='cover'
                                height='100%'
                                width='100%'
                                alt={`gallery-card-${i}`}
                            />
                        </article>
                    ))}
                </section>
            </section>
        </>
    );
};

export default Gallery;
