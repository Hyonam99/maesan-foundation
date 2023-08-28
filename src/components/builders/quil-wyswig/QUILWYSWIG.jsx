/* eslint-disable react/prop-types */
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quil-editor.scss'

const QUILWYSWIG = ({ onChange, quillValue, validationMessage }) => {

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ];

    const handleChange = (value) => {
        onChange(value);
    };

    return (
        <>
            <ReactQuill
                value={quillValue}
                modules={modules}
                formats={formats}
                onChange={handleChange}
                className='custom-editor'
                placeholder='type blog content here'
            />
            {!quillValue && <small>{validationMessage}</small>}
        </>
    );
};

export default QUILWYSWIG
