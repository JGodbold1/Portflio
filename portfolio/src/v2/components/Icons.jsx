import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import viteLogo from "../../assets/vite.svg";
import htmlLogo from "../../assets/html.png";
import reactLogo from "../../assets/react.svg";
import swiftLogo from "../../assets/swift.png";
import mysqlLogo from "../../assets/mysql.png";
import pythonLogo from "../../assets/python.png";

function Icons() {
    const iconsRef = useRef([]);

    useEffect(() => {
        iconsRef.current.forEach((icon, index) => {
            gsap.to(icon, {
                y: "20%", // Float up and down
                repeat: -1, // Infinite repeat
                yoyo: true, // Reverse the animation
                ease: "sine.inOut", // Smooth easing
                duration: 3 + index * 0.5, // Slightly different duration for each icon
            });
        });
    }, []);

    return (
        <div className="flex flex-wrap gap-6 justify-center items-center pb-20">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                <img
                    ref={el => iconsRef.current[0] = el}
                    src={viteLogo}
                    className="h-12 w-12"
                    alt="Vite logo"
                />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img
                    ref={el => iconsRef.current[1] = el}
                    src={htmlLogo}
                    className="h-12 w-12"
                    alt="HTML logo"
                />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img
                    ref={el => iconsRef.current[2] = el}
                    src={reactLogo}
                    className="h-12 w-12"
                    alt="React logo"
                />
            </a>
            <a href="https://swift.org" target="_blank" rel="noopener noreferrer">
                <img
                    ref={el => iconsRef.current[3] = el}
                    src={swiftLogo}
                    className="h-12 w-12"
                    alt="Swift logo"
                />
            </a>
            <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
                <img
                    ref={el => iconsRef.current[4] = el}
                    src={mysqlLogo}
                    className="h-12 w-12"
                    alt="MySQL logo"
                />
            </a>
            <a href="https://python.org" target="_blank" rel="noopener noreferrer">
                <img
                    ref={el => iconsRef.current[5] = el}
                    src={pythonLogo}
                    className="h-12 w-12"
                    alt="Python logo"
                />
            </a>
        </div>
    );
}

export default Icons;
