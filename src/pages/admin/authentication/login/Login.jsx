import React, { useState, useEffect } from 'react';
import { Container, Box, Input, InputGroup, Text, Checkbox, Alert, AlertIcon } from '@chakra-ui/react';
import { ButtonCustom } from 'components/component-exports';
import { useLogin } from 'services/api-services';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [status, setStatus] = useState({ indicator: false, message: '' })
    const navigate = useNavigate()
    const loginHook = useLogin()

    useEffect(() => {
        if (loginHook.data && !loginHook.error) {
            localStorage.setItem('token', loginHook.data.access_token)
            setStatus({ indicator: true, message: loginHook.data.message })
            navigate('/admin/dashboard')
        } else if (!loginHook.data && loginHook.error) {
            setStatus({ indicator: true, message: loginHook.error.message })
        }
    }, [loginHook.data, loginHook.error])

    return (
        <Container maxW='xl' padding={16} className='registration-section'>
            <Box>
                <Text textAlign='center' fontSize='26px' fontWeight='semibold' marginBottom={5}>Login</Text>
                {status.indicator
                    && <Alert status={loginHook.error ? 'error' : 'success'} marginBottom={4}>
                        <AlertIcon />
                        {status.message}
                    </Alert>
                }
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('email is required'),
                        password: Yup.string().required('password is required'),
                    })}
                    onSubmit={(values) =>
                        loginHook.call(values)
                    }
                >
                    {({ handleSubmit, getFieldProps, touched, errors }) => (
                        <form onSubmit={handleSubmit} className='registration-form'>
                            <InputGroup className='registration-form_wrapper_inputs'>
                                <Box>
                                    <Text>Email:</Text>
                                    <Input
                                        type='email'
                                        placeholder='enter your email' {...getFieldProps('email')}
                                    />
                                    {touched.email && errors.email
                                        ? (<small>{errors.email}</small>)
                                        : null}
                                </Box>
                                <Box>
                                    <Text>Password:</Text>
                                    <Input
                                        type='password'
                                        placeholder='enter your password' {...getFieldProps('password')} />
                                    {touched.password && errors.password
                                        ? (<small>{errors.password}</small>)
                                        : null}
                                </Box>
                            </InputGroup>
                            <Box className='login-form_acknowledgement'>
                                <Box display='flex' alignItems='center' gap='.6rem'>
                                    <Checkbox /><Text>Remember me</Text>
                                </Box>
                                <Link to='#' className='fgp-link'>Forgot Password ?</Link>
                            </Box>
                            <ButtonCustom title='Log in' type='submit' isLoading={loginHook.isLoading}/>
                        </form>
                    )}
                </Formik>
                <Text className='login-link' textAlign='center' marginTop={2}>Don&apos;t have an account ? <Link to='/admin/register'>Sign Up</Link></Text>
            </Box>
        </Container>
    )
};

export default Login;
