import React from 'react';
// Pastikan semua baris import ini ADA dan TIDAK ada yang typo
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EduExp from './components/EduExp';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Articles from './components/Articles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Navbar />
      
      {/* Kita bungkus pake main biar rapi */}
      <main>
        <Hero />
        <EduExp />
        <Projects />
        <Certificates />
        <Articles />
        <Contact />
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Muhajir Amrullah
      </footer>
    </div>
  );
}

export default App;