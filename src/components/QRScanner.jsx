import React from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

/*
  QR scanner wrapper using html5-qrcode.
  Install: npm i html5-qrcode
*/

export default function QRScanner({ onDetected }){
  React.useEffect(()=>{
    const config = { fps: 10, qrbox: 250 }
    const scanner = new Html5QrcodeScanner('qr-reader', config, false)
    scanner.render((decoded)=>{
      onDetected && onDetected(decoded)
      // stop scanning after detection (optional)
      try{ scanner.clear().catch(()=>{}) }catch(e){}
    }, (err)=>{})
    return ()=>{
      try{ scanner.clear().catch(()=>{}) }catch(e){}
    }
  },[])

  return <div id="qr-reader" className="w-full" />
}
