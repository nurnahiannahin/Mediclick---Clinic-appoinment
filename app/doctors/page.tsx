import DoctorsList from '@/components/doctors-list'
import React from 'react'

const DoctorsMenu = () => {
  return (
    // Added 'w-full' to ensure the background covers the entire viewport width
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">All Specialists</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Book your consultation with our highly-rated medical professionals across various departments.
          </p>
        </div>

        {/* Doctors List Component - Now constrained by the max-w-7xl above */}
        <DoctorsList />
      </div>
    </div>
  )
}

export default DoctorsMenu