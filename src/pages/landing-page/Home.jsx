import React from 'react';
import { Hero, Featured, Welcome, Mission, Strategy, NewsContainer } from '../../components/component-exports';
import { newsContent } from '../../mocked-data/mocked-data';

const Home = () => {
    return (
        <section>
            <Hero />
            <Featured />
            <Welcome />
            <Mission />
            <Strategy />
            <NewsContainer mini={3} dataSource={newsContent}/>
        </section>
    )
};

export default Home;
