// 'use client'

// import { motion, useInView, useAnimation } from 'framer-motion'
// import { useEffect, useRef, useState } from 'react'

// export default function Pricing() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })

//   const plans = [
//     {
//       name: 'Refresh',
//       description: 'Quick improvements to modernize your existing site',
//       price: 500,
//       term: 'One-time payment',
//       features: [
//         'Visual design refresh',
//         'Mobile optimization',
//         'Speed improvements',
//         'Basic SEO setup',
//         'Contact form integration',
//         '7-10 day delivery',
//       ],
//       featured: false,
//     },
//     {
//       name: 'Complete',
//       description: 'Full redesign from the ground up',
//       price: 750,
//       term: 'One-time payment',
//       features: [
//         'Complete website redesign',
//         'Mobile-first approach',
//         'Full SEO optimization',
//         'Google Maps integration',
//         'Contact forms & analytics',
//         'Training on updates',
//         '10-14 day delivery',
//         'Money-back guarantee',
//       ],
//       featured: true,
//       badge: 'Most Popular',
//     },
//     {
//       name: 'Premium',
//       description: 'Everything plus advanced features',
//       price: 1000,
//       term: 'One-time payment',
//       features: [
//         'Everything in Complete',
//         'Booking system integration',
//         'Custom animations',
//         'Advanced custom features',
//         'Priority support',
//         'Extended training',
//         '14 day delivery',
//       ],
//       featured: false,
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   }

//   // Counter component
//   const Counter = ({ finalPrice, duration = 2.5 }) => {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//       if (!isInView) return

//       let start = 0
//       const end = finalPrice
//       const totalFrames = Math.round(duration * 60)
//       let frame = 0

//       const counter = setInterval(() => {
//         frame++
//         const progress = frame / totalFrames
//         const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
//         const value = Math.floor(start + eased * (end - start))
//         setCount(value)

//         if (frame === totalFrames) clearInterval(counter)
//       }, 1000 / 60)

//       return () => clearInterval(counter)
//     }, [isInView, finalPrice, duration])

//     return (
//       <motion.span
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         ${count.toLocaleString()}
//       </motion.span>
//     )
//   }

//   return (
//     <section
//       id="pricing"
//       ref={ref}
//       className="py-24 px-8 bg-white dark:bg-[#0a0a0a] overflow-hidden"
//     >
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//       >
//         <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
//           Simple, honest pricing
//         </h2>
//         <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
//           One-time payment. No surprises. No monthly fees. Choose what fits your needs.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? 'visible' : 'hidden'}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto"
//       >
//         {plans.map((plan, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: 'spring', stiffness: 200, damping: 12 }}
//             className={`p-12 rounded-3xl relative transition-all flex flex-col ${
//               plan.featured
//                 ? 'bg-white dark:bg-[#0a0a0a] border-[3px] border-[#FF6B35] shadow-xl shadow-[#FF6B35]/15'
//                 : 'bg-[#fafafa] dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#2a2a2a]'
//             } hover:border-gray-400 dark:hover:border-[#3a3a3a] hover:-translate-y-1 hover:shadow-2xl`}
//           >
//             {plan.badge && (
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide"
//               >
//                 {plan.badge}
//               </motion.span>
//             )}

//             <h3 className="text-2xl mb-2 font-bold text-[#0a0a0a] dark:text-white">
//               {plan.name}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 text-[15px] mb-8">
//               {plan.description}
//             </p>

//             <div className="text-6xl font-extrabold mb-1 text-[#0a0a0a] dark:text-white">
//               <Counter finalPrice={plan.price} />
//             </div>
//             <div className="text-gray-400 dark:text-gray-600 text-[15px] mb-8">
//               {plan.term}
//             </div>

//             <ul className="list-none mb-8 flex-grow">
//               {plan.features.map((feature, idx) => (
//                 <motion.li
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.1 * idx, duration: 0.3 }}
//                   className="py-3 text-gray-600 dark:text-gray-400 text-[15px] flex items-start gap-3"
//                 >
//                   <span className="text-[#FF6B35] font-bold text-lg flex-shrink-0">✓</span>
//                   {feature}
//                 </motion.li>
//               ))}
//             </ul>

