'use client';

import DashboardAddDoctors from "@/components/dashboard-add-doctors";
import DashboardShowAppoinments from "@/components/dashboard-show-appoinments";
import DashboardShowDoctors from "@/components/dashboard-show-doctors";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Appoinment {
  id: number;
  patient_name: string;
  age: number;
  phone: string;
  email: string;
  appoinment_date: Date;
  status: string;
}

const AdminDashboard = () => {

  const router = useRouter()

  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const {data: {session}} = await supabase.auth.getSession()
      
      if(!session) {
        router.push('/admin')
      } else {
        setAuthChecked(true)
      }
    }

    checkAuth()
  }, [])

  
  return (
    <section className="p-4 md:p-10 space-y-10 bg-gray-50/50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <button
            onClick={async () => {
                await supabase.auth.signOut()
                router.push('/admin')
            }}
            className="px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
            Logout
        </button>
    </div>

    {/* Appoinments */}
    <DashboardShowAppoinments />
    {/* Add Doctors */}
    <DashboardAddDoctors />
    {/* Show Doctors */}
    <DashboardShowDoctors />
    </section>
  );
};

export default AdminDashboard;