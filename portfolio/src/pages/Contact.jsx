import React from 'react';

function Contact() {
    return (
        <div className="bg-gray-950 text-white min-h-screen flex justify-center items-center px-4 py-10">
            {/* Contact Form */}
            <div className="relative w-full max-w-3xl bg-gray-800 p-10 rounded-none shadow-lg">
                {/* Contact Heading */}
                <h1 className="text-3xl font-bold mb-8 text-center border-b-2 border-gray-700 pb-4">Contact Me</h1>

                {/* Instructions for Contacting */}
                <div className="mb-8 text-lg text-center">
                    <p>Please fill out the form below to get in touch regarding collaboration, opportunities, or any questions.</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-none focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-none focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-none focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-none text-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Links - Below the Form */}
                <div className="flex justify-center items-center space-x-4 mt-6">
                    <a href="https://www.linkedin.com/in/jayden-godbold" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/src/assets/linkedin-icon.png" // TODO: Replace with actual LinkedIn icon
                            alt="LinkedIn"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </a>
                    <a href="https://github.com/jaydengodbold" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/src/assets/github-icon.png" // TODO: Replace with actual GitHub icon
                            alt="GitHub"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </a>
                    <a href="https://handshake.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/src/assets/handshake-icon.png" // TODO: Replace with actual Handshake icon
                            alt="Handshake"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
