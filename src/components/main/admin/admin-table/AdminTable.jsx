/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
    Box
} from '@chakra-ui/react'
import { CiMenuKebab, CiEdit } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CustomSpinner } from 'components/component-exports';

import './admin-table.scss'
import { Link } from 'react-router-dom';
import { useDeleteBlog } from 'services/api-hooks';
import { BlogContext } from 'context/BlogContext'

const AdminTable = ({ filterKey, data }) => {
    const { token, setScreen } = useContext(BlogContext)
    const filteredBlogs = data?.filter((blog) => blog?.status ? blog?.status === filterKey : blog)
    const [blogId, setBlogId] = useState('')
    const deleteBlog = useDeleteBlog(token)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const handleDelete = () => {
        deleteBlog.call(blogId)
    }

    useEffect(() => {
        if (deleteBlog.isSuccess) {
            onClose()
            window.location.reload()
        }
    }, [deleteBlog.isSuccess])

    return (
        <section className='admin-table-section'>
            {!filteredBlogs
                ? <Box className='spinner-holder'><CustomSpinner /></Box>
                : <TableContainer className='admin-table-container'>
                    <Table variant='striped' colorScheme='blackAlpha'>
                        <Thead>
                            <Tr>
                                <Th>Author</Th>
                                <Th>Title</Th>
                                <Th>Description</Th>
                                <Th>Created At</Th>
                                <Th>Status</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredBlogs?.map((item, i) => (
                                <Tr key={`blog-item-${i + 1}-${item._id}`}>
                                    <Td>{item.createdBy.fullname}</Td>
                                    <Td>{item.title.substring(0, 24) + '...'}</Td>
                                    <Td>{item.content.substring(0, 24) + '...'}</Td>
                                    <Td>{new Date(item.createdAt).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Td>
                                    <Td>{item.status ?? 'Published'}</Td>
                                    <Td>
                                        <Menu isLazy>
                                            <MenuButton><CiMenuKebab /></MenuButton>
                                            <MenuList>
                                                <Link to={`/admin/edit-blog/?&adminblogid=${item._id}`}>
                                                    <MenuItem className='menu-edit-item' onClick={() => { setScreen('EDIT') }}>
                                                        <CiEdit /> Edit
                                                    </MenuItem>
                                                </Link>
                                                <MenuItem className='menu-delete-item' onClick={() => { onOpen(); setBlogId(item?._id) }} >
                                                    <FaRegTrashAlt /> Delete
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            ))}

                        </Tbody>
                    </Table>
                </TableContainer>
            }
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Delete Blog ?</AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure you want to delete this Blog ?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button isLoading={deleteBlog.isLoading} colorScheme='red' ml={3} onClick={() => { handleDelete() }}>
                        Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </section>
    );
};

export default AdminTable;
