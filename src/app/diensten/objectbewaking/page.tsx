import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/components/diensten'

interface ServicePageProps {
  params: { slug: string }
}

// Generate static paths for all services (for optimization)
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

// Generate metadata for SEO
export function generateMetadata({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug)
  
  if (!service) {
    return {
      title: 'Dienst niet gevonden - YBSecurity',
    }
  }

  return {
    title: `${service.title} - YBSecurity`,
    description: service.shortDescription,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-tr from-pink-700 to-orange-800 text-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-16 sm:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-pink-100">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/#diensten" className="hover:text-white transition-colors">
                Diensten
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">{service.title}</span>
            </div>
          </nav>

          {/* Service Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mr-6">
                  {service.icon}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-pink-100 leading-relaxed mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-pink-700 rounded-2xl font-semibold hover:bg-gray-50 transition-colors duration-300">
                  Vraag offerte aan
                </button>
                <Link 
                  href="/#contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-pink-700 transition-all duration-300 text-center"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-semibold text-black mb-6">
                Over onze {service.title.toLowerCase()}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {service.detailedDescription}
              </p>

              <h3 className="text-2xl font-semibold text-black mb-6">
                Wat kunnen wij voor u doen?
              </h3>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-700 to-orange-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-tr from-pink-700 to-orange-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Waarom kiezen voor YBSecurity?
                </h3>
                <ul className="space-y-3 text-pink-100">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ervaren en professioneel getrainde medewerkers
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 bereikbaarheid en snelle responstijden
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Maatwerk oplossingen voor elke situatie
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Transparante communicatie en rapportage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">
                Direct contact opnemen?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Heeft u vragen over onze {service.title.toLowerCase()}? 
                Neem direct contact met ons op voor persoonlijk advies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+31 6 12345678</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">info@ybsecurity.nl</span>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-tr from-pink-700 to-orange-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Bel nu direct
              </button>
            </div>

            {/* Other Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">
                Andere diensten
              </h3>
              <div className="space-y-3">
                {services
                  .filter((s) => s.id !== service.id)
                  .slice(0, 4)
                  .map((otherService) => (
                    <Link
                      key={otherService.id}
                      href={`/diensten/${otherService.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-pink-700 to-orange-800 text-white flex items-center justify-center flex-shrink-0">
                        {otherService.icon}
                      </div>
                      <div>
                        <p className="font-medium text-black group-hover:text-pink-700 transition-colors">
                          {otherService.title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link 
                href="/#diensten"
                className="block mt-4 text-center px-4 py-2 text-pink-700 hover:bg-pink-50 rounded-xl transition-colors"
              >
                Alle diensten bekijken
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}