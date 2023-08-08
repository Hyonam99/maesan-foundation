/* eslint-disable quotes */
import axios from 'axios';
import { useState } from "react";

export const maesanService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getMaesanBlogs = async () => {
    const response = maesanService.get('/api/blogs')
    return (await response).data
}

export const getMaesanBlog = async (blogId) => {
    const response = maesanService.get(`/api/blogs/${blogId}`)
    return (await response).data
}

export const registerAdmin = async (payload) => {
    const response = maesanService.post(`/api/users/register`, payload)
    return (await response).data
}

export const loginAdmin = async (payload) => {
    const response = maesanService.post(`/api/users/login`, payload)
    return (await response).data
}

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
