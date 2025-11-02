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

  const duplicatedObjections = [...objections, ...objections]; // Duplicate cards for seamless loop

  return (
    <div className="py-24 bg-gradient-to-b from-[#fafafa] to-white dark:from-[#0f0f0f] dark:to-[#050505]">
      <div className="text-center mb-16 px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Still on the fence?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          We've heard it all. Here's why those concerns don't apply here.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] dark:from-[#0f0f0f] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] dark:from-[#0f0f0f] to-transparent z-10"></div>
        
        <div className="flex gap-6 px-8 pb-4 auto-scroll-cards">
          {duplicatedObjections.map((obj, index) => (
            <div
              key={index}
              className="flex-none w-[60vw] max-w-xl"
            >
              <div className="p-12 h-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border border-gray-200/50 dark:border-[#2a2a2a]/50 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-[#0a0a0a]/90">
                <div className="md:text-5xl text-lg mb-6">{obj.icon}</div>
                <h3 className="md:text-2xl text-sm mb-4 font-bold text-[#0a0a0a] dark:text-white">
                  {obj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed md:text-lg text-sm">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
