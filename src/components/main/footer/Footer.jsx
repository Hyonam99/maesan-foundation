/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
import { Box, Heading, Image, Text, Input, InputGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsTwitter, BsEnvelopeFill } from "react-icons/bs";
import Logo from "../../../assets/custom-icons/logo-full.png";
import "./footer.scss";
import { ButtonCustom } from "../../component-exports";
import { Formik } from "formik";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ModalContext } from "context/ModalContext";
import * as Yup from "yup";
import { API_EMAIL_URL, API_EMAIL_U_VALUE, API_EMAIL_ID } from "services";

const SubscribeForm = ({ status, submessage, subscribe }) => {
	const { setShowModal, setMessage } = useContext(ModalContext);
	const isLoading = status === "sending";
	const isSuccess = status === "success";
	const isError = status === "error";
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (isSuccess) {
			setShowModal(true);
			setMessage(submessage);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			setShowError(true);
		}

		setTimeout(() => {
			setShowError(false);
		}, 5000);
	}, [isError]);

	return (
		<>
			<Formik
				initialValues={{ email: "" }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email address")
						.required("email is required"),
				})}
				onSubmit={(values) => subscribe({ EMAIL: values.email })}
			>
				{({ handleSubmit, getFieldProps, touched, errors }) => (
					<form onSubmit={handleSubmit}>
						{showError && (
							<span className={`subscription-message`}>
								unable to subscribe at the moment, please try in few minutes
							</span>
						)}
						<InputGroup>
							<Input
								type="email"
								placeholder="your email"
								{...getFieldProps("email")}
							/>
							<ButtonCustom
								title={isLoading ? "loading..." : "Send"}
								type="submit"
								isLoading={isLoading && !isSuccess}
							/>
						</InputGroup>
						{touched.email && errors.email ? (
							<small>{errors.email}</small>
						) : null}
					</form>
				)}
			</Formik>
		</>
	);
};

const Footer = () => {
	const postUrl = `${API_EMAIL_URL}?u=${API_EMAIL_U_VALUE}&id=${API_EMAIL_ID}`;
	return (
		<section className="footer-container">
			<section className="footer-container_overlay">
				<section className="footer-container_content">
					<Box className="footer-container_image">
						<Image src={Logo} objectFit="cover" />
					</Box>
					<Box className="footer_contact-details">
						<Heading>Contact</Heading>
						<Box className="footer_contact-details_links">
							<Link to="https://twitter.com/maesanfdn" target="blank">
								<BsTwitter /> @maesanfdn
							</Link>
							<Link to="mailto:maesanfoundation@gmail.com">
								<BsEnvelopeFill /> maesanfoundation@gmail.com
							</Link>
						</Box>
					</Box>
					<Box className="footer_contact-form">
						<Text>Subscribe to Our News letter</Text>
						<MailchimpSubscribe
							url={postUrl}
							render={({ status, message, subscribe }) => (
								<SubscribeForm
									status={status}
									submessage={message}
									subscribe={subscribe}
								/>
							)}
						/>
					</Box>
				</section>
				<Box className="footer_copyright">
					<Text>© {new Date().getFullYear()} Maesan All rights reserved</Text>
				</Box>
			</section>
		</section>
	);
};

export default Footer;
