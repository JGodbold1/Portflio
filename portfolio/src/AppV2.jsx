import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from "./v2/components/Navigation.jsx";
import Contact from './v2/pages/ContactV2.jsx';
import About from './v2/pages/AboutV2.jsx';
import Home from './v2/pages/HomeV2.jsx';
import Projects from "./v2/pages/ProjectsV2.jsx";
import Header from './v2/components/Header.jsx'

function AppV2(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default AppV2;