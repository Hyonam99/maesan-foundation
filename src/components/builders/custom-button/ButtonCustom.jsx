/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@chakra-ui/react'

import './button.scss'

const ButtonCustom = ({ title, btnStyle, fill, outline, onClick, type }) => {
    return (
        <Button
            type={type}
            className={`customButton ${btnStyle} ${fill} ${outline && 'outline'}`}
            onClick={onClick}
        >
            {title}
        </Button>
    )
};

export default ButtonCustom;
