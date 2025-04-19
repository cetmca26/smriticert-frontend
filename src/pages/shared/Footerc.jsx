import React from 'react';

function Footerc() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-7 " style={{ marginBottom: "-180px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
          {/* Logo & Intro */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex flex-col sm:flex-row">

              <h1 className="text-3xl font-bold text-white">Open</h1>
              <h1 className="text-3xl font-bold text-cyan-400">Smriti</h1>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              We are the OpenSmriti Team from CET — a passionate collective of open-source contributors and tech enthusiasts striving to innovate and build tools that empower communities through code, collaboration, and creativity.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-20">
            {/* About Us */}
            <div>
              <h5 className="font-semibold mb-3 text-white">About Us</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Who We Are</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Our Vision</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Team Members</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">FAQs</a></li>
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h5 className="font-semibold mb-3 text-white">Projects</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">OpenSmriti Core</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Docs & Wiki</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Student Tools</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contribute</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h5 className="font-semibold mb-3 text-white">Connect</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">GitHub</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Discord</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Email Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} OpenSmriti Team, CET</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cyan-400">Terms</a>
            <a href="#" className="hover:text-cyan-400">Privacy</a>
            <a href="#" className="hover:text-cyan-400">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerc;
