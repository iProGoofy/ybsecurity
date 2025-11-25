"use client";
import { useState, useEffect } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  kvk: string;
  experience: string;
  availability: string;
  motivation: string;
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Aantrekkelijke Tarieven",
    description: "Verdien een marktconform tarief met goede toeslagen voor avond-, nacht- en weekenduren."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Flexibele Planning",
    description: "Bepaal zelf wanneer en hoeveel je werkt. Wij passen ons aan jouw beschikbaarheid aan."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Gevarieerd Werk",
    description: "Werk aan diverse projecten van evenementenbeveiliging tot objectbeveiliging."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Professioneel Netwerk",
    description: "Word onderdeel van ons netwerk en bouw waardevolle connecties op in de branche."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Snelle Betaling",
    description: "Ontvang je facturen op tijd betaald, zonder gedoe. Betrouwbare en snelle afhandeling."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Ontwikkeling & Training",
    description: "Blijf je ontwikkelen met toegang tot trainingen en certificeringen in de beveiligingsbranche."
  }
];

const requirements = [
  "Geldig beveiligingsdiploma (of bereid deze te halen)",
  "Ingeschreven bij KVK als ZZP'er",
  "Minimaal 1 jaar ervaring in de beveiliging (bij voorkeur)",
  "VOG (Verklaring Omtrent Gedrag)",
  "Eigen vervoer en flexibele beschikbaarheid",
  "Professionele uitstraling en goede communicatieve vaardigheden"
];

const workTypes = [
  {
    title: "Evenementenbeveiliging",
    description: "Beveilig festivals, concerten, sportevenementen en bedrijfsfeesten",
    icon: "🎪"
  },
  {
    title: "Objectbeveiliging",
    description: "Bewaking van kantoren, winkels, bouwplaatsen en industriële terreinen",
    icon: "🏢"
  },
  {
    title: "Mobiele Surveillance",
    description: "Controleren van verschillende objecten en locaties in de omgeving",
    icon: "🚗"
  },
];

export default function ZZPerPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    kvk: '',
    experience: '',
    availability: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        kvk: '',
        experience: '',
        availability: '',
        motivation: ''
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.kvk || !formData.experience || 
        !formData.availability || !formData.motivation) {
      alert('Vul alle verplichte velden in.');
      return;
    }

    setIsSubmitting(true);
    
    // Simuleer verzending
    setTimeout(() => {
      alert('Aanmelding succesvol verzonden! We nemen binnen 2 werkdagen contact met je op.');
      setShowForm(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block text-black px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Word ZZP'er bij YBSecurity
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
              Werk als <span className="text-white">zelfstandige</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
              Flexibel werken, aantrekkelijke tarieven en gevarieerde opdrachten.
              Sluit je aan bij ons netwerk van professionele beveiligingsspecialisten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Meld je aan
              </button>
              <a href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Meer informatie
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Waarom als ZZP'er bij ons?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Ontdek de voordelen van werken met YBSecurity als zelfstandig beveiliger.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werksoorten Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Werksoorten & Opdrachten
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Als ZZP'er bij YBSecurity werk je aan diverse projecten en opdrachten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {workTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eisen Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
                Wat vragen wij?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Om als ZZP'er met ons samen te werken, vragen wij het volgende:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-black mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-base sm:text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Klaar om te starten?
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Vul het aanmeldingsformulier in en wij nemen binnen 2 werkdagen contact met je op om de mogelijkheden te bespreken.
              </p>
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Meld je nu aan
              </button>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Vragen? Neem direct contact op:</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white">+31 6 34268574</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white">info@ybsecurity.nl</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto lg:max-w-4xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "Wat zijn de tarieven?",
                a: "De tarieven zijn afhankelijk van het type opdracht en je ervaring. We bieden marktconforme tarieven met aantrekkelijke toeslagen voor avond-, nacht- en weekendwerk."
              },
              {
                q: "Hoe snel kan ik starten?",
                a: "Na goedkeuring van je aanmelding en het controleren van je documenten, kun je vaak binnen een week al aan de slag met je eerste opdracht."
              },
              {
                q: "Moet ik zelf voor mijn kleding zorgen?",
                a: "Nee, wij zorgen voor een professioneel uniform en de benodigde beveiligingsuitrusting."
              },
              {
                q: "Hoeveel uren per week kan ik werken?",
                a: "Dit bepaal je volledig zelf. Of je nu een paar uur per week beschikbaar bent of fulltime wilt werken, wij passen ons aan jouw planning aan."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanmeldingsformulier Modal - GEFIXTE VERSIE */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-70 flex items-center justify-center p-0 sm:p-4">
          <div 
            className="absolute inset-0" 
            onClick={() => setShowForm(false)}
          />
          
          <div className="relative bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            {/* Fixed Header */}
            <div className="flex-shrink-0 bg-white border-b border-gray-200 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  Aanmelden als ZZP'er
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Vul onderstaande gegevens in
                </p>
              </div>
              <button 
                onClick={() => setShowForm(false)} 
                className="flex-shrink-0 text-gray-500 hover:text-black transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-5 sm:p-8">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">Voornaam *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Je voornaam"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">Achternaam *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Je achternaam"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">E-mailadres *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="je@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">Telefoonnummer *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">KVK-nummer *</label>
                    <input
                      type="text"
                      name="kvk"
                      value={formData.kvk}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="12345678"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Ervaring in beveiliging *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                    >
                      <option value="">Selecteer ervaring</option>
                      <option value="0-1">Minder dan 1 jaar</option>
                      <option value="1-3">1-3 jaar</option>
                      <option value="3-5">3-5 jaar</option>
                      <option value="5+">Meer dan 5 jaar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Beschikbaarheid *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                    >
                      <option value="">Selecteer beschikbaarheid</option>
                      <option value="parttime">Parttime (10-20 uur per week)</option>
                      <option value="halftime">Halftime (20-30 uur per week)</option>
                      <option value="fulltime">Fulltime (30+ uur per week)</option>
                      <option value="flex">Flexibel / op afroep</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Motivatie *</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all disabled:opacity-50"
                      placeholder="Vertel ons waarom je als ZZP'er met YBSecurity wilt samenwerken..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Documenten uploaden *</label>
                    <p className="text-sm text-gray-600 mb-3">Upload je CV, beveiligingsdiploma en KVK-uittreksel</p>
                    <input 
                      type="file" 
                      className="hidden" 
                      id="docs-upload" 
                      accept=".pdf,.doc,.docx" 
                      multiple
                      disabled={isSubmitting}
                    />
                    <label 
                      htmlFor="docs-upload" 
                      className={`block border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                        isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      } border-gray-300 hover:border-black hover:bg-gray-50`}
                    >
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-700 text-base font-medium">Klik om documenten te uploaden</p>
                      <p className="text-sm text-gray-500 mt-1">PDF, DOC of DOCX (meerdere bestanden mogelijk)</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="flex-shrink-0 bg-white border-t border-gray-200 p-5 sm:p-6">
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3.5 border-2 border-gray-300 text-gray-700 rounded-xl text-base font-semibold hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Annuleren
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3.5 bg-black text-white rounded-xl text-base font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Bezig met verzenden...' : 'Verstuur aanmelding'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}