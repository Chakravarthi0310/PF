"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Dynamic Gradients */}
            <div className="absolute inset-0 bg-transparent">
                {/* Deep background color - slight shift from pure black/white to give depth */}
                <div className="absolute inset-0 bg-zinc-50 dark:bg-black transition-colors duration-500" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] rounded-full"
                />

                {/* Static Grain/Noise for Texture */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Subtle Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.1] dark:opacity-[0.2] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>
        </div>
    );
}
