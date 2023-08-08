/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
    const token = localStorage.getItem('token')
    const [routeGuard, setRouteGuard] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            setRouteGuard(false)
        } else if (!token) {
            navigate('/admin/register')
        }
    }, [token])
    return (
        <>
            <div>{!routeGuard && children}</div>
        </>
    )
};

export default AdminLayout;
