import { Code2, Palette, Database, Zap } from 'lucide-react';

export function Skills() {
    const skillCategories = [
        {
            icon: <Code2 size={32} />,
            title: 'Frontend Development',
            skills: ['React', 'vueJS', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
        },
        {
            icon: <Database size={32} />,
            title: 'Backend Development',
            skills: ['Node.js', 'Go', 'MySQL', 'MongoDB'],
        },
        {
            icon: <Palette size={32} />,
            title: 'Design',
            skills: ['UI/UX Design', 'Figma', 'Responsive Design', 'Prototyping'],
        },
        {
            icon: <Zap size={32} />,
            title: 'Tools & Others',
            skills: ['Git', 'Docker', 'Hosting', 'CI/CD'],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4">Skills & Expertise</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    A comprehensive set of technical skills and tools I use to bring ideas to life
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-blue-600 mb-4">{category.icon}</div>
                            <h3 className="text-xl mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="text-gray-600">
                                        • {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
