import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
                <p className="text-lg text-gray-600 mb-4">Feel free to reach out for collaboration or opportunities.</p>

                <div className="flex flex-wrap items-center justify-center gap-6 p-6 border border-gray-300 rounded-2xl max-w-3xl mx-auto">
                    <a href="mailto:vishakhanm25@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <Mail size={20} /> vishakhanm25@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/vishakha-mistry-63b6351ab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a href="https://github.com/vishakhanm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <Github size={20} /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
