import React from 'react';
import { Spinner, Container, Text } from '@chakra-ui/react'

const CustomSpinner = () => {
    return (
        <Container padding={20} maxW='5xl' centerContent>
            <Spinner
                thickness='4px'
                speed='0.92s'
                emptyColor='gray.200'
                color='#d4af37'
                size='xl'
            />
            <Text marginTop={8} fontSize='18px' textAlign='center'>Please wait while we load your content</Text>
        </Container>
    )
};

export default CustomSpinner;
