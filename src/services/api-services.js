/* eslint-disable quotes */
import axios from 'axios';

export const maesanService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const registerAdmin = async (payload) => {
    const response = maesanService.post(`/api/users/register`, payload)
    return (await response).data
}

export const loginAdmin = async (payload) => {
    const response = maesanService.post(`/api/users/login`, payload)
    return (await response).data
}

export const logoutAdmin = async () => {
    localStorage.removeItem('maesanAdminToken')
}

export const getMaesanBlogs = async () => {
    const response = maesanService.get('/api/blogs')
    return (await response).data
}

export const getMaesanBlog = async (blogId) => {
    const response = maesanService.get(`/api/blogs/${blogId}`)
    return (await response).data
}

export const createBlog = async (content, token) => {
    const response = maesanService.post(`/api/blogs`, content, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const editBlog = async (blogId, content, token) => {
    const response = maesanService.patch(`/api/blogs/${blogId}`, content, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const deleteBlog = async (blogId, token) => {
    const response = maesanService.delete(`/api/blogs/${blogId}`, { headers: { Authorization: `Bearer ${token}` } })
    return (await response).data
}

export const uploadImage = async (imageData) => {
    const response = maesanService.post(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, imageData)
    return (await response).data
}
