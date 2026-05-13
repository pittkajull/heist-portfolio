import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-20 px-10 bg-dark-bg flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-secondary-blue/30 border border-white/10 p-10 rounded-3xl shadow-blue-glow text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Let's Work <span className="text-primary-blue">Together!</span></h2>
        <p className="text-gray-400 mb-8">
          Punya project seru atau mau nanya-nanya? Langsung aja chat lewat email atau sosial media gue.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="mailto:emailmu@gmail.com" 
            className="px-8 py-3 bg-primary-blue rounded-xl font-bold hover:shadow-glow transition-all"
          >
            Send Email
          </a>
          <a 
            href="#" 
            className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all"
          >
            LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;