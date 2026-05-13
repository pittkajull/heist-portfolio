import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { title: "Fullstack Web Developer", issuer: "Dicoding Indonesia", date: "2024" },
  { title: "React Masterclass", issuer: "Udemy", date: "2024" },
  { title: "Javascript Algorithms", issuer: "FreeCodeCamp", date: "2023" },
];

const Certificates = () => {
  return (
    <section className="py-20 px-10 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-primary-blue text-glow">Certificates</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden group"
            >
              {/* Efek Cahaya di Pojok Card */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-blue/20 blur-3xl group-hover:bg-primary-blue/40 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                <div className="mt-4 flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span>ID: CERT-{index}829</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;