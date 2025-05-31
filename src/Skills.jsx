import React from "react";

const skills = [
    { name: ".Net", icon: "/icons/dotnet.png" },
    { name: "Angular", icon: "/icons/angular.webp" },
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "HTML5 CSS JS", icon: "/icons/html_css_js.jpg" },
    { name: "MySQL", icon: "/icons/mysql.jpg" },
    { name: "Java", icon: "/icons/java.jpg" },
    { name: "Python", icon: "/icons/python.jpg" },
    { name: "C#", icon: "/icons/csharp.jpg" },
    { name: "C++", icon: "/icons/cpp.jpg" },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Technical Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-2">
                            <img src={`${process.env.PUBLIC_URL}${skill.icon}`} alt={skill.name} className="w-16 h-16 object-contain" />
                            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}