import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Autoplay,
    EffectCreative,
    Navigation,
    Pagination,
} from 'swiper/modules';

import './hero.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { heroContent } from '../../../mocked-data/mocked-data';
import { ButtonCustom } from '../../component-exports';
import { ButtonGroup } from '@chakra-ui/react';

const Hero = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize () {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <section className='hero_container'>
            <Swiper
                effect='creative'
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={windowSize.innerWidth > 734}
                pagination={true}
                modules={[Pagination, Navigation, Autoplay, EffectCreative]}
            >
                {heroContent.map((content, i) => (

                    <SwiperSlide className={`hero_banner-slide-${i + 1}`} key={`swiper-${i + 2}`}>
                        <div className='hero_banner-content'>
                            <h2>{content.title}</h2>
                            <h3>{content.subTitle}</h3>
                            <p>{content.subText}</p>
                            <ButtonGroup gap='4'>
                                <ButtonCustom title='Join Us Today' outline/>
                                <ButtonCustom title='Donate'/>
                            </ButtonGroup>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
};

function getWindowSize () {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Hero;
