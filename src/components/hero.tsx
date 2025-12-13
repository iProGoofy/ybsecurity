"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id='home' className="py-8 sm:py-12 lg:py-16 mt-14 sm:mt-16 lg:mt-0">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto lg:mx-0">
          <h1 className="font-semibold leading-tight text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Uw veiligheid is bij YBSecurity in goede handen.
          </h1>
          
          <p className="text-gray-700 text-base sm:text-lg tracking-tight max-w-xl mx-auto lg:mx-0 lg:max-w-none">
            Uw organisatie verdient beveiligers die meedenken, alert zijn en professioneel optreden. YBSecurity biedt betrouwbare beveiligingsoplossingen die precies aansluiten op uw wensen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link 
              href="/contact" 
              className="px-8 py-3 h-12 rounded-3xl text-black border border-gray-200 bg-gray-100 hover:bg-gray-200 duration-300 ease-linear flex items-center justify-center w-full sm:w-auto font-medium"
            >
              Plan een gesprek
            </Link>
          </div>
        </div>

        {/* Images */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[35rem] mx-auto max-w-lg lg:max-w-none">
          {/* Front Image */}
          <div className="absolute left-0 top-0 w-[60%] h-[70%] sm:h-[75%] lg:h-[80%] rounded-3xl overflow-hidden border-4 sm:border-8 border-black z-20 shadow-xl">
            <Image 
              src="/evenement-voor.png" 
              alt="YBSecurity evenement beveiliging" 
              width={1300} 
              height={1300} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Back Image */}
          <div className="absolute right-0 bottom-0 w-[65%] sm:w-[70%] lg:w-[75%] h-[65%] sm:h-[70%] lg:h-[75%] rounded-3xl overflow-hidden sm:border-8 border-black z-10 shadow-lg">
            <Image 
              src="/evenement-lachen.png" 
              alt="YBSecurity team" 
              width={1400} 
              height={1400} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}