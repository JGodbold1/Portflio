import React from 'react';
import topography from "../assets/topography.svg";
import Hero from "../components/Hero.jsx";
import Journey from "../components/Journey.jsx";
import Portfolio from "../components/Portfolio.jsx";

function Home() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center">
            {/* Hero */}
            <Hero/>
        </div>
    );
}

export default Home;