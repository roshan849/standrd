'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Owner, Mitchell Dental Care',
      initials: 'SM',
      image: '/person1.png',
      review:
        'We went from 2–3 calls a week to 10–15 after the new site launched. The ROI was immediate. Best $750 I’ve spent on the business.',
    },
    {
      name: 'James Cooper',
      title: "Owner, Cooper's Pet Grooming",
      initials: 'JC',
      image: '/person2.png',
      review:
        'I was skeptical at first, but they delivered exactly what they promised—on time and on budget. Way better than my old Wix site.',
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Owner, Rodriguez Cleaning',
      initials: 'LR',
      image: '/person3.png',
      review:
        'Finally, a site that looks good on phones! Most of my customers book services from their phone and it works perfectly now.',
    },
    {
      name: 'Michael Johnson',
      title: 'Owner, Johnson Landscaping',
      initials: 'MJ',
      image: '/person4.png',
      review:
        'The free design preview convinced me immediately. They showed me exactly what my site would look like before I paid a dollar.',
    },
    {
      name: 'David Park',
      title: 'Owner, Park Auto Repair',
      initials: 'DP',
      image: '/person5.png',
      review:
        'I was paying $50/month for a Squarespace site that looked terrible. Now I own my site outright and it actually brings in customers.',
    },
    {
      name: 'Amanda Torres',
      title: 'Owner, Bella Salon & Spa',
      initials: 'AT',
      image: '/person6.png',
      review:
        'Professional, fast, and actually affordable. They explained everything clearly and made the whole process easy.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)
  const pauseTimeoutRef = useRef(null)

  // Auto scroll every 5 seconds
  const startAutoScroll = () => {
    // Clear any existing intervals
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current)
    }
    
    const next = () => {
      setCurrentIndex((prev) => {
        // On desktop, show 2 cards at a time, so we need fewer stops
        // For 6 testimonials: 0, 1, 2, 3, 4 (showing pairs: 0-1, 1-2, 2-3, 3-4, 4-5)
        const isCurrentlyMobile = window.innerWidth < 768
        if (!isCurrentlyMobile && prev >= testimonials.length - 2) {
          return 0 // Loop back to start
        }
        return (prev + 1) % testimonials.length
      })
    }

    timeoutRef.current = setInterval(next, 5000)
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    
    // Clear existing intervals and timeouts
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current)
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }
    
    // Resume auto-scroll after 5 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoScroll()
    }, 3000)
  }

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-[#fafafa] dark:from-[#0a0a0a] dark:to-[#111]"
    >
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a0a0a] dark:text-white mb-3 sm:mb-4 px-4">
          Loved by business owners everywhere
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-[700px] mx-auto px-4">
          Real feedback from clients who saw real growth after working with us.
        </p>
      </div>

      {/* Carousel container */}
      <div className="relative max-w-[1100px] mx-auto overflow-hidden px-4 sm:px-6 md:px-8">
        <motion.div
          className="flex gap-4"
          animate={{ 
            x: isMobile 
              ? `-${currentIndex * 100}%`
              : `-${currentIndex * 50}%`
          }}
          transition={{ 
            duration: 0.7, 
            ease: 'easeInOut'
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full md:w-[calc((100%-1rem)/2)] flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="relative bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_50px_-10px_rgba(0,0,0,0.25)] h-full"
              >
                <div className="absolute top-0 right-0 bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1.5 sm:px-4 sm:py-2 rounded-bl-2xl sm:rounded-bl-3xl text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
                  Verified Review
                </div>

                <div className="flex text-[#FFB400] text-base sm:text-lg mb-4 sm:mb-6 mt-2 sm:mt-0">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 italic">
                  "{t.review}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6B35] to-[#FFB400] p-[2px]" />
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center font-semibold text-[#FF6B35] text-sm sm:text-base">
                      <Image src={t.image} alt={t.name} fill className='object-cover rounded-full' />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#0a0a0a] dark:text-white text-sm sm:text-[15px] md:text-[16px] leading-tight truncate">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1 truncate">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
          {Array.from({ length: isMobile ? testimonials.length : testimonials.length - 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#FF6B35] scale-125'
                  : 'bg-gray-400/50 hover:bg-gray-500/70'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
