export default function CareersSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/security-guard-workspace.jpg" 
          alt="YBSecurity Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image space (handled by background) */}
          <div className="lg:order-1"></div>
          
          {/* Right side - Content */}
          <div className="lg:order-2 text-white bg-black flex items-center">
            <div className="px-8 md:px-12 lg:px-16 py-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Hoor jij bij ons?
              </h2>
              
              <div className="space-y-6 text-lg text-white leading-relaxed mb-10">
                <p>
                  We zijn altijd op zoek naar gemotiveerde collega's. 
                  Ervaring en papieren in de beveiliging zijn een pré, 
                  maar zeker geen must. Als jij de juiste skills hebt en 
                  jezelf wilt ontwikkelen, dan leiden wij je graag op.
                </p>
                
                <p>
                  Wil jij onderdeel zijn van een divers team waar je 
                  trots op kunt zijn? Ben jij een makkelijke prater, kun 
                  je goed uit je woorden komen en ben je vriendelijk? 
                  Dan hebben wij altijd plek voor jou.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/vacatures" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Bekijk onze vacatures
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}