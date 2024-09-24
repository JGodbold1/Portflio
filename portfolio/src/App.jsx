import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Portfolio from './components/Portfolio';
import Journey from './components/Journey.jsx';
import NavBar from "./components/NavBar.jsx";
import topography from './assets/topography.svg';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Projects from "./pages/Projects.jsx";

function App() {
    return (
        <>
            <Router>
                <div className="w-full text-center">
                    <NavBar/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
