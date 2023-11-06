/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    CircularProgress,
    Box
} from '@chakra-ui/react';

import { RxCross2 } from 'react-icons/rx';
import './image-input.scss';
import { LiaCameraSolid } from 'react-icons/lia';
import { useUploadImage } from 'services/api-hooks';

const ImageInput = ({ title, icon, onChange, initialImage, validationMessage }) => {
    const [imagePreview, setImagePreview] = useState(initialImage);
    const [isShown, setIsShown] = useState(false);
    const { data, isLoading, isSuccess, upload } = useUploadImage()

    useEffect(() => {
        if (isSuccess && data) {
            setImagePreview(data?.secure_url)
            onChange(data?.secure_url)
        }
    }, [data, isSuccess])
    const handleDelete = () => {
        setImagePreview('');
        onChange('');
        setIsShown(false)
    };

    return (
        <div>
            <Box className='image-input-display'>
                <button type='button' onClick={(e) => { setIsShown(true) }} className='image-upload-btn'>{icon} {title}</button>
                {!initialImage && <small>{validationMessage}</small>}
            </Box>

            <Modal
                onClose={() => setIsShown(false)}
                isOpen={isShown}
                scrollBehavior='inside'
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <div className='modal-header'> <RxCross2 size={22} onClick={() => setIsShown(false)} cursor='pointer'/></div>
                    <ModalBody className='modal-body'>
                        <label htmlFor='fileTag'>
                            Upload Image
                            <LiaCameraSolid size={24}/>
                            <input id="fileTag" type='file' accept='image/*' onChange={upload}/>
                        </label>
                        {isLoading
                            && <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                                <CircularProgress isIndeterminate size='24px' thickness='6px' color='#d4af37' marginRight={2}/>
                                <p>Uploading image. Please wait...</p>
                            </Box>
                        }
                        {(imagePreview || initialImage) && (
                            <Box className='cover-image_preview-holder'>
                                <img
                                    src={imagePreview || initialImage}
                                    alt='Preview'
                                    className='cover-image-preview'
                                />
                                <Box className='cover-image_preview-buttons'>
                                    <button onClick={handleDelete}>Delete</button>
                                </Box>
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ImageInput;
