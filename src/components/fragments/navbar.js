"use client";
import { useState, useEffect } from "react";

const NavbarPage = () => {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("#home, #skill, #project, #experience, #education, #contact");


        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const menus = [
        { name: "Home", href: "#home", id: "home" },
        { name: "Skills", href: "#skill", id: "skill" },
        { name: "Project", href: "#project", id: "project" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Education", href: "#education", id: "education" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <div
            className="fixed top-0 left-0 w-full flex justify-between p-4 pl-12 pr-12 bg-white text-black shadow-2xl z-50"
            style={{ fontFamily: "'Lexend', sans-serif" }}
        >
            <h1 className="text-2xl font-bold text-center sm:text-left w-full sm:w-auto">PV</h1>
            <ul className="nav gap-6 items-center pr-10 hidden sm:flex">
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <a
                            href={menu.href}
                            className={`relative pb-1 text-md transition-all ease-in-out duration-500 hover:text-blue-800 
                ${active === menu.id ? "after:w-full" : "after:w-0"} 
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-800 after:transition-all`}
                        >
                            {menu.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavbarPage;