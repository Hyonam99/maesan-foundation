/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminNav } from 'components/component-exports';

import './admin-layout.scss'

const AdminLayout = ({ children }) => {
    const token = localStorage.getItem('maesanAdminToken')
    const [routeGuard, setRouteGuard] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            setRouteGuard(false)
        } else if (!token || token === '') {
            navigate('/admin/login')
        }
    }, [token])
    return (
        <>{!routeGuard
            && <section className='admin-layout_container'>
                <section className='admin-layout_container_nav'>
                    <AdminNav />
                </section>
                <section className='admin-layout_container_content-display'>
                    {!routeGuard && children}
                </section>
            </section>
        }
        </>
    )
};

export default AdminLayout;
