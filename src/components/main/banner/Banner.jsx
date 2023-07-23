/* eslint-disable react/prop-types */
import React from 'react';
import './banner.scss'
import { TitleDivider } from '../../component-exports';

const Banner = ({ title, color }) => {
    return (
        <section className='banner-container'>
            <section className='banner-container_background'>
                <section className='banner-container_overlay'>
                    <TitleDivider title={title} color={color}/>
                </section>
            </section>
        </section>
    )
};

export default Banner;
