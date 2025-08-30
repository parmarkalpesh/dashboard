import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import QRAccess from "./pages/QRAccess";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AddInventory from "./pages/AddInventory";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      {/* Public route example */}
      <Route path="/login" element={<Login />} />

      {/* Protected layout with nested routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/qr-scanner" element={<QRAccess />} />
        <Route path="/add-inventory" element={<AddInventory />} />
        <Route path="/profile" element={<Profile />} />
        
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
