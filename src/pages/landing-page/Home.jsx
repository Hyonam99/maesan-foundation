import React from 'react';
import { Hero, Featured, Welcome, Mission, Strategy } from '../../components/component-exports';
import { News } from '../pages-exports';

const Home = () => {
    return (
        <section>
            <Hero />
            <Featured />
            <Welcome />
            <Mission />
            <Strategy />
            <News mini />
        </section>
    )
};

export default Home;
