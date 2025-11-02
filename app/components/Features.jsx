// ========================================
// FILE: components/Features.js
// ========================================
export default function Features() {
  const features = [
    {
      title: 'Mobile-first design',
      description: 'Works perfectly on phones, tablets, and desktops. Most customers browse on mobile—your site will look great everywhere.',
    },
    {
      title: 'Lightning fast',
      description: 'Optimized for speed. Fast websites keep customers engaged and rank better on Google. We guarantee fast load times.',
    },
    {
      title: 'SEO ready',
      description: 'Built to be found on Google. We handle the technical SEO so local customers can discover you easily.',
    },
    {
      title: 'Easy to update',
      description: 'Make simple changes yourself. We\'ll show you how to update text, photos, and basic content without calling us.',
    },
    {
      title: 'Contact forms',
      description: 'Make it easy for customers to reach you. Every inquiry goes straight to your email—no missed opportunities.',
    },
    {
      title: 'You own it 100%',
      description: 'Full ownership of everything. No hidden fees, no lock-in contracts. It\'s yours to keep forever.',
    },
  ]

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Everything you need to succeed online
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          No fluff. Just the features that actually bring in customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-10 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl transition-all hover:border-gray-400 dark:hover:border-[#3a3a3a] hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-xl mb-3 font-bold text-[#0a0a0a] dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ========================================
// FILE: components/Pricing.js
// ========================================
