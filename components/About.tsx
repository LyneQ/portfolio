export function About() {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-12">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500" />

                    <div className="space-y-4">
                        <p className="text-gray-700 text-lg">
                            I'm a passionate developer with a love for creating beautiful, functional, and user-friendly applications.
                            With several years of experience in the field, I've worked on a diverse range of projects from web applications to mobile apps.
                        </p>

                        <p className="text-gray-700 text-lg">
                            I specialize in modern web technologies and am always eager to learn new tools and frameworks.
                            My approach combines technical expertise with creative problem-solving to deliver outstanding results.
                        </p>

                        <p className="text-gray-700 text-lg">
                            When I'm not coding, you can find me exploring new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
