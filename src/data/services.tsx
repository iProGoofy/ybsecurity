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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 5h12v12H3V5zm12 0h4l2 4v8h-6V5z" />
      </svg>
    ),
    image: '/mobiel.jpg'
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    image: '/alarmopvolging.jpg'
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    image: '/Receptie-beveiliging.jpg'
  }
];

export {services};