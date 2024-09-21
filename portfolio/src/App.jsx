import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Journey from './components/Journey.jsx';
import Bar from "./components/Bar.jsx";
import topography from './assets/topography.svg';

function App() {
    return (
        <>
            <div className="w-full text-center">
                <Bar/>
            </div>

            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                {/* Header */}
                <div className="w-full text-center py-4"
                     style={{
                         backgroundImage: `url(${topography})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'

                     }}
                >
                    <Header/>
                </div>

                <div className="bg-gray-800">


                    {/* Content: Journey and Portfolio Side by Side */}
                    <div className="w-full max-w-full px-4 py-8 flex flex-col md:flex-row gap-8">
                        {/* Journey Section */}
                        <div className="flex-1 p-4">
                            <h1 className="text-center text-2xl text-white pt-4">Timeline</h1>
                            <Journey/>
                        </div>

                        {/* Portfolio Section */}
                        <div className="flex-1  p-4">
                            <h1 className="text-center text-2xl text-white pt-4">Checkout My Work</h1>
                            <Portfolio/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
