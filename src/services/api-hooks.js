import { useState } from 'react';
import { loginAdmin, registerAdmin, deleteBlog, createBlog, editBlog, getMaesanBlog, uploadImage } from './api-services';

export const useRegister = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (userCredentials) => {
            setIsLoading(true)
            registerAdmin(userCredentials)
                .then(res => { setData(res); setIsLoading(false); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setData(null) })
        },
        data,
        isLoading,
        error
    }
}

export const useLogin = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (userCredentials) => {
            setIsLoading(true)
            loginAdmin(userCredentials)
                .then(res => { setData(res); setIsLoading(false); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setData(null) })
        },
        data,
        isLoading,
        error
    }
}

export const useCreateBlog = (token) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (content) => {
            setIsLoading(true)
            createBlog(content, token)
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}

export const useEditBlog = (token) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (blogId, content) => {
            setIsLoading(true)
            editBlog(blogId, content, token)
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}

export const useDeleteBlog = (token) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        call: (blogId) => {
            setIsLoading(true)
            deleteBlog(blogId, token)
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}

export const useGetBlog = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        getBlog: (blogId) => {
            setIsLoading(true)
            getMaesanBlog(blogId)
                .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}

export const useUploadImage = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    return {
        upload: (event) => {
            const file = event.target.files[0];
            const uploadPreset = 'maesan-open-cdn';
            const folder = 'maesan-images';

            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', uploadPreset);
                formData.append('folder', folder);
                setIsLoading(true)
                uploadImage(formData)
                    .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
                    .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
            }
        },
        data,
        isLoading,
        error,
        isSuccess
    }
}
