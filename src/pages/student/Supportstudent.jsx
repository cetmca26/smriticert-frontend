import React from "react";

const Supportstudent = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold">Support & Resources</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Find answers to your questions or get in touch with our support team
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search for help articles, tutorials, and FAQs..."
            className="w-full md:w-96 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* Knowledge Base */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Knowledge Base</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article Card */}
          {[
            {
              title: "Getting Started with Blockchain Verification",
              category: "Basics",
              views: 2458,
            },
            {
              title: "How to Verify a Student Record",
              category: "Verification",
              views: 1895,
            },
            {
              title: "Understanding Record Security and Tampering Prevention",
              category: "Security",
              views: 1246,
            },
            {
              title: "Setting Up Multi-Factor Authentication",
              category: "Security",
              views: 958,
            },
          ].map((article, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
            >
              <h4 className="text-md font-semibold">{article.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{article.category}</p>
              <p className="text-xs text-gray-400 mt-2">{article.views} views</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Section */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Documentation</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Admin Guide",
              desc: "Comprehensive guide for system administrators",
              link: "#",
            },
            {
              title: "User Manual",
              desc: "Step-by-step instructions for daily operations",
              link: "#",
            },
            {
              title: "API Reference",
              desc: "Technical documentation for system integration",
              link: "#",
            },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
            >
              <h4 className="text-lg font-bold">{doc.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{doc.desc}</p>
              <a
                href={doc.link}
                className="text-indigo-600 hover:underline text-sm"
              >
                View Documentation →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Topic */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Browse by Topic</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Getting Started",
            "Security & Privacy",
            "Record Management",
            "Global Network",
          ].map((topic, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="pt-8">
        <h3 className="text-xl font-semibold mb-4">Need more help?</h3>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default Supportstudent;
