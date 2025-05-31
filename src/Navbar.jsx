import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any other icon library

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-black bg-opacity-80 text-white py-4 fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold"><a href="#">Vishakha Mistry</a></div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
                    <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pt-4 pb-6 bg-black bg-opacity-95">
                    <ul className="space-y-4 text-lg">
                        <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">About Me</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Projects</a></li>
                        <li><a href="#experience" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Experience</a></li>
                        <li><a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Skills</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
