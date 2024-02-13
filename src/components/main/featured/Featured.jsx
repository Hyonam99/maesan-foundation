import React, { useContext } from "react";
import { RiHeart2Line } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { PiHandHeart } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ModalContext } from "context/ModalContext";
import "./featured.scss";

const Featured = () => {
    const { setShowModal } = useContext(ModalContext);
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
					<Link to="#" onClick={() => {setShowModal(true);}}>
						<div className="msp_grid-tiles_item">
							<span className="span-3">
								<RiHeart2Line size={64} />
							</span>
							<h4>Donate</h4>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Featured;
