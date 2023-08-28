import React from 'react';
import { AdminDashboard } from 'components/component-exports';

import './dashboard.scss';

const Dashboard = () => {
    return (
        <section className='dashboard-container'>
            <section className='dashboard-container_content-display'>
                <AdminDashboard />
            </section>
        </section>
    )
};

export default Dashboard;
