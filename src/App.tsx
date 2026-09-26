import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import { InteractiveResumeModal } from './components/InteractiveResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/Jeel_Mangukiya_Resume.pdf';
    link.download = 'Jeel_Mangukiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 relative bg-grid-pattern antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom magnetic glow cursor */}
      <CustomCursor />

      {/* Top Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Resume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top floating ring */}
      <ScrollToTop />

      {/* Interactive Resume View Modal */}
      <InteractiveResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownloadPdf={handleDownloadPdf}
      />
    </div>
  );
}

export default App;
