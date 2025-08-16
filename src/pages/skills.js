"use client";

import { motion } from "framer-motion";

const SkillsPage = () => {
    return (
        <section id="skill" className="half-screen bg-[#393E46] p-20 flex flex-col items-center justify-center selection:bg-[#DFD0B8] selection:text-[#393E46]" style={{ fontFamily: "'Lexend', sans-serif" }}>
            <div className="h-full">
                <motion.h1 initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4 * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center font-semibold p-10 text-5xl text-white">
                    Skills
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 100, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 2 * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex gap-10 justify-center flex-wrap">
                    <div className="flip-card w-60 h-60">
                        <div className="flip-card-inner">
                            <div className="flip-card-front shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-white">
                                <h1 className="text-center">Html, Css</h1>
                            </div>
                            <div className="flip-card-back shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-[#3B38A0]">
                                <h1 className="text-center text-white">Saya telah membuat 3 portofolio yang terus saya imporove <a href="https://portvilldd.vercel.app/">https://portvilldd.vercel.app/</a> </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-60 h-60">
                        <div className="flip-card-inner">
                            <div className="flip-card-front shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-white">
                                <h1 className="text-center">Laravel, Php</h1>
                            </div>
                            <div className="flip-card-back shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-[#3B38A0]">
                                <h1 className="text-center text-white">Saya cukup bisa dalam backend di laravel, namun belum terlalu mahir di dalamnya</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-60 h-60">
                        <div className="flip-card-inner">
                            <div className="flip-card-front shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-white">
                                <h1 className="text-center">Next js</h1>
                            </div>
                            <div className="flip-card-back shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-[#3B38A0]">
                                <h1 className="text-center text-white">Masih banyak pengetahuan yang masih saya belum dapat kan di next js, tapi dengan saya membuat portofolio ini dengan next js saya jadi paham</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card w-60 h-60">
                        <div className="flip-card-inner">
                            <div className="flip-card-front shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-white">
                                <h1 className="text-center">React, Tailwind</h1>
                            </div>
                            <div className="flip-card-back shadow-2xl p-5 rounded-2xl flex items-center justify-center bg-[#3B38A0]">
                                <h1 className="text-center text-white">Untuk sekarang saya masih tahap pembelajaran di react dan tailwind</h1>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <style jsx>{`
                .flip-card {
                    perspective: 1000px;
                }
                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    transition: transform 0.8s ease-in-out;
                }
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
                .flip-card-front,
                .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 1rem;
                }
                .flip-card-back {
                    transform: rotateY(180deg);
                }
            `}</style>

        </section>
    )
}

export default SkillsPage;