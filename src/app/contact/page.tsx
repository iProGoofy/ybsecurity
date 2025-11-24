"use client";
import { useState } from 'react';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const contactOptions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Telefoon",
    description: "Bel ons voor directe vragen",
    value: "+31 6 34268574",
    link: "tel:+31634268574"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "E-mail",
    description: "Stuur ons een bericht",
    value: "info@ybsecurity.nl",
    link: "mailto:info@ybsecurity.nl"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Adres",
    description: "Bezoek ons kantoor",
    value: "Byronstraat 47, 5924XL Venlo",
    link: null
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Openingstijden",
    description: "Ma-Vr: 08:00 - 18:00",
    value: "Weekend: Op afspraak",
    link: null
  }
];

const departments = [
  {
    title: "Offerte Aanvragen",
    description: "Voor prijsopgaven en offertes",
    email: "info@ybsecurity.nl"
  },
  {
    title: "Klantenservice",
    description: "Voor bestaande klanten",
    email: "info@ybsecurity.nl"
  },
  {
    title: "Werving & Selectie",
    description: "Voor vacatures en sollicitaties",
    email: "info@ybsecurity.nl"
  },
  {
    title: "Spoedmeldingen",
    description: "24/7 bereikbaar voor noodgevallen",
    email: "info@ybsecurity.nl"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Timeout na 10 seconden
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.error('Error response:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error && error.name === 'AbortError') {
        alert('Timeout: De server reageert niet. Controleer of de API route bestaat.');
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              Neem contact op
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
              We helpen je <span className="text-white">graag verder</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
              Heb je een vraag of wil je vrijblijvend advies? Ons team staat voor je klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Opties */}
      

      {/* Contact Formulier & Afdelingen */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulier */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8">
                Stuur ons een bericht
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Voornaam *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
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
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="Je achternaam"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">E-mailadres *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="+31 6 34268574"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Bedrijfsnaam</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Jouw bedrijfsnaam (optioneel)"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Onderwerp *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50"
                  >
                    <option value="">Selecteer onderwerp</option>
                    <option value="offerte">Offerte aanvragen</option>
                    <option value="informatie">Algemene informatie</option>
                    <option value="sollicitatie">Sollicitatie</option>
                    <option value="klacht">Klacht of feedback</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Bericht *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all disabled:opacity-50"
                    placeholder="Vertel ons waarmee we je kunnen helpen..."
                  ></textarea>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                    ✓ Je bericht is succesvol verzonden! We nemen binnen 24 uur contact met je op.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                    ✗ Er is iets misgegaan. Probeer het opnieuw of neem direct contact met ons op.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black text-white rounded-xl text-base font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Bezig met versturen...' : 'Verstuur bericht'}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We reageren binnen 24 uur op je bericht
                </p>
              </form>
            </div>

            {/* Afdelingen */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                  Direct naar de juiste afdeling
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Voor een snellere afhandeling kun je direct contact opnemen met de juiste afdeling.
                </p>
              </div>

              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {dept.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {dept.description}
                    </p>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-black font-semibold hover:underline inline-flex items-center"
                    >
                      {dept.email}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Belangrijke Documenten */}
          <div className="mt-12 lg:mt-16">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Belangrijke documenten
              </h3>
              <div className="space-y-3">
                <a 
                  href="documents/klachtenregeling-medewerkers.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-black group-hover:text-green-600 transition-colors">
                      Klachtenregeling medewerkers
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a 
                  href="documents/klachtenregeling-derden.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-black group-hover:text-green-600 transition-colors">
                      Klachtenregeling derden
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a 
                  href="documents/algemene-voorwaarden.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-black group-hover:text-green-600 transition-colors">
                      Algemene voorwaarden
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Bezoek ons kantoor
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Je bent altijd welkom op ons kantoor. Maak wel even een afspraak, zodat we de tijd voor je kunnen vrijmaken.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-96 sm:h-[500px] border border-gray-300 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.8261203727957!2d6.131471476713103!3d51.36949317178228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c74545cc04aa2f%3A0x74a080b318412f3e!2sByronstraat%2047%2C%205924%20XL%20Venlo!5e0!3m2!1snl!2snl!4v1763231726927!5m2!1snl!2snl"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YBSecurity Kantoor Locatie"
            />
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center mb-5">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                {option.link ? (
                  <a 
                    href={option.link}
                    className="text-black font-semibold hover:underline break-words"
                  >
                    {option.value}
                  </a>
                ) : (
                  <p className="text-black font-semibold break-words">
                    {option.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}