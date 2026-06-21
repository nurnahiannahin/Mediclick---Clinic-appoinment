'use client';

import { supabase } from "@/lib/supabase";
import { useState } from "react";

const DashboardAddDoctors = () => {
  const [doctorName, setDoctorName] = useState('');
  const [specialty, setSpecialty] = useState('Cardiologist');
  const [designation, setDesignation] = useState('');
  const [bio, setBio] = useState('');
  const [file, setFile] = useState<File | null>(null); // New state for file
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleAppointDoctor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");
    
    setLoading(true);
    setStatus('idle');

    try {
      // 1. Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('doctors-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('doctors-images')
        .getPublicUrl(fileName);

      // 3. Insert into Table
      const { error: dbError } = await supabase.from('doctors').insert({
        name: doctorName,
        specialty: specialty,
        designation: designation,
        bio: bio,
        imageUrl: publicUrl // Store the public URL
      });

      if (dbError) throw dbError;

      setStatus('success');
      setDoctorName('');
      setDesignation('');
      setBio('');
      setFile(null);
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const specialties = [
  "Cardiologist",
  "Neurologist",
  "Pediatrician",
  "Dermatologist",
  "Orthopedic Surgeon",
  "General Practitioner",
  "Dentist",
  "Psychiatrist",
  "Gynecologist",
  "Ophthalmologist",
  "ENT Specialist",
  "Urologist",
  "Endocrinologist",
  "Gastroenterologist"
];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Appoint New Doctor</h1>
        
        {status === 'success' && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl">✅ Doctor added!</div>}
        {status === 'error' && <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl">❌ Error. Check RLS policies.</div>}

        <form onSubmit={handleAppointDoctor} className="flex flex-col gap-5">
          <input className="border p-3 rounded-xl" type="text" placeholder="Doctor's Name" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required />
          
          <select 
            className="border p-3 rounded-xl w-full" 
            value={specialty} 
            onChange={(e) => setSpecialty(e.target.value)}
            required
          >
            <option value="" disabled>Select a Specialty</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>

          <input className="border p-3 rounded-xl" type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
          <input className="border p-3 rounded-xl" type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
          
          {/* File Input */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-sm">Upload Doctor Image</label>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
          </div>

          <button disabled={loading} className="bg-teal-600 text-white py-4 rounded-xl font-bold">
            {loading ? 'Uploading...' : 'Appoint New Doctor'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardAddDoctors;