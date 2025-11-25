import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// Import je services array (pas het pad aan naar waar jouw component staat)
import { services } from '@/data/services'; // Pas dit pad aan!

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DienstDetailPage({ params }: PageProps) {
  // Await the params since they're now a Promise in Next.js 15
  const { slug } = await params;
  
  // Zoek de service op basis van de slug
  const service = services.find(s => s.id === slug);

  // Als service niet gevonden wordt, toon 404
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="#diensten" className="hover:text-white transition-colors">
                  Diensten
                </Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </div>
            </nav>

            {/* Title and Icon */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-white text-black flex items-center justify-center mr-6">
                {service.icon}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                {service.title}
              </h1>
            </div>

            {/* Short Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
                Over deze dienst
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {service.detailedDescription}
              </p>

              {/* Features */}
              <h3 className="text-xl font-semibold text-black mb-4">
                Wat krijgt u van ons?
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="lg:sticky lg:top-8">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="rounded-2xl object-cover"
                    />
                  ) : (
                    <span>Afbeelding niet beschikbaar</span>
                  )}  
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="bg-black rounded-3xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Interesse in {service.title}?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Neem contact met ons op voor een vrijblijvende offerte of advies op maat. 
              Wij denken graag met u mee over de beste beveiligingsoplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" >
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto">
                Vraag offerte aan
              </button>
              </a>
              <a href="tel:+31634268574" className="w-full sm:w-auto">
                <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
                  Bel direct: +31 6 34268574
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-8 text-center">
            Andere diensten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((otherService) => (
                <Link
                  key={otherService.id}
                  href={`/diensten/${otherService.id}`}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mr-3">
                      {otherService.icon}
                    </div>
                    <h3 className="font-semibold text-black">
                      {otherService.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {otherService.shortDescription}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Genereer statische params voor alle services (optioneel, voor betere performance)
export async function generateStaticParams() {
  // Check if services is available and is an array
  if (!services || !Array.isArray(services)) {
    console.warn('Services array is not available during build time');
    return [];
  }
  
  return services.map((service) => ({
    slug: service.id,
  }));
}