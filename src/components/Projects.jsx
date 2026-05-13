import React from 'react';

const projects = [1, 2, 3, 4, 5, 6];

const Projects = () => {
  return (
    <section id="project" className="py-20 bg-[#050816] px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          My <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Project</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-2xl bg-[#1e264a]/20 border border-white/10 transition-all hover:border-blue-500/50 shadow-xl">
              {/* Image Project */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://via.placeholder.com/400x250" 
                  alt="project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center gap-6">
                  {/* Icon Live Demo (SVG Manual) */}
                  <a href="#" className="p-3 bg-blue-600 rounded-full hover:scale-110 transition-transform shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                  {/* Icon GitHub (SVG Manual) */}
                  <a href="#" className="p-3 bg-gray-700 rounded-full hover:scale-110 transition-transform shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>

              {/* Deskripsi */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Nasi Goreng Pakbie</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-6 h-6 bg-orange-600 rounded shadow-sm"></div>
                  <div className="w-6 h-6 bg-blue-600 rounded shadow-sm"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;