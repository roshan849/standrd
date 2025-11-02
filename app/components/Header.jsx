export default function Header({ theme, toggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-200 dark:border-[#2a2a2a] transition-all">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-[#0a0a0a] dark:text-white">
          STANDRD
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-12 h-12 border border-gray-200 dark:border-[#2a2a2a] bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl cursor-pointer flex items-center justify-center text-xl transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a] hover:scale-105"
            aria-label="Toggle theme"
          >
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
          
          <a
            href="https://cal.com/your-booking-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] rounded-lg font-semibold text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}