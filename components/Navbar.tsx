
"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Work", to: "experience" },
        { name: "Projects", to: "projects" },
        { name: "Tech", to: "skills" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter text-white">
                    deekshith<span className="text-blue-500">.dev</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/deekshith8900" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/deekshith-alampally-1b8294174" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="mailto:deekshithalampally@gmail.com" className="text-neutral-400 hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-neutral-300 hover:text-white"
                                >
                                    {link.name}
                                </ScrollLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
