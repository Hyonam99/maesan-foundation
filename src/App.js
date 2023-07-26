import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Gallery, Contact, Blog, BlogDetail } from './pages/pages-exports';
import { NavBar, Footer } from './components/component-exports';
import './App.scss';

function App () {

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:blogId' element={<BlogDetail />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );

}

export default App;
