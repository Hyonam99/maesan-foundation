/* eslint-disable react/prop-types */
import React from 'react';
import './title-divider.scss'

const TitleDivider = ({ title, color }) => {
    return (
        <div className='title-divider'>
            <h3 style={{ color: `${color}` }}>{title}</h3>
            <div className='divider-block'></div>
        </div>
    );
};

export default TitleDivider;
