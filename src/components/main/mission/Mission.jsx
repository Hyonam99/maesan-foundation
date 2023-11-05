import React, { useState, useEffect } from 'react';
import './mission.scss'
import { InfoCard, TitleDivider } from '../../component-exports';
import { missionContent } from '../../../mocked-data/mocked-data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import { Box } from '@chakra-ui/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Mission = () => {

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
        <section className='mission-container'>
            <article className='mission-container_intro'>
                <TitleDivider title='Mission and goals' color='#010a14'/>
            </article>
            <article className='mission-container_cards-container'>
                <Box p={2}>
                    <Swiper
                        slidesPerView={windowSize.innerWidth < 768 ? 1 : windowSize.innerWidth < 1082 ? 2 : 3}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={40}
                        navigation={true}
                        modules={[Grid, Pagination, Navigation]}
                    >
                        {missionContent.map((mission, i) => (
                            <SwiperSlide key={`mission-key-${i + 1}`}>
                                <InfoCard imgSrc={mission.image} title={mission.title} text={mission.text}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </article>
        </section>
    )
};

function getWindowSize () {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Mission;
