"use client";

import { motion, Variants } from "framer-motion";
import {
    Monitor,
    Server,
    Database,
    Terminal,
    Cloud,
    Brain,
    Cpu,
    Sparkles
} from "lucide-react";

const skillSet = [
    {
        category: 'Frontend Development',
        icon: <Monitor className="w-6 h-6" />,
        skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        category: 'Backend Development',
        icon: <Server className="w-6 h-6" />,
        skills: ['Node.js', 'Spring Boot', 'REST API'],
        color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        category: 'Databases',
        icon: <Database className="w-6 h-6" />,
        skills: ['MySQL', 'MongoDB', 'NoSQL', 'PL/SQL'],
        color: 'from-amber-500/20 to-orange-500/20'
    },
    {
        category: 'Programming Languages',
        icon: <Terminal className="w-6 h-6" />,
        skills: ['Java', 'C', 'C++', 'Python'],
        color: 'from-purple-500/20 to-pink-500/20'
    },
    {
        category: 'Cloud and DevOps',
        icon: <Cloud className="w-6 h-6" />,
        skills: ['AWS', 'Azure DevOps', 'Docker', 'Firebase', 'Git'],
        color: 'from-sky-500/20 to-blue-500/20'
    },
    {
        category: 'Concepts',
        icon: <Brain className="w-6 h-6" />,
        skills: ['DSA', 'System Design', 'OOP', 'Agile'],
        color: 'from-zinc-500/20 to-slate-500/20'
    }
];

export function Skills() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-black">
            {/* Artistic Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-2 text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
                            <Cpu size={16} />
                            <span>Toolbox & Stack</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-none">
                            EXPERTISE <br />& SOLUTIONS
                        </h2>
                    </motion.div>

                    <motion.p
                        className="max-w-md text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A deep dive into the technologies and methodologies I use to build scalable, high-performance digital products.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillSet.map((cat) => (
                        <motion.div
                            key={cat.category}
                            variants={itemVariants}
                            className="group relative p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:border-amber-500/30 transition-all duration-500 backdrop-blur-sm shadow-xl shadow-zinc-500/5 dark:shadow-none overflow-hidden"
                        >
                            {/* Category Accent */}
                            <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${cat.color} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-500/10 text-zinc-400 group-hover:text-amber-500 transition-colors duration-300">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                                        {cat.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="px-4 py-2 text-xs font-bold bg-white dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 rounded-xl border border-zinc-200 dark:border-zinc-700/50 hover:border-amber-500/50 hover:text-amber-500 dark:hover:text-amber-500 transition-all duration-300 cursor-default group/pill"
                                        >
                                            <span className="flex items-center gap-1.5">
                                                <Sparkles size={10} className="hidden group-hover/pill:block" />
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Lettering */}
                            <div className="absolute -bottom-8 -right-4 text-9xl font-black text-zinc-900/5 dark:text-white/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                {cat.category[0]}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        </section>
    );
}
