import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import {ImageWithFallback} from "@/components/ui/ImageWithFallback.tsx";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                  <ImageWithFallback src={"https://avatars.githubusercontent.com/u/74222002?v=4"} alt={"Github Avatar"}  className="w-32 h-32 rounded-full mx-auto" />
                </div>

                <h1 className="text-5xl md:text-7xl mb-4">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lyne Quequin</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    Full Stack Developer & Creative Problem Solver
                </p>

                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    I build exceptional digital experiences that combine beautiful design with powerful functionality.
                </p>

                <div className="flex justify-center gap-4 mb-12">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        View Work
                    </a>
                </div>
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/lyneq" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/quequin-lyne/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:contact@lyneq.be" className="text-gray-600 hover:text-gray-900 transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <a href="#about" className="inline-block mt-16 text-gray-400 hover:text-gray-600 transition-colors animate-bounce">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
}
