import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AdminTable } from 'components/component-exports';
import { getMaesanBlogs } from 'services/api-services'

import './admin-dashboard.scss'

const AdminDashboard = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [filterKey, setFilterKey] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('');
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

    useEffect(() => {
        function getTimeOfDay () {
            const currentTime = new Date().getHours();
            let greetingTime;
            switch (true) {
            case currentTime >= 5 && currentTime < 12:
                greetingTime = 'Morning';
                break;
            case currentTime >= 12 && currentTime < 17:
                greetingTime = 'Afternoon';
                break;
            default:
                greetingTime = 'Evening';
                break;
            }
            return greetingTime;
        }

        const currentGreeting = getTimeOfDay();
        setTimeOfDay(currentGreeting);
    }, []);

    return (
        <section className='admin-dashboard-tabs'>
            <h3>Good {timeOfDay}!</h3>
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
