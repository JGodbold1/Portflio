import React from "react";
import {useNavigate} from "react-router-dom";

function Navigation() {
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
    const navProWork = () => {
        navigate('/prowork');
    };

    return (

    <div className="">
        {/* Navigation.jsx */}
        <nav className="flex space-x-96">
            <a onClick={navAbout} className="text-white text-lg hover:text-gray-400 text-center">
                About Me
            </a>
            <a onClick={navContact} className="text-white text-lg hover:text-gray-400 text-center">
                Contact
            </a>
            <a onClick={navProjects} className="text-white text-lg hover:text-gray-400 text-center">
                Playground
            </a>
            <a onClick={navProWork} className="text-white text-lg hover:text-gray-400 text-center">
                Professional
            </a>
        </nav>
    </div>
    )
}

export default Navigation;