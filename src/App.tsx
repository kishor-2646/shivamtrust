import { useState } from "react";
import Navbar            from "./components/layout/Navbar";
import Footer            from "./components/layout/Footer";
import HeroSection       from "./components/sections/HeroSection";
import StatsSection      from "./components/sections/StatsSection";
import AboutSection      from "./components/sections/AboutSection";
import ProgramsSection   from "./components/sections/ProgramsSection";
import UrgentNeedsSection from "./components/sections/UrgentNeedsSection";
import GallerySection    from "./components/sections/GallerySection";
import TeamSection       from "./components/sections/TeamSection";
import ContactSection    from "./components/sections/ContactSection";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <>
      <Navbar active={activeNav} onNavClick={setActiveNav} />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <UrgentNeedsSection />
        <GallerySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}