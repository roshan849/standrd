export default function Pricing() {
  const plans = [
    {
      name: 'Refresh',
      description: 'Quick improvements to modernize your existing site',
      price: '$500',
      term: 'One-time payment',
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
      description: 'Full redesign from the ground up',
      price: '$750',
      term: 'One-time payment',
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
      description: 'Everything plus advanced features',
      price: '$1,000',
      term: 'One-time payment',
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

  return (
    <div id="pricing" className="py-24 px-8 bg-white dark:bg-[#0a0a0a]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Simple, honest pricing
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          One-time payment. No surprises. No monthly fees. Choose what fits your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-12 rounded-3xl relative transition-all flex flex-col ${
              plan.featured
                ? 'bg-white dark:bg-[#0a0a0a] border-[3px] border-[#FF6B35] shadow-xl shadow-[#FF6B35]/15'
                : 'bg-[#fafafa] dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#2a2a2a]'
            } hover:border-gray-400 dark:hover:border-[#3a3a3a] hover:-translate-y-1 hover:shadow-2xl`}
          >
            {plan.badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                {plan.badge}
              </span>
            )}

            <h3 className="text-2xl mb-2 font-bold text-[#0a0a0a] dark:text-white">
              {plan.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-[15px] mb-8">
              {plan.description}
            </p>

            <div className="text-6xl font-extrabold mb-1 text-[#0a0a0a] dark:text-white">
              {plan.price}
            </div>
            <div className="text-gray-400 dark:text-gray-600 text-[15px] mb-8">
              {plan.term}
            </div>

            <ul className="list-none mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="py-3 text-gray-600 dark:text-gray-400 text-[15px] flex items-start gap-3"
                >
                  <span className="text-[#FF6B35] font-bold text-lg flex-shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://cal.com/your-booking-link"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-xl font-semibold text-base transition-all block text-center ${
                plan.featured
                  ? 'bg-[#FF6B35] text-white hover:bg-[#ff5722]'
                  : 'bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a]'
              } hover:-translate-y-0.5 hover:shadow-lg`}
            >
              Book Free Call
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}