import React from "react";

export default function AboutMe() {
    return (
        <section id="about" className="w-full px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
                <p className="text-lg text-gray-600 mb-3">
                    I’m a passionate Software Engineer and a current Master’s student with a love for building modern, scalable web applications. What fuels my work is the intersection of creativity and logic—crafting digital experiences that are clean, functional, and human-centered. My journey in tech began with a simple but powerful question: “What is both stimulating and challenging?” The answer, problem-solving, led me straight to Computer Science — a field that continues to challenge and inspire me every day.

                </p>
                <p className="text-lg text-gray-600">
                    When I’m not debugging code or exploring new frameworks, you’ll find me reading, writing, learning the ukulele, or experimenting in the kitchen. Whether I’m refining backend logic or baking a new recipe, I bring curiosity and intent to everything I do.
                </p>
            </div>
        </section>
    );
}