import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  { title: "How I Built My Portfolio with React 19", date: "Oct 12, 2024", tag: "Tech" },
  { title: "Understanding Framer Motion for Beginners", date: "Sept 20, 2024", tag: "Tutorial" },
];

const Articles = () => {
  return (
    <section className="py-20 px-10 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Latest <span className="text-primary-blue">Articles</span></h2>
        
        <div className="space-y-6">
          {articles.map((art, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex justify-between items-center p-6 border-b border-white/5 hover:bg-white/5 rounded-xl transition-all cursor-pointer"
            >
              <div>
                <span className="text-xs text-primary-blue font-mono uppercase tracking-widest">{art.tag}</span>
                <h3 className="text-2xl font-semibold mt-1 group-hover:text-blue-400 transition-colors">{art.title}</h3>
                <p className="text-gray-500 mt-2">{art.date}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;