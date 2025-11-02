export default function HowItWorks() {
  const steps = [
    {
      number: 'STEP 01',
      title: 'Book your free call',
      description: 'Tell us about your business. We\'ll show you a design preview of how your new website will look—completely free, no commitment required.',
      features: [
        'Free design preview mockup',
        'Honest recommendations',
        'Clear pricing breakdown',
        'Timeline expectations',
        'Zero pressure to buy',
      ],
    },
    {
      number: 'STEP 02',
      title: 'We build your site',
      description: 'Once you approve, we get to work. You\'ll see progress updates and can request changes anytime. We don\'t move forward until you\'re happy.',
      features: [
        'Mobile-first design approach',
        'Fast, optimized performance',
        'SEO-ready from day one',
        'Regular progress updates',
        'Changes anytime you want',
      ],
    },
    {
      number: 'STEP 03',
      title: 'Launch and grow',
      description: 'Your new website goes live in 1-2 weeks. We make sure everything works perfectly, train you on updates, and you start bringing in more customers.',
      features: [
        '100% ownership of your site',
        'Training on simple updates',
        'Ongoing support available',
        'Brings in real customers',
        'Money-back guarantee',
      ],
    },
  ]

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Get your new website in 3 simple steps
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          No confusion. No surprises. Just a straightforward process from start to finish.
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`p-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="text-base font-bold text-[#FF6B35] mb-4 tracking-wide">
                {step.number}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a] dark:text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className={`bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-3xl p-12 min-h-[320px] flex items-center justify-center transition-all hover:shadow-2xl hover:-translate-y-1 ${
              index % 2 === 1 ? 'lg:order-1' : ''
            }`}>
              <div className="w-full">
                <h4 className="text-xl mb-6 text-[#0a0a0a] dark:text-white font-bold">
                  {step.number === 'STEP 01' && 'What You Get on the Call'}
                  {step.number === 'STEP 02' && 'During Development'}
                  {step.number === 'STEP 03' && 'After Launch'}
                </h4>
                <ul className="list-none text-gray-600 dark:text-gray-400">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="py-3 text-[15px] flex items-center gap-3">
                      <span className="text-[#FF6B35] font-bold text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}