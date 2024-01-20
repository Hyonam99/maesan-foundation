/* eslint-disable no-tabs */
/* eslint-disable quotes */
import React, { useRef, useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
    ButtonCustom,
    ImageInput,
    MWYSWIG,
} from "components/component-exports";
import {
    Input,
    Box,
    Text,
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCreateBlog, useEditBlog, useGetBlog } from "services/api-hooks";
import { BlogContext } from "context/BlogContext";
import { LiaCameraSolid } from "react-icons/lia";
import "./content-editor.scss";

const ContentEditor = () => {
    const {
        token,
        stat,
        setStat,
        blogContent,
        setBlogContent,
        screen,
        setScreen,
        setPersistBlog,
        persistBlog,
    } = useContext(BlogContext);
    const [searchParams] = useSearchParams();
    const stateBlogContent = JSON.parse(localStorage.getItem("persistBlog"));
    const formikRef = useRef(null);
    const cancelRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const createBlog = useCreateBlog(token);
    const editBlog = useEditBlog(token);
    const adminBlogId = searchParams.get("adminblogid");
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false);
    const [newRef, setNewRef] = useState(null);

    const { data, isSuccess, getBlog } = useGetBlog()

    useEffect(() => {
        if (adminBlogId) {
            setScreen('EDIT')
        }
        if (adminBlogId && persistBlog?.title === '') {
            getBlog(adminBlogId);
        }

        return () => {
            //  clean up the useEffect when the component unmounts
            if (!window.location.href.includes("adminblogid")) {
                setBlogContent();
                flushPersistBlogs();
            }
        };
    }, [adminBlogId])

    const getRef = (itd) => {
        setNewRef(itd)
    };

    useEffect(() => {
        if (data && isSuccess) {
            const obj = { ...data?.data, image: data?.data?.image?.[0] }
            setPersistBlog(obj);
            setBlogContent(obj);
            newRef.current.setMarkdown(persistBlog?.content ?? "")
        }
    }, [data, isSuccess])

    const handleSubmit = () => {
        if (formikRef.current) {
            formikRef.current?.handleSubmit();
        }
    };

    const handleCancel = () => {
        setScreen("CREATE");
        setBlogContent();
        flushPersistBlogs();
        formikRef.current.resetForm();
    };

    const handleBlogSubmit = () => {
        if (stat === "Discard") {
            handleCancel()
            navigate("/admin/dashboard");
        }
        if (!adminBlogId && blogContent && stat === "Publish") {
            createBlog.call({ ...blogContent, status: "completed" });
        }
        if (!adminBlogId && blogContent && stat === "Save") {
            createBlog.call({ ...blogContent, status: "draft" });
        }
        if (adminBlogId && blogContent && stat === "Publish") {
            editBlog.call(adminBlogId, { ...blogContent, status: "completed" });
        }
        if (adminBlogId && blogContent && stat === "Save") {
            editBlog.call(adminBlogId, { ...blogContent, status: "draft" });
        }
    };

    const flushPersistBlogs = () => {
        setPersistBlog({
            title: "",
            theme: "",
            location: "",
            content: "",
            image: "",
        })
    }

    useEffect(() => {
        if (createBlog.isSuccess || editBlog.isSuccess) {
            setBlogContent();
            flushPersistBlogs()
            onClose();
            navigate("/admin/dashboard");
            formikRef.current.resetForm();
            setHasError(false)
        }
    }, [createBlog.isSuccess, editBlog.isSuccess])

    useEffect(() => {
        if (createBlog.error || editBlog.error) {
            setHasError(true)
        }
    }, [createBlog.error, editBlog.error])

    return (
        <section className="content-editor-container">
            <section className="content-editor-container-header">
                <h3>{screen} BLOG</h3>
                <section className="content-editor-container_buttons-wrapper">
                    <ButtonCustom
                        title="Publish"
                        type="button"
                        className="btn-1"
                        onClick={() => {
                            handleSubmit();
                            setStat("Publish");
                        }}
                    />
                    <ButtonCustom
                        title="Save"
                        type="button"
                        className="btn-2"
                        onClick={() => {
                            handleSubmit();
                            setStat("Save");
                        }}
                    />
                    <ButtonCustom
                        title="Cancel"
                        type="button"
                        className="btn-3"
                        onClick={() => {
                            setStat("Discard");
                            onOpen();
                        }}
                    />
                </section>
            </section>
            <section className="content-editor-container_form-wrapper">
                <Formik
                    innerRef={formikRef}
                    initialValues={
                        {
                            title: stateBlogContent?.title ?? "",
                            theme: stateBlogContent?.theme ?? "",
                            location: stateBlogContent?.location ?? "",
                            content: stateBlogContent?.content ?? "",
                            image: stateBlogContent?.image ?? ""
                        }
                    }
                    validationSchema={Yup.object({
                        title: Yup.string().required("title is required"),
                        theme: Yup.string().required("theme is required"),
                        location: Yup.string().required("location is required"),
                        content: Yup.string().required("content is required"),
                        image: Yup.string().required("cover image is required"),
                    })}
                    onSubmit={(values) => {
                        setBlogContent(values);
                        onOpen();
                    }}
                >
                    {({
                        handleSubmit,
                        getFieldProps,
                        touched,
                        errors,
                        setFieldValue,
                        values,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Box className="inputs-holder">
                                <Text>Title</Text>
                                <Input
                                    type="text"
                                    placeholder="enter blog title"
                                    name="title"
                                    {...getFieldProps("title")}
                                    value={persistBlog?.title}
                                    onInput={(e) => {
                                        setPersistBlog({
                                            ...persistBlog,
                                            title: e.currentTarget.value,
                                        });
                                    }}
                                />
                                {touched.title && errors.title
                                    ? (
                                        <small>{errors.title}</small>
                                    )
                                    : null}
                            </Box>
                            <Box className="input-holder-group">
                                <Box className="inputs-holder">
                                    <Text>Theme</Text>
                                    <Input
                                        type="text"
                                        placeholder="enter blog theme"
                                        name="theme"
                                        {...getFieldProps("theme")}
                                        value={persistBlog?.theme}
                                        onInput={(e) => {
                                            setPersistBlog({
                                                ...persistBlog,
                                                theme: e.currentTarget.value,
                                            });
                                        }}
                                    />
                                    {touched.theme && errors.theme
                                        ? (
                                            <small>{errors.theme}</small>
                                        )
                                        : null}
                                </Box>
                                <Box className="inputs-holder">
                                    <Text>Location</Text>
                                    <Input
                                        type="text"
                                        placeholder="enter location"
                                        name="location"
                                        {...getFieldProps("location")}
                                        value={persistBlog?.location}
                                        onInput={(e) => {
                                            setPersistBlog({
                                                ...persistBlog,
                                                location: e.currentTarget.value,
                                            });
                                        }}
                                    />
                                    {touched.location && errors.location
                                        ? (
                                            <small>{errors.location}</small>
                                        )
                                        : null}
                                </Box>
                            </Box>
                            <Box className="inputs-holder">
                                <ImageInput
                                    title={`${
                                        (persistBlog?.image || values.image) ? "edit" : "add"
                                    } cover Image`}
                                    icon={<LiaCameraSolid size={19} />}
                                    onChange={(e) => {
                                        setFieldValue("image", e);
                                        setPersistBlog({ ...persistBlog, image: e });
                                    }}
                                    initialImage={persistBlog?.image || values.image}
                                    validationMessage={errors.image}
                                />
                                {(persistBlog?.image || values.image) && (
                                    <Box className="content-image-preview">
                                        <img src={persistBlog?.image} alt="cover-image" />
                                    </Box>
                                )}
                            </Box>
                            <Box className="inputs-holder">
                                <Text>Content</Text>
                                <MWYSWIG
                                    onChange={(e) => {
                                        setFieldValue("content", e);
                                        setPersistBlog({ ...persistBlog, content: e });
                                    }}
                                    quillValue={persistBlog?.content}
                                    validationMessage={errors.content}
                                    onRef={getRef}
                                />
                            </Box>
                        </form>
                    )}
                </Formik>
            </section>

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={() => { onClose(); setHasError(false) }}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    {hasError
                        && <Box>
                            <Alert status='error'>
                                <AlertIcon />
                                    There was an error processing your request
                            </Alert>
                        </Box>
                    }
                    <AlertDialogHeader>{stat} Blog ?</AlertDialogHeader>
                    <AlertDialogBody>
						Are you sure you want to {stat} this Blog ?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
							Close
                        </Button>
                        <Button
                            isLoading={editBlog.isLoading || createBlog.isLoading}
                            colorScheme={stat !== "Discard" ? "green" : "red"}
                            ml={3}
                            onClick={() => {
                                handleBlogSubmit();
                            }}
                        >
                            {stat}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
};

export default ContentEditor;
