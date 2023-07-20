/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@chakra-ui/react'
import './button.scss'

const ButtonCustom = ({ title, className, fill, outline }) => {
    return (
        <Button className={`customButton ${className} ${fill} ${outline && 'outline'}`}>
            {title}
        </Button>
    )
};

export default ButtonCustom;
