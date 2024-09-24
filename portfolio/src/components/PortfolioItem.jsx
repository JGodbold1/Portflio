import React, { useState } from 'react';
import ExpandedPortfolioItem from './ExpandedPortfolioItem.jsx';


function PortfolioItem({ title, imgUrl, stack }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };
//border-2 border-stone-900 border-opacity-20
    return (
        <>

            <div onClick={handleExpand} className="w-90 overflow-hidden bg-gray-900 bg-opacity-70 drop-shadow-lg">
                <img
                    src={imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-52 object-cover cursor-pointer"

                />
                <div className="w-full p-2 ">
                    <h3 className="text-white text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                    <p className="flex flex-wrap gap-8 flex-row items-center justify-start text-white text-xs md:text-sm">
                        {stack.map((item, index) => (
                            <span
                                key={index}
                                className="inline-block px-2 py-1 font-semibold border-2 border-white rounded-md"
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
