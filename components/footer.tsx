import React from 'react';
import Link from 'next/link';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        
        {/* Call to Action Section */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500 rounded-2xl mb-6 text-white text-2xl font-bold shadow-lg shadow-teal-500/20">
            +
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Book Your Appointment Today</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Manage your health journey with MediClick. Book appointments with our handpicked wellness experts whenever or wherever you want!
          </p>
          <button className="bg-teal-600 text-white cursor-pointer px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all active:scale-95 shadow-md">
            Book Appointment →
          </button>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 dark:border-gray-800 pt-12">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3"><FiPhone className="shrink-0" /> 602-774-4735</li>
              <li className="flex items-start gap-3"><FiMapPin className="shrink-0 mt-0.5" /> 1022 South 51st Street, Phoenix, AZ</li>
              <li className="flex items-center gap-3"><FiMail className="shrink-0" /> hello@mediclick.com</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-900 dark:text-white">Navigate</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {["Doctors", "Support"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-teal-600 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Brand Placeholder */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white">MediClick</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Providing professional medical booking services with care and precision for our community.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-xs md:text-sm text-gray-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} MediClick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;