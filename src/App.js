import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Gallery, Contact, Blog, BlogDetail, Login, Register, EditBlog, Dashboard } from './pages/pages-exports';
import UserLayout from 'layouts/UserLayout';
import AdminLayout from 'layouts/AdminLayout';
import './App.scss';

function App () {

    return (
        <>
            <Routes>
                <Route path='/' element={<UserLayout><Home /></UserLayout>} />
                <Route path='/about' element={<UserLayout><About /></UserLayout>} />
                <Route path='/blog' element={<UserLayout><Blog /></UserLayout>} />
                <Route path='/blog/:blogId' element={<UserLayout><BlogDetail /></UserLayout>} />
                <Route path='/gallery' element={<UserLayout><Gallery /></UserLayout>} />
                <Route path='/contact' element={<UserLayout><Contact /></UserLayout>} />
                <Route path='/admin/login' element={<Login />} />
                <Route path='/admin/register' element={<Register />} />
                <Route path='/admin/edit-blog' element={<AdminLayout><EditBlog /></AdminLayout>} />
                <Route path='/admin/dashboard' element={<AdminLayout><Dashboard /></AdminLayout>} />
            </Routes>
        </>
    );

}

export default App;
