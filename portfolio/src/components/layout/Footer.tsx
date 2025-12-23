import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold">Portfolio</span>
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
                    <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
                    <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}
