import React from "react";
import { FileText, TrendingUp, AlertTriangle, Package } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: "Inventory Summary",
      description: "Overview of all items in stock with categories and quantities.",
      icon: <Package size={28} className="text-blue-500" />,
      lastUpdated: "11/08/2025",
      gradient: "from-blue-500/10 to-blue-900/10",
    },
    {
      id: 2,
      title: "Sales Report",
      description: "Track sales performance and revenue trends.",
      icon: <TrendingUp size={28} className="text-green-500" />,
      lastUpdated: "11/08/2025",
      gradient: "from-green-500/10 to-green-900/10",
    },
    {
      id: 3,
      title: "Low Stock Alerts",
      description: "Identify products that are running low and need reordering.",
      icon: <AlertTriangle size={28} className="text-yellow-500" />,
      lastUpdated: "11/08/2025",
      gradient: "from-yellow-500/10 to-yellow-900/10",
    },
    {
      id: 4,
      title: "Custom Reports",
      description: "Generate custom reports based on filters and time range.",
      icon: <FileText size={28} className="text-purple-500" />,
      lastUpdated: "11/08/2025",
      gradient: "from-purple-500/10 to-purple-900/10",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {reports.map((report) => (
          <div
            key={report.id}
            className={`rounded-2xl border border-gray-700 bg-gradient-to-br ${report.gradient} 
            p-6 shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-xl 
            transition-all duration-300`}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gray-800/70 shadow-inner">
                {report.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{report.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {report.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>🕒 {report.lastUpdated}</span>
              <button className="px-4 py-1.5 bg-blue-600/90 text-white rounded-lg hover:bg-blue-700 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
