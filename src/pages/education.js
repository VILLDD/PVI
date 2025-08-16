"use client";

import { easeOut, motion } from "framer-motion";

const EducationPage = () => {
    return (
        <section
            id="education"
            className="relative z-10 h-auto p-10 sm:p-30 bg-white scroll-mt-20 selection:bg-transparent"
            style={{ fontFamily: "'Lexend', sans-serif" }}
        >
            <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: easeOut }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl sm:text-4xl font-semibold text-center mb-10"
            >
                Education
            </motion.h1>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 sm:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="border-2 border-blue-800 w-full sm:w-60 h-auto sm:h-60 p-5 rounded-3xl active:bg-blue-800 active:text-white transition-all duration-500 ease-in-out"
                >
                    <h1 className="text-center font-bold text-xl sm:text-2xl mb-2">SD 1-5</h1>
                    <p className="text-center text-sm sm:text-base">
                        SDN 01 Bojong Gede Sekolah pertama saya, banyak cerita masa kecil yang terjadi di sana.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="border-2 border-blue-800 w-full sm:w-60 h-auto sm:h-60 p-5 rounded-3xl active:bg-blue-800 active:text-white transition-all duration-500 ease-in-out"
                >
                    <h1 className="text-center font-bold text-xl sm:text-2xl mb-2">SD 5-6</h1>
                    <p className="text-center text-sm sm:text-base">
                        SDN 02 Jakarta Timur, Tidak banyak hal yang terjadi di sekolah ini tapi saya tetap ingat momen menyenangkan.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="border-2 border-blue-800 w-full sm:w-60 h-auto sm:h-60 p-5 rounded-3xl active:bg-blue-800 active:text-white transition-all duration-500 ease-in-out"
                >
                    <h1 className="text-center font-bold text-xl sm:text-2xl mb-2">SMP</h1>
                    <p className="text-center text-sm sm:text-base">
                        SMK PGRI Jakarta Timur, masa Covid banyak hal-hal yang ingin diulang kembali.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="border-2 border-blue-800 w-full sm:w-60 h-auto sm:h-60 p-5 rounded-3xl active:bg-blue-800 active:text-white transition-all duration-500 ease-in-out"
                >
                    <h1 className="text-center font-bold text-xl sm:text-2xl mb-2">SMK</h1>
                    <p className="text-center text-sm sm:text-base">
                        SMK Nurul Islam, sekarang saatnya menentukan masa depan. Tidak ada waktu untuk main-main.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationPage;
