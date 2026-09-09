import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-body)] antialiased font-sans selection:bg-[#1BA098]/30 selection:text-[#1BA098]">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
