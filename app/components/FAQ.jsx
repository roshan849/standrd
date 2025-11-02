import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How does the money-back guarantee work?',
      answer: 'If you\'re not happy with the final result, we\'ll refund you 100%—no questions asked. We show you designs before we build, so you\'ll know exactly what you\'re getting. But if somehow it\'s not what you expected, your money back.',
    },
    {
      question: 'How long does it take to build my website?',
      answer: 'Most projects take 7-14 days from approval to launch. The timeline depends on how quickly you can provide content (text, images, etc.) and feedback. We work fast and keep the process simple.',
    },
    {
      question: 'Will my website work on mobile phones?',
      answer: 'Absolutely. Every website we build is mobile-first, meaning it\'s designed to work perfectly on phones first, then tablets and desktops. We test on multiple devices before launch.',
    },
    {
      question: 'Do I own the website after you build it?',
      answer: 'Yes, 100%. You own everything—the design, the code, the domain, the content. We don\'t lock you into contracts or monthly fees. It\'s yours to keep forever.',
    },
    {
      question: 'Can I update the website myself later?',
      answer: 'Yes! We build your site on an easy-to-use platform and provide training on basic updates like changing text or adding photos. For bigger changes, we\'re always here to help.',
    },
    {
      question: 'What if I don\'t like the design?',
      answer: 'We show you the design preview on the free call and get your approval before building anything. If you want changes, we make them. We don\'t move forward until you\'re happy—and if you\'re still not satisfied, money-back guarantee.',
    },
    {
      question: 'Do you work with my type of business?',
      answer: 'We specialize in local service businesses: dentists, contractors, pet groomers, salons, cleaning services, auto repair, landscaping, and more. If you serve customers in your area, we can help.',
    },
    {
      question: 'What happens after the website launches?',
      answer: 'Your site is live and working! We\'re available for questions and support. If you need bigger updates or new features down the road, we can help with that too (separate from the initial package).',
    },
    {
      question: 'Are there any monthly fees?',
      answer: 'No monthly fees to us. You\'ll need hosting (usually $5-20/month) and a domain ($10-15/year), which you pay directly to the hosting provider. But you\'re not locked into paying us monthly—ever.',
    },
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="py-24 px-8 bg-white dark:bg-[#0a0a0a]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Frequently asked questions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          Everything you need to know. Still have questions? Book a call.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden transition-all hover:shadow-lg ${
              activeIndex === index ? 'shadow-lg' : ''
            }`}
          >
            <div
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-[17px] font-semibold text-[#0a0a0a] dark:text-white pr-4">
                {faq.question}
              </h3>
              <span
                className={`text-2xl text-gray-400 dark:text-gray-600 transition-all flex-shrink-0 font-light ${
                  activeIndex === index ? 'rotate-45 text-[#FF6B35]' : ''
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`transition-all overflow-hidden ${
                activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}