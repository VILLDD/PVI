"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const HomePage = () => {
    return (
        <>
            <section id="home" className="h-full p-20 sm:p-50 items-center flex justify-between gap-30 selection:bg-[#393E46] selection:text-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
                <div className="w-full sm:w-1/2 items-center justify-center">
                    <motion.h1 initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl font-semibold">Hello,</motion.h1>
                    <div className="items-center justify-center">
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="mt-5 w-full h-full">
                            <motion.p initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-5xl font-bold">
                                I'm, M. Vildan Syauqi Iskandar
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.3, ease: "easeOut" }} className="mt-5 text-md sm:text-lg">
                                Saya adalah seorang Web Development, Web Designer. Saya pelajar dari sekolah <span className="text-[#17313E] font-bold">SMK Nurul Islam</span> dengan jurusan RPL (Rekayasa Perangkat Lunak).
                            </motion.p>
                            <motion.div initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0}}
                                transition={{ duration: 1.4, ease: "easeOut" }} className="mt-10">
                                <a className="shadow-none text-white p-3 border-none bg-black hover:bg-white rounded-xl hover:text-black 
                                hover:shadow-xl transition-all ease-in-out .5s" href="#skill">Explore Web &#8594;</a>
                            </motion.div>
                        </motion.div>
                        <div className="flex gap-5 mt-10">
                            <motion.a
                                initial={{ opacity: 0, x: 150 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.3, ease: "easeInOut" }}
                                href="https://instagram.com/username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-pink-700 text-4xl transition-colors duration-300"
                            >
                                <FaInstagram />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, x: 150 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                href="https://tiktok.com/@username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-700 text-4xl transition-colors duration-300"
                            >
                                <FaTiktok />
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 justify-center hidden sm:flex">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/Vildan.png"
                            alt="Foto Vildan"
                            width={400}
                            height={400}
                            className="rounded-full"
                            draggable="false"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default HomePage;