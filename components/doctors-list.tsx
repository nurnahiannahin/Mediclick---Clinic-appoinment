import React from 'react';

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    bio: "Specializing in preventative heart health and advanced cardiac imaging with over 15 years of clinical experience.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    bio: "Expert in neurodegenerative diseases and chronic headache management, dedicated to patient-centered care.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    specialty: "Pediatrician",
    bio: "Passionate about child development and family health, ensuring a comfortable environment for young patients.",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

const DoctorsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center text-center">
              {/* Avatar with subtle ring */}
              <div className="relative mb-6">
                <img 
                  src={doctor.avatar} 
                  alt={doctor.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md ring-2 ring-blue-50"
                />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>

              {/* Identity */}
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
              <p className="text-blue-600 font-medium mb-4 bg-blue-50 px-3 py-1 rounded-full text-sm">
                {doctor.specialty}
              </p>
              
              {/* Credibility */}
              <p className="text-gray-500 text-sm mb-8 leading-relaxed h-12 overflow-hidden line-clamp-2">
                {doctor.bio}
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-3 w-full">
                <button className="cursor-pointer w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-md shadow-blue-200 transition-all active:scale-95">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;