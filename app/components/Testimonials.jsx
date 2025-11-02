// ========================================
// FILE: components/Testimonials.js
// ========================================
export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote: 'We went from 2-3 calls a week to 10-15 after the new site launched. The ROI was immediate. Best $750 I\'ve spent on the business.',
      name: 'Sarah Mitchell',
      role: 'Owner, Mitchell Dental Care',
      initials: 'SM',
    },
    {
      rating: 5,
      quote: 'I was skeptical at first, but they delivered exactly what they promised—on time and on budget. Way better than my old Wix site.',
      name: 'James Cooper',
      role: 'Owner, Cooper\'s Pet Grooming',
      initials: 'JC',
    },
    {
      rating: 5,
      quote: 'Finally, a site that looks good on phones! Most of my customers book services from their phone and it works perfectly now.',
      name: 'Lisa Rodriguez',
      role: 'Owner, Rodriguez Cleaning',
      initials: 'LR',
    },
    {
      rating: 5,
      quote: 'The free design preview convinced me immediately. They showed me exactly what my site would look like before I paid a dollar.',
      name: 'Michael Johnson',
      role: 'Owner, Johnson Landscaping',
      initials: 'MJ',
    },
    {
      rating: 5,
      quote: 'I was paying $50/month for a Squarespace site that looked terrible. Now I own my site outright and it actually brings in customers.',
      name: 'David Park',
      role: 'Owner, Park Auto Repair',
      initials: 'DP',
    },
    {
      rating: 5,
      quote: 'Professional, fast, and actually affordable. They explained everything clearly and made the whole process easy.',
      name: 'Amanda Torres',
      role: 'Owner, Bella Salon & Spa',
      initials: 'AT',
    },
  ]

  return (
    <section className="py-24 px-8 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          What our clients say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          Real feedback from local business owners who chose STANDRD.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-10 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            <div className="text-yellow-400 text-xl mb-4">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="text-[17px] leading-relaxed text-[#0a0a0a] dark:text-white mb-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center font-bold text-white">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#0a0a0a] dark:text-white mb-0.5">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ========================================
// FILE: components/FAQ.js
// ========================================
