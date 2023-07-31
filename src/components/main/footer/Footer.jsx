import React from 'react';
import { Box, Heading, Image, Text, Input, InputGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsEnvelopeFill } from 'react-icons/bs';
import Logo from '../../../assets/custom-icons/logo-full.png';
import './footer.scss';
import { ButtonCustom } from '../../component-exports';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
                            <Link to='https://twitter.com/maesanfdn' target='blank'><BsTwitter /> @maesanfdn</Link>
                            <Link to='mailto:maesanfoundation@gmail.com'><BsEnvelopeFill /> maesanfoundation@gmail.com</Link>
                        </Box>
                    </Box>
                    <Box className='footer_contact-form'>
                        <Text>Subscribe to Our News letter</Text>
                        <Formik
                            initialValues={{ email: '' }}
                            validationSchema={Yup.object({
                                email: Yup.string().email('Invalid email address').required('email is required'),
                            })}
                            onSubmit={(values) => console.log(values) }
                        >
                            {({ handleSubmit, getFieldProps, touched, errors, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <InputGroup>
                                        <Input type='email' placeholder='your email' {...getFieldProps('email')} />
                                        <Link to={`mailto:maesanfoundation@gmail.com?subject=Subscribe to Newsletter&body=${values.email}`}><ButtonCustom title='Send' type='button'/></Link>
                                    </InputGroup>
                                    {touched.email && errors.email
                                        ? (<small>{errors.email}</small>)
                                        : null}
                                </form>
                            )}
                        </Formik>
                    </Box>
                </section>
                <Box className='footer_copyright'>
                    <Text>© 2023 Maesan All rights reserved</Text>
                </Box>
            </section>
        </section>
    )
};

export default Footer;
