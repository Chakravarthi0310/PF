"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname, searchParams]);

    // Add scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle smooth scrolling for anchor links
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
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
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link 
                        href="/" 
                        className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.href} 
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                isActive={pathname === link.href}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="w-px h-6 bg-white/20 mx-2"></div>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <MobileNavLink 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, link.href);
                                        setIsOpen(false);
                                    }}
                                    isActive={pathname === link.href}
                                >
                                    {link.label}
                                </MobileNavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

function NavLink({ 
    href, 
    children, 
    isActive,
    onClick 
}: { 
    href: string; 
    children: React.ReactNode; 
    isActive?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
    return (
        <Link
            href={href}
            onClick={(e) => onClick?.(e, href)}
            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                isActive 
                    ? 'text-white' 
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
            }`}
        >
            {children}
            <span 
                className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-purple-500 transition-all duration-300 group-hover:w-4/5 ${
                    isActive ? 'w-4/5' : ''
                }`}
                style={{ transform: 'translateX(-50%)' }}
            ></span>
        </Link>
    );
}

function MobileNavLink({ 
    href, 
    children, 
    onClick,
    isActive 
}: { 
    href: string; 
    children: React.ReactNode; 
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
    isActive?: boolean;
}) {
    return (
        <Link
            href={href}
            onClick={(e) => onClick(e, href)}
            className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
            }`}
        >
            <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            {children}
        </Link>
    );
}
