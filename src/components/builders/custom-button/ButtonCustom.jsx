/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@chakra-ui/react'
import './button.scss'

const ButtonCustom = ({ title, btnStyle, fill, outline }) => {
    return (
        <Button className={`customButton ${btnStyle} ${fill} ${outline && 'outline'}`}>
            {title}
        </Button>
    )
};

export default ButtonCustom;
