'use client';

import { supabase } from "@/lib/supabase"; 
import { useEffect, useState } from "react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  designation: string;
  bio: string;
}

const DashboardShowDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all doctors from Supabase
  const fetchDoctors = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('doctors').select('*');
    if (error) {
      console.error("Error fetching doctors:", error.message);
    } else {
      setDoctors(data || []);
    }
    setLoading(false);
  };

  // Permanently delete a doctor from Supabase
  const deleteDoctor = async (id: number) => {
    if (!confirm("Are you sure you want to permanently delete this doctor?")) return;

    // We do NOT filter the state here first.
    // We wait for the database request to succeed.
    const { error } = await supabase
      .from('doctors')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Supabase Delete Error:", error.message);
      alert("Failed to delete from database: " + error.message);
    } else {
      // Successfully deleted in DB, now update the UI
      setDoctors(doctors.filter(d => d.id !== id));
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <section className="p-4 md:p-6">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">All Doctors</h1>
        </div>
        
        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading data...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 text-xs uppercase font-semibold">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4 hidden md:table-cell">Specialty</th>
                  <th className="p-4 hidden md:table-cell">Designation</th>
                  <th className="p-4 hidden md:table-cell">Bio</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {doctors.length > 0 ? (
                  doctors.map((doctor) => (
                    <tr key={doctor.id} className="hover:bg-gray-50/80 transition-colors group">
                      <td className="p-4">
                        <div className="font-bold text-gray-900">{doctor.name}</div>
                        <div className="md:hidden text-xs text-gray-500 mt-1">{doctor.specialty} • {doctor.designation}</div>
                      </td>
                      <td className="p-4 hidden md:table-cell text-gray-600">{doctor.specialty}</td>
                      <td className="p-4 hidden md:table-cell text-gray-600">{doctor.designation}</td>
                      <td className="p-4 hidden md:table-cell text-gray-500 max-w-[200px] truncate">{doctor.bio}</td>
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => deleteDoctor(doctor.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                          title="Delete Doctor"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-gray-500">No doctors found in the database.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default DashboardShowDoctors;