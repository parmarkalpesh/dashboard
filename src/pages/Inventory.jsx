import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Printer, QrCode, Filter } from "lucide-react";

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  const [sortField, setSortField] = useState("updated");
  const [sortOrder, setSortOrder] = useState("desc");
  const [qrItem, setQrItem] = useState(null);

  const data = [
    { sku: "SKU-100004", name: "Olive Oil 500ml", category: "Grocery", price: 6.5, stock: 34, updated: "2025-08-14T23:50:00" },
    { sku: "SKU-100005", name: "Protein Bar - Peanut", category: "Snacks", price: 1.25, stock: 0, updated: "2025-08-14T18:00:00" },
    { sku: "SKU-100003", name: "Dark Chocolate 70%", category: "Snacks", price: 1.99, stock: 7, updated: "2025-08-14T14:42:00" },
    { sku: "SKU-100002", name: "Almond Milk 1L", category: "Beverages", price: 2.49, stock: 18, updated: "2025-08-13T13:34:00" },
    { sku: "SKU-100001", name: "Organic Oats 1kg", category: "Grocery", price: 4.99, stock: 56, updated: "2025-08-12T15:45:00" },
    { sku: "SKU-100006", name: "Sparkling Water 330ml", category: "Beverages", price: 0.89, stock: 99, updated: "2025-08-11T11:32:00" },
    { sku: "SKU-100007", name: "Basmati Rice 5kg", category: "Grocery", price: 12.0, stock: 12, updated: "2025-08-10T22:12:00" },
  ];

  // Filtering
  const filteredData = data
    .filter((item) =>
      `${item.sku} ${item.name}`.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      categoryFilter === "All" ? true : item.category === categoryFilter
    )
    .filter((item) => {
      if (stockFilter === "All") return true;
      if (stockFilter === "In Stock") return item.stock > 10;
      if (stockFilter === "Low") return item.stock > 0 && item.stock <= 10;
      if (stockFilter === "Out") return item.stock === 0;
      return true;
    })
    .sort((a, b) => {
      if (sortField === "price") return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      if (sortField === "stock") return sortOrder === "asc" ? a.stock - b.stock : b.stock - a.stock;
      if (sortField === "updated") return sortOrder === "asc" ? new Date(a.updated) - new Date(b.updated) : new Date(b.updated) - new Date(a.updated);
      return 0;
    });

  // Print function
  const handlePrint = (item) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head><title>Print Item</title></head>
        <body>
          <h2>${item.name}</h2>
          <p><b>SKU:</b> ${item.sku}</p>
          <p><b>Category:</b> ${item.category}</p>
          <p><b>Price:</b> $${item.price}</p>
          <p><b>Stock:</b> ${item.stock}</p>
          <p><b>Updated:</b> ${new Date(item.updated).toLocaleString()}</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📦 Inventory Management</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by SKU or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-700 w-64"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-700"
        >
          <option>All</option>
          <option>Grocery</option>
          <option>Snacks</option>
          <option>Beverages</option>
        </select>

        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-700"
        >
          <option>All</option>
          <option>In Stock</option>
          <option>Low</option>
          <option>Out</option>
        </select>

        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-700"
        >
          <option value="updated">Updated</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="p-2 bg-blue-600 rounded hover:bg-blue-500"
        >
          {sortOrder === "asc" ? "⬆ Asc" : "⬇ Desc"}
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 border border-gray-700">SKU</th>
            <th className="p-3 border border-gray-700">Name</th>
            <th className="p-3 border border-gray-700">Category</th>
            <th className="p-3 border border-gray-700">Price</th>
            <th className="p-3 border border-gray-700">Stock</th>
            <th className="p-3 border border-gray-700">Updated</th>
            <th className="p-3 border border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.sku} className="hover:bg-gray-800">
              <td className="p-3 border border-gray-700">{item.sku}</td>
              <td className="p-3 border border-gray-700">{item.name}</td>
              <td className="p-3 border border-gray-700">{item.category}</td>
              <td className="p-3 border border-gray-700">${item.price.toFixed(2)}</td>
              <td className="p-3 border border-gray-700">
                {item.stock > 10 ? (
                  <span className="text-green-400">In Stock ({item.stock})</span>
                ) : item.stock > 0 ? (
                  <span className="text-yellow-400">Low ({item.stock})</span>
                ) : (
                  <span className="text-red-400">Out</span>
                )}
              </td>
              <td className="p-3 border border-gray-700">
                {new Date(item.updated).toLocaleString()}
              </td>
              <td className="p-3 border border-gray-700 flex gap-2">
                <button
                  onClick={() => setQrItem(item)}
                  className="p-2 bg-gray-700 rounded hover:bg-gray-600 flex items-center gap-1"
                >
                  <QrCode size={16} /> QR
                </button>
                <button
                  onClick={() => handlePrint(item)}
                  className="p-2 bg-gray-700 rounded hover:bg-gray-600 flex items-center gap-1"
                >
                  <Printer size={16} /> Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* QR Modal */}
      {qrItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded shadow-lg text-center">
            <h2 className="text-xl mb-2">QR for {qrItem.name}</h2>
            <QRCodeCanvas value={`${qrItem.sku} - ${qrItem.name}`} size={200} />
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => setQrItem(null)}
                className="p-2 bg-red-600 rounded hover:bg-red-500"
              >
                Close
              </button>
              <button
                onClick={() => window.print()}
                className="p-2 bg-blue-600 rounded hover:bg-blue-500"
              >
                Print QR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
