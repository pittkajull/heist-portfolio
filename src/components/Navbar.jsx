import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#education' }, // Mengarah ke section yang sama
    { name: 'Certificate', href: '#certificate' },
    { name: 'Project', href: '#project' },
    { name: 'Article', href: '#article' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (Icon dari mockup lu) */}
        <div className="text-2xl font-bold text-white">
          <span className="text-primary-blue">M</span>A.
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm text-gray-400 hover:text-primary-blue hover:text-glow transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Mobile (Opsional) */}
        <div className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;