import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image remains the same */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.png" 
          alt="MediClick Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div 
          className="absolute inset-0 bg-[#e8f3f0]/30 backdrop-blur-sm"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 95%)'
          }}
        ></div>
      </div>

      {/* Hero Content: Optimized for Mobile */}
      <div className="relative z-10 w-[90%] md:w-[60%] text-center px-4 py-8 md:px-8 md:py-10 bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl">
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Your Health, Simplified with <span className="text-teal-600">MediClick</span>
        </h1>
        <p className="text-base md:text-xl text-gray-800 mb-6 md:mb-8 mx-auto font-medium">
          Experience seamless appointment booking and expert care, all in one place.
        </p>
        
        <Link 
          href="/book" 
          className="inline-block bg-teal-600 text-white px-8 py-3 md:px-10 md:py-2 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;