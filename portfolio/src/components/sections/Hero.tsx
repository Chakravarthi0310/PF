"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Server, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentRole, setCurrentRole] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const roles = [
        'Full-Stack Developer',
        'Frontend Expert',
        'Backend Architect',
        'Cloud Solutions',
        'Problem Solver'
    ];

    const { scrollY } = useScroll();

    // Parallax effects
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const { left, top } = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - left,
                    y: e.clientY - top
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Auto-rotate roles
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        },
    };

    const techIcons = [
        { icon: <Code />, name: 'React', color: 'from-blue-400 to-cyan-500' },
        { icon: <Server />, name: 'Node.js', color: 'from-green-400 to-emerald-600' },
        { icon: <Cpu />, name: 'Next.js', color: 'from-zinc-400 to-zinc-600' },
        { icon: <Database />, name: 'MongoDB', color: 'from-emerald-400 to-green-500' },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
        >
            {/* Background Creative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Animated Glowing Blobs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-[120px] dark:bg-purple-600/10"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/20 blur-[120px] dark:bg-blue-600/10"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-amber-500/10 blur-[100px] dark:bg-amber-600/5"
                />

                {/* Mouse Spotlight */}
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03), transparent 40%)`
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ opacity }}
            >
                <div>
                    <motion.div variants={itemVariants} className="relative">
                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-zinc-900 dark:text-white mb-6">
                            CODE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500">BEYOND</span> <br />
                            LIMITS
                        </h1>
                        <motion.div
                            className="absolute -top-10 -right-10 w-32 h-32 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center rotate-12 hidden md:flex"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center px-4">
                                Creative • Innovative • Scalable •
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8 flex items-center space-x-6">
                        <div className="text-2xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-400">
                            I&apos;m a{' '}
                            <span className="relative inline-block min-w-[300px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentRole}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="absolute left-0 text-zinc-900 dark:text-zinc-100 font-bold"
                                    >
                                        {roles[currentRole]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </div>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mt-12 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed"
                    >
                        Turning complex problems into elegant, high-performance digital solutions.
                        Let&apos;s build something extraordinary together.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex flex-wrap gap-6"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full flex items-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/10 dark:shadow-white/10"
                        >
                            Explore Projects
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center space-x-4">
                            {[
                                { icon: <Github className="w-5 h-5" />, href: "https://github.com/Chakravarthi0310" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/padyala-chakravarthi-939a97258/" },
                                { icon: <Mail className="w-5 h-5" />, href: "mailto:chakripadyala95@gmail.com" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="relative hidden lg:block">
                    {/* Visual Feature: Floating Tech Sphere */}
                    <div className="relative w-full aspect-square flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />

                        <div className="relative z-10 grid grid-cols-2 gap-8">
                            {techIcons.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    className="relative group p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/50 dark:border-white/5 shadow-2xl"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: [0, (i % 2 === 0 ? -15 : 15), 0]
                                    }}
                                    transition={{
                                        opacity: { delay: 0.5 + (i * 0.1) },
                                        scale: { delay: 0.5 + (i * 0.1) },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                                    }}
                                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 5 : -5 }}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                        {tech.icon}
                                    </div>
                                    <h3 className="font-bold text-zinc-900 dark:text-white">{tech.name}</h3>
                                    <p className="text-xs text-zinc-500 mt-1">Advanced Mastery</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl flex items-center space-x-3"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">Live Optimization</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-0 p-4 bg-zinc-900 text-white rounded-2xl shadow-xl flex items-center space-x-3"
                        >
                            <Cpu className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-bold uppercase tracking-wider">Fast Execution</span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-zinc-200 dark:border-zinc-800 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-amber-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
