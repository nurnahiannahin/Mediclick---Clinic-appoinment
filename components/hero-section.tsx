import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.png" 
          alt="MediClick Hero Background"
          fill
          priority
          className="object-cover"
        />
        
        {/* Radial Blur Overlay: Sharp edges, blurry center */}
        <div 
          className="absolute inset-0 bg-[#e8f3f0]/30 backdrop-blur-sm"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 95%)'
          }}
        ></div>
      </div>

      {/* Hero Content: Added glassmorphism effect */}
<div className="relative z-10 w-[60%] text-center px-8 py-10 bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl">
  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-sm">
    Your Health, Simplified with <span className="text-teal-600">MediClick</span>
  </h1>
  <p className="text-lg md:text-xl text-gray-800 mb-8 mx-auto font-medium drop-shadow-sm">
    Experience seamless appointment booking, expert medical care, and real-time health management, all in one place.
  </p>
  
  <Link 
    href="/book" 
    className="inline-block bg-teal-600 text-white px-10 py-2 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl hover:scale-105"
  >
    Book Now
  </Link>
</div>
    </section>
  );
};

export default Hero;