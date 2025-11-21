"use client";
import Image from 'next/image';
import Link from 'next/link';
import { JSX, useState } from 'react';
import { services } from '@/data/services'; // Pas dit pad aan!

export default function DienstenSection() {
  return (
    <section id='diensten' className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6">
            Onze <span className="text-black">diensten</span>
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
