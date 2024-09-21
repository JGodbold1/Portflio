import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from '../data/portfolio.js'

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row my-10 items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                {portfolio.map(project =>(
                    <PortfolioItem
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