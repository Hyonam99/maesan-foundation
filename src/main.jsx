import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { BlogContextProvider } from 'context/BlogContext';
import { CloudinaryContext } from 'cloudinary-react';
import { ModalContextProvider } from 'context/ModalContext';

const cloudName = 'maesan-product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<BlogContextProvider>
					<ModalContextProvider>
						<CloudinaryContext cloudName={cloudName}>
							<App />
						</CloudinaryContext>
					</ModalContextProvider>
				</BlogContextProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
