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
                            src={media.src}
                            alt="Project media"
                            className="w-full h-full object-contain"
                        />
                    )}
                    {media && media.type === "video" && (
                        <video
                            controls
                            className="w-full h-full object-contain"
                        >
                            <source src={media.src} type="video/mp4" />
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
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                    GitHub Repo
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
                    "Designed the system with pipelined communication between operators, except for selection and projection, to maximize memory efficiency",
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
                "Designed for scalability and modular features"
            ],
            tags: ["Flutter", "Google Firebase"],
            media: { type: "image", src: "./images/social_media.png" },
            github: "https://github.com/sidjmishra/Friend-Suggestion-on-Music"
        },
        {
            title: "News Classification in Gujarati",
            shortDescription: "Regional language news classifier using NLP and real-time Flask app",
            fullDescription: [
                "Automated classification of Gujarati news using TF-IDF vectorizer and LinearSVC",
                "Achieved 82% accuracy on a dataset of 5200+ articles",
                "Built responsive front-end using Bootstrap for user input",
                "Connected Python-Flask backend to trained NLP model"
            ],
            tags: ["Python", "Flask", "Bootstrap"],
            media: { type: "image", src: "./images/guj_news_classification.png" },
            github: "https://github.com/vishakhanm/Gujarati_News_Classification"
        },
        {
            title: "Geometry Puzzle Adventure",
            shortDescription: "Interactive 3D geometry game that teaches math through puzzle-solving",
            fullDescription: [
                "Answer geometry questions by moving to zones in a 3D puzzle world",
                "Earn puzzle pieces for correct answers; lose lives for incorrect ones",
                "Collect all pieces to complete the puzzle and unlock fun geometry facts",
                "Includes AI challenges, floating platforms, level selection, and difficulty modes",
                "Uses physics-based and keyframe animations, supports sound, menus, and keyboard input"
            ],
            tags: ["Unity 3D", "C#"],
            media: { type: "video", src: "/media/576FinalVideo.mp4" },
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
                            {project.media && project.media.type === "image" && (
                                <img src={project.media.src} alt="Project media-1"
                                    className="h-48 w-full object-cover" />
                            )}
                            {project.media && project.media.type === "video" && (
                                <video controls className="h-48 w-full object-cover bg-black"
                                    muted
                                    playsInline
                                    loop
                                    poster="/images/gp_thumbnail.png">
                                    <source src={project.media.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            <div className="p-6">
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
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                                >
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reusable Overlay */}
                {activeProject && (
                    <ProjectOverlay
                        title={activeProject.title}
                        description={activeProject.fullDescription}
                        tags={activeProject.tags}
                        onClose={() => setActiveProject(null)}
                        github={activeProject.github}
                        media={activeProject.media}
                    />
                )}
            </div>
        </section>
    );
}