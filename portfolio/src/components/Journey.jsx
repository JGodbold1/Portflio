import React from "react";
import journey from "../data/Journey.js";
import JourneyItem from "../components/JourneyItem";

function Journey() {
    return (
        <div className="flex flex-col md:flex-row my-10 justify-center">
            <div className="w-full md:w-7/12">
                {journey.map(item =>(
                    <JourneyItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Journey;