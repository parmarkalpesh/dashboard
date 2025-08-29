import React, { useState } from "react";
import QRScanner from "../components/QRScanner";

export default function QRAccess() {
  const [result, setResult] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">QR Scanner</h1>
      <QRScanner onScanSuccess={(data) => setResult(data)} />
      {result && (
        <p className="mt-4 text-green-600 font-semibold">
          ✅ Scanned Result: {result}
        </p>
      )}
    </div>
  );
}
