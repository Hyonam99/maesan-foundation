/* eslint-disable quotes */
import axios from 'axios'

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
