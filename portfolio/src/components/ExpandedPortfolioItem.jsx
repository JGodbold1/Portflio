import React from 'react';

function ExpandedPortfolioItem({ title, imgUrl, stack, onClose, showBorder = false }) {
    return (
        // Full-screen overlay with dimmed background
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
            {/* Main container for expanded item */}
            <div className={`relative flex w-4/5 h-auto bg-white shadow-lg ${showBorder ? 'border border-stone-900' : 'border-none'}`}>

                {/* Close button ('X') positioned at the top-right */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-red-500 text-2xl"
                >
                    X
                </button>

                {/* Flex container for the image and content to be side-by-side */}
                <div className="flex w-full h-full">
                    {/* Image section taking half the width and full height */}
                    <div className="w-1/2">
                        <img
                            src={imgUrl}
                            alt="portfolio"
                            className="w-full h-full object-cover" // Use object-cover to make sure the image fully fills the space without distortion
                        />
                    </div>

                    {/* Content box on the right, matching the height of the image */}
                    <div className="w-1/2 p-4 bg-gray-100 flex flex-col justify-between">
                        {/* Title at the top */}
                        <h3 className="text-2xl font-bold mb-4">{title}</h3>

                        {/* Stack of technologies used in the project */}
                        <div className="mt-auto">
                            <p className="flex flex-wrap gap-2 text-sm">
                                {stack.map((item, index) => (
                                    <span
                                        key={index}
                                        className="inline-block px-2 py-1 font-semibold border border-stone-900 rounded-none"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpandedPortfolioItem;
