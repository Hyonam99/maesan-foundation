/* eslint-disable quotes */
import React from 'react';
import { Banner } from '../../components/component-exports';
import { Image } from '@chakra-ui/image';
import { sampleImages } from '../../mocked-data/mocked-data';

import './gallery-page.scss'
import { Box, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { RxCross2 } from 'react-icons/rx';

const Gallery = () => {
    const { isOpen, onClose } = useDisclosure()
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
                                cursor='pointer'
                                // onClick={onOpen}
                            />
                        </article>
                    ))}
                </section>
            </section>

            <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', sm: 'md', md: '2xl', lg: '4xl' }} isCentered>
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropInvert='10%'
                    backdropBlur='3px'
                />
                <ModalContent>
                    <Box display='flex' alignItems='center' justifyContent='flex-end' padding='.8rem'>
                        <RxCross2 onClick={onClose} cursor='pointer' size={26}/>
                    </Box>
                    <ModalBody>
                        <p>some text</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Gallery;
