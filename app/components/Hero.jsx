// ========================================
// FILE: components/Hero.js
// ========================================
export default function Hero() {
  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto text-center">
      <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-600 dark:text-green-500 mb-8 font-semibold">
        ✓ Trusted by 50+ local businesses
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-extrabold tracking-tight leading-tight text-[#0a0a0a] dark:text-white">
        Stop Losing Customers to<br />
        <span className="text-[#FF6B35]">Your Outdated Website</span>
      </h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[720px] mx-auto mb-10 leading-relaxed">
        Get more local customers with a professional website that actually works. Fixed pricing, fast delivery, and a money-back guarantee if you're not satisfied.
      </p>
      
      <div className="flex gap-4 justify-center flex-wrap mb-16">
        <a
          href="https://cal.com/mohammad-ashraf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#FF6B35] text-white rounded-xl font-semibold text-[17px] transition-all hover:bg-[#ff5722] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#FF6B35]/30 inline-block"
        >
          Book Free Call — See Your Design Preview
        </a>
        <a
          href="#pricing"
          className="px-8 py-4 bg-[#fafafa] dark:bg-[#1a1a1a] text-[#0a0a0a] dark:text-white border-2 border-gray-200 dark:border-[#2a2a2a] rounded-xl font-semibold text-[17px] transition-all hover:border-gray-400 dark:hover:border-[#3a3a3a] hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a] inline-block"
        >
          View Pricing
        </a>
      </div>
      
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-full text-[15px] font-semibold text-[#0a0a0a] dark:text-white">
        <span>🛡️</span>
        <span>100% Money-Back Guarantee</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1100px] mx-auto mt-16">
        <div className="text-center p-8 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl transition-all shadow-[0_8px_24px_rgba(0,0,0,0.06),0_6px_20px_rgba(255,107,53,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08),0_10px_50px_rgba(255,107,53,0.32)]">
          <div className="text-5xl font-extrabold text-[#FF6B35] mb-2">150%</div>
          <div className="text-[15px] text-gray-600 dark:text-gray-400">Avg. increase in inquiries</div>
        </div>
        <div className="text-center p-8 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl transition-all shadow-[0_8px_24px_rgba(0,0,0,0.06),0_6px_20px_rgba(255,107,53,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08),0_10px_50px_rgba(255,107,53,0.32)]">
          <div className="text-5xl font-extrabold text-[#FF6B35] mb-2">7-14</div>
          <div className="text-[15px] text-gray-600 dark:text-gray-400">Days to launch</div>
        </div>
        <div className="text-center p-8 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl transition-all shadow-[0_8px_24px_rgba(0,0,0,0.06),0_6px_20px_rgba(255,107,53,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08),0_10px_50px_rgba(255,107,53,0.32)]">
          <div className="text-5xl font-extrabold text-[#FF6B35] mb-2">4.9/5</div>
          <div className="text-[15px] text-gray-600 dark:text-gray-400">Client satisfaction rating</div>
        </div>
        <div className="text-center p-8 bg-[#fafafa] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl transition-all shadow-[0_8px_24px_rgba(0,0,0,0.06),0_6px_20px_rgba(255,107,53,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08),0_10px_50px_rgba(255,107,53,0.32)]">
          <div className="text-5xl font-extrabold text-[#FF6B35] mb-2">$500</div>
          <div className="text-[15px] text-gray-600 dark:text-gray-400">Starting price</div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// FILE: components/TrustBanner.js
// ========================================
