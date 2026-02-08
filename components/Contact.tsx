
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, Linkedin, Github } from "lucide-react";

const { contact } = portfolioData;

function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-neutral-900 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a href={contact.linkedin} className="text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
                <a href={contact.github} className="text-neutral-500 hover:text-white transition-colors">GitHub</a>
                <a href={`mailto:${contact.email}`} className="text-neutral-500 hover:text-white transition-colors">Email</a>
            </div>
            <p className="text-neutral-600 text-sm">
                © {new Date().getFullYear()} Deekshith Alampally.
            </p>
        </footer>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-[-20%] left-[50%] transform -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
                        Let's Build.
                    </h2>
                    <p className="text-xl text-neutral-400 mb-12">
                        I'm ready to bring my data engineering expertise to your team.
                        Open to full-time roles in the United States.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a
                            href={`mailto:${contact.email}`}
                            className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-950/80">
                                Get in Touch
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="mt-32">
                <Footer />
            </div>
        </section>
    );
}
