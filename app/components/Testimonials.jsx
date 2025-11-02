'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Owner, Mitchell Dental Care',
      initials: 'SM',
      review:
        'We went from 2–3 calls a week to 10–15 after the new site launched. The ROI was immediate. Best $750 I’ve spent on the business.',
    },
    {
      name: 'James Cooper',
      title: "Owner, Cooper's Pet Grooming",
      initials: 'JC',
      review:
        'I was skeptical at first, but they delivered exactly what they promised—on time and on budget. Way better than my old Wix site.',
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Owner, Rodriguez Cleaning',
      initials: 'LR',
      review:
        'Finally, a site that looks good on phones! Most of my customers book services from their phone and it works perfectly now.',
    },
    {
      name: 'Michael Johnson',
      title: 'Owner, Johnson Landscaping',
      initials: 'MJ',
      review:
        'The free design preview convinced me immediately. They showed me exactly what my site would look like before I paid a dollar.',
    },
    {
      name: 'David Park',
      title: 'Owner, Park Auto Repair',
      initials: 'DP',
      review:
        'I was paying $50/month for a Squarespace site that looked terrible. Now I own my site outright and it actually brings in customers.',
    },
    {
      name: 'Amanda Torres',
      title: 'Owner, Bella Salon & Spa',
      initials: 'AT',
      review:
        'Professional, fast, and actually affordable. They explained everything clearly and made the whole process easy.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)

  // Auto scroll every 5 seconds
  useEffect(() => {
    const next = () =>
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)

    timeoutRef.current = setInterval(next, 5000)
    return () => clearInterval(timeoutRef.current)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    clearInterval(timeoutRef.current)
  }

  return (
    <section
      id="testimonials"
      className="py-24 px-8 bg-gradient-to-b from-white to-[#fafafa] dark:from-[#0a0a0a] dark:to-[#111]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a0a0a] dark:text-white mb-4">
          Loved by business owners everywhere
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[700px] mx-auto">
          Real feedback from clients who saw real growth after working with us.
        </p>
      </div>

      {/* Carousel container */}
      <div className="relative max-w-[1100px] mx-auto overflow-visible">
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          animate={{ x: `-${currentIndex * 100}%` }}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`,
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[85%]  md:min-w-[50%] px-4 flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="relative bg-white/90  dark:bg-[#1a1a1a]/90 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 rounded-3xl p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_50px_-10px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute top-0 right-0 bg-[#FF6B35]/10 text-[#FF6B35] px-4 py-2 rounded-bl-3xl text-xs font-semibold tracking-wide uppercase">
                  Verified Review
                </div>

                <div className="flex text-[#FFB400] text-lg mb-6">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                <p className="text-gray-800 dark:text-gray-300 text-[16px] leading-relaxed mb-8 italic">
                  “{t.review}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6B35] to-[#FFB400] p-[2px]" />
                    <div className="relative w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center font-semibold text-[#FF6B35]">
                      {t.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a0a0a] dark:text-white text-[16px] leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#FF6B35] scale-125'
                  : 'bg-gray-400/50 hover:bg-gray-500/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
