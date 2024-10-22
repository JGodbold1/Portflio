import React from 'react';
import axios from 'axios'; // Import Axios

function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/contact', {
                name,
                email,
                message,
            });
            alert(response.data.message); // Show success message
        } catch (error) {
            console.error('Error sending message:', error);
            alert("There was an error sending your message. Please try again later.");
        }
    };


    return (
        <div className="bg-gray-950 text-white min-h-screen flex justify-center items-center px-4 py-10">
            <div className="relative w-full max-w-3xl bg-gray-800 p-10 rounded-none shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center border-b-2 border-gray-700 pb-4">Contact Me</h1>
                <div className="mb-8 text-lg text-center">
                    <p>Please fill out the form below to get in touch regarding collaboration, opportunities, or any questions.</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-none focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-none focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-none focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-none text-lg font-semibold transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Links */}
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
