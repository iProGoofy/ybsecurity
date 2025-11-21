"use client"
import Image from 'next/image'
import Link from 'next/link'

 
export default function HeroSection() {
return (
<>
  <section id='home' className="py-4 mt-14 sm:mt16 lg:mt-0">
    <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
      <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
        <h1 className=" font-semibold leading-tight text-teal-950 text-black text-4xl sm:text-5xl lg:text-6xl">
          Uw veiligheid is bij YBSecurity in goede handen.
        </h1>
        <p className=" flex text-gray-700 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
          Uw organisatie verdient beveiligers die meedenken, alert zijn en professioneel optreden. YBSecurity biedt betrouwbare beveiligingsoplossingen die precies aansluiten op uw wensen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
          <Link href="/contact" className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto">
            Plan een gesprek
          </Link>
        </div>

      </div>
      <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
        <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
          <Image src="/evenement-voor.png" alt="" width={1300} height={1300} className="w-full h-full object-cover z-30" />
        </div>
        <div className="absolute left-50 top-30 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
          <Image src="/evenement-lachen.png" alt="" height={1400} width={1400} className="z-10 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</>
)
}