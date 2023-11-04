/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef } from 'react';
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    toolbarPlugin,
    linkDialogPlugin,
    imagePlugin,
    linkPlugin,
    BoldItalicUnderlineToggles,
    UndoRedo,
    BlockTypeSelect,
    ListsToggle,
    CreateLink,
    InsertTable,
    tablePlugin,
    InsertImage
} from '@mdxeditor/editor';
import { Box } from '@chakra-ui/react';
import '@mdxeditor/editor/style.css';
import './maesan-wyswig.scss'

const MWYSWIG = ({ onChange, quillValue, validationMessage }) => {

    const handleFileUpload = async (file) => {
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

                const data = await response.json();
                return data?.secure_url
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

    };

    const ref = useRef(null)

    const memoizeSetMarkdown = useCallback(
        (quillValue) => {
            ref.current?.setMarkdown(quillValue ?? '');
        }, []
    );

    useEffect(() => {
        memoizeSetMarkdown(quillValue);
    }, [quillValue]);

    return (
        <>
            <Box>
                <MDXEditor
                    markdown={quillValue ?? ''}
                    ref={ref}
                    onChange={(e) => onChange(e)}
                    className={'main-editor'}
                    contentEditableClassName={'editable'}
                    placeholder={''}
                    plugins={[
                        headingsPlugin(),
                        listsPlugin(),
                        quotePlugin(),
                        imagePlugin({ imageUploadHandler: handleFileUpload }),
                        linkDialogPlugin({ linkAutocompleteSuggestions: [] }),
                        linkPlugin(),
                        tablePlugin(),
                        toolbarPlugin({
                            toolbarContents: () => (
                                <>
                                    <UndoRedo />
                                    <BoldItalicUnderlineToggles />
                                    <ListsToggle />
                                    <CreateLink />
                                    <BlockTypeSelect />
                                    <InsertImage />
                                    <InsertTable />
                                </>
                            )
                        }),
                    ]}
                />
            </Box>
            {!quillValue && <small>{validationMessage}</small>}
        </>
    )
};

export default MWYSWIG;
