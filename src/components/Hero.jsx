import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'PHP', src: '/img/php.png' },
  { name: 'React', src: '/img/react.png' },
  { name: 'Tailwind', src: '/img/tailwind.png' },
  { name: 'HTML', src: '/img/html.png' },
  { name: 'CSS', src: '/img/css.png' },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-20 bg-[#050816] overflow-hidden">
      
      {/* Teks Kiri - Tetep di depan (z-50) */}
      <div className="w-full md:w-1/2 z-50">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-7xl font-bold text-white leading-tight"
        >
          Muhajir <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 drop-shadow-[0_0_20px_rgba(78,107,255,0.8)]">
            Amrullah
          </span>
        </motion.h1>
        <p className="mt-8 text-gray-400 max-w-lg text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex gap-6 mt-12">
          <button className="px-10 py-4 bg-indigo-900/30 border border-indigo-500 text-white rounded-xl hover:shadow-glow font-bold transition-all">
            View Project
          </button>
          <button className="px-10 py-4 border border-gray-700 text-white rounded-xl hover:bg-gray-800 transition-all font-bold">
            Contact Me
          </button>
        </div>
      </div>

      {/* Bagian Foto & Orbit - DISINI KUNCI 3D-NYA */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
        
        {/* Glow belakang (Paling dasar) */}
        <div className="absolute w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full z-0"></div>
        
        {/* FOTO PROFILE - z-20 (DITENGAH-TENGAH ORBIT) */}
        <div className="relative z-20 w-[420px] h-auto flex justify-center items-center select-none pointer-events-none"> 
          <img 
            src="/img/me.png" 
            alt="Muhajir"
            className="w-full h-full object-contain" // Gak pake border/shadow aneh
          />
        </div>

        {/* LOGIKA ORBIT DEPAN-BELAKANG (3D DEPTH) */}
        {logos.map((logo, index) => {
          const duration = 8; 
          const delay = (index / logos.length) * duration;

          return (
            <motion.div
              key={index}
              className="absolute pointer-events-none"
              animate={{
                // x: Gerak Kiri -> Kanan (Depan) -> Kiri (Belakang)
                x: [-250, 250, -250],
                // zIndex: 30 pas di depan foto (z-20), 10 pas di belakang foto
                zIndex: [30, 30, 10, 10, 30], 
                // scale: Gede pas lewat depan, Kecil pas lewat belakang
                scale: [1, 1.3, 1, 0.4, 1],
                // opacity: Full pas di depan, redup pas di belakang biar 3D berasa
                opacity: [1, 1, 1, 0.2, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: -delay,
                // Kita pake times biar z-index pindah pas di ujung kanan (t=0.5)
                times: [0, 0.5, 0.51, 0.99, 1] 
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(78,107,255,0.8)]" 
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;