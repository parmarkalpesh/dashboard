import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

/*
  QR scanner wrapper using html5-qrcode.
  Install: npm i html5-qrcode
*/

export default function QRScanner({ onDetected }) {
  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const scanner = new Html5QrcodeScanner("qr-reader", config, false);

    scanner.render(
      (decodedText) => {
        onDetected && onDetected(decodedText);
        // stop scanning after first detection (optional)
        try {
          scanner.clear().catch(() => {});
        } catch (e) {}
      },
      (errorMessage) => {
        // console.log("QR Error:", errorMessage); // keep silent for smoother UX
      }
    );

    return () => {
      try {
        scanner.clear().catch(() => {});
      } catch (e) {}
    };
  }, [onDetected]);

  return (
    <div
      id="qr-reader"
      className="w-full flex justify-center items-center"
      style={{ minHeight: "280px" }}
    />
  );
}
