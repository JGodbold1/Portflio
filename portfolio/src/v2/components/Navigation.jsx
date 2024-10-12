import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function Navigation() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredText, setHoveredText] = useState(""); // State for the hovered text
    const [showNav, setShowNav] = useState(true); // State to control navigation visibility
    const hoverBoxRef = useRef(null); // Reference to the hover box

    useEffect(() => {
        if (hoveredIndex !== null) {
            // Animate expansion using GSAP when hovered
            gsap.to(hoverBoxRef.current, {
                height: "100px", // Expand downwards to 200px
                width: "100vw", // Full width of the viewport
                duration: 0.5,
                ease: "power3.inOut",
                transformOrigin: "top", // Origin from the top center
            });
            setShowNav(false); // Hide the navigation bar
        } else {
            // Animate collapse when not hovered
            gsap.to(hoverBoxRef.current, {
                height: "0px", // Collapse to zero
                duration: 0.5,
                ease: "power3.inOut",
                onComplete: () => {
                    setHoveredText(""); // Clear text after collapse
                    setShowNav(true); // Show the navigation bar again
                },
            });
        }
    }, [hoveredIndex]);

    const navAbout = () => {
        navigate('/about');
    };
    const navContact = () => {
        navigate('/contact');
    };
    const navProjects = () => {
        navigate('/projects');
    };
    const navProWork = () => {
        navigate('/prowork');
    };

    const handleHover = (index, text) => {
        setHoveredIndex(index);
        setHoveredText(text); // Set the hovered text
    };

    const handleHoverLeave = () => {
        setHoveredIndex(null);
    };

    const handleYellowBoxMouseLeave = () => {
        // Reset state when leaving the yellow box
        handleHoverLeave();
    };

    return (
        <div className="relative w-full overflow-hidden pb-64">
            {/* Expanding Yellow Box (Behind Nav) */}
            <div
                ref={hoverBoxRef}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 z-0 flex items-end justify-end px-4"
                style={{ height: "0px", width: "100vw" }} // Start collapsed at 0 height
                onMouseLeave={handleYellowBoxMouseLeave} // Handle mouse leave on the yellow box
            >
                {/* Display hovered text at the bottom right of the yellow bar */}
                {hoveredText && (
                    <span className="text-black text-[80px] font-roxborough ">
                        {hoveredText}
                    </span>
                )}
            </div>

            {/* Navigation Bar (Above the Yellow Box) */}
            <nav className="flex w-full justify-between relative z-10">
                {showNav && ( // Conditionally render navigation items
                    <>
                        <a
                            onMouseEnter={() => handleHover(0, "About Me")}
                            onMouseLeave={handleHoverLeave}
                            onClick={navAbout}
                            className="text-white text-lg text-center px-4 py-2 bg-transparent transition-colors duration-300"
                        >
                            About Me
                        </a>
                        <a
                            onMouseEnter={() => handleHover(1, "Contact")}
                            onMouseLeave={handleHoverLeave}
                            onClick={navContact}
                            className="text-white text-lg text-center px-4 py-2 bg-transparent transition-colors duration-300"
                        >
                            Contact
                        </a>
                        <a
                            onMouseEnter={() => handleHover(2, "Playground")}
                            onMouseLeave={handleHoverLeave}
                            onClick={navProjects}
                            className="text-white text-lg text-center px-4 py-2 bg-transparent transition-colors duration-300"
                        >
                            Playground
                        </a>
                        <a
                            onMouseEnter={() => handleHover(3, "Professional")}
                            onMouseLeave={handleHoverLeave}
                            onClick={navProWork}
                            className="text-white text-lg text-center px-4 py-2 bg-transparent transition-colors duration-300"
                        >
                            Professional
                        </a>
                    </>
                )}
            </nav>
        </div>
    );
}

export default Navigation;
