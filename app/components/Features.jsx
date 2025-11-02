// ========================================
// FILE: components/Features.js
// ========================================
import { useEffect, useRef } from 'react'
import { 
  DevicePhoneMobileIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  EnvelopeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

import { motion } from 'framer-motion'

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile-first design',
      description: 'Works perfectly on phones, tablets, and desktops. Most customers browse on mobile—your site will look great everywhere.',
      delay: 0,
    },
    {
      icon: BoltIcon,
      title: 'Lightning fast',
      description: 'Optimized for speed. Fast websites keep customers engaged and rank better on Google. We guarantee fast load times.',
      delay: 80,
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'SEO ready',
      description: 'Built to be found on Google. We handle the technical SEO so local customers can discover you easily.',
      delay: 160,
    },
    {
      icon: PencilIcon,
      title: 'Easy to update',
      description: 'Make simple changes yourself. We\'ll show you how to update text, photos, and basic content without calling us.',
      delay: 240,
    },
    {
      icon: EnvelopeIcon,
      title: 'Contact forms',
      description: 'Make it easy for customers to reach you. Every inquiry goes straight to your email—no missed opportunities.',
      delay: 320,
    },
    {
      icon: ShieldCheckIcon,
      title: 'You own it 100%',
      description: 'Full ownership of everything. No hidden fees, no lock-in contracts. It\'s yours to keep forever.',
      delay: 400,
    },
  ]

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] mb-4 font-bold tracking-tight text-[#0a0a0a] dark:text-white">
          Everything you need to succeed online
        </h2>
        <p className="text-lg md:text-[1.25rem] text-[#575656] dark:text-gray-400 max-w-[680px] mx-auto font-normal">
          No fluff. Just the features that actually bring in customers.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="p-8 bg-white dark:bg-[#1a1a1a] rounded-[16px] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] group">
              <motion.div 
                className="w-16 h-16 mb-6 rounded-full bg-[#F2D8A9]/10 dark:bg-[#A6CDFE]/10 flex items-center justify-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <feature.icon className="w-8 h-8 text-[#F2D8A9] dark:text-[#A6CDFE]" />
              </motion.div>
              <h3 className="text-[1.375rem] mb-3 font-bold text-[#0a0a0a] dark:text-white">
                {feature.title}
              </h3>
              <p className="text-[#575656] dark:text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

