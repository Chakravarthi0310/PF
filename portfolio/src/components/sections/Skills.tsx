const skillSet = {
    'Frontend': ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Spring Boot', 'REST API'],
    'Databases': ['MySQL', 'MongoDB', 'NoSQL', 'PL/SQL'],
    'Programming Languages': ['Java', 'C', 'C++', 'Python'],
    'Cloud & DevOps': ['AWS', 'Azure DevOps', 'Docker', 'Firebase', 'Git'],
    'Concepts': ['Data Structures & Algorithms', 'System Design', 'OOP', 'Agile Methodologies']
};

export function Skills() {
    return (
        <section id="skills" className="py-24 border-t border-zinc-800/50 bg-zinc-900/20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16">Skills & Technologies</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skillSet).map(([category, skills]) => (
                        <div
                            key={category}
                            className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-zinc-200 mb-4 group-hover:text-white transition-colors">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
