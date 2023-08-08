import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Links } from '../../../mocked-data/mocked-data';
import Logo from '../../../assets/custom-icons/logo-full.png'
import LogoShort from '../../../assets/custom-icons/maesan-logo.png'
import './nav-bar.scss';

const NavBar = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <nav>
            <div>
                <Link to='/'>
                    <img src={Logo} alt='maesan-logo' className='logo-full'/>
                    <img src={LogoShort} alt='maesan-logo' className='logo-short'/>
                </Link>
            </div>
            <ul className={!isToggled && 'mobile-nav'}>

                {Links.map((link) => (
                    <li key={link.linkName}>
                        <Link to={link.linkUrl} onClick={() => setIsToggled(false)} target={Links.indexOf(link) === 5 && 'blank'}>{link.linkName}</Link>
                    </li>
                ))}

            </ul>
            <div className='mobile-hamburger'>
                {isToggled
                    ? (<RxCross2
                        size={28}
                        color='#02142c'
                        onClick={() => setIsToggled((prev) => !prev)}
                    />
                    )
                    : (
                        <AiOutlineMenu
                            size={28}
                            color='#02142c'
                            onClick={() => setIsToggled((prev) => !prev)}
                        />
                    )
                }
            </div>
        </nav>
    );
};

export default NavBar;
