"use client";
import Image from 'next/image';
import Link from 'next/link';
import { JSX, useState } from 'react';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  icon: JSX.Element;
  image: string;
}

const services: Service[] = [
  {
    id: 'mobiele-surveillance',
    title: 'Mobiele Surveillance',
    shortDescription: 'Flexibele bewaking op locatie waar u deze het meest nodig heeft.',
    detailedDescription: 'Onze mobiele surveillance dienst biedt u de flexibiliteit om beveiliging daar in te zetten waar u deze het hardst nodig heeft. Met ervaren beveiligingsmedewerkers en moderne uitrusting zorgen wij voor een zichtbare afschrikwekkende werking en snelle respons bij incidenten.',
    features: [
      'Zichtbare afschrikwekkende werking',
      'Flexibele inzet op verschillende locaties',
      'Snelle respons bij incidenten',
      'Professioneel getrainde medewerkers',
      'Rapportage van alle activiteiten'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: '/surveillance-mobile.jpg'
  },
  {
    id: 'objectbewaking',
    title: 'Objectbewaking',
    shortDescription: 'Permanente beveiliging van uw pand, magazijn of bedrijfsterrein.',
    detailedDescription: 'Bescherm uw eigendommen met onze professionele objectbewaking. Wij bieden 24/7 bewaking van uw panden, magazijnen en bedrijfsterreinen. Onze beveiligingsmedewerkers zijn getraind in het herkennen van verdachte situaties en het adequaat reageren op incidenten.',
    features: [
      '24/7 bewaking van uw objecten',
      'Toegangscontrole en registratie',
      'Rondes en controles volgens planning',
      'Directe alarmopvolging',
      'Samenwerking met hulpdiensten'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    image: '/object-bewaking.jpg'
  },
  {
    id: 'winkelbewaking',
    title: 'Winkelbewaking',
    shortDescription: 'Bescherming tegen winkeldiefstal en hulp bij het creëren van een veilige winkelomgeving.',
    detailedDescription: 'Voorkom winkeldiefstal en creëer een veilige winkelomgeving voor uw klanten en personeel. Onze winkelbeveiligers zijn gespecialiseerd in het herkennen van verdacht gedrag en het discreet ingrijpen bij incidenten. Daarnaast bieden zij een gastvrije uitstraling naar uw klanten.',
    features: [
      'Preventie van winkeldiefstal',
      'Gastvrije uitstraling naar klanten',
      'Discreet optreden bij incidenten',
      'Ondersteuning bij drukke periodes',
      'Rapportage van incidenten'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    image: '/winkel-bewaking.jpg'
  },
  {
    id: 'evenementbeveiliging',
    title: 'Evenementbeveiliging',
    shortDescription: 'Professionele beveiliging voor evenementen van elke omvang.',
    detailedDescription: 'Van kleine bijeenkomsten tot grote festivals, wij zorgen voor de veiligheid van uw evenement. Onze evenementbeveiligers zijn getraind in crowdmanagement, toegangscontrole en noodprocedures. Wij werken nauw samen met u om een veiligheidsplan op maat te maken.',
    features: [
      'Toegangscontrole en legitimatiecontrole',
      'Crowdmanagement en ordehandhaving',
      'Samenwerking met hulpdiensten',
      'Op maat gemaakte veiligheidsplannen',
      'Ervaren evenementbeveiligers'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    image: '/evenement-beveiliging.jpg'
  },
  {
    id: 'alarmopvolging',
    title: 'Alarmopvolging',
    shortDescription: '24/7 alarmopvolging en snelle respons bij inbraakalarmen.',
    detailedDescription: 'Wanneer uw alarm afgaat, zijn wij er binnen de kortste keren. Onze alarmopvolgingsdienst biedt u gemoedsrust met 24/7 bereikbaarheid en snelle respons. Wij controleren de situatie ter plaatse en ondernemen de juiste actie, inclusief contact met politie indien nodig.',
    features: [
      '24/7 bereikbaarheid',
      'Snelle respons binnen 15 minuten',
      'Volledige controle van het pand',
      'Contact met hulpdiensten indien nodig',
      'Rapportage van alle activiteiten'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.343 2.343l1.414 1.414m9.899 9.899l1.414 1.414m-12.728 0l1.414-1.414m9.899-9.899l1.414-1.414M12 3v3m6 6h3M12 18v3M3 12h3" />
      </svg>
    ),
    image: '/alarm-opvolging.jpg'
  },
  {
    id: 'receptie-diensten',
    title: 'Receptie Diensten',
    shortDescription: 'Professionele receptiediensten gecombineerd met beveiliging.',
    detailedDescription: 'Onze gastvrije receptiemedewerkers combineren uitstekende klantenservice met beveiliging. Zij zorgen voor een professionele eerste indruk van uw bedrijf terwijl zij tegelijkertijd de toegang controleren en de veiligheid bewaken.',
    features: [
      'Gastvrije ontvangst van bezoekers',
      'Toegangscontrole en registratie',
      'Telefooncentrale diensten',
      'Pakkettenafhandeling',
      'Bewaking van de hoofdingang'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    image: '/receptie-diensten.jpg'
  }
];

export default function DienstenSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6">
            Onze <span className="text-black">Diensten</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            YBSecurity biedt een breed scala aan professionele beveiligingsdiensten.
            Van mobiele surveillance tot evenementbeveiliging, wij zorgen voor uw veiligheid.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>
              </div>

              {/* Short Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Link to Detail Page */}
              <Link
                href={`/diensten/${service.id}`}
                className="w-full px-6 py-3 rounded-xl border border-gray-200 hover:border-black text-gray-700 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Meer informatie</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-black rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Op zoek naar maatwerk?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Elke situatie is uniek. Wij denken graag met u mee voor een beveiligingsoplossing
              die perfect aansluit bij uw specifieke behoeften.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto">
                Plan een gesprek
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
                Bel direct: +31 6 12345678
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export de services array zodat andere componenten er gebruik van kunnen maken
export { services };