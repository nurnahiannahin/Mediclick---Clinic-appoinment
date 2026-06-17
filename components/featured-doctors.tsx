import React from 'react'
import DoctorsList from './doctors-list'

const FeaturedDoctors = () => {
  return (
    <div  className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Specialists</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book your consultation with our highly-rated medical professionals across various departments.
        </p>
      </div>
      <DoctorsList />

    </div>
  )
}

export default FeaturedDoctors
