import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";

function HeroName() {
    const jaydenRef = useRef(null);

    useEffect(() => {
        gsap.set(jaydenRef.current, { x: "-47%" }); // Set initial position to -44%
    }, []);

    const handleMouseEnter = () => {
        gsap.to(jaydenRef.current, { x: "-98%", duration: 0.2 });
    };

    const handleMouseLeave = () => {
        gsap.to(jaydenRef.current, { x: "-47%", duration: 0.2 });
    };

    return (
        <div
            className="relative flex items-center space-x-4 mx-auto"
            style={{ marginRight: '10%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* "Jayden" text */}
            <p ref={jaydenRef} className="font-roxborough italic text-[220px] absolute left-0 ">Jayden</p>

            {/* "Godbold" text */}
            <p className="font-unisans italic text-[220px] z-10 bg-gray-900">Godbold</p>
            {/* "(BS)" text */}
            <p className="text-[40px] font-unisans italic transform translate-y-[-110%]">(BS)</p>
        </div>
    );
}

export default HeroName;
