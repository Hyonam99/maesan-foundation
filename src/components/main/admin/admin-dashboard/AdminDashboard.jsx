import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AdminTable } from 'components/component-exports';
import { getMaesanBlogs } from 'services/api-services'

import './admin-dashboard.scss'

const AdminDashboard = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [filterKey, setFilterKey] = useState('')

    const [blogs, setBlogs] = useState()

    useEffect(() => {
        getMaesanBlogs()
            .then(res => setBlogs(res.data))
    }, [])

    useEffect(() => {
        if (tabIndex === 0) {
            setFilterKey('draft')
        }
        if (tabIndex === 1) {
            setFilterKey('completed')
        }
    }, [tabIndex])
    return (
        <section className='admin-dashboard-test'>
            <h3>Good Morning</h3>
            <Tabs isFitted variant='enclosed' onChange={(index) => setTabIndex(index)}>
                <TabList mb='1em'>
                    <Tab>Drafts</Tab>
                    <Tab>Published</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <AdminTable filterKey={filterKey} data={blogs}/>
                    </TabPanel>
                    <TabPanel>
                        <AdminTable filterKey={filterKey} data={blogs}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    )
};

export default AdminDashboard;
