import React, { useState } from 'react';

// Sample project data
const projects = [
    {
        title: "Project One",
        description: "Description of Project One.",
        image: "/src/assets/project1.png", // TODO: Replace with actual project image
    },
    {
        title: "Project Two",
        description: "Description of Project Two.",
        image: "/src/assets/project2.png", // TODO: Replace with actual project image
    },
    {
        title: "Project Three",
        description: "Description of Project Three.",
        image: "/src/assets/project3.png", // TODO: Replace with actual project image
    },
    {
        title: "Project Four",
        description: "Description of Project Four.",
        image: "/src/assets/project4.png", // TODO: Replace with actual project image
    },
];

function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) =>
            (prevIndex - 1 + projects.length) % projects.length
        );
    };

    return (
        <div className="bg-gray-950 text-white">
            {/* Slideshow Section */}
            <div className="relative h-96">
                <img
                    src={projects[currentProjectIndex].image}
                    alt={projects[currentProjectIndex].title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <h2 className="text-3xl font-bold mb-4">
                        {projects[currentProjectIndex].title}
                    </h2>
                    <p className="text-lg text-center max-w-md">
                        {projects[currentProjectIndex].description}
                    </p>
                </div>
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                    onClick={handlePrev}
                >
                    ◀
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                    onClick={handleNext}
                >
                    ▶
                </button>
            </div>

            {/* Projects Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-md mt-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
