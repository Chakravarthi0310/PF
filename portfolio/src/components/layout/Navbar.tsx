"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight, LayoutGrid } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const pathname = usePathname();

    // Add scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };

    const navLinks = [
        { href: "/#projects", label: "Projects" },
        { href: "/#about", label: "About" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'py-4'
                : 'py-6'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={`relative flex items-center justify-between p-2 rounded-2xl transition-all duration-500 ${scrolled
                    ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5'
                    : 'bg-transparent border border-transparent'
                    }`}>
                    {/* Logo Area */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 group pl-4"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:rotate-12 transition-transform duration-300">
                            <LayoutGrid size={20} />
                        </div>
                        <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-white">
                            CHAKRI<span className="text-amber-500 group-hover:animate-pulse">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 relative pr-2">
                        <div className="flex items-center bg-zinc-100/50 dark:bg-white/5 p-1 rounded-xl border border-zinc-200/50 dark:border-white/5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onMouseEnter={() => setHoveredLink(link.label)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`relative px-5 py-2 text-sm font-bold transition-colors duration-300 z-10 ${pathname === link.href || (pathname === '/' && link.href === '/#')
                                        ? 'text-zinc-900 dark:text-white'
                                        : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                                        }`}
                                >
                                    {hoveredLink === link.label && (
                                        <motion.div
                                            layoutId="nav-hover"
                                            className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-white/10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="w-px h-6 bg-zinc-200 dark:bg-white/10 mx-4" />

                        <div className="p-1 bg-zinc-100/50 dark:bg-white/5 rounded-xl border border-zinc-200/50 dark:border-white/5">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2 pr-2">
                        <div className="p-1 bg-zinc-100/50 dark:bg-white/5 rounded-xl border border-zinc-200/50 dark:border-white/5">
                            <ThemeToggle />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed inset-x-6 top-24 z-50 md:hidden"
                    >
                        <div className="p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={(e) => {
                                                handleSmoothScroll(e, link.href);
                                                setIsOpen(false);
                                            }}
                                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-100 dark:hover:bg-white/5 transition-all group"
                                        >
                                            <span className="text-xl font-bold text-zinc-900 dark:text-white">
                                                {link.label}
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white transition-all">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
