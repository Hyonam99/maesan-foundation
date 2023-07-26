import React from 'react';
import ChildPicture from '../../../assets/Images/child-1.jpg'
import { ButtonCustom, TitleDivider } from '../../component-exports';
import './welcome.scss'
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <section className='welcome-container'>
            <div className='welcome-container_wrapper'>
                <article className='welcome-container_text-content'>
                    <TitleDivider title='Welcome to maesan foundation'/>
                    <h4>Preserve human lives and provide a better livelihood</h4>
                    <Link to='mailto:maesanfoundation@gmail.com'>
                        <ButtonCustom title='Join Us Today'/>
                    </Link>
                </article>
                <article className='welcome-container_image-content'>
                    <div className='welcome-container_image-content_wrapper'>
                        <img src={ChildPicture} alt='maesan-welcome'/>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Welcome;
