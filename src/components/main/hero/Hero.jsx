import React, { useEffect, useState, useRef } from "react";
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
import {
	Box,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	Button,
	ButtonGroup,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Hero = () => {
    const [ windowSize, setWindowSize ] = useState( getWindowSize() );
    const [isOpen, setIsOpen] = useState(false);
	const cancelRef = useRef();

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
			<section className="hero_container">
				<Swiper
					effect="creative"
					creativeEffect={{
						prev: {
							shadow: true,
							translate: ["-20%", 0, -1],
						},
						next: {
							translate: ["100%", 0, 0],
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
						<SwiperSlide
							className={`hero_banner-slide-${i + 1}`}
							key={`swiper-${i + 2}`}
						>
							<div className="hero_banner-content">
								<h2>{content.title}</h2>
								<h3>{content.subTitle}</h3>
								<p>{content.subText}</p>
								<ButtonGroup gap="4" marginTop="1.3rem">
									<Link to="https://twitter.com/maesanfdn" target="_blank">
										<ButtonCustom title="Join Us Today" outline />
									</Link>
									<Link to="#">
                                        <ButtonCustom title="Donate" onClick={() => {setIsOpen(true)}} />
									</Link>
								</ButtonGroup>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<AlertDialog
					onClose={() => {
						setIsOpen(false);
					}}
					isOpen={isOpen}
					isCentered
					leastDestructiveRef={cancelRef}
					motionPreset="slideInBottom"
				>
					<AlertDialogOverlay />

					<AlertDialogContent className="dialog-content">
						<Box className="dialog-close-btn">
							<Button
								onClick={() => {
									setIsOpen(false);
								}}
							>
								<RxCross2 size={20} />
							</Button>
						</Box>
						<Box className="donation-alert">
							<p>Make a donation today, and touch a life</p>
							<Box className="donate-link-btn">
								<p>Eugene Chimaobi</p>
								<p>9 Payment Service Bank</p>
								<p>6078180893</p>
							</Box>
						</Box>
					</AlertDialogContent>
				</AlertDialog>
			</section>
		);
};

function getWindowSize () {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Hero;
