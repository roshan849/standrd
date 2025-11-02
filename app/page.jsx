// ========================================
// FILE: app/page.jsx
// ========================================
'use client'

import { useEffect, useState } from 'react'
import Header from '../app/components/Header'
import AlertBanner from '../app/components/AlertBanner'
import Hero from '../app/components/Hero'
import TrustBanner from '../app/components/TrustBanner'
import BeforeAfter from '../app/components/BeforeAfter'
import HowItWorks from '../app/components/HowItWorks'
import Objections from '../app/components/Objections'
import ComparisonTable from '../app/components/ComparisonTable'
import Features from '../app/components/Features'
import Pricing from '../app/components/Pricing'
import Testimonials from '../app/components/Testimonials'
import FAQ from '../app/components/FAQ'
import FinalCTA from '../app/components/FinalCTA'
import Footer from '../app/components/Footer'

export default function HomePage() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <AlertBanner />
      <Hero />
      <TrustBanner />
      <BeforeAfter />
      <HowItWorks />
      <Objections />
      <ComparisonTable />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
