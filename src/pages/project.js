"use client";

import { easeOut, motion } from "framer-motion";

const ProjectPage = () => {
    return (
        <section id="project" className="h-full bg-[#222831] items-center justify-center p-5 sm:p-15" style={{ fontFamily: "'Lexend', sans-serif" }}>
            <div className="flex gap-15 justify-center sm:justify-between w-full">
                <motion.div initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 5 * 0.2, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=" bg-[#393E46] h-60 w-1/2 rounded-3xl shadow-xl hidden sm:flex">
                    <img src="/web2.0.png" alt="New Port" className="w-full h-full object-cover rounded-3xl" draggable="false" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 5 * 0.2, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=" bg-[#393E46] h-auto w-3/4 rounded-3xl shadow-xl cursor-pointer transition-colors duration-300 active:bg-white active:text-black text-white active:shadow-white active:shadow-lg">
                    <h1 className="text-center p-2 sm:p-5 text-xl sm:text-4xl font-bold selection:bg-transparent">Web 2.0</h1>
                    <p className="text-center p-2 sm:p-5 text-sm sm:text-lg selection:bg-transparent">
                        Web ini adalah website pertama yang saya buat saat saya mempunyai laptop. Saat itu saya masih banyak memakai bantuan seperti chat gpt,
                        dan hasilnya masih belum bisa memuaskan rasa penasaran saya untuk belajar lebih baik lagi.
                    </p>
                </motion.div>
            </div>
            <div className="flex gap-15 justify-center sm:justify-between w-full mt-15">
                <motion.div initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 5 * 0.2, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-[#393E46] h-auto w-3/4 rounded-3xl shadow-xl cursor-pointer transition-colors duration-300 active:bg-white active:text-black text-white active:shadow-white active:shadow-lg">
                    <h1 className="text-center p-2 sm:p-5 text-xl sm:text-4xl font-bold selection:bg-transparent">New Port</h1>
                    <p className=" text-center p-2 sm:p-5 text-sm sm:text-lg selection:bg-transparent">
                        New Port Ini adalah website kedua saya dalam membuat website portofolio. Awal saya belajar tentang pemrograman saya membuat website dari HP,
                        tapi sejak saya beli laptop saya belajar banyak sekali hal hal baru di pemrograman.
                    </p>
                    <a className="text-center block p-2" href="https://portvilldd.vercel.app/" target="_blank">To Website &#8594;</a>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 5 * 0.2, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=" bg-[#393E46] h-70 w-1/2 rounded-3xl shadow-xl hidden sm:flex">
                    <img src="/new port.png" alt="New Port" className="w-full h-full object-cover rounded-3xl" draggable="false" />
                </motion.div>
            </div>
            <div className="flex gap-15 justify-center sm:justify-between w-full mt-15">
                <motion.div initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 5 * 0.2, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=" bg-[#393E46] h-70 w-1/2 rounded-3xl shadow-xl hidden sm:flex">
                    <img src="/tinline.png" alt="New Port" className="w-full h-full object-cover rounded-3xl" draggable="false" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 5 * 0.2, ease: easeOut }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=" bg-[#393E46] h-auto w-3/4 rounded-3xl shadow-xl cursor-pointer transition-colors duration-300 active:bg-white active:text-black text-white active:shadow-white active:shadow-lg">
                    <h1 className="text-center p-2 sm:p-5 text-xl sm:text-4xl font-bold selection:bg-transparent">TinLine.</h1>
                    <p className="text-center p-5 text-sm sm:text-lg selection:bg-transparent">
                        TinLine. Ini adalah project sekolah yang rencananya akan membuat sistem kantin online, yang memudahkan untuk para pembeli seperti siswa, guru, staff dll.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectPage;
