"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Server, Smartphone } from 'lucide-react';

// Types for Framer Motion variants
type AnimationVariant = {
    hidden: {
        opacity: number;
        y?: number;
    };
    visible: {
        opacity: number;
        y?: number;
        transition: {
            duration: number;
            ease?: number[] | string;
            type?: string;
            stiffness?: number;
            damping?: number;
        };
    };
    exit?: {
        opacity: number;
        y?: number;
    };
};

export function Hero() {
    const [isVisible, setIsVisible] = useState(true);
    const [currentRole, setCurrentRole] = useState(0);
    
    const roles = [
        'Full-Stack Developer',
        'System Architect',
        'UI/UX Enthusiast',
        'Cloud Specialist',
        'Problem Solver'
    ];

    // Auto-rotate roles
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Framer Motion variants with proper typing
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        },
    };

    const fadeInUp: AnimationVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const techIcons = [
        { icon: <Code className="w-6 h-6" />, name: 'React' },
        { icon: <Server className="w-6 h-6" />, name: 'Node.js' },
        { icon: <Cpu className="w-6 h-6" />, name: 'Next.js' },
        { icon: <Database className="w-6 h-6" />, name: 'MongoDB' },
        { icon: <Smartphone className="w-6 h-6" />, name: 'React Native' },
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.section 
                    className="relative min-h-screen flex items-center pt-20 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeInUp as Variants}
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    </div>

                    {/* Toggle button */}
                    <button 
                        onClick={() => setIsVisible(!isVisible)}
                        className="fixed top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        aria-label={isVisible ? 'Hide hero section' : 'Show hero section'}
                    >
                        <div className={`w-6 h-6 relative transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}>
                            <div className={`absolute w-4 h-0.5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isVisible ? 'rotate-45' : 'rotate-0'}`}></div>
                            <div className={`absolute w-4 h-0.5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isVisible ? '-rotate-45' : 'rotate-0'}`}></div>
                        </div>
                    </button>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                        <motion.div 
                            className="max-w-4xl"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.div variants={item} className="flex items-center mb-4">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30">
                                    Available for work
                                </span>
                                <span className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            </motion.div>

                            <motion.h1 
                                variants={item as Variants}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
                            >
                                <span className="block">Hello, I'm</span>
                                <span className="block bg-gradient-to-r from-amber-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                    Chakravarthi
                                </span>
                            </motion.h1>

                            <motion.div 
                                variants={item as Variants}
                                className="mt-6 h-12 flex items-center"
                            >
                                <div className="text-2xl md:text-3xl font-medium text-zinc-300">
                                    {roles.map((role, index) => (
                                        <span 
                                            key={role}
                                            className={`absolute transition-opacity duration-500 ${index === currentRole ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                                <div className="ml-4 w-1 h-10 bg-gradient-to-b from-amber-400 to-purple-500 rounded-full animate-pulse"></div>
                            </motion.div>

                            <motion.p 
                                variants={item as Variants}
                                className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
                            >
                                I craft exceptional digital experiences with a focus on performance, accessibility, and beautiful design. 
                                Currently building scalable web applications with modern technologies as a passionate Full-Stack Developer.
                            </motion.p>

                            <motion.div 
                                variants={item as Variants}
                                className="mt-10 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#projects"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-purple-500 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
                                >
                                    <span className="relative z-10 flex items-center">
                                        View My Work
                                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-4 border-2 border-zinc-700 text-white font-medium rounded-xl hover:border-amber-400 hover:text-amber-400 transition-all duration-300 hover:bg-white/5"
                                >
                                    Let's Talk
                                </a>
                            </motion.div>

                            <motion.div 
                                variants={item as Variants}
                                className="mt-16"
                            >
                                <p className="text-sm text-zinc-500 mb-4">TECH STACK</p>
                                <div className="flex flex-wrap gap-6">
                                    {techIcons.map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            className="flex flex-col items-center group"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ 
                                                opacity: 1, 
                                                y: 0,
                                                transition: {
                                                    delay: 0.5 + (index * 0.1),
                                                    duration: 0.5
                                                }
                                            }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-300">
                                                {tech.icon}
                                            </div>
                                            <span className="mt-2 text-xs text-zinc-400 group-hover:text-amber-400 transition-colors">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div 
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 1.5 }
                        }}
                    >
                        <span className="text-xs text-zinc-500 mb-2">SCROLL DOWN</span>
                        <div className="w-px h-10 bg-gradient-to-b from-amber-400 to-transparent"></div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
