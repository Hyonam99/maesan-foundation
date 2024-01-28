/* eslint-disable quotes */
import axios from 'axios';

export const maesanService = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL
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

export const uploadImage = async (formData) => {
    const cloudName = 'maesan-product';
    const response = maesanService.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
    return (await response).data
};

export const handleFileUpload = async (file) => {
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

export const contactEmail = async (emailParams) => {
    const requestData = {
        service_id: 'maesan_service_apbreum',
        template_id: 'maesan_template_q4x3g38',
        user_id: 'uzOt3W32dhtNIPLWZ',
        template_params: { ...emailParams }
    }
    const response = maesanService.post(`https://api.emailjs.com/api/v1.0/email/send`, requestData)
    return (await response).data
}
