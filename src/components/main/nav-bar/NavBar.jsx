import React, { useState, useRef, useContext } from "react";
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
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import './nav-bar.scss';
import { handleCopyText } from "utils/index";
import { ModalContext } from "context/ModalContext";


const NavBar = () => {
    const { showModal, message, setShowModal, setMessage } = useContext(ModalContext);
    const [isToggled, setIsToggled] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isAccountCopied, setIsAccountCopied] = useState(false);
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
								setShowModal(true);
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
                        setShowModal(false);
                        setMessage("");
					}}
					isOpen={showModal}
					isCentered
					leastDestructiveRef={cancelRef}
					motionPreset="slideInBottom"
				>
					<AlertDialogOverlay />

					<AlertDialogContent className="dialog-content">
						<Box className="dialog-close-btn">
							<Button
								onClick={() => {
                                setShowModal( false );
                                setMessage("");
								}}
							>
								<RxCross2 size={20} />
							</Button>
						</Box>
						<Box className="donation-alert">
							{(message !== "") && <p>{message}</p>}
							<p>Make a donation today, and touch a life</p>
							<Box className="donate-link-btn">
								<p>Eugene Chimaobi</p>
								<p>
									9 Payment Service Bank{" "}
									<button
										onClick={() => {
											handleCopyText("9 Payment Service Bank", setIsCopied);
										}}
										style={{
											background: "none",
											border: "0",
											color: "#00a4d6",
										}}
									>
										{isCopied ? <FaCheck /> : <MdContentCopy />}{" "}
										{isCopied ? "copied" : "copy"}
									</button>
								</p>
								<p>
									6078180893{" "}
									<button
										onClick={() => {
											handleCopyText("6078180893", setIsAccountCopied);
										}}
										style={{
											background: "none",
											border: "0",
											color: "#00a4d6",
										}}
									>
										{isAccountCopied ? <FaCheck /> : <MdContentCopy />}{" "}
										{isAccountCopied ? "copied" : "copy"}
									</button>
								</p>
							</Box>
						</Box>
					</AlertDialogContent>
				</AlertDialog>
			</nav>
		);
};

export default NavBar;


