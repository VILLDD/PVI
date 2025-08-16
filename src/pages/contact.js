"use client";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <section id="contact" className="relative z-20 h-auto p-10 bg-[#393E46]" style={{ fontFamily: "'Lexend', sans-serif" }}>
            <div className="flex justify-between">
                <h1 className="text-white font-bold text-2xl text-center">PV</h1>
                <div className="flex gap-10">
                    <a
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3, ease: "easeInOut" }}
                        href="https://instagram.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-center hover:text-blue-400 text-2xl transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        href="https://tiktok.com/@username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-center hover:text-blue-400 text-2xl transition-colors duration-300"
                    >
                        <FaTiktok />
                    </a>
                </div>
                <a href="#home" className="text-white text-xl font-bold hover:underline">
                    Back &#8593;
                </a>
            </div>
        </section>
    )
}

export default ContactPage;