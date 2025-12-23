export function About() {
    return (
        <section id="about" className="min-h-screen py-24 px-6 bg-zinc-100/50 dark:bg-zinc-900/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-white">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg">
                        <p>
                            I'm a passionate developer with a keen eye for design and a love for clean code.
                            I build scalable applications that solve real-world problems.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source,
                            or enjoying a good cup of coffee.
                        </p>
                    </div>
                    <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-2xl border border-zinc-300 dark:border-white/10 flex items-center justify-center">
                        <span className="text-zinc-500 dark:text-zinc-500">Profile Image Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
