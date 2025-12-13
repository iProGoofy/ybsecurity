"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: "Youssef Benali",
    role: "Oprichter & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Met meer dan 15 jaar ervaring in de beveiligingsbranche, leidde Youssef de visie om YBSecurity op te richten."
  },
  {
    id: 2,
    name: "Sarah van der Berg",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Sarah zorgt ervoor dat alle operaties soepel verlopen en onze teams optimaal presteren."
  },
  {
    id: 3,
    name: "Ahmed El Mansouri",
    role: "Hoofd Beveiliging",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Ahmed leidt onze beveiligingsteams met zijn uitgebreide kennis en ervaring in het veld."
  },
  {
    id: 4,
    name: "Lisa de Vries",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Lisa is verantwoordelijk voor het werven en ontwikkelen van ons talent binnen YBSecurity."
  }
];

const stats = [
  { number: "500+", label: "Tevreden Klanten" },
  { number: "50+", label: "Beveiligingsexperts" },
  { number: "10+", label: "Jaar Ervaring" },
  { number: "24/7", label: "Beschikbaarheid" }
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Betrouwbaarheid",
    description: "Wij staan garant voor betrouwbare beveiligingsdiensten waar je op kunt rekenen, dag en nacht."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Snelle Reactie",
    description: "Onze teams zijn getraind om snel en adequaat te reageren in elke situatie."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Professioneel Team",
    description: "Al onze medewerkers zijn gecertificeerd en volgen regelmatig trainingen en bijscholingen."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Klantgericht",
    description: "Jouw veiligheid en tevredenheid staan bij ons altijd op de eerste plaats."
  }
];

const milestones = [
  { year: "2026", title: "Oprichting YBSecurity", description: "Het begin van onze missie om Rotterdam veiliger te maken" },
];

// Footstep component
const Footstep = ({ delay, isLeft }: { delay: number; isLeft: boolean }) => {
  return (
    <div 
      className="absolute z-30"
      style={{
        animation: `walkDown 4s linear ${delay}s infinite`,
        left: isLeft ? 'calc(50% - 60px)' : 'calc(50% + 30px)',
        top: '-60px'
      }}
    >
      <div className="relative">
        <svg 
          width="50" 
          height="60" 
          viewBox="0 0 50 60" 
          fill="none"
          className={`drop-shadow-lg ${isLeft ? '' : 'scale-x-[-1]'}`}
        >
          {/* Main footprint shape */}
          <ellipse cx="25" cy="45" rx="12" ry="8" fill="#000000"/>
          <ellipse cx="25" cy="30" rx="10" ry="15" fill="#000000"/>


        </svg>
      </div>
    </div>
  );
};

export default function OverOnsPage() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [footsteps, setFootsteps] = useState<Array<{ id: number; isLeft: boolean; delay: number }>>([]);

  useEffect(() => {
    // Generate footsteps alternating left and right
    const steps = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      isLeft: i % 2 === 0,
      delay: i * 1.2
    }));
    setFootsteps(steps);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx global>{`
        @keyframes walkDown {
          0% {
            top: -60px;
            opacity: 0;
          }
          5% {
            opacity: 0.9;
          }
          95% {
            opacity: 0.9;
          }
          100% {
            top: calc(100% + 60px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>
        <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
              Over <span className="text-white">YBSecurity</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
              Al meer dan 5 jaar uw betrouwbare partner in beveiliging.
              Wij zorgen voor veiligheid met passie en professionaliteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verhaal Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                Ons Verhaal
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  YBSecurity werd opgericht in 2026 met een duidelijke missie: het leveren van 
                  betrouwbare en professionele beveiligingsdiensten aan bedrijven en particulieren 
                  in Rotterdam en omstreken.
                </p>
                <p>
                  Wat begon als een klein team van beveiligingsexperts is uitgegroeid tot een van 
                  de meest vertrouwde namen in de beveiligingsbranche. Onze groei is te danken aan 
                  onze onwrikbare toewijding aan kwaliteit, integriteit en klanttevredenheid.
                </p>
                <p>
                  Vandaag de dag werken we met meer dan 50 professionals die dagelijks hun uiterste 
                  best doen om de veiligheid van onze klanten te waarborgen. Van evenementenbeveiliging 
                  tot objectbeveiliging, wij zijn er 24/7 voor u.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-black to-gray-800 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=800&fit=crop" 
                  alt="YBSecurity Team"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white rounded-2xl shadow-xl p-6 hidden sm:block">
                <div className="text-4xl font-bold text-black mb-2">Nieuw!</div>
                <div className="text-gray-600">Opgericht in 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarden Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Onze kernwaarden
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Deze waarden vormen de basis van alles wat we doen en definiëren wie we zijn als bedrijf.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Animated Footsteps */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Onze Reis
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Van een beginnend bedrijf naar een groeiende beveiligingspartner in de regio.
            </p>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8">
                {/* Vertical line for mobile */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                {/* Dot indicator */}
                <div className="absolute left-0 top-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-black mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative" style={{ minHeight: '400px' }}>
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0"></div>
            
            {/* Animated footsteps container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
              {footsteps.map((step) => (
                <Footstep key={step.id} delay={step.delay} isLeft={step.isLeft} />
              ))}
            </div>
            
            <div className="space-y-12 relative z-10">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-black mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-semibold text-black mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex w-12 h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg z-10 flex-shrink-0 relative">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 text-black">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Klaar om samen te werken?
            </h2>
            <p className="text-black sm:text-lg leading-relaxed mb-8 sm:mb-12">
              Neem vandaag nog contact met ons op en ontdek hoe wij uw veiligheid
              naar een hoger niveau kunnen tillen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:border border-black hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl">
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}