import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-black bg-opacity-80 text-white py-4 fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Vishakha Mistry</div>
                <ul className="flex space-x-6 text-lg">
                    <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
                    <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}