// src/components/Navbar.tsx
import { useState } from "react";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <a
      href={to}
      className="px-4 py-2 rounded-lg text-sm font-medium text-white
                 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
                 hover:scale-105 hover:animate-pulse
                 transition-all duration-300 shadow-lg cursor-pointer"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          <NavItem to="#home">Home</NavItem>
          <NavItem to="#about">About</NavItem>
          <NavItem to="#skills">Skills</NavItem>
          <NavItem to="#projects">Projects</NavItem>
          <NavItem to="#certifications">Certificates</NavItem>
          <NavItem to="#contact">Contact</NavItem>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-2 border rounded text-white border-gray-500 hover:border-cyan-400 transition-all duration-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-4">
          <NavItem to="#home">Home</NavItem>
          <NavItem to="#about">About</NavItem>
          <NavItem to="#skills">Skills</NavItem>
          <NavItem to="#projects">Projects</NavItem>
          <NavItem to="#certifications">Certificates</NavItem>
          <NavItem to="#contact">Contact</NavItem>
        </nav>
      )}
    </header>
  );
}
