'use client';

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

const DashboardShowAppointments = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      // We use .select('*, doctors(name, specialty)') to join the doctor data
      const { data, error } = await supabase
        .from('appointments')
        .select('*, doctors(name, specialty)');

      if (error) {
        console.error("Error fetching appointments:", error.message);
      } else {
        setAppointments(data || []);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">All Appointments</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b border-gray-100">
              <th className="p-4 font-medium">Patient</th>
              <th className="p-4 font-medium">Age</th>
              <th className="p-4 font-medium">Phone</th>
              <th className="p-4 font-medium">Specialist</th>
              <th className="p-4 font-medium">Doctor</th>
              <th className="p-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {loading ? (
              <tr><td colSpan={6} className="p-4 text-center">Loading...</td></tr>
            ) : appointments.map((app) => (
              <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold">{app.patient_name}</td>
                <td className="p-4">{app.age}</td>
                <td className="p-4">{app.phone}</td>
                {/* Accessing joined data from the 'doctors' table */}
                <td className="p-4">{app.doctors?.specialty || app.specialty || 'N/A'}</td>
                <td className="p-4 text-teal-600 font-medium">{app.doctors?.name || app.doctor_name || 'N/A'}</td>
                <td className="p-4">
                  {new Date(app.appointment_date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardShowAppointments;