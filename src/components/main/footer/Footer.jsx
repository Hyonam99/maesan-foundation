import React from 'react';
import { Box, Heading, Image, Text, Input, InputGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsEnvelopeFill } from 'react-icons/bs';
import Logo from '../../../assets/custom-icons/logo-full.png';
import './footer.scss';

const Footer = () => {
    return (
        <section className='footer-container'>
            <section className='footer-container_overlay'>
                <section className='footer-container_content'>
                    <Box className='footer-container_image'>
                        <Image src={Logo} objectFit='cover'/>
                    </Box>
                    <Box className='footer_contact-details'>
                        <Heading>Contact</Heading>
                        <Box className='footer_contact-details_links'>
                            <Link><BsTwitter /> @maesanfdn</Link>
                            <Link><BsEnvelopeFill /> maesanfoundation@gmail.com</Link>
                        </Box>
                    </Box>
                    <Box className='footer_contact-form'>
                        <Text>Subscribe to Our News letter</Text>
                        <InputGroup>
                            <Input type='email' placeholder='your email' />
                            <Button>Send</Button>
                        </InputGroup>
                    </Box>
                </section>
                <Box className='footer_copyright'>
                    <Text>© copy 2022 Maesan All rights reserved</Text>
                </Box>
            </section>
        </section>
    )
};

export default Footer;
