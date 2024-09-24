import React from 'react';
import {useNavigate} from "react-router-dom";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function NavBar() {
    const navigate = useNavigate();

    const navAbout = () => {
        navigate('/about');  // Redirects to the "About" page
    }
    const navContact = () => {
        navigate('/contact');
    };
    const navProjects = () => {
        navigate('/projects');
    };
    const navHome = () => {
        navigate('/');
    };

    return (
        <header className="w-full bg-gray-900 p-4 flex justify-between items-center">
            {/* Logo or Title */}
            <div className="text-white text-xl font-bold" onClick={navHome}>
                Hi! My name is Jayden
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
                <a onClick={navAbout} className="text-white text-lg hover:text-gray-400 text-center">
                    About
                </a>
                <a onClick={navContact} className="text-white text-lg hover:text-gray-400 text-center">
                    Contact
                </a>
                <a onClick={navProjects} className="text-white text-lg hover:text-gray-400 text-center">
                    Projects
                </a>

                {/* Social Icons */}
                <a href="https://www.linkedin.com/in/jayden-godbold-641014241/" target="_blank" rel="noopener noreferrer"
                   className="w-8 h-8">
                    {/* Linkedin Example */}
                    <img src={linkedin} alt="LinkedIn" className="w-full h-full object-cover invert"/>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    {/* GitHub Icon (example) */}
                    <img src={github} alt="GitHub" className="w-full h-full object-cover invert"/>
                </a>
            </nav>
        </header>
    );
}

export default NavBar;
