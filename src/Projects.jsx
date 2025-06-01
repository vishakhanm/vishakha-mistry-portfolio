import React, { useState } from "react";

function ProjectOverlay({ title, description, tags, onClose, github, media }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-auto p-4">
            <div className="bg-white w-full max-w-2xl p-8 rounded-lg relative text-left">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                >
                    &times;
                </button>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>

                {/* Media container with fixed width and height */}
                <div className="w-full h-[200px] mb-4 rounded overflow-hidden flex items-center justify-center bg-gray-100">
                    {media && media.type === "image" && (
                        <img
                            src={`${process.env.PUBLIC_URL}${media.src}`}
                            alt="Project media"
                            className="w-full h-full object-contain"
                        />
                    )}
                    {media && media.type === "video" && (
                        <video
                            controls
                            className="w-full h-full object-contain"
                        >
                            <source src={`${process.env.PUBLIC_URL}${media.src}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                <div className="flex-1">
                    <ul className="text-gray-700 text-base mb-6 ml-5 list-disc space-y-2 text-justify">
                        {description.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-200 text-sm px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black-700 border border-black-300 bg-black-50 rounded-lg hover:bg-black-100 hover:shadow transition duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8a8.003 8.003 0 005.47 7.59c.4.074.55-.174.55-.387 0-.19-.007-.693-.01-1.36-2.01.437-2.43-.97-2.43-.97-.364-.922-.89-1.168-.89-1.168-.727-.497.055-.487.055-.487.803.057 1.225.825 1.225.825.715 1.224 1.874.87 2.33.665.073-.518.28-.87.508-1.07-1.6-.183-3.28-.798-3.28-3.553 0-.785.28-1.426.74-1.928-.075-.183-.32-.922.07-1.922 0 0 .6-.192 1.97.736A6.93 6.93 0 018 4.793c.607.003 1.22.082 1.79.24 1.37-.928 1.97-.736 1.97-.736.39 1 .145 1.739.07 1.922.46.502.74 1.143.74 1.928 0 2.765-1.68 3.368-3.28 3.547.288.25.543.739.543 1.492 0 1.077-.01 1.945-.01 2.21 0 .214.15.465.55.386A8.005 8.005 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            title: "Database Management System",
            shortDescription: "High-Performance Query Engine with Custom Buffer Management and Indexing",
            fullDescription:
                [
                    "Developed a Buffer Manager using an LRU replacement policy and hash-based page lookup to optimize disk I/O for binary files with over 10M records",
                    "Implemented a B+ Tree indexing mechanism supporting clustered and unclustered indexes, improving query performance by up to 100x over sequential scans",
                    "Built a simple query executor that performs block-nested loop joins using an in-memory hash table to join two tables efficiently",
                    "Designed the system with pipelined communication between various operators like selection, projection, BNL Join to maximize memory efficiency",
                    "Wrote comprehensive test cases using JUnit and Mockito, achieving 99% test coverage across varied workloads"
                ],
            tags: ["Java", "Apache Maven"],
            media: { type: "image", src: "/images/dbms.jpg" },
            github: "https://github.com/Khushi2405/IMDB-Query-Engine"
        },
        {
            title: "Spotify Connect",
            shortDescription: "Music-based friend recommendation app with real-time sync and Spotify integration",
            fullDescription: [
                "Developed a social media app to recommend friends based on Spotify profile including location, artists, and genres",
                "Built mobile-friendly UI using Flutter with smooth transitions and responsive layouts",
                "Integrated Spotify SDK and APIs to fetch and authenticate user music profiles",
                "Configured Google Firestore for real-time database updates",
                // "Designed for scalability and modular features"
            ],
            tags: ["Flutter", "Google Firebase"],
            media: { type: "image", src: "/images/social_media.png" },
            github: "https://github.com/sidjmishra/Friend-Suggestion-on-Music"
        },
        {
            title: "News Classification in Gujarati",
            shortDescription: "Regional language news classifier using NLP and real-time Flask app",
            fullDescription: [
                "Automated classification of Gujarati news using TF-IDF vectorizer and LinearSVC",
                "Achieved 82% accuracy on a dataset of 5200+ articles",
                "Built responsive front-end using Bootstrap for user input",
                "Connected Python-Flask backend to the trained NLP model"
            ],
            tags: ["Python", "Flask", "Bootstrap"],
            media: { type: "image", src: "/images/guj_news_classification.png" },
            github: "https://github.com/vishakhanm/Gujarati_News_Classification"
        },
        {
            title: "Geometry Puzzle Adventure",
            shortDescription: "Interactive 3D geometry game that teaches math through puzzle-solving",
            fullDescription: [
                "An educational game designed for children to strengthen geometry knowledge in an immersive 3D world built with Unity 3D.",
                "Developed interactive gameplay with puzzle pieces, fun geometry facts, AI-controlled NPCs, and multiple difficulty modes.",
                "Integrated physics-based animations and spatial sound effects for a more engaging and inclusive experience."
            ]
            ,
            tags: ["Unity 3D", "C#"],
            media: { type: "video", src: "/media/576FinalVideo.mp4", poster: "/images/gp_thumbnail.png" },
            github: "https://github.com/epicmouse667/CS576_FINAL_PROJECT"
        }
    ];

    return (
        <section id="projects" className="w-full px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (

                        <div
                            key={index}
                            onClick={(e) => {
                                // prevent card overlay open if GitHub button is clicked
                                if (e.target.closest("a")) return;
                                setActiveProject(project);
                            }}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-blue-500 cursor-pointer transition duration-300"
                        >
                            {
                                project.media && project.media.type === "image" && (
                                    <img
                                        src={`${process.env.PUBLIC_URL}${project.media.src}`}
                                        alt="Project media-1"
                                        className="h-48 w-full object-cover"
                                    />
                                )
                            }
                            {
                                project.media && project.media.type === "video" && (
                                    <video controls className="h-48 w-full object-cover bg-black"
                                        muted
                                        playsInline
                                        loop
                                        poster={`${process.env.PUBLIC_URL}${project.media.poster}`}>
                                        <source src={`${process.env.PUBLIC_URL}${project.media.src}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )
                            }
                            < div className="p-6" >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {project.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-200 text-sm px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                {/* <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                                >
                                    GitHub Repo
                                </a> */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black-700 border border-black-300 bg-black-50 rounded-lg hover:bg-black-100 hover:shadow transition duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8a8.003 8.003 0 005.47 7.59c.4.074.55-.174.55-.387 0-.19-.007-.693-.01-1.36-2.01.437-2.43-.97-2.43-.97-.364-.922-.89-1.168-.89-1.168-.727-.497.055-.487.055-.487.803.057 1.225.825 1.225.825.715 1.224 1.874.87 2.33.665.073-.518.28-.87.508-1.07-1.6-.183-3.28-.798-3.28-3.553 0-.785.28-1.426.74-1.928-.075-.183-.32-.922.07-1.922 0 0 .6-.192 1.97.736A6.93 6.93 0 018 4.793c.607.003 1.22.082 1.79.24 1.37-.928 1.97-.736 1.97-.736.39 1 .145 1.739.07 1.922.46.502.74 1.143.74 1.928 0 2.765-1.68 3.368-3.28 3.547.288.25.543.739.543 1.492 0 1.077-.01 1.945-.01 2.21 0 .214.15.465.55.386A8.005 8.005 0 0016 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reusable Overlay */}
                {
                    activeProject && (
                        <ProjectOverlay
                            title={activeProject.title}
                            description={activeProject.fullDescription}
                            tags={activeProject.tags}
                            onClose={() => setActiveProject(null)}
                            github={activeProject.github}
                            media={activeProject.media}
                        />
                    )
                }
            </div >
        </section >
    );
}