import React from 'react';
import { Stethoscope, HeartPulse, Microscope, Brain, Baby, Activity } from 'lucide-react';

const servicesData = [
  { name: "General Checkup", icon: <Stethoscope />, desc: "Comprehensive health assessments for your overall well-being." },
  { name: "Cardiac Care", icon: <HeartPulse />, desc: "Specialized diagnostics and monitoring for heart health." },
  { name: "Laboratory Tests", icon: <Microscope />, desc: "State-of-the-art pathology and diagnostic testing services." },
  { name: "Neurology", icon: <Brain />, desc: "Expert care for neurological conditions and headache management." },
  { name: "Pediatrics", icon: <Baby />, desc: "Dedicated and gentle care tailored specifically for children." },
  { name: "Physiotherapy", icon: <Activity />, desc: "Personalized recovery plans to improve mobility and function." },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Introduction with Teal Theme */}
        <div className="lg:col-span-1 relative">
            {/* Sticky container for modern feel */}
            <div className="lg:sticky lg:top-24 space-y-8">
                
                {/* Highlight Badge */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-xs tracking-widest uppercase border border-teal-100">
                Our Excellence
                </span>

                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Precision Care <br />
                <span className="text-teal-600">for Better Living</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                We blend clinical expertise with patient-centric innovation. Our facility is 
                designed to provide seamless, modern healthcare experiences that prioritize 
                your comfort and health outcomes above all else.
                </p>

                {/* Modern Card Design with Teal Accent */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-2xl shadow-teal-200">
                <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    The Clinical Promise
                </h4>
                <p className="text-teal-50 text-sm leading-relaxed opacity-90">
                    Every service we offer is backed by evidence-based medicine and delivered 
                    with the highest standard of empathy. Your journey toward wellness is 
                    our primary mission.
                </p>
                
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl"></div>
                </div>
            </div>
        </div>

        {/* Right Column: Service Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;