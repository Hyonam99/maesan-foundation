import React from 'react';
import { Banner } from '../../components/component-exports';
import { Box, Button, Textarea, Input, InputGroup, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsEnvelopeFill, BsTwitter } from 'react-icons/bs';

import './contact.scss'

const Contact = () => {
    return (
        <>
            <Banner title='Contact' />
            <section className='contact-container'>
                <section className='contact-container_overlay'>
                    <section className='contact-container_content'>
                        <Box className='contact_container_content-details'>
                            <Text>Get In Touch With Us</Text>
                            <Box className='contact_container_content-details_links'>
                                <Link><BsTwitter /> @maesanfdn</Link>
                                <Link><BsEnvelopeFill /> maesanfoundation@gmail.com</Link>
                            </Box>
                        </Box>
                        <Box className='contact_form-wrapper'>
                            <InputGroup className='contact_form-wrapper_inputs'>
                                <Input type='text' placeholder='enter your name' />
                                <Input type='email' placeholder='enter your email' />
                                <Textarea
                                    placeholder='your message here...'
                                    size='md'
                                    minHeight='10rem'
                                    resize='none'
                                />
                            </InputGroup>
                            <Button>Contact Us</Button>
                        </Box>
                    </section>
                </section>
            </section>
        </>
    )
};

export default Contact;
