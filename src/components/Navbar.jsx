// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 
                        flex items-center justify-between 
                        px-4 sm:px-6 py-3 
                        bg-gradient-to-r from-gray-900/90 to-gray-800/90 
                        backdrop-blur-md border-b border-gray-700 shadow-lg">
      {/* Left - Search Bar (hidden on small screens) */}
      <div className="hidden sm:flex items-center gap-3 w-1/3 max-w-md">
        <div className="p-2 bg-gray-800/70 rounded-xl shadow-md hover:shadow-indigo-500/30 transition">
          <Search size={18} className="text-indigo-400" />
        </div>
        <input
          className="flex-1 bg-transparent outline-none placeholder:text-gray-400 
                     text-sm text-gray-200 px-2"
          placeholder="Search products, categories..."
        />
      </div>

      {/* Right - Notifications + Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Bell */}
        <Link
          to="/notifications"
          className="relative p-2 rounded-full hover:bg-gray-700/50 transition"
        >
          <Bell size={20} className="text-gray-300 hover:text-indigo-400 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] 
                           rounded-full px-1.5 shadow-md">
            3
          </span>
        </Link>

        {/* Profile Section (clickable) */}
        <Link
          to="/profile"
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <div className="hidden sm:block text-right">
            <div className="font-medium text-gray-100">Admin</div>
            <div className="text-xs text-gray-400">Manager</div>
          </div>
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold 
                       bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md"
          >
            A
          </div>
        </Link>
      </div>
    </header>
  );
}
