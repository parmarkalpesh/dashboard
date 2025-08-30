import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  QrCode,
  FileBarChart,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react";

export default function Sidebar() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const links = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/inventory", label: "Inventory", icon: <Package size={18} /> },
    { to: "/qr-scanner", label: "QR Scanner", icon: <QrCode size={18} /> },
    { to: "/reports", label: "Reports", icon: <FileBarChart size={18} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={18} /> },
    { to: "/add-inventory", label: "Add Inventory", icon: <PlusCircle size={18} /> },
  ];

  const handleLogout = () => {
    // ✅ Here you can clear auth tokens, redirect to login, etc.
    console.log("User logged out!");
    setShowLogoutConfirm(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b 
                      from-gray-900 to-gray-800 text-gray-100 p-6 shadow-lg flex flex-col">
        {/* Branding */}
        <h2 className="text-2xl font-extrabold text-indigo-400 mb-8 tracking-wide">
          Smart Inventory
        </h2>

        {/* Navigation */}
        <ul className="flex-1 space-y-4 overflow-y-auto">
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
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="flex items-center gap-3 px-4 py-2 w-full rounded-xl bg-gray-700 hover:bg-red-600 transition-all"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-gray-800 text-gray-100 p-6 rounded-2xl shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Confirm Logout
            </h3>
            <p className="text-sm text-gray-400 text-center mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
