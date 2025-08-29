import React, { useState } from "react";
import { Package, DollarSign, Boxes, Tag, Upload, Image as ImageIcon } from "lucide-react";

export default function AddInventory() {
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("✅ Item Added!");
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          ➕ Add New Inventory Item
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* SKU */}
          <div className="relative">
            <Tag className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="sku"
              placeholder="SKU Code"
              value={formData.sku}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Name */}
          <div className="relative">
            <Package className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <Boxes className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Price */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Stock */}
          <div className="relative">
            <Boxes className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              value={formData.stock}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Upload Image */}
          <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-xl p-4 hover:border-blue-500 transition">
            <label className="cursor-pointer flex flex-col items-center text-gray-400">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border border-gray-700 mb-2"
                />
              ) : (
                <ImageIcon size={40} className="mb-2" />
              )}
              <span>{preview ? "Change Image" : "Upload Image"}</span>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition"
            >
              ✅ Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
