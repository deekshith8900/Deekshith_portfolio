"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Award, Cloud, Database, TrendingUp, Calendar } from "lucide-react";

// Ensure certifications array exists in data
const certifications = portfolioData.certifications || [];

// Map appropriate icons for each certification
const getIcon = (issuer: string) => {
    const name = issuer.toLowerCase();
    if (name.includes("amazon") || name.includes("aws")) {
        return <Award className="text-blue-500 w-6 h-6" />;
    }
    if (name.includes("finops")) {
        return <TrendingUp className="text-emerald-500 w-6 h-6" />;
    }
    if (name.includes("google") || name.includes("gcp")) {
        return <Cloud className="text-sky-500 w-6 h-6" />;
    }
    return <Database className="text-indigo-500 w-6 h-6" />;
};

interface CertificationType {
    title: string;
    issuer: string;
    date: string;
    details: string[];
}

function CertificationCard({ cert, index }: { cert: CertificationType; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 hover:border-neutral-700 transition-all duration-300"
        >
            <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-md">
                        {getIcon(cert.issuer)}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-xs font-medium border border-neutral-700/30">
                        <Calendar size={12} />
                        {cert.date.replace("Issued ", "")}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                </h3>
                <div className="text-neutral-500 text-sm font-medium mb-4">
                    {cert.issuer}
                </div>
            </div>

            <div className="mt-4 border-t border-neutral-800 pt-4">
                <ul className="text-xs text-neutral-400 space-y-2">
                    {cert.details.map((detail: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function Certifications() {
    return (
        <section id="certifications" className="py-32 bg-black border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Verified Credentials.
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        Professional licenses, cloud certifications, and technical accreditations validating architecture and system engineering skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            cert={cert}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
