export default function FinalCTA() {
  return (
    <section className="text-center py-32 px-8 bg-[#fafafa] dark:bg-[#0f0f0f]">
      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
        Ready to stop losing customers?
      </h2>
      
      <div className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-lg font-bold mb-4 text-[15px]">
        Only 3 project slots left this month
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-[640px] mx-auto">
        Book a free call now. See your design preview. Get your new website in 14 days or less. 100% money-back guarantee if you're not satisfied.
      </p>
      
      <a
        href="https://cal.com/your-booking-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-[#FF6B35] text-white rounded-xl font-semibold text-[17px] transition-all hover:bg-[#ff5722] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#FF6B35]/30"
      >
        Book Your Free Call Now
      </a>
      
      <p className="mt-4 text-sm text-gray-400 dark:text-gray-600">
        No credit card required • 30-minute call • Zero pressure
      </p>
    </section>
  )
}