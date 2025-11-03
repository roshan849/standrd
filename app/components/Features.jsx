// ========================================
// FILE: components/Features.jsx
// ========================================
'use client'

import { motion } from 'framer-motion'
import {
  DevicePhoneMobileIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  EnvelopeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile-first design',
      description:
        'Works perfectly on phones, tablets, and desktops. Most customers browse on mobile—your site will look great everywhere.',
    },
    {
      icon: BoltIcon,
      title: 'Lightning fast',
      description:
        'Optimized for speed. Fast websites keep customers engaged and rank better on Google. We guarantee fast load times.',
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'SEO ready',
      description:
        'Built to be found on Google. We handle the technical SEO so local customers can discover you easily.',
    },
    {
      icon: PencilIcon,
      title: 'Easy to update',
      description:
        "Make simple changes yourself. We'll show you how to update text, photos, and basic content without calling us.",
    },
    {
      icon: EnvelopeIcon,
      title: 'Contact forms',
      description:
        'Make it easy for customers to reach you. Every inquiry goes straight to your email—no missed opportunities.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'You own it 100%',
      description:
        "Full ownership of everything. No hidden fees, no lock-in contracts. It's yours to keep forever.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Everything you need to succeed online
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          No fluff. Just the features that actually bring in customers.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative bg-white dark:bg-[#111213] border border-gray-100 dark:border-gray-800 
                       shadow-sm hover:shadow-md transition-all duration-300 rounded-xl p-8"
          >
            {/* Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center 
                              border border-red-400 dark:border-red-500/70 
                              text-red-500 dark:text-red-400 rounded-md">
                <feature.icon className="w-6 h-6" />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {feature.description}
            </p>

            {/* Gradient dotted pattern */}
            <div className="absolute bottom-3 right-4 w-32 h-16 
                            bg-[radial-gradient(circle,rgba(255,87,87,0.4)_1px,transparent_1px)] 
                            dark:bg-[radial-gradient(circle,rgba(255,87,87,0.25)_1px,transparent_1px)] 
                            [background-size:8px_8px] opacity-60" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
