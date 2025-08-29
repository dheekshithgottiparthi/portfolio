import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import "../index.css"; // for smooth scroll

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <Navbar />

      {/* Each section full height with padding */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <Home />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <About />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-6">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-6">
        <Projects /> {/* Already styled like cards inside */}
      </section>

      <section id="certifications" className="min-h-screen flex items-center justify-center px-6">
        <Certifications />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;




