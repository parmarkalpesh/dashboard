import React from 'react'
import QRCode from 'react-qr-code'

export default function QRGenerator({ value }){
  return (
    <div className="bg-white p-3 rounded-lg inline-block card-shadow">
      <QRCode value={value || 'no-value'} size={110} />
      <div className="mt-2 text-xs text-gray-600 text-center">{value}</div>
    </div>
  )
}
