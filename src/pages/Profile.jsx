import React, { useState } from "react";
import { Camera, Mail, Phone, Briefcase, User } from "lucide-react";

export default function Profile() {
  // Example state (later you can fetch from API or backend)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    post: "Manager",
    avatar: "https://i.pravatar.cc/150?img=32", // placeholder avatar
  });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Card */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 rounded-2xl shadow-xl p-8 relative">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={profile.avatar}
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md object-cover"
            />
            {/* Camera Icon for update */}
            <button className="absolute bottom-2 right-2 bg-indigo-600 p-2 rounded-full shadow hover:bg-indigo-700 transition">
              <Camera size={16} className="text-white" />
            </button>
          </div>

          <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
          <p className="text-indigo-400 text-sm font-medium">{profile.post}</p>
        </div>

        {/* Info Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl">
            <Mail size={18} className="text-indigo-400" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-sm font-medium">{profile.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl">
            <Phone size={18} className="text-indigo-400" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-sm font-medium">{profile.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl">
            <Briefcase size={18} className="text-indigo-400" />
            <div>
              <p className="text-sm text-gray-400">Post</p>
              <p className="text-sm font-medium">{profile.post}</p>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 
                             text-white font-medium shadow-lg transition">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
