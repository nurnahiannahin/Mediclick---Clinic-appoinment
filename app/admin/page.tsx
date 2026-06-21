'use client';

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Admin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error) {
      alert("Login failed"+ error.message)
    }else {
      router.push('/admin/dashboard')
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-500 mt-2">Sign in to manage MediClick operations</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              type="email"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              placeholder="admin@mediclick.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit" 
            className="w-full bg-teal-600 font-bold text-white py-3.5 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-200 mt-2 active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;