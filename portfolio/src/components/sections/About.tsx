"use client";

import { motion, Variants } from "framer-motion";
import { User, GraduationCap, Coffee, Globe, Target, ShieldCheck } from "lucide-react";

export function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-white dark:bg-black">
            {/* Immersive Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-20 items-center"
                >
                    {/* Visual Composition */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-purple-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                                <User size={120} className="text-zinc-300 dark:text-zinc-800" />
                            </div>

                            {/* Floating Stats or Badges */}
                            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 shadow-xl">
                                    <div className="text-2xl font-black text-amber-500">3+</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Years Experience</div>
                                </div>
                                <div className="p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 shadow-xl">
                                    <div className="text-2xl font-black text-purple-500">20+</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Projects Done</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center animate-spin-slow">
                            <Target size={24} className="text-zinc-400" />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-amber-500 mb-4 flex items-center space-x-2">
                                <ShieldCheck size={18} />
                                <span>Background</span>
                            </h2>
                            <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white leading-tight">
                                CRAFTING DIGITAL<br />EXCELLENCE
                            </h3>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6 text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            <p>
                                I&apos;m a passionate developer with a keen eye for design and a love for clean code.
                                I build scalable applications that solve real-world problems.
                            </p>
                            <p>
                                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source,
                                or enjoying a good cup of coffee.
                            </p>
                        </motion.div>

                        {/* Quick Facts Grid */}
                        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: <GraduationCap size={18} />, text: "Lifelong Learner" },
                                { icon: <Globe size={18} />, text: "Remote Professional" },
                                { icon: <Code2 size={18} />, text: "Clean Code Advocate" },
                                { icon: <Coffee size={18} />, text: "Tech Enthusiast" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 group hover:border-amber-500/50 transition-colors duration-300">
                                    <div className="text-zinc-400 group-hover:text-amber-500 transition-colors capitalize">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-bold tracking-wide text-zinc-700 dark:text-zinc-300">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Border Styling */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        </section>
    );
}

// Ensure the project has access to Code2 (standardizing lucide-react usage)
import { Code2 } from "lucide-react";
