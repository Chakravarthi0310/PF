export function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                    Full-Stack Developer | System Designer
                </h1>
                <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Building scalable systems & polished user experiences using React, Next.js, Spring Boot, Node.js, and Cloud technologies.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all hover:scale-105 shadow-lg shadow-white/20"
                        href="#projects"
                    >
                        View Work
                    </a>
                    <a
                        className="px-8 py-3 border border-zinc-700 rounded-lg font-medium hover:border-zinc-500 hover:bg-zinc-900/50 transition-all"
                        href="#contact"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
