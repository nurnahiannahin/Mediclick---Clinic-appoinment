'use client';

import { useState, useEffect, Suspense } from 'react';
import { supabase } from "@/lib/supabase";
import { useSearchParams } from 'next/navigation';

// The main Booking component
const BookingForm = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState<any[]>([]);

  // 1. Get values from URL or set as empty strings
  const initialDoctor = searchParams.get('doctorName') || '';
  const initialSpecialty = searchParams.get('specialty') || '';

  const [formData, setFormData] = useState({
    patient_name: '',
    age: '',
    phone: '',
    email: '',
    specialty: initialSpecialty,
    doctor_name: initialDoctor,
    appointment_date: '',
    status: 'pending' // Default status
  });

  // 2. Fetch all doctors only if we aren't already coming from a specific card
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await supabase.from('doctors').select('*');
      setDoctors(data || []);
    };
    fetchDoctors();
  }, []);

  // 3. Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Determine the correct doctor_id:
    // If they came from a card, get it from URL. 
    // If they picked manually, find the ID from the 'doctors' array using the name.
    const selectedDoctor = doctors.find(d => d.name === formData.doctor_name);
    const doctorId = searchParams.get('doctorId') || (selectedDoctor ? selectedDoctor.id : null);

    if (!doctorId) {
      alert("Please select a doctor.");
      setLoading(false);
      return;
    }

    // 2. Prepare data ONLY for columns that exist in your 'appointments' table
    const appointmentData = {
      patient_name: formData.patient_name,
      age: formData.age,
      phone: formData.phone,
      email: formData.email,
      appointment_date: formData.appointment_date,
      status: 'pending',
      doctor_name: formData.doctor_name, // Matches your new column
      specialty: formData.specialty,     // Matches your new column
      doctor_id: searchParams.get('doctorId') // Matches your new column
    };

    // 3. Insert
    const { error } = await supabase.from('appointments').insert([appointmentData]);

    if (error) {
      alert("Error saving: " + error.message);
    } else {
      alert("Appointment successfully booked!");
      // Reset form
      setFormData({ 
        patient_name: '', age: '', phone: '', email: '', 
        specialty: '', doctor_name: '', appointment_date: '', status: 'pending' 
      });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 md:p-12 bg-white rounded-3xl shadow-lg border border-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book Your Appointment</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <InputField label="Patient Name" value={formData.patient_name} onChange={(v: string) => setFormData({...formData, patient_name: v})} />
        <InputField label="Age" type="number" value={formData.age} onChange={(v: string) => setFormData({...formData, age: v})} />
        <InputField label="Phone Number" value={formData.phone} onChange={(v: string) => setFormData({...formData, phone: v})} />
        <InputField label="Email Address" type="email" value={formData.email} onChange={(v: string) => setFormData({...formData, email: v})} />

        {/* Dynamic Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Specialty</label>
          <select 
            disabled={!!initialSpecialty} 
            value={formData.specialty}
            onChange={(e) => setFormData({...formData, specialty: e.target.value})}
            className="w-full p-3 border rounded-xl"
          >
            <option value="">Select Specialty</option>
            {Array.from(new Set(doctors.map(d => d.specialty))).map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Doctor</label>
          <select 
            disabled={!!initialDoctor} 
            value={formData.doctor_name}
            onChange={(e) => setFormData({...formData, doctor_name: e.target.value})}
            className="w-full p-3 border rounded-xl"
          >
            <option value="">Select Doctor</option>
            {doctors.filter(d => !formData.specialty || d.specialty === formData.specialty).map(d => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <InputField label="Appointment Date" type="date" value={formData.appointment_date} onChange={(v: string) => setFormData({...formData, appointment_date: v})} />
        </div>

        <button disabled={loading} className="md:col-span-2 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition">
          {loading ? "Saving..." : "Confirm Appointment"}
        </button>
      </form>
    </div>
  );
};

// Simple input component for reusability
const InputField = ({ label, type = "text", value, onChange }: any) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input type={type} required value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-3 border border-gray-200 rounded-xl outline-teal-500" />
  </div>
);

// Next.js requires Suspense for useSearchParams
export default function Booking() {
  return <Suspense fallback={<div>Loading...</div>}><BookingForm /></Suspense>;
}