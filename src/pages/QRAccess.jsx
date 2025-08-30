import React, { useState } from "react";
import QRScanner from "../components/QRScanner";

export default function QRAccess() {
  const [result, setResult] = useState("");

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-sky-600">📷 QR Scanner</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto">
        <QRScanner onDetected={(data) => setResult(data)} />

        {result && (
          <p className="mt-6 text-green-600 font-semibold text-center break-words">
            ✅ Scanned Result: {result}
          </p>
        )}
      </div>
    </div>
  );
}
