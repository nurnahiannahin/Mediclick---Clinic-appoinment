'use client';

import { supabase } from "@/lib/supabase";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

// 1. Ensure this interface matches your Supabase Table columns EXACTLY
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  designation: string; // Keep this to match your Dashboard
  bio: string;
  imageUrl: string; // Ensure this matches your column name
}

const DoctorsList = () => {
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      // 2. Fetch all data
      const { data, error } = await supabase.from('doctors').select('*');
      
      if (error) {
        console.error("Error fetching doctors:", error.message);
      } else {
        console.log("Fetched Data:", data); // DEBUG: Check if data is arriving
        setDoctors(data || []);
      }
      setLoading(false);
    };

    fetchDoctors();
  }, []);

  const handleDoctorBook = (doctor: Doctor) => {
    const params = new URLSearchParams({
      doctorId: doctor.id.toString(),
      doctorName: doctor.name,
      specialty: doctor.specialty
    });
    router.push(`/book?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loading ? (
        <p className="text-center col-span-full">Loading doctors...</p>
      ) : doctors.length > 0 ? (
        doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img 
                  // 3. Fallback to a placeholder if imageUrl is missing
                  src={doctor.imageUrl || "https://via.placeholder.com/150"} 
                  alt={doctor.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md ring-2 ring-blue-50"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150"; }}
                />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
              <p className="text-blue-600 font-medium mb-4 bg-blue-50 px-3 py-1 rounded-full text-sm">
                {doctor.specialty}
              </p>
              
              <p className="text-gray-500 text-sm mb-8 leading-relaxed h-12 overflow-hidden line-clamp-2">
                {doctor.bio}
              </p>

              <button 
                onClick={() => handleDoctorBook(doctor)} 
                className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-md transition-all active:scale-95"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">No doctors available.</p>
      )}
    </div>
  );
};

export default DoctorsList;