import React from 'react';
import { Spinner, Container } from '@chakra-ui/react'

const CustomSpinner = () => {
    return (
        <Container padding={24} centerContent>
            <Spinner
                thickness='4px'
                speed='0.92s'
                emptyColor='gray.200'
                color='#d4af37'
                size='xl'
            />
        </Container>
    )
};

export default CustomSpinner;
