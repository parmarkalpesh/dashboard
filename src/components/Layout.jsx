import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Main Area */}
      <div className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Navbar (fixed at top) */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="pt-16 md:ml-64 p-6 text-gray-100">
          <Outlet /> {/* Pages render here */}
        </main>
      </div>
    </div>
  );
}
