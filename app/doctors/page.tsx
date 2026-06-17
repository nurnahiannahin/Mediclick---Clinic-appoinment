import DoctorsList from '@/components/doctors-list'
import React from 'react'

const DoctorsMenu = () => {
  return (
    <div  className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">All Specialists</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book your consultation with our highly-rated medical professionals across various departments.
        </p>
      </div>
      <DoctorsList />

    </div>
  )
}

export default DoctorsMenu
