import React, { useState, useEffect } from 'react';
import { Container, Box, Input, InputGroup, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { ButtonCustom } from 'components/component-exports';
import { useRegister } from 'services/api-hooks';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import './register.scss'

const Register = () => {

    const [status, setStatus] = useState({ indicator: false, message: '' })
    const navigate = useNavigate()
    const registerHook = useRegister()

    useEffect(() => {
        if (registerHook.data && !registerHook.error) {
            localStorage.setItem('maesanAdminToken', registerHook.data.access_token)
            setStatus({ indicator: true, message: registerHook.data.message })
            navigate('/admin/dashboard')
        } else if (!registerHook.data && registerHook.error) {
            setStatus({ indicator: true, message: registerHook.error.message })
        }
    }, [registerHook.data, registerHook.error])

    return (
        <Container maxW='xl' className='registration-section'>
            <Box>
                <Text textAlign='center' fontSize='26px' fontWeight='semibold' marginBottom={5}>Create User</Text>
                {status.indicator
                    && <Alert status={registerHook.error ? 'error' : 'success'} marginBottom={4}>
                        <AlertIcon />
                        {status.message}
                    </Alert>
                }

                <Formik
                    initialValues={{ fullname: '', email: '', password: '' }}
                    validationSchema={Yup.object({
                        fullname: Yup.string().required('name is required'),
                        email: Yup.string().email('Invalid email address').required('email is required'),
                        password: Yup.string().required('password is required'),
                    })}
                    onSubmit={(values) => registerHook.call(values)
                    }
                >
                    {({ handleSubmit, getFieldProps, touched, errors }) => (
                        <form onSubmit={handleSubmit} className='registration-form'>
                            <InputGroup className='registration-form_wrapper_inputs'>
                                <Box>
                                    <Text>Full Name:</Text>
                                    <Input
                                        type='text'
                                        placeholder='enter full name' {...getFieldProps('fullname')}
                                    />
                                    {touched.fullname && errors.fullname
                                        ? (<small>{errors.fullname}</small>)
                                        : null}
                                </Box>
                                <Box>
                                    <Text>Email:</Text>
                                    <Input
                                        type='email'
                                        placeholder='enter email address' {...getFieldProps('email')}
                                    />
                                    {touched.email && errors.email
                                        ? (<small>{errors.email}</small>)
                                        : null}
                                </Box>
                                <Box>
                                    <Text>Password:</Text>
                                    <Input
                                        type='password'
                                        placeholder='enter unique password' {...getFieldProps('password')} />
                                    {touched.password && errors.password
                                        ? (<small>{errors.password}</small>)
                                        : null}
                                </Box>
                            </InputGroup>
                            <ButtonCustom title='Create' type='submit' isLoading={registerHook.isLoading}/>
                        </form>
                    )}
                </Formik>
            </Box>
        </Container>
    )
};

export default Register;
