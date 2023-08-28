import React, { useState, useEffect, useContext } from 'react';
import './admin-nav.scss';
import { Link, useNavigate } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { RiLogoutBoxLine } from 'react-icons/ri';
import Logo from 'assets/custom-icons/logo-full.png';
import LogoShort from 'assets/custom-icons/maesan-logo.png';
import { logoutAdmin } from 'services/api-services';
import { BlogContext } from 'context/blogContext'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';

const adminLinks = [
    { name: 'Dashboard', linkUrl: '/admin/dashboard', icon: RxDashboard },
    { name: 'Create Blogs', linkUrl: '/admin/edit-blog', icon: BsJournalBookmarkFill },
    { name: 'Log Out', linkUrl: '#', icon: RiLogoutBoxLine },
];

const AdminNav = () => {
    const { setScreen } = useContext(BlogContext)
    const [isDefault, setIsDefault] = useState(0);
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    useEffect(() => {
        if (isDefault === 2) {
            logoutAdmin()
            navigate('/admin/login')
        }
        if (isDefault === 1) {
            setScreen('CREATE')
        }
    }, [isDefault])

    return (
        <>
            <section className='admin-nav'>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt='maesan-logo' className='admin-logo-full'/>
                        <img src={LogoShort} alt='maesan-logo-short' className='admin-logo-short'/>
                    </Link>
                </div>
                <ul>
                    {adminLinks.map((link, i) => (
                        <Link to={link.linkUrl} key={i + link.name}>
                            <li
                                onClick={() => setIsDefault(i) }
                                className={adminLinks.indexOf(link) === isDefault ? 'is-selected' : null}
                            >
                                <link.icon /> {link.name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className='mobile-menu-btn'>
                    <AiOutlineMenu size={24} onClick={() => { onOpen() }}/>
                </div>
            </section>
            <>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay className='mobile-menu-overlay'/>
                    <DrawerContent className='mobile-menu-container'>
                        <div className='mobile-menu-header'>
                            <img src={LogoShort} alt='maesan-logo-short' className='admin-logo-short'/>
                            <AiOutlineClose size={24} onClick={() => { onClose() }}/>
                        </div>
                        <DrawerBody className='mobile-menu-body'>
                            <ul>
                                {adminLinks.map((link, i) => (
                                    <Link to={link.linkUrl} key={i + link.name}>
                                        <li
                                            onClick={() => { setIsDefault(i); onClose() }}
                                            className={adminLinks.indexOf(link) === isDefault ? 'is-selected' : null}
                                        >
                                            <link.icon /> {link.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        </>
    );
};

export default AdminNav;
