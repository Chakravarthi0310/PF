"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = () => {
        setIsClicked(true);
        setTheme(theme === "dark" ? "light" : "dark");
        setTimeout(() => setIsClicked(false), 300);
    };

    if (!mounted) {
        return (
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 shadow-inner dark:shadow-zinc-800/50 animate-pulse" />
        );
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-12 h-12 rounded-2xl flex items-center justify-center 
                bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900
                shadow-lg hover:shadow-xl dark:shadow-zinc-900/50
                transition-all duration-300 ease-in-out
                ${isHovered ? 'scale-105' : 'scale-100'}
                ${isClicked ? 'ring-2 ring-amber-400/50' : ''}
                overflow-hidden group`}
            aria-label="Toggle theme"
        >
            {/* Animated background highlight on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-amber-400/10 to-purple-500/10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Sun and Moon Icons with animations */}
            <div className="relative z-10 flex items-center justify-center">
                <Sun 
                    className={`absolute w-6 h-6 text-amber-400 transition-all duration-500 ease-in-out 
                    ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'}`} 
                />
                <Moon 
                    className={`absolute w-6 h-6 text-purple-400 transition-all duration-500 ease-in-out 
                    ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'}`} 
                />
            </div>
            
            {/* Pulsing effect on theme change */}
            {isClicked && (
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 animate-ping rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000" />
            )}
        </button>
    );
}
