import React from 'react';
import { Banner, ButtonCustom } from '../../components/component-exports';
import { Box, Textarea, Input, InputGroup, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsEnvelopeFill, BsTwitter } from 'react-icons/bs';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
                                <Link to='https://twitter.com/maesanfdn' target='blank'><BsTwitter /> @maesanfdn</Link>
                                <Link to='mailto:maesanfoundation@gmail.com'><BsEnvelopeFill /> maesanfoundation@gmail.com</Link>
                            </Box>
                        </Box>
                        <Box className='contact_form-wrapper'>
                            <Formik
                                initialValues={{ name: '', email: '', message: '' }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('name is required'),
                                    email: Yup.string().email('Invalid email address').required('email is required'),
                                    message: Yup.string().required('message is required'),
                                })}
                                onSubmit={(values) => console.log(values) }
                            >
                                {({ handleSubmit, getFieldProps, touched, errors, values }) => (
                                    <InputGroup className='contact_form-wrapper_inputs'>
                                        <form onSubmit={handleSubmit}>
                                            <Input type='text' placeholder='enter your name' {...getFieldProps('name')}/>
                                            {touched.name && errors.name
                                                ? (<small>{errors.name}</small>)
                                                : null}
                                            <Input type='email' placeholder='enter your email' {...getFieldProps('email')} />
                                            {touched.email && errors.email
                                                ? (<small>{errors.email}</small>)
                                                : null}
                                            <Textarea
                                                placeholder='your message here...'
                                                size='md'
                                                minHeight='10rem'
                                                resize='none'
                                                {...getFieldProps('message')}
                                            />
                                            {touched.message && errors.message
                                                ? (<small>{errors.message}</small>)
                                                : null}
                                            <Link to={`mailto:maesanfoundation@gmail.com?subject=Name: ${values.name}&body=${values.message}`}>
                                                <ButtonCustom title='Contact Us' type='button' />
                                            </Link>
                                        </form>
                                    </InputGroup>
                                )}
                            </Formik>
                        </Box>
                    </section>
                </section>
            </section>
        </>
    )
};

export default Contact;
