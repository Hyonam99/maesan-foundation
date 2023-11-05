/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
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
import { handleFileUpload } from 'services/api-services';

const MWYSWIG = ({ onChange, quillValue, validationMessage, onRef }) => {

    const mdRef = useRef(null)
    onRef(mdRef)

    return (
        <>
            <Box>
                <MDXEditor
                    markdown={quillValue ?? ''}
                    onChange={(e) => onChange(e)}
                    ref={mdRef}
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
