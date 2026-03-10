import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolio from "./data/portfolioData";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.14),transparent_55%)]" />

      <Navbar portfolio={portfolio} />

      <main>
        <Hero portfolio={portfolio} />
        <About portfolio={portfolio} sectionVariant={sectionVariant} />
        <Skills portfolio={portfolio} sectionVariant={sectionVariant} />
        <Projects portfolio={portfolio} sectionVariant={sectionVariant} />
        <Experience portfolio={portfolio} sectionVariant={sectionVariant} />
        <Resume portfolio={portfolio} sectionVariant={sectionVariant} />
        <Contact portfolio={portfolio} sectionVariant={sectionVariant} />
      </main>

      <Footer portfolio={portfolio} />
    </div>
  );
}