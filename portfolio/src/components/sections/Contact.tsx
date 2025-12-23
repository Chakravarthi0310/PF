import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 border-t border-zinc-200 dark:border-zinc-800/50 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-purple-100/20 dark:via-blue-950/5 dark:to-purple-950/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-600 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                    Let's Work Together
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <a
                        href="mailto:chakripadyala95@gmail.com"
                        className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                    >
                        <Mail className="w-6 h-6 mx-auto mb-3 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-1">Email</p>
                        <p className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                            chakripadyala95@gmail.com
                        </p>
                    </a>

                    <a
                        href="tel:+918688094388"
                        className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                    >
                        <Phone className="w-6 h-6 mx-auto mb-3 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-1">Phone</p>
                        <p className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                            +91-8688094388
                        </p>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/padyala-chakravarthi-939a97258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all duration-300"
                    >
                        <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                        <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/Chakravarthi0310"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all duration-300"
                    >
                        <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                        <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
