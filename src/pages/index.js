import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarPage from "@/components/fragments/navbar";
import HomePage from "./home";
import SkillsPage from "./skills";
import ProjectPage from "./project";
import EducationPage from "./education";
import ContactPage from "./contact";
import ExperiencePage from "./experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <head>
        <title>PV</title>
        <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      </head>
      <NavbarPage />
      <HomePage />
      <SkillsPage />
      <ProjectPage />
      <ExperiencePage/>
      <EducationPage/>
      <ContactPage/>
    </>
  );
}
