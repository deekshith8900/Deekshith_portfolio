
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const { skills } = portfolioData;

const SkillGroup = ({ title, skills, delay }: { title: string; skills: string[], delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="mb-12"
    >
        <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-6">
            {title}
        </h3>
        <div className="flex flex-wrap gap-x-2 gap-y-3">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-900 rounded-lg text-sm font-medium text-neutral-300 border border-neutral-800 hover:border-blue-500/50 hover:text-white hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] transition-all cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-black border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold text-white mb-6 sticky top-32">
                            Technical<br />Stack.
                        </h2>
                    </div>

                    <div className="md:w-2/3">
                        <SkillGroup title="Languages" skills={skills.languages} delay={0} />
                        <SkillGroup title="Data Engineering & Streaming" skills={skills.dataEngineering} delay={0.1} />
                        <SkillGroup title="Cloud & Databases" skills={skills.cloudDb} delay={0.2} />
                        <SkillGroup title="Tools & Visualization" skills={skills.tools} delay={0.3} />
                    </div>
                </div>
            </div>
        </section>
    );
}
