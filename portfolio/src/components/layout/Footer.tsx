"use client";

import Link from "next/link";
import {
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    LayoutGrid,
    Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Github size={20} />,
            href: "https://github.com/Chakravarthi0310",
            label: "GitHub"
        },
        {
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/padyala-chakravarthi-939a97258/",
            label: "LinkedIn"
        },
        {
            icon: <Mail size={20} />,
            href: "mailto:chakripadyala95@gmail.com",
            label: "Email"
        },
    ];

    const quickLinks = [
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative py-24 overflow-hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-16 border-b border-zinc-200 dark:border-white/5">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-amber-500/20 group-hover:rotate-12 transition-transform duration-500">
                                <LayoutGrid size={24} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
                                CHAKRI<span className="text-amber-500 group-hover:animate-pulse">.</span>
                            </span>
                        </Link>

                        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-sm leading-relaxed font-medium">
                            Building digital experiences that combine technical precision with creative innovation.
                        </p>

                        <div className="flex items-center space-x-3 text-zinc-400 dark:text-zinc-500">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-[0.2em]">Available for projects</span>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="md:col-span-3 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-bold transition-colors duration-300 flex items-center group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Hub */}
                    <div className="md:col-span-4 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-lg shadow-zinc-500/5 dark:shadow-none backdrop-blur-sm"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-6 rounded-3xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/10 group flex items-center justify-between">
                            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Let&apos;s build together</span>
                            <Sparkles size={18} className="text-amber-500 group-hover:rotate-12 transition-transform" />
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        © {currentYear} CHAKRAVARTHI PADYALA. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center space-x-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <span className="hover:text-amber-500 transition-colors cursor-pointer">Privacy</span>
                        <span className="hover:text-amber-500 transition-colors cursor-pointer">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
