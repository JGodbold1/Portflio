import React from 'react';

function TimeLineItem({ year, title, duration, details }) {
    return (
        <li className="mb-10 w-full"> {/* Ensure full width */}
            {/* Container for year and title */}
            <div className="flex flex-col w-full items-start bg-gray-800 p-4 rounded-lg shadow-md">
                {/* Year section */}
                <span className="inline-block px-3 py-1 font-semibold text-white bg-stone-900 rounded mb-2">
                    {year}
                </span>
                {/* Title and details section */}
                <h3 className="text-lg text-white font-semibold">{title}</h3>
                <div className="my-1 text-sm font-normal leading-none text-gray-400">{duration}</div>
                <p className="my-2 text-base font-normal text-white">{details}</p>
            </div>
        </li>
    );
}

export default TimeLineItem;
