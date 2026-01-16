import {ExternalLink, Github} from 'lucide-react';
import {ImageWithFallback} from './ui/ImageWithFallback.tsx';

export function Projects() {
  const projects = [
    {
      title: 'HyprSettings',
      description: 'A modern desktop GUI application that simplifies Hyprland configuration. Browse, view and edit keybinds, animations, window rules and more without touching text files directly.',
      tags: ['Go', 'React', 'TypeScript', 'Wails', 'Hyprland'],
      imageLink: '/project/HyprSettings.png',
      demoLink: false,
      githubLink: 'https://github.com/LyneQ/HyprSettings',
    },
    {
      title: 'Borning Challenge',
      description: 'Multi-week inter-colleague multisport challenge at Alstom promoting physical activity, team spirit, and well-being. Quantity-based scoring (bornes/kilometres accumulated) rather than pure performance, accessible to all levels.',
      longDescription: 'Designed and organized a company-wide, inclusive sports initiative spanning several weeks. Features weekly teams of ~6 people, individual & team challenges, multi-category leaderboards (overall, gender, cycling, running, swimming, ultimate athlete), real-time tracking, and motivational animations to boost participation and social bonding across departments.',
      tags: ['VueJS', 'NodeJS', 'Team-Work', 'Internal Communication'],
      imageLink: '/project/borning.png',
      demoLink: false,
      githubLink: false,
    },

  ];

  return (
          <section id="projects" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl text-center mb-4">Featured Projects</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                A selection of my recent work showcasing different technologies and problem-solving approaches
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                ))}
              </div>
            </div>
          </section>
  );
}

function ProjectCard({project}: {
  project: any
}) {
  const demoLink = () => {
    if (project.demoLink) {
      return (
              <a href={project.demoLink}
                 className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
                <ExternalLink size={20}/>
                <span>Live Demo</span>
              </a>
      )
    }
  }

  const githubLink = () => {
    if (project.githubLink) {
      return (
              <a href={project.githubLink}
                 target="_blank"
                 className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
                <Github size={20}/>
                <span>Code</span>
              </a>
      )
    }
  }

  return (
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
              <ImageWithFallback
                  src={project.imageLink}
                  alt={project.title}
                  className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string, tagIndex: number) => (
                        <span key={tagIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
              {tag}
            </span>
                ))}
              </div>

              <div className="flex gap-4">
                {demoLink()}
                {githubLink()}
              </div>
            </div>
          </div>
  );
}
