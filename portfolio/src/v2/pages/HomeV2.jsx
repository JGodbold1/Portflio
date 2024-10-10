import React from "react";
import Header from '../components/Header.jsx'
import HeroName from "../components/HeroName.jsx";
import Navigation from "../components/Navigation.jsx"

function HomeV2() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center">
            {/* Hero */}
            <Header/>
            <HeroName/>
            <Navigation/>
        </div>
    )
}
export default HomeV2;