"use client";

import { motion } from "framer-motion";

export function AbstractAvatar() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />

            <svg
                viewBox="0 0 200 200"
                className="w-full h-full max-w-[300px] relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Outer Rotating Ring */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="url(#grad1)"
                    strokeWidth="1"
                    strokeDasharray="10 20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle Counter-Rotating Ring */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r="65"
                    stroke="url(#grad2)"
                    strokeWidth="2"
                    strokeDasharray="100 50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Pulsing Core Container */}
                <motion.g
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Core Shape - Sophisticated Hexagon-ish Circle */}
                    <circle cx="100" cy="100" r="35" fill="url(#gradCore)" className="filter drop-shadow-lg" />

                    {/* Internal Detail */}
                    <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
                    <path
                        d="M100 85L113 107.5H87L100 85Z"
                        fill="white"
                        fillOpacity="0.5"
                        className="dark:fill-white fill-zinc-800"
                    />
                </motion.g>

                {/* Orbiting Particles */}
                {[0, 120, 240].map((angle, i) => (
                    <motion.circle
                        key={i}
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                    >
                        {/* The actual particle attached to the rotating group */}
                        <circle cx="190" cy="100" r="3" fill={i === 0 ? "#3B82F6" : i === 1 ? "#A855F7" : "#6366F1"} />
                    </motion.circle>
                ))}

                {/* Definitions for Gradients */}
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A855F7" />
                        <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                    <radialGradient id="gradCore" cx="100" cy="100" r="35" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="1" stopColor="#A855F7" stopOpacity="0.3" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
