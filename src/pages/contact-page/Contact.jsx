import React, { useState, useRef, useEffect } from "react";
import { Banner, ButtonCustom } from "../../components/component-exports";
import {
    Box,
    Textarea,
    Input,
    InputGroup,
    Text,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsEnvelopeFill, BsTwitter } from "react-icons/bs";
import { Formik } from "formik";
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
import { useContactEmail } from "services/api-hooks";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import "./contact.scss";
import { SuccessIcon, ErrorIcon } from "assets/custom-icons/index";
import { handleCopyText } from "utils/index";

const Contact = () => {
    const { contact, isLoading, isSuccess, isError } = useContactEmail();
    const [ userAlert, setUserAlert ] = useState( { shown: false, message: "" } );
    const [isCopied, setIsCopied] = useState(false);
	const [isAccountCopied, setIsAccountCopied] = useState(false);
    
    const cancelRef = useRef();
    const onClose = () => {
        setUserAlert({ shown: false, message: "" });
    };

    useEffect(() => {
        if (isSuccess) {
            setUserAlert({
                shown: true,
                message: "Your email has been sent. Expect to receive feedback within 48hours",
            });
        }
        if (isError) {
            setUserAlert({
                shown: true,
                message: "Unable to send email at this point, please try again after some minutes",
            });
        }
    }, [isSuccess || isError]);
    return (
			<>
				<Banner title="Contact" />
				<section className="contact-container">
					<section className="contact-container_overlay">
						<section className="contact-container_content">
							<Box className="contact_container_content-details">
								<Text>Get In Touch With Us</Text>
								<Box className="contact_container_content-details_links">
									<Link to="https://twitter.com/maesanfdn" target="blank">
										<BsTwitter /> @maesanfdn
									</Link>
									<Link to="mailto:maesanfoundation@gmail.com">
										<BsEnvelopeFill /> maesanfoundation@gmail.com
									</Link>
								</Box>
							</Box>
							<Box className="contact_form-wrapper">
								<Formik
									initialValues={{ user_name: "", user_email: "", message: "" }}
									validationSchema={Yup.object({
										user_name: Yup.string().required("name is required"),
										user_email: Yup.string()
											.email("Invalid email address")
											.required("email is required"),
										message: Yup.string().required("message is required"),
									})}
									onSubmit={(values) => {
										contact({ ...values });
									}}
								>
									{({ handleSubmit, getFieldProps, touched, errors }) => (
										<InputGroup className="contact_form-wrapper_inputs">
											<form onSubmit={handleSubmit}>
												<Input
													type="text"
													placeholder="enter your name"
													name="user_name"
													{...getFieldProps("user_name")}
												/>
												{touched.user_name && errors.user_name ? (
													<small>{errors.user_name}</small>
												) : null}
												<Input
													type="email"
													placeholder="enter your email"
													name="user_email"
													{...getFieldProps("user_email")}
												/>
												{touched.user_email && errors.user_email ? (
													<small>{errors.user_email}</small>
												) : null}
												<Textarea
													placeholder="your message here..."
													size="md"
													minHeight="10rem"
													resize="none"
													name="message"
													{...getFieldProps("message")}
												/>
												{touched.message && errors.message ? (
													<small>{errors.message}</small>
												) : null}
												<ButtonCustom
													title="Contact Us"
													type="submit"
													isLoading={isLoading}
												/>
											</form>
										</InputGroup>
									)}
								</Formik>
							</Box>
						</section>
					</section>
				</section>

				<AlertDialog
					onClose={onClose}
					isOpen={userAlert.shown}
					isCentered
					leastDestructiveRef={cancelRef}
					motionPreset="slideInBottom"
				>
					<AlertDialogOverlay />

					<AlertDialogContent className="dialog-content">
						<Box className="dialog-close-btn">
							<Button onClick={onClose}>
								<RxCross2 size={20} />
							</Button>
						</Box>
						<Box className="dialog-icon">
							{isSuccess ? <SuccessIcon /> : <ErrorIcon />}
						</Box>
						<Box className="donation-alert">
							<p>{userAlert.message}</p>
							<p>You can still make a donation today, and touch a life</p>
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
			</>
		);
};

export default Contact;
