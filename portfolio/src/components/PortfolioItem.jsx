import React, { useState } from 'react';
import ExpandedPortfolioItem from './ExpandedPortfolioItem.jsx';

function PortfolioItem({ title, imgUrl, stack }) {
    // State to manage the expanded view of the portfolio item
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to handle expanding the item
    const handleExpand = () => {
        setIsExpanded(true);
    };

    // Function to handle closing the expanded item
    const handleClose = () => {
        setIsExpanded(false);
    };

    return (
        <>
            {/* Main portfolio item container */}
            <div onClick={handleExpand} className="w-full bg-gray-900 bg-opacity-70 drop-shadow-lg overflow-hidden">
                {/* Image section with sharp edges */}
                <img
                    src={imgUrl}
                    alt="portfolio"
                    className="w-full h-max object-cover cursor-pointer" // Full width, specific height, cover object-fit
                />
                <div className="w-full p-4">
                    {/* Title of the project */}
                    <h3 className="text-white text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                    {/* Stack technologies displayed as inline blocks */}
                    <p className="flex flex-wrap gap-4 items-center text-white text-xs md:text-sm">
                        {stack.map((item, index) => (
                            <span
                                key={index}
                                className="inline-block px-2 py-1 font-semibold border-2 border-white"
                            >
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Show the expanded item when clicked */}
            {isExpanded && (
                <ExpandedPortfolioItem
                    title={title}
                    imgUrl={imgUrl}
                    stack={stack}
                    onClose={handleClose}
                />
            )}
        </>
    );
}

export default PortfolioItem;
