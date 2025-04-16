import React from 'react';

function Hero() {
  return (
    <div className="relative " id="home" >
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 ">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className="relative pt-46 ml-auto pl-2 pr-2">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Build your <span className="text-primary dark:text-white">portfolio and certifications</span> 
          </h1>
          <div className="flex flex-col sm:flex-row">
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            SmritiCert helps you create verifiable, tamper-proof certificates and portfolios using blockchain technology.
            Empower your identity in the digital world.
          </p>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary hover:before:scale-105 active:before:scale-95 sm:w-max">
              <span className="relative text-base font-semibold text-white">Get Started</span>
            </a>
            <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b hover:before:scale-105 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
              <span className="relative text-base font-semibold text-primary dark:text-white">Learn More</span>
            </a>
          </div>

          <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Blockchain Powered</h6>
              <p className="mt-2 text-gray-500">Decentralized and secure certification.</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Portfolio Friendly</h6>
              <p className="mt-2 text-gray-500">Showcase your skills, achievements & experiences.</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Industry Trusted</h6>
              <p className="mt-2 text-gray-500">Used by recruiters and institutions.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Technologies Used
          </h2>
          </div>
          </div>

        <div className="w-[75%] mx-auto mt-12 overflow-hidden group">
  <div className="flex w-max animate-scroll-horizontal whitespace-nowrap group-hover:[animation-play-state:paused]">
    {[
      'react',
      'node',
      'mongo',
      'polygon',
      'ethereum',
      'tailwind',
      'metamask',
      
    ]
      .concat([
        'react',
        'node',
     'mongo',
      'polygon',
        'ethereum',
        'tailwind',
        'metamask',
        
      ])
      .map((logo, idx) => (
        <div
          key={idx}
          className="p-4 min-w-[120px] max-w-[150px] sm:min-w-[140px] sm:max-w-[160px] grayscale transition duration-100 hover:grayscale-0 flex items-center justify-center"
        >
          <img
            src={`./images/clients/${logo}.svg`}
            className="h-8 sm:h-10 md:h-12 w-auto mx-auto"
            loading="lazy"
            alt={`${logo} logo`}
          />
        </div>
      ))}
  </div>
</div>

        


      </div>
    </div>
  );
}

export default Hero;
