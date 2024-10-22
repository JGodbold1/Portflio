import React from "react";
import journey from "../data/Journey.js";
import TimeLineItem from "./TimeLineItem.jsx";

function Timeline() {
    return (
        <div className="flex flex-wrap justify-center my-10 mx-4"> {/* Added horizontal margin to prevent overflow */}
            <ol className="w-full md:w-full list-none flex flex-wrap"> {/* Changed to full width */}
                {/* Mapping through the journey data to create timeline items */}
                {journey.map((item, index) => (
                    <div key={index} className="w-full md:w-1/2 p-2"> {/* Adjust width for two columns with padding */}
                        <TimeLineItem
                            year={item.year}
                            title={item.title}
                            duration={item.duration}
                            details={item.details}
                        />
                    </div>
                ))}
            </ol>
        </div>
    );
}

export default Timeline;
