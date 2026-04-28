import React from 'react';
const colors = {
  accent: '#101727', 
  neutral: '#627382', 

  myGradient: "linear-gradient(90deg, #4F39F6 0%, #9514FA 100%)"
};

const Banner = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       
        <div className="flex-1 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3F0FF] mb-6 border border-[#E0D7FF]">
        
            <img src="/images/dot.png" alt="dot" className="w-4 h-4" />
            <span className="text-sm font-medium" style={{ color: ' #9514FA' }}>
              New: AI-Powered Tools Available
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: colors.accent }}>
            Supercharge Your <br />
            Digital Workflow
          </h1>
          
          <p className="text-lg mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: colors.neutral }}>
            Access premium AI tools, design assets, templates, and productivity software—all in one place.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            
            <button 
              className="px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
              style={{ background: colors.myGradient }}
            >
              Explore Products
            </button>

            <div className="p-[2px] rounded-full inline-block" 
     style={{ background: "linear-gradient(90deg, #4F39F6 0%, #9514FA 100%)" }}>
  
  <button className="px-8 py-4 bg-white rounded-full flex items-center gap-2.5 transition-all hover:bg-gray-50">
    
    <img src="/images/Play.png" alt="play" className="w-5 h-5" />
    
    <span className="font-bold" style={{ color:" #9514FA 100%)" }}>
      Watch Demo
    </span>
  </button>

</div>
        
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="/images/banner.png" 
              alt="Digital Workflow"
              className="object-cover rounded-2xl shadow-2xl"
              style={{ width: '500px', height: '590px' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
  