
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const { experience } = portfolioData;

const ExperienceItem = ({ exp }: { exp: any }) => (
    <div className="relative pl-8 md:pl-0 mb-16 last:mb-0">
        <div className="hidden md:block absolute left-[50%] top-0 transform -translate-x-1/2 w-px h-full bg-neutral-800 -z-10" />
        <div className="hidden md:block absolute left-[50%] top-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

        <div className="md:flex justify-between items-start w-full relative">
            <div className="md:w-[45%] md:text-right md:pr-12 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="text-blue-400 font-medium mb-2">{exp.company}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                    {exp.period}
                </div>
            </div>

            <div className="md:w-[45%] md:pl-12">
                <ul className="space-y-4">
                    {exp.description.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3 text-neutral-400 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default function Experience() {
    return (
        <section id="experience" className="py-32 bg-black border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Career Trajectory.
                    </h2>
                </motion.div>

                <div className="relative">
                    {experience.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
