
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const { projects } = portfolioData;

function ProjectCard({ project, className }: { project: any; className?: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={clsx(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 hover:border-neutral-700 transition-all duration-300",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-0 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-md">
                        <ArrowUpRight className="text-blue-500 w-6 h-6" />
                    </div>
                    <div className="flex gap-2">
                        <a href="#" className="p-2 rounded-full bg-black/50 hover:bg-white hover:text-black transition-colors border border-neutral-800 text-neutral-400">
                            <Github size={18} />
                        </a>
                        {project.title.includes("LogSense") && (
                            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium flex items-center">
                                AI POWERED
                            </div>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {project.problem} <span className="text-neutral-600 px-1">&rarr;</span> {project.solution}
                </p>
            </div>

            <div className="relative z-10 mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-neutral-800 rounded-lg text-xs font-medium text-neutral-300 border border-neutral-700/50">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="border-t border-neutral-800 pt-4">
                    <ul className="text-xs text-neutral-500 space-y-1">
                        {project.outcomes.map((o: string, i: number) => (
                            <li key={i} className="flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                <span dangerouslySetInnerHTML={{ __html: o.replace(/\*\*(.*?)\*\*/g, '<span class="text-neutral-300">$1</span>') }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Selected Work.
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        Technical deep dives into scalable infrastructure and data systems.
                        Designed for reliability and performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(400px,auto)]">
                    {/* Bento Grid Layout - First item spans 2 columns */}
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
