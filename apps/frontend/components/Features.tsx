import React from "react";

const features = [
  {
    title: "Transaction History",
    description: "Comprehensive view of all your wallet transactions",
    icon: "📊",
  },
  {
    title: "Token Analysis",
    description: "Detailed breakdown of major token transactions",
    icon: "🔍",
  },
  {
    title: "Export Options",
    description: "Download reports in PDF or Excel format",
    icon: "📥",
  },
];

export default function Features() {
  return (
    <div className="py-10 max-h-screen">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 
                       transition-all duration-200 cursor-pointer"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
