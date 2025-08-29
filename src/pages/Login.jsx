import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [form, setForm] = useState({ user: '', pass: '' })
  const navigate = useNavigate()
  function submit(e){
    e.preventDefault()
    // fake login
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl card-shadow">
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input required placeholder="Username" value={form.user} onChange={e=>setForm({...form,user:e.target.value})} className="p-3 border rounded" />
          <input required type="password" placeholder="Password" value={form.pass} onChange={e=>setForm({...form,pass:e.target.value})} className="p-3 border rounded" />
          <button className="mt-2 bg-indigo-600 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  )
}
