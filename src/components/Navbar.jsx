// src/components/Navbar.jsx
import React from "react"
import { Search, Bell } from "lucide-react"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border-b border-gray-700 shadow-lg">
      {/* Left - Search Bar */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="p-2 bg-gray-800/70 rounded-xl shadow-md hover:shadow-indigo-500/30 transition">
          <Search size={18} className="text-indigo-400" />
        </div>
        <input
          className="flex-1 bg-transparent outline-none placeholder:text-gray-400 text-sm text-gray-200 px-2"
          placeholder="Search products, categories..."
        />
      </div>

      {/* Right - Notifications + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-full hover:bg-gray-700/50 transition">
          <Bell size={20} className="text-gray-300 hover:text-indigo-400 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1.5 shadow-md">
            3
          </span>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-medium text-gray-100">Admin</div>
            <div className="text-xs text-gray-400">Manager</div>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold 
                          bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md">
            A
          </div>
        </div>
      </div>
    </header>
  )
}
