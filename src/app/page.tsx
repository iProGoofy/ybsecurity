// src/page.tsx

import Hero from '@/components/hero'
import Diensten from '@/components/diensten'
import CareersSection from '@/components/vacatures'

export default function Page() {
  return (
    <div>
      <Hero />
      <Diensten />
      <CareersSection />
    </div>
  )
}