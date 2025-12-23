const projects = [
    {
        title: 'PaySync – Expense Tracker',
        tech: ['Java Spring Boot', 'Flutter', 'Firebase'],
        description: 'Built microservice-based backend with real-time collaboration, event-based expense categorization, multi-currency support, and analytics dashboards.'
    },
    {
        title: 'FarmCart – E-Commerce Platform for Farmers',
        tech: ['React', 'Node.js', 'MySQL'],
        description: 'Developed full-stack e-commerce platform, admin approval system, real-time order notifications, analytics dashboards, and CI/CD integration.'
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 border-t border-zinc-200 dark:border-zinc-800/50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-zinc-900 dark:text-white">Featured Projects</h2>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50"
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-purple-100/0 dark:from-blue-950/0 dark:to-purple-950/0 group-hover:from-blue-100/30 group-hover:to-purple-100/30 dark:group-hover:from-blue-950/10 dark:group-hover:to-purple-950/10 rounded-2xl transition-all duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-white group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
