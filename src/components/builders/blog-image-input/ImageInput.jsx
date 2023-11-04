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
    const [isShown, setIsShown] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const uploadPreset = 'maesan-open-cdn';
        const folder = 'maesan-images';
        const cloudName = 'maesan-product';

        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', uploadPreset);
                formData.append('folder', folder);

                const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                    method: 'POST',
                    body: formData,
                });

                setLoading(true)
                const data = await response.json();
                setImagePreview(data?.secure_url)
                onChange(data?.secure_url)
                setLoading(false)
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

    };
    const handleDelete = () => {
        setImagePreview('');
        onChange('');
        setIsShown(false)
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
                            <input id="fileTag" type='file' accept='image/*' onChange={handleFileUpload}/>
                        </label>
                        {loading && <p>Uploading image, please wait</p>}
                        {(imagePreview || initialImage) && (
                            <div className='cover-image_preview-holder'>
                                <img
                                    src={imagePreview}
                                    alt='Preview'
                                    className='cover-image-preview'
                                />
                                <div className='cover-image_preview-buttons'>
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
