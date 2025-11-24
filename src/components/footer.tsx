"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-x-3 mb-6">
              <Image 
                src="/YB-WHITE.png" 
                alt="YBSecurity Logo" 
                width={100} 
                height={100} 
                className="h-40 w-40 object-cover rounded-full" 
              />
              
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Uw vertrouwde partner voor professionele beveiligingsdiensten in Nederland. 
              Wij zorgen voor uw veiligheid met 24/7 beschikbaarheid en jarenlange ervaring.
            </p>
            
            {/* Certifications */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3"></h4>
              <div className="flex items-center gap-4">
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Onze Diensten</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/diensten/mobiele-surveillance" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Mobiele Surveillance
                </Link>
              </li>
              <li>
                <Link href="/diensten/objectbewaking" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Objectbewaking
                </Link>
              </li>
              <li>
                <Link href="/diensten/winkelbewaking" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Winkelbewaking
                </Link>
              </li>
              <li>
                <Link href="/diensten/evenementbeveiliging" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Evenementbeveiliging
                </Link>
              </li>
              <li>
                <Link href="/diensten/alarmopvolging" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Alarmopvolging
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Bedrijf</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/over-ons" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Over YBSecurity
                </Link>
              </li>
              <li>
                <Link href="/vacatures" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Vacatures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-sm">
                    Byronstraat 47<br />
                    Venlo, 5924 XL<br />
                    
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+31612345678" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +31 6 34268574
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ybsecurity.nl" className="text-gray-400 hover:text-white transition-colors duration-200">
                  info@ybsecurity.nl
                </a>
              </div>

              {/* 24/7 Service */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400">24/7 Beschikbaar</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Volg ons</h4>
              <div className="flex items-center gap-4">
                <a href="#facebook" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#instagram" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.985-5.368 11.985-11.986C23.971 5.367 18.635.001 12.017.001zM8.449 20.312c-3.356 0-6.077-2.721-6.077-6.078 0-3.356 2.721-6.077 6.077-6.077 3.355 0 6.076 2.721 6.076 6.077 0 3.357-2.721 6.078-6.076 6.078z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-white mb-2">
                Blijf op de hoogte van beveiligingstrends
              </h3>
              <p className="text-gray-400 text-sm">
                Ontvang tips, nieuws en updates over beveiliging direct in uw inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-96">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              />
              <button className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                Aanmelden
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2025 YBSecurity. Alle rechten voorbehouden.</p>
              <div className="flex items-center gap-4">
  <a 
  href="/documents/privacystatement.pdf" 
  target='_blank'
  className="hover:text-white transition-colors duration-200"
>
  Privacybeleid
</a>
  <a 
  href="/documents/algemene-voorwaarden.pdf" 
  target='_blank'
  className="hover:text-white transition-colors duration-200"
>
  Algemene Voorwaarden
</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Ontworpen door</span>
                <Link href="https://pixbyte.nl" target="_blank" className="text-white hover:text-gray-300 transition-colors duration-200">
                    Pixbyte
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}