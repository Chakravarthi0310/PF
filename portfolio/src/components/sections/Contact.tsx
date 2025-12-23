"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageSquare, Send, Sparkles } from "lucide-react";

export function Contact() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "chakripadyala95@gmail.com",
            href: "mailto:chakripadyala95@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+91-8688094388",
            href: "tel:+918688094388",
            color: "from-emerald-500 to-teal-500"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: "padyala-chakravarthi",
            href: "https://www.linkedin.com/in/padyala-chakravarthi-939a97258/",
            color: "from-blue-600 to-indigo-600"
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            value: "Chakravarthi0310",
            href: "https://github.com/Chakravarthi0310",
            color: "from-zinc-700 to-black dark:from-zinc-100 dark:to-zinc-400 text-white dark:text-zinc-900"
        }
    ];

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-black/50">
            {/* Cinematic Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-200 dark:from-zinc-950 to-transparent opacity-50" />
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <MessageSquare size={14} />
                        <span>Get in Touch</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white mb-8"
                    >
                        LET&apos;S CRAFT<br />SOMETHING <span className="text-amber-500 italic">BOLD.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed"
                    >
                        Ready to transform your vision into a high-performance digital reality?
                        I&apos;m currently open for interesting collaborations and new opportunities.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {contactMethods.map((method) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            className="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 hover:border-amber-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Card Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white dark:text-inherit shadow-lg shadow-zinc-500/10 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    {method.icon}
                                </div>

                                <div className="mt-auto">
                                    <p className="text-xs font-black text-amber-500 uppercase tracking-widest mb-2">{method.label}</p>
                                    <p className="text-zinc-900 dark:text-zinc-100 font-bold group-hover:text-amber-500 transition-colors duration-300 break-all">
                                        {method.value}
                                    </p>
                                </div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
                                    <Send size={18} className="text-amber-500" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:scale-105 transition-transform cursor-pointer shadow-2xl">
                        <Sparkles size={20} className="text-amber-500" />
                        <span>Start a Conversation</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
