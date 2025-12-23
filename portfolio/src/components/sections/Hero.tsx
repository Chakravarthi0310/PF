"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Server, Smartphone } from 'lucide-react';
import { useTheme } from 'next-themes';

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

    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();

    // Auto-rotate roles
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animated background effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        const particles: Particle[] = [];
        const particleCount = window.innerWidth < 768 ? 30 : 60;

        // Particle class
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Handle window resize
        const handleResize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;
            
            // Clear canvas with a semi-transparent background for trail effect
            ctx.fillStyle = theme === 'dark' ? 'rgba(10, 10, 15, 0.1)' : 'rgba(250, 250, 255, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Draw lines between nearby particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme === 'dark' 
                            ? `rgba(255, 255, 255, ${1 - distance/150})` 
                            : `rgba(0, 0, 0, ${0.5 - distance/300})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            time += 0.005;
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        handleResize();
        window.addEventListener('resize', handleResize);
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [theme]);

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
                    {/* Animated canvas background */}
                    <canvas 
                        ref={canvasRef} 
                        className="fixed inset-0 w-full h-full -z-10"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: -10,
                            pointerEvents: 'none'
                        }}
                    />
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-white/5" />

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
