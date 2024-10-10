import React from "react";
import viteLogo from "../../assets/vite.svg";
import htmlLogo from "../../assets/html.png";
import reactLogo from "../../assets/react.svg";
import swiftLogo from "../../assets/swift.png";
import mysqlLogo from "../../assets/mysql.png";
import pythonLogo from "../../assets/python.png";

function Icons(){
    return (
        <div className="flex flex-wrap gap-6 justify-center items-center pb-20">
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
    )
}

export default Icons;