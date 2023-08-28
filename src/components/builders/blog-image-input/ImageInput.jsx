/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react';

import { RxCross2 } from 'react-icons/rx';
import './image-input.scss';
import { LiaCameraSolid } from 'react-icons/lia';

const ImageInput = ({ title, icon, onChange, initialImage, validationMessage }) => {
    const [imagePreview, setImagePreview] = useState(initialImage);
    // const [cloudImage, setCloudImage] = useState('');
    const [isShown, setIsShown] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // setCloudImage(event.target.files[0]);
        const reader = new FileReader();

        reader.onload = (e) => {
            setImagePreview(e.target.result);
            onChange(e.target.result)
        };

        reader.readAsDataURL(file);
    };

    // const handleUpload = async () => {
    //     if (cloudImage) {
    //         const formData = new FormData();
    //         formData.append('file', cloudImage);
    //         formData.append('upload_preset', 'your_upload_preset'); // Replace with your upload preset

    //         try {
    //             const response = await fetch(
    //                 // eslint-disable-next-line quotes
    //                 `https://api.cloudinary.com/v1_1/maesan-product/image/upload`,
    //                 {
    //                     method: 'POST',
    //                     body: formData,
    //                 }
    //             );

    //             if (response.ok) {
    //                 // Handle success
    //                 console.log('Image uploaded successfully');
    //             } else {
    //                 // Handle error
    //                 console.error('Image upload failed');
    //             }
    //         } catch (error) {
    //             console.error('Error uploading image', error);
    //         }
    //     }
    // };

    const handleDelete = () => {
        setImagePreview('');
        onChange('')
    };

    return (
        <div>
            <div className='image-input-display'>
                <button type='button' onClick={(e) => { setIsShown(true) }} className='image-upload-btn'>{icon} {title}</button>
                {!initialImage && <small>{validationMessage}</small>}
            </div>

            <Modal
                onClose={() => setIsShown(false)}
                isOpen={isShown}
                scrollBehavior='inside'
            >
                <ModalOverlay />
                <ModalContent>
                    <div className='modal-header'> <RxCross2 size={22} onClick={() => setIsShown(false)} cursor='pointer'/></div>
                    <ModalBody className='modal-body'>
                        <label htmlFor='fileTag'>
                            Upload Image
                            <LiaCameraSolid size={24}/>
                            <input id="fileTag" type='file' accept='image/*' onChange={handleImageChange}/>
                        </label>
                        {initialImage && (
                            <div className='cover-image_preview-holder'>
                                <img
                                    src={imagePreview}
                                    alt='Preview'
                                    className='cover-image-preview'
                                />
                                <div className='cover-image_preview-buttons'>
                                    <button onClick={() => setIsShown(false)}>Save</button>
                                    {/* <button onClick={handleUpload}>Upload</button> */}
                                    <button onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ImageInput;
