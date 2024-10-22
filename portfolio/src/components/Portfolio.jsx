import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from '../data/portfolio.js'

function Portfolio() {
    return (
        <div className="flex flex-col my-10 items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-y-8 gap-x-8 w-full px-4">
                {portfolio.map(project => (
                    <PortfolioItem
                        key={project.title}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
