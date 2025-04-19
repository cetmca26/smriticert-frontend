import React from 'react';

function Testimonial() {
  const features = [
    {
      title: "Seamless Integration",
      description: "Easily connect with third-party services and platforms for enhanced functionality.",
      icon: "🔗",
    },
    {
      title: "User-Friendly Interface",
      description: "Intuitive and clean UI designed to provide a smooth user experience.",
      icon: "🖥️",
    },
    {
      title: "Secure & Reliable",
      description: "Built with industry-standard security practices to ensure data protection.",
      icon: "🔒",
    },
    {
      title: "Real-time Updates",
      description: "Stay informed with live updates and instant notifications.",
      icon: "⚡",
    },
    {
      title: "Customizable Dashboard",
      description: "Personalize your dashboard to view metrics and tools that matter to you.",
      icon: "📊",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to help you out.",
      icon: "📞",
    },
  ];

  return (
    <div className="text-gray-700 dark:text-gray-300 py-20 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
