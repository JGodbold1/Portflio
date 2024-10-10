import React from "react";
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function Header() {
    return (
        <header className="w-full bg-black p-4 flex justify-between">

            {/* message*/}
            <p className="text-white">This is place holder text</p>

            {/* logo*/}
            <p className="text-white text-center absolute left-1/2 transform -translate-x-1/2"> Jayden</p>

            {/* icons*/}

            <nav className="flex space-x-4 align-right">
                {/* Social Icons */}
                <a href="https://www.linkedin.com/in/jayden-godbold-641014241/" target="_blank"
                   rel="noopener noreferrer"
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
    )
}

export default Header