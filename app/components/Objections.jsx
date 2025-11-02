// ========================================
// FILE: components/Objections.js
// ========================================
export default function Objections() {
  const objections = [
    {
      icon: '💭',
      title: '"I tried DIY website builders"',
      description: 'DIY tools are great if you have time and know design. But most business owners don\'t. We handle everything so you can focus on running your business—and we make it look professional.',
    },
    {
      icon: '💰',
      title: '"My cousin can do it cheaper"',
      description: 'Sure, but will they finish it? Do they know SEO, mobile optimization, or conversion best practices? We deliver on time with proven methods—backed by a money-back guarantee.',
    },
    {
      icon: '⏰',
      title: '"I don\'t have time for this"',
      description: 'That\'s exactly why we exist. You spend 30 minutes on a call, give us your content, and we handle the rest. No endless meetings or complicated processes.',
    },
    {
      icon: '🤔',
      title: '"What if I don\'t like it?"',
      description: 'We show you the design before building. You approve every step. And if you\'re still not happy? 100% money-back guarantee. Zero risk for you.',
    },
    {
      icon: '📱',
      title: '"My current site is \'fine\'"',
      description: 'If it\'s not bringing in new customers regularly, it\'s not fine. 70% of people check websites before visiting a business. A bad site actively pushes them away.',
    },
    {
      icon: '🔧',
      title: '"Can I update it myself later?"',
      description: 'Absolutely. We build on easy platforms and train you on basic updates. But we\'re always here if you need help with bigger changes.',
    },
  ]

  return (
    <div className="py-24 px-8 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Still on the fence?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          We've heard it all. Here's why those concerns don't apply here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
        {objections.map((obj, index) => (
          <div
            key={index}
            className="p-10 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            <div className="text-4xl mb-4">{obj.icon}</div>
            <h3 className="text-xl mb-4 font-bold text-[#0a0a0a] dark:text-white">
              {obj.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              {obj.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
