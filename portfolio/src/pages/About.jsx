import React from 'react';
import Timeline from "../components/Timeline.jsx";

function About() {
    return (
        <div className="bg-gray-950 text-white min-h-screen flex flex-col md:flex-row">
            {/* Hero Section */}
            <div className="flex-1 p-8 md:p-16">
                {/* Main heading introducing Jayden */}
                <h1 className="text-4xl font-bold mb-4">
                    Hi, I’m Jayden Godbold, a Passionate Software Developer
                </h1>
                {/* Short intro statement about what Jayden does */}
                <p className="text-lg font-light mb-8">
                    Crafting impactful solutions through code, teamwork, and continuous learning.
                </p>

                {/* Profile Image Section */}
                <div className="hidden md:block mb-16">
                    <img
                        src="/src/assets/React_Dark_BG.png" // TODO: Replace with an actual vertical image of Jayden
                        alt="Jayden Godbold"
                        className="w-full h-1/2 object-cover border-4 border-gray-700"
                    />
                    <h1>picture of me doing x</h1>
                </div>

                <Timeline/>

            </div>

            {/* Hidden Content Section */}
            <div className="flex-1 p-8 md:p-16 overflow-hidden">
                {/* "Who Am I" Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Who Am I?</h2>
                    <p className="text-lg font-light">
                    I am a results-driven software developer with a Bachelor’s Degree in Computer Science from DePaul University. My passion lies in creating efficient and user-friendly applications. Although I am early in my career, my experience spans various development fields, including web, mobile, and full-stack development. I love solving problems through technology and collaborating with others to create innovative solutions.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Skills Overview</h2>
                    <p className="text-lg font-light">
                        I’m proficient in a variety of languages and frameworks, including Python, Swift, Java, JavaScript, SQL, and others. My tech stack includes both web and mobile development frameworks, with experience in Django, React, MongoDB, and Native iOS and Android development.
                    </p>
                    <ul className="list-disc list-inside mt-4">
                        <li>Swift, Python, Java, JavaScript</li>
                        <li>Web Development: Django, Flask, MERN Stack (MongoDB, Express.js, React, Node.js)</li>
                        <li>Mobile Development: UIKit, SwiftUI, Flutter</li>
                        <li>Cloud Technologies: AWS, Firebase</li>
                    </ul>
                </section>

                {/* Projects Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Highlighted Projects</h2>
                    <div className="mb-8">
                        <h3 className="text-2xl font-medium">Swift App Development (One Summer Chicago)</h3>
                        <p className="text-lg font-light">
                            I led a team in developing a Swift-based iOS application, working on UI/UX design and backend development using Firebase. Our app, showcased to professionals at Apple, was designed to foster community engagement through technology.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-medium">Capstone Project (GPYOU)</h3>
                        <p className="text-lg font-light">
                            Developed a web application aimed at providing real-time GPU availability across multiple online retailers. My role included leading front-end development, ensuring a responsive UI, and integrating backend services using AWS.
                        </p>
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Education</h2>
                    <p className="text-lg font-light">
                        <strong>DePaul University</strong>
                        <br />
                        Bachelor of Science in Computer Science - Software Development (2019-2024)
                    </p>
                </section>

                {/* Contact Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
                    <p className="text-lg font-light mb-4">
                        Interested in collaborating or want to discuss potential opportunities? Feel free to reach out. I’m always eager to work on exciting projects and contribute to innovative solutions.
                    </p>
                    <p className="text-lg font-light">
                        Email: <a href="mailto:Godbold.JDev@gmail.com" className="text-blue-400">Godbold.JDev@gmail.com</a>
                    </p>
                    <p className="text-lg font-light">
                        Phone: <a href="tel:7738181855" className="text-blue-400">773-818-1855</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
