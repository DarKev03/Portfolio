import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Clients />
            <Contact />
            <Footer />
        </div>
    );
}
