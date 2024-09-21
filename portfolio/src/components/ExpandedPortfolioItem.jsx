import React from 'react';

function ExpandedPortfolioItem({ title, imgUrl, stack, onClose }) {
    return (
        <div className="fixed top-20 left-40 w-4/5 h-4/5 bg-white z-50 border-2 border-stone-900 rounded-md shadow-lg p-6 overflow-auto">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded"
            >
                Close
            </button>

            <img src={imgUrl} alt="portfolio" className="w-full h-96 object-cover rounded-md" />

            <h3 className="text-2xl font-bold mt-4">{title}</h3>

            <p className="flex flex-wrap gap-8 flex-row items-center justify-start text-sm mt-4">
                {stack.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
                    >
                        {item}
                    </span>
                ))}
            </p>
        </div>
    );
}

export default ExpandedPortfolioItem;
