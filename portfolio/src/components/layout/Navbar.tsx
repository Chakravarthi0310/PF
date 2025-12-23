"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-white/80 transition-colors">
                    Portfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLink href="/#projects">Projects</NavLink>
                    <NavLink href="/#about">About</NavLink>
                    <NavLink href="/#contact">Contact</NavLink>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        <MobileNavLink href="/#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
                        <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <MobileNavLink href="/#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block text-lg font-medium text-zinc-400 hover:text-white transition-colors py-2"
        >
            {children}
        </Link>
    );
}
