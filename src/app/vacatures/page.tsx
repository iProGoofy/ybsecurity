"use client";
import { useState, useEffect } from 'react';

type Vacature = {
  id: number | string;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
};

type ApplicationForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  motivation: string;
  cv: File | null;
};

const vacatures: Vacature[] = [
  {
    id: 1,
    title: "Beveiliger Evenementen",
    location: "Venlo & Omstreken",
    type: "Fulltime",
    experience: "0-2 jaar",
    description: "Zoek jij een dynamische baan in de beveiliging? Als evenementenbeveiliger zorg je voor de veiligheid tijdens diverse evenementen.",
    requirements: [
      "Beveiligingsdiploma (of bereid deze te halen)",
      "Representatieve uitstraling",
      "Stressbestendig en alertheid",
      "Flexibel en in bezit van eigen vervoer"
    ]
  },
  {
    id: 3,
    title: "Objectbeveiliger",
    location: "Venlo & Omstreken",
    type: "Fulltime",
    experience: "2-5 jaar",
    description: "Voor diverse objecten zoeken wij ervaren objectbeveiligers. Je bent verantwoordelijk voor toegangscontrole en het bewaken van panden.",
    requirements: [
      "Minimaal 2 jaar ervaring in de beveiliging",
      "Beveiligingsdiploma verplicht",
      "VOG (Verklaring Omtrent Gedrag)",
      "Betrouwbaar en integer"
    ]
  },
];

export default function VacaturesPage() {
  const [selectedVacature, setSelectedVacature] = useState<Vacature | null>(null);
  const [formData, setFormData] = useState<ApplicationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    motivation: '',
    cv: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedVacature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        motivation: '',
        cv: null
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVacature]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Bestand is te groot. Maximaal 5MB toegestaan.');
        return;
      }
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!['.pdf', '.doc', '.docx'].includes(fileExtension)) {
        alert('Alleen PDF, DOC en DOCX bestanden zijn toegestaan.');
        return;
      }
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.motivation || !formData.cv) {
      alert('Vul alle verplichte velden in en upload je CV.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Converteer het CV naar base64
      const cvBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          // Verwijder de data URL prefix (bv. "data:application/pdf;base64,")
          const base64Content = base64.split(',')[1];
          resolve(base64Content);
        };
        reader.onerror = reject;
        reader.readAsDataURL(formData.cv!);
      });

      // Verstuur naar API route
      const response = await fetch('/api/sollicitatie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          motivation: formData.motivation,
          vacature: selectedVacature?.title,
          cv: {
            filename: formData.cv.name,
            content: cvBase64,
            contentType: formData.cv.type
          }
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Er is iets misgegaan');
      }

      alert('Sollicitatie succesvol verzonden! We nemen binnen 3 werkdagen contact met je op.');
      setSelectedVacature(null);
      
    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Er is iets misgegaan. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-black text-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Werken bij <span className="text-white">YBSecurity</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Word onderdeel van ons professionele team. Bij YBSecurity krijg je de kans
              om je te ontwikkelen in een dynamische en uitdagende werkomgeving.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 sm:mb-6">
              Waarom bij YBSecurity werken?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Groei & Ontwikkeling</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Wij investeren in jouw toekomst met trainingen en doorgroeimogelijkheden naar leidinggevende functies.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Sterk Team</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Word onderdeel van een hecht team van professionals die voor elkaar klaarstaan.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Goed Salaris</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Marktconform salaris met diverse toeslagen voor avond-, nacht- en weekenddiensten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 sm:mb-6">
              Actuele <span className="text-black">vacatures</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Bekijk onze openstaande vacatures en vind de baan die bij jou past.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {vacatures.map((vacature) => (
              <div key={vacature.id} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-lg">{vacature.type}</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded-lg">{vacature.location}</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded-lg">{vacature.experience}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">{vacature.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">{vacature.description}</p>
                <div className="mb-5 sm:mb-6">
                  <h4 className="font-semibold text-black mb-3 text-sm sm:text-base">Wat vragen wij:</h4>
                  <ul className="space-y-2">
                    {vacature.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700 text-sm sm:text-base">
                        <svg className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => setSelectedVacature(vacature)} className="w-full px-6 py-3 sm:py-4 bg-black text-white rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Solliciteer direct
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">Zie je niet de juiste vacature?</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Stuur ons een open sollicitatie! We zijn altijd op zoek naar gemotiveerd talent en bekijken graag wat de mogelijkheden zijn.
            </p>
            <button 
              onClick={() => setSelectedVacature({ 
                id: 'open', 
                title: 'Open Sollicitatie', 
                location: 'Venlo & Omstreken', 
                type: 'Variabel', 
                experience: 'Alle niveaus', 
                description: 'Solliciteer open en vertel ons wat jouw sterke punten zijn.', 
                requirements: [] 
              })} 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto"
            >
              Open sollicitatie versturen
            </button>
          </div>
        </div>
      </section>

      {selectedVacature && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-70 flex items-center justify-center p-0 sm:p-4">
          <div 
            className="absolute inset-0" 
            onClick={() => setSelectedVacature(null)}
          />
          
          <div className="relative bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            <div className="flex-shrink-0 bg-white border-b border-gray-200 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  Solliciteren
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  {selectedVacature.title}
                </p>
              </div>
              <button 
                onClick={() => setSelectedVacature(null)} 
                className="flex-shrink-0 text-gray-500 hover:text-black transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-5 sm:p-8">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Voornaam *
                      </label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50" 
                        placeholder="Je voornaam" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Achternaam *
                      </label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50" 
                        placeholder="Je achternaam" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      E-mailadres *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50" 
                      placeholder="je@email.nl" 
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Telefoonnummer *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all disabled:opacity-50" 
                      placeholder="+31 6 12345678" 
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Motivatie *
                    </label>
                    <textarea 
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={5} 
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all disabled:opacity-50" 
                      placeholder="Vertel ons waarom je bij YBSecurity wilt werken..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      CV uploaden *
                    </label>
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      className="hidden" 
                      id="cv-upload" 
                      accept=".pdf,.doc,.docx"
                      disabled={isSubmitting}
                    />
                    <label 
                      htmlFor="cv-upload" 
                      className={`block border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                        isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      } ${
                        formData.cv 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-300 hover:border-black hover:bg-gray-50'
                      }`}
                    >
                      {formData.cv ? (
                        <div className="flex items-center justify-center flex-wrap gap-3">
                          <svg className="w-10 h-10 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="text-left min-w-0 flex-1">
                            <p className="text-gray-900 font-medium truncate">{formData.cv.name}</p>
                            <p className="text-sm text-gray-500">
                              {(formData.cv.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-gray-700 text-base font-medium">Klik om je CV te uploaden</p>
                          <p className="text-sm text-gray-500 mt-1">PDF, DOC of DOCX (max. 5MB)</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 bg-white border-t border-gray-200 p-5 sm:p-6">
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button 
                  onClick={() => setSelectedVacature(null)} 
                  disabled={isSubmitting}
                  type="button"
                  className="flex-1 px-6 py-3.5 border-2 border-gray-300 text-gray-700 rounded-xl text-base font-semibold hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Annuleren
                </button>
                <button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  type="button"
                  className="flex-1 px-6 py-3.5 bg-black text-white rounded-xl text-base font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Bezig met verzenden...' : 'Verstuur sollicitatie'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}