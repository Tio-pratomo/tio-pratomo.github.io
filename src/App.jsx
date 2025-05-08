import { useState } from 'react';
import './App.css';

import LoadingScreen from './components/LoadinScreen.jsx';
import Navbar from './components/Navbar.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Home from './components/sections/Home.jsx';
import About from './components/sections/About.jsx';
import Project from './components/sections/Project.jsx';
import Portfolio from './components/sections/Portolio.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoading ? 'opacity-100' : 'opacity-0'
                } bg-black text-gray-100`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Project />
                <Portfolio />
                <Contact />
            </div>
        </>
    );
}

export default App;
