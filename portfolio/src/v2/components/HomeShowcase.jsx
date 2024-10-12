import React from "react";
import github from "../../assets/github.png";

function HomeShowcase() {
    return (
        <div className="flex items-center justify-center">
            <img src={github} alt="GitHub" className="w-full h-full object-cover invert"/>
            <h1>Showcase</h1>
        </div>
    )
}

export default HomeShowcase;