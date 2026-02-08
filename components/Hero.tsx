
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight } from "lucide-react";

const { hero } = portfolioData;

function BackgroundBeams() {
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-black overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] top-[-10%] left-[-10%] animate-pulse" />
            <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] bottom-[-10%] right-[-10%] animate-pulse delay-75" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>
    );
}

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
            <BackgroundBeams />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-6 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm leading-6 text-neutral-400 backdrop-blur-xl">
                        Available for new opportunities <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
                        <span className="block text-white">Data Engineer.</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-text-gradient bg-300%">
                            Building Scale.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed mb-10">
                        {hero.subHeadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
                        >
                            View Work
                        </ScrollLink>
                        <a
                            href={hero.ctaLink}
                            className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-neutral-900 transition-colors group"
                        >
                            {hero.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
}
