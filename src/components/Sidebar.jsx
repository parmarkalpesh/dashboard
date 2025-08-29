// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  QrCode,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/inventory", label: "Inventory", icon: <Package size={18} /> },
    { to: "/qr-scanner", label: "QR Scanner", icon: <QrCode size={18} /> },
    { to: "/reports", label: "Reports", icon: <FileBarChart size={18} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={18} /> },
    { to: "/add-inventory", label: "Add Inventory", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-6 shadow-lg flex flex-col">
      {/* Branding */}
      <h2 className="text-2xl font-extrabold text-indigo-400 mb-8 tracking-wide">
        Smart Inventory
      </h2>

      {/* Navigation */}
      <ul className="flex-1 space-y-4">
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 
                 ${
                   isActive
                     ? "bg-indigo-500 text-white shadow-md"
                     : "hover:bg-gray-700 hover:text-indigo-300"
                 }`
              }
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="mt-6">
        <button className="flex items-center gap-3 px-4 py-2 w-full rounded-xl bg-gray-700 hover:bg-red-600 transition-all">
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
