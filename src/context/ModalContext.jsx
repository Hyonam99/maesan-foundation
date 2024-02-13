/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [message, setMessage] = useState("");


	return (
		<ModalContext.Provider
			value={{
				showModal,
				setShowModal,
				message,
				setMessage,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
