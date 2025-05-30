import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer",
        company: "Zeus Learning",
        duration: "Jun 2022 – Jul 2024",
        location: "Mumbai, India",
        logo: "/images/zeus_learning_logo.jpg",
        details: [
            "Collaborated with cross-functional teams in an Agile environment to design and develop a custom SDK for creating and managing interactive CMS assessments.",
            "Built and enhanced full-stack features across 12+ question types using Angular and .NET.",
            "Created end-to-end API workflows with transactional support and retry logic to ensure atomic operations under high concurrency.",
            "Conducted load testing (~1000 req/min) and improved backend API performance by 33% through optimization.",
            "Migrated legacy data from MySQL to MongoDB, supporting schema flexibility and maintaining data consistency.",
            "Integrated tools like ReadSpeaker and JSXGraph to enhance front-end accessibility and interactivity.",
            "Improved UI responsiveness by over 90% using debouncing, Angular’s OnPush strategy, and selective rendering.",
            "Diagnosed and resolved critical data corruption issues, implementing validation rules and cleaning legacy data.",
            "Led and mentored 5 junior developers on scalable full-stack architecture and coding best practices."
        ]
    }
];

export default function Experience() {
    return (

        <section id="experience" className="w-full px-6 py-16 bg-gray-50 h-screen w-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/background_2.jpg')",
            }}>
            <div className="max-w-4xl mx-auto" >
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-6 bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:border-blue-500 transition duration-300"
                        >
                            {/* <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                    <Briefcase size={20} />
                                </div>
                                <div className="w-px bg-blue-500 flex-1 mt-2"></div>
                            </div> */}
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        {exp.logo && (
                                            <img src={exp.logo} alt={`${exp.company} logo`} className="h-10 w-10 rounded" />
                                        )}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                                            <p className="text-sm text-gray-600">{exp.company}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500 mt-2 md:mt-0 text-right">{exp.duration} · {exp.location}</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-3 text-gray-700 text-justify">
                                    {exp.details.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}