//             <motion.a
//               href="https://cal.com/roshan-matta"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className={`w-full py-4 rounded-xl font-semibold text-base transition-all block text-center ${
//                 plan.featured
//                   ? 'bg-[#FF6B35] text-white hover:bg-[#ff5722]'
//                   : 'bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a]'
//               } hover:-translate-y-0.5 hover:shadow-lg`}
//             >
//               Book Free Call
//             </motion.a>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   )
// }


'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const plans = [
    {
      name: 'Refresh',
      icon: '💡',
      description: 'Quick improvements to modernize your existing site',
      level: 60,
      term: 'Perfect for small updates',
      features: [
        'Visual design refresh',
        'Mobile optimization',
        'Speed improvements',
        'Basic SEO setup',
        'Contact form integration',
        '7-10 day delivery',
      ],
      featured: false,
    },
    {
      name: 'Complete',
      icon: '🚀',
      description: 'Full redesign from the ground up',
      level: 85,
      term: 'Best for complete website makeover',
      features: [
        'Complete website redesign',
        'Mobile-first approach',
        'Full SEO optimization',
        'Google Maps integration',
        'Contact forms & analytics',
        'Training on updates',
        '10-14 day delivery',
        'Money-back guarantee',
      ],
      featured: true,
      badge: 'Most Popular',
    },
    {
      name: 'Premium',
      icon: '👑',
      description: 'Everything plus advanced features',
      level: 100,
      term: 'For ambitious businesses',
      features: [
        'Everything in Complete',
        'Booking system integration',
        'Custom animations',
        'Advanced custom features',
        'Priority support',
        'Extended training',
        '14 day delivery',
      ],
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 px-8 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Simple, honest plans
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          One-time payment. No surprises. Choose what fits your needs best — all include free consultation.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className={`p-12 rounded-3xl relative transition-all flex flex-col ${
              plan.featured
                ? 'bg-white dark:bg-[#0a0a0a] border-[3px] border-[#FF6B35] shadow-xl shadow-[#FF6B35]/15'
                : 'bg-[#fafafa] dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#2a2a2a]'
            } hover:border-gray-400 dark:hover:border-[#3a3a3a] hover:-translate-y-1 hover:shadow-2xl`}
          >
            {/* Badge */}
            {plan.badge && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide"
              >
                {plan.badge}
              </motion.span>
            )}

            {/* Title */}
            <h3 className="text-2xl mb-2 font-bold text-[#0a0a0a] dark:text-white flex items-center gap-2">
              <span className="text-3xl">{plan.icon}</span> {plan.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-[15px] mb-8">
              {plan.description}
            </p>

            {/* Tier Label */}
            <div className="text-3xl font-extrabold mb-3 text-[#FF6B35] dark:text-[#FF6B35]">
              {plan.featured
                ? '🚀 Most Recommended'
                : plan.name === 'Refresh'
                ? '💡 Starter Plan'
                : '👑 Premium Experience'}
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Feature Level
              </div>
              <div className="w-full bg-gray-200 dark:bg-[#2a2a2a] rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${plan.level}%` } : { width: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-2 rounded-full bg-[#FF6B35]"
                ></motion.div>
              </div>
            </div>

            {/* Starts From */}
            <div className="text-gray-500 dark:text-gray-400 italic text-[15px] mb-8">
              Starts from <span className="text-[#FF6B35]">affordable rates</span>
            </div>

            {/* Features */}
            <ul className="list-none mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="py-3 text-gray-600 dark:text-gray-400 text-[15px] flex items-start gap-3"
                >
                  <span className="text-[#FF6B35] font-bold text-lg flex-shrink-0">✓</span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="https://cal.com/roshan-matta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-4 rounded-xl font-semibold text-base transition-all block text-center ${
                plan.featured
                  ? 'bg-[#FF6B35] text-white hover:bg-[#ff5722]'
                  : 'bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a]'
              } hover:-translate-y-0.5 hover:shadow-lg`}
            >
              Book Free Call
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

