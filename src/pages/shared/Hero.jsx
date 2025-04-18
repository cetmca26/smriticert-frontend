import React from 'react';

function Hero() {
  return (
    <div className="relative " id="overview" >
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 ">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className="relative pt-46 ml-auto pl-2 pr-2">
        <div className="lg:w-2/3 text-center mx-auto">
        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
  Verified. Visible. <span className="text-primary dark:text-white">Worldwide</span>
</h1>
<div className="flex flex-col sm:flex-row">
  <h4 className="mt-13 mb-8 text-gray-700 dark:text-gray-300 text-2xl md:text-xl xl:text-xl ">
    Issue and showcase blockchain-secured certificates with Open Smrithi. 
    Empower students and institutions with trusted, decentralized credentials that go beyond borders.
  </h4>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a href="/register" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary hover:before:scale-105 active:before:scale-95 sm:w-max">
              <span className="relative text-base font-semibold text-white">Get Started</span>
            </a>
            <a href="#features" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b hover:before:scale-105 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
              <span className="relative text-base font-semibold text-primary dark:text-white">Learn More</span>
            </a>
          </div>

          <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
  <div className="text-left">
    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Blockchain Verified</h6>
    <p className="mt-2 text-gray-500">Tamper-proof, decentralized certificates secured on the blockchain.</p>
  </div>
  <div className="text-left">
    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Personalized Portfolio</h6>
    <p className="mt-2 text-gray-500">Create, customize, and share your dynamic, verifiable portfolio.</p>
  </div>
  <div className="text-left">
    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Global Recognition</h6>
    <p className="mt-2 text-gray-500">Get your certifications recognized and verified across the globe by institutions.</p>
  </div>
</div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20" >
        <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Technologies Used
          </h2>
          </div>
          </div>

        <div className="w-[75%] mx-auto mt-12 overflow-hidden group"  >
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
