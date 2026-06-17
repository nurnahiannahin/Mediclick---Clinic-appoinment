import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">We're here to help with your health and wellness journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Clinic Address & Info */}
        <div className="bg-teal-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-8">Clinic Location</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-blue-100">123 Health Avenue, Suite 400<br/>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-blue-100">+880 1234-567890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-blue-100">support@clinicname.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-blue-100">Sat - Thu: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: About Us Description */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Clinic?</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              At our clinic, we believe that quality healthcare should be accessible, 
              transparent, and patient-centered. Founded in 2020, we have dedicated 
              ourselves to bridging the gap between advanced medical technology and 
              compassionate personal care.
            </p>
            <p>
              Our team of specialists is committed to providing evidence-based 
              treatments tailored to your unique needs. We prioritize your comfort 
              and time, ensuring that every interaction—from booking to post-consultation—is 
              seamless and stress-free.
            </p>
            <div className="pt-6">
              <Link href="/doctors">
                <button className="bg-gray-900 cursor-pointer text-white px-10 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Visit all Doctors
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;