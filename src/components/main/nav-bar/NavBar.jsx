import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Links } from '../../../mocked-data/mocked-data';
import Logo from '../../../assets/custom-icons/logo-full.png'
import LogoShort from '../../../assets/custom-icons/maesan-logo.png'
import {
	Box,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	Button,
} from "@chakra-ui/react";
import './nav-bar.scss';

const NavBar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const cancelRef = useRef();
    return (
			<nav>
				<div>
					<Link to="/">
						<img src={Logo} alt="maesan-logo" className="logo-full" />
						<img src={LogoShort} alt="maesan-logo" className="logo-short" />
					</Link>
				</div>
				<ul className={!isToggled && "mobile-nav"}>
					{Links.map((link) => (
						<li key={link.linkName}>
							<Link
								to={link.linkUrl}
								onClick={() => setIsToggled(false)}
								target={"_self"}
							>
								{link.linkName}
							</Link>
						</li>
					))}

					<li>
						<Link
							to="#"
							onClick={() => {
								setIsToggled(false);
								setIsOpen(true);
							}}
							target={"_self"}
						>
							Donate
						</Link>
					</li>
				</ul>
				<div className="mobile-hamburger">
					{isToggled ? (
						<RxCross2
							size={28}
							color="#02142c"
							onClick={() => setIsToggled((prev) => !prev)}
						/>
					) : (
						<AiOutlineMenu
							size={28}
							color="#02142c"
							onClick={() => setIsToggled((prev) => !prev)}
						/>
					)}
				</div>
				<AlertDialog
					onClose={() => {
						setIsOpen(false);
					}}
					isOpen={isOpen}
					isCentered
					leastDestructiveRef={cancelRef}
					motionPreset="slideInBottom"
				>
					<AlertDialogOverlay />

					<AlertDialogContent className="dialog-content">
						<Box className="dialog-close-btn">
							<Button
								onClick={() => {
									setIsOpen(false);
								}}
							>
								<RxCross2 size={20} />
							</Button>
						</Box>
						<Box className="donation-alert">
							<p>Make a donation today, and touch a life</p>
							<Box className="donate-link-btn">
								<p>Eugene Chimaobi</p>
								<p>9 Payment Service Bank</p>
								<p>6078180893</p>
							</Box>
						</Box>
					</AlertDialogContent>
				</AlertDialog>
			</nav>
		);
};

export default NavBar;
