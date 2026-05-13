import React from 'react';
import { motion } from 'framer-motion';

const items = {
  education: [
    { year: "2021 - 2024", title: "Man 1 Kota Serang", sub: "Senior High School" },
    { year: "2024 - 2025", title: "Universitas Brawijaya", sub: "University" },
  ],
  experience: [
    { year: "2024 - 2025", title: "Staff Ahli (Himpunan Mahasiswa)", desc: "Lorem Ipsum is simply dummy text of the printing industry." },
    { year: "2025 - 2025", title: "Staff Magang (Eksekutif Mahasiswa)", desc: "Lorem Ipsum has been the industry's standard." },
  ]
};

const EduExp = () => {
  return (
    <section className="py-20 bg-dark-bg text-white px-10">
      <div className="flex flex-col md:flex-row justify-center items-start gap-20 relative">
        
        {/* Title Tengah */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 flex gap-4 text-4xl font-bold">
          <span>Educational</span>
          <span className="text-gray-600">|</span>
          <span className="text-blue-500 drop-shadow-glow">Experience</span>
        </div>

        {/* Kolom Edukasi */}
        <div className="w-full md:w-1/2 space-y-12">
          {items.education.map((item, i) => (
            <motion.div key={i} whileHover={{ x: 10 }} className="group">
              <h4 className="text-blue-400 font-mono mb-2">{item.year}</h4>
              <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">{item.title}</h3>
              <p className="text-gray-500">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Kolom Pengalaman */}
        <div className="w-full md:w-1/2 space-y-12 border-l border-white/5 pl-10">
          {items.experience.map((item, i) => (
            <motion.div key={i} whileHover={{ x: 10 }}>
              <h4 className="text-blue-400 font-mono mb-2">{item.year}</h4>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EduExp;