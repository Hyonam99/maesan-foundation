import React, { useState, useRef } from "react";
import { RiHeart2Line } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { PiHandHeart } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
    Box,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	Button,
} from "@chakra-ui/react";
import "./featured.scss";

const Featured = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cancelRef = useRef();
	return (
		<section className="msp_container">
			<h3>Build with Us</h3>
			<div className="msp_grid-tiles">
				<div className="msp_grid-tiles_background">
					<Link to="/contact">
						<div className="msp_grid-tiles_item">
							<span className="span-1">
								<FaRegHandshake size={64} />
							</span>
							<h4>Partner</h4>
						</div>
					</Link>
				</div>
				<div className="msp_grid-tiles_background">
					<Link to="/contact">
						<div className="msp_grid-tiles_item">
							<span className="span-2">
								<PiHandHeart size={64} />
							</span>
							<h4>Volunteer</h4>
						</div>
					</Link>
				</div>
				<div className="msp_grid-tiles_background">
					<Link to="#" onClick={() => {setIsOpen(true)}}>
						<div className="msp_grid-tiles_item">
							<span className="span-3">
								<RiHeart2Line size={64} />
							</span>
							<h4>Donate</h4>
						</div>
					</Link>
				</div>
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
		</section>
	);
};

export default Featured;
