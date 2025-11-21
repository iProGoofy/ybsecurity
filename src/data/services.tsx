// src/data/services.tsx

import { JSX } from 'react';

export interface Service {
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7M16 3h5v5M16 3L9 10m7-7L9 10m0 0L3 16m6-6l6 6" />
      </svg>

    ),
    image: '/evenement-lachen.png'
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
    image: '/winkel-voor.png'
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
    image: '/evenement-double.png'
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

export {services};