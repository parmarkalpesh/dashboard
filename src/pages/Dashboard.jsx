// src/components/Dashboard.jsx
import React from "react"
import { Package, AlertTriangle, QrCode, BarChart3 } from "lucide-react"
import {
  PieChart, Pie, Tooltip, Cell,
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid
} from "recharts"

const pieData = [
  { name: "Electronics", value: 45 },
  { name: "Clothes", value: 30 },
  { name: "Food", value: 25 },
]

const COLORS = ["#22d3ee", "#6366f1", "#16a34a"]

const lineData = [
  { day: "Mon", stock: 95 },
  { day: "Tue", stock: 100 },
  { day: "Wed", stock: 92 },
  { day: "Thu", stock: 98 },
  { day: "Fri", stock: 97 },
  { day: "Sat", stock: 99 },
  { day: "Sun", stock: 94 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen  text-white p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-600/20">
              <Package size={28} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">1,248</p>
              <p className="text-gray-400 text-sm">Total Products</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-red-400 transition">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-600/20">
              <AlertTriangle size={28} className="text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-gray-400 text-sm">Low Stock</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-green-400 transition">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-600/20">
              <QrCode size={28} className="text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">Scan</p>
              <p className="text-gray-400 text-sm">QR Access</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-400 transition">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-600/20">
              <BarChart3 size={28} className="text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">99.4%</p>
              <p className="text-gray-400 text-sm">Stock Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h3 className="font-semibold mb-4 text-gray-300">Weekly Stock Trend</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                <XAxis dataKey="day" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #333" }} />
                <Line type="monotone" dataKey="stock" stroke="#22d3ee" strokeWidth={2} dot={{ fill: "#22d3ee" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h3 className="font-semibold mb-4 text-gray-300">Inventory by Category</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #333" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
