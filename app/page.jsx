// ========================================
// FILE: app/page.jsx
// ========================================
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { FadeIn, ScrollAnimation } from './components/ScrollAnimation'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

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
    <AnimatePresence>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <FadeIn delay={0.2}>
        <AlertBanner />
      </FadeIn>

      <motion.main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <TrustBanner />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <BeforeAfter />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <HowItWorks />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <Objections />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <ComparisonTable />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <Features />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <Pricing />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <Testimonials />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <FAQ />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <FinalCTA />
        </ScrollAnimation>
      </motion.main>

      <Footer />
    </AnimatePresence>
  )
}
