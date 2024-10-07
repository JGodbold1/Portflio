import React from "react";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import swiftLogo from "../assets/swift.png";
import htmlLogo from "../assets/html.png";
import mysqlLogo from "../assets/mysql.png";
import pythonLogo from "../assets/python.png";

function Hero() {
    return (
        <div className="w-full bg-gray-900 flex justify-between items-center px-4 pl-10">
            {/* Left section - Name and subheading */}
            <div className="flex flex-col">
                <h1 className="text-mega text-white font-bold">Jayden Godbold</h1>

                <div className="mt-2 text-white text-xl">
                    <h2>Web + Application Developer</h2>
                    <p>Located in Chicago, IL</p>
                    <p>BS Computer Science - Software Development<br/>DePaul University</p>
                </div>
            </div>

            {/* Right section - Logos */}
            <div className="flex flex-wrap gap-6 justify-center items-center pt-60 pr-10">
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="h-12 w-12" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={htmlLogo} className="h-12 w-12" alt="HTML logo"/>
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="h-12 w-12" alt="React logo"/>
                </a>
                <a href="https://swift.org" target="_blank" rel="noopener noreferrer">
                    <img src={swiftLogo} className="h-12 w-12" alt="Swift logo"/>
                </a>
                <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
                    <img src={mysqlLogo} className="h-12 w-12" alt="MySQL logo"/>
                </a>
                <a href="https://python.org" target="_blank" rel="noopener noreferrer">
                    <img src={pythonLogo} className="h-12 w-12" alt="Python logo"/>
                </a>
            </div>
        </div>

    );
}

export default Hero;
