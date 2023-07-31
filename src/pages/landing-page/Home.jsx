import React from 'react';
import { Hero, Featured, Welcome, Mission, Strategy, NewsContainer } from '../../components/component-exports';

const Home = () => {
    return (
        <section>
            <Hero />
            <Featured />
            <Welcome />
            <Mission />
            <Strategy />
            <NewsContainer mini={3}/>
        </section>
    )
};

export default Home;
