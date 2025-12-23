"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2, Layers, Sparkles } from "lucide-react";
import { useRef } from "react";

const projects = [
    {
        title: 'PaySync – Expense Tracker',
        tech: ['Java Spring Boot', 'Flutter', 'Firebase'],
        description: 'Microservice-based platform with Firebase sync, event-based expense categorization, multi-currency support, and real-time collaboration for shared budget tracking.',
        color: 'from-blue-500 to-indigo-600',
        icon: <Layers className="w-6 h-6" />
    },
    {
        title: 'FarmCart – E-Commerce Platform',
        tech: ['React', 'Node.js', 'MySQL'],
        description: 'Full-stack platform enabling farmers with role-based access, admin approval systems, real-time notifications, and dynamic analytics for sales optimization.',
        color: 'from-emerald-500 to-teal-600',
        icon: <Sparkles className="w-6 h-6" />
    }
];

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section
            id="projects"
            ref={containerRef}
            className="py-32 relative overflow-hidden"
        >
            {/* Artistic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-2 text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">
                            <Code2 size={16} />
                            <span>Selection of Work</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white">
                            FEATURED<br />PROJECTS
                        </h2>
                    </motion.div>

                    <motion.p
                        className="max-w-md text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A collection of digital experiences blending technical complexity with innovative design solutions.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-12"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            className="group relative"
                        >
                            <div className="grid lg:grid-cols-12 gap-8 items-center">
                                {/* Project Content */}
                                <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="space-y-6">
                                        <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-xl shadow-zinc-500/10`}>
                                            {project.icon}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-white/5"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-4 flex items-center space-x-6">
                                            <a href="#" className="flex items-center space-x-2 text-zinc-900 dark:text-white font-bold group/link">
                                                <span>Case Study</span>
                                                <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                                            </a>
                                            <div className="flex items-center space-x-4">
                                                <Github className="w-5 h-5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors" />
                                                <ExternalLink className="w-5 h-5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Visual Placeholder */}
                                <div className={`lg:col-span-7 h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group/image ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                                    <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-2xl group-hover/image:scale-110 transition-transform duration-500">
                                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color}`} />
                                        </div>
                                        <span className="text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest text-xs">Visual Representation</span>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                        <button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-full transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                                            View Project Details
                                        </button>
                                    </div>
                                </div>
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
