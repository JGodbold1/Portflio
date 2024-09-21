import React from 'react';

function Bar() {
    return (
        <header className="w-full bg-gray-900 p-4 flex justify-between items-center">
            {/* Logo or Title */}
            <div className="text-white text-xl font-bold">
                Hi! My name is Jayden
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
                <a href="#about" className="text-white text-lg hover:text-gray-400 text-center">
                    About
                </a>
                <a href="#contact" className="text-white text-lg hover:text-gray-400 text-center">
                    Contact
                </a>

                {/* Social Icons */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    {/* Twitter Icon (example) */}
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    {/* GitHub Icon (example) */}
                    <i className="fab fa-github"></i>
                </a>
            </nav>
        </header>
    );
}

export default Bar;
