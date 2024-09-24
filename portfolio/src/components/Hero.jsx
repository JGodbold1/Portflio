import React from "react";
import viteLogo from "../assets/vite.svg"
import reactLogo from "../assets/react.svg";
import swiftLogo from "../assets/swift.png"
import htmlLogo from "../assets/html.png"
import mysqlLogo from "../assets/mysql.png"
import pythonLogo from "../assets/python.png"
import tailwindLogo from "../assets/tailwind.svg"

    function Hero() {
        return (

            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 gap-4">
                <h1 className="text-6xl text-white">Jayden Godbold</h1>

                <div className="text-base/6 text-white">
                    <h1>Web + Application Developer<br/>Located in Chicago,Il</h1>
                    <p>BS Computer Science - Software Development<br/>DePaul University</p>
                </div>

                {/* project logos - on click filter projects on the right to filter*/}
                <div className="flex flex-wrap pt-2 px-2 gap-3">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>

                    <a href="https://react.dev" target="_blank">
                        <img src={htmlLogo} className="logo h-9 w-9" alt="html logo"/>
                    </a>

                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>


                    <a href="https://vitejs.dev" target="_blank">
                        <img src={swiftLogo} className="logo h-9 w-9" alt="swift logo"/>
                    </a>


                    <a href="https://vitejs.dev" target="_blank">
                        <img src={mysqlLogo} className="logoh-9 w-9" alt="mysql logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={pythonLogo} className="logo h-9 w-9" alt="python logo"/>
                    </a>
                </div>


            </div>
        )
    }

export default Hero;