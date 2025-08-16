"use client";

import { easeInOut, motion } from "framer-motion";

const ExperiencePage = () => {
    return (
        <section
            id="experience" className="h-[50vh] bg-[#393E46] flex items-center justify-center" style={{ fontFamily: "'Lexend', sans-serif" }}>
            <motion.h1 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 * 0.2, ease: easeInOut }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center text-lg sm:text-4xl text-white font-bold">No Experience yet :(</motion.h1>
        </section>
    )
}

export default ExperiencePage;