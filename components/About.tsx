
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const { about } = portfolioData;

const stats = [
    { label: "Daily Records", value: "500K+" },
    { label: "Data Accuracy", value: "99.9%" },
    { label: "Pipeline Uptime", value: "100%" },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-neutral-950 border-y border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Beyond the Code.
                        </h2>
                        <div className="prose prose-lg prose-invert text-neutral-400">
                            {about.content.split('\n\n').map((p, i) => (
                                <p key={i} className="mb-4 text-lg leading-relaxed">{p}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-8 mt-12 border-t border-neutral-900 pt-8">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-wide text-neutral-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full min-h-[400px] rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden hidden lg:block"
                    >
                        {/* Abstract Code Visualization / Placeholder for Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-800 font-mono text-9xl font-bold opacity-20 select-none">
                            ETL
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2 font-mono text-xs text-neutral-400">
                                    <div className="flex justify-between">
                                        <span>origin: aws_s3</span>
                                        <span className="text-green-500">active</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>transform: apache_spark</span>
                                        <span className="text-blue-500">processing</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>destination: snowflake</span>
                                        <span className="text-neutral-600">waiting</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
