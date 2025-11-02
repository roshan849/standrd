// ========================================
// FILE: components/BeforeAfter.js
// ========================================
export default function BeforeAfter() {
  return (
    <div className="bg-[#fafafa] dark:bg-[#0f0f0f] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
            See the transformation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
            Real results from local businesses we've helped. Your website could look like this too.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Before */}
          <div className="relative">
            <span className="inline-block px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide mb-4 bg-red-500/10 text-red-500 border border-red-500/30">
              ❌ BEFORE
            </span>
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-[#fafafa] dark:bg-[#1a1a1a] p-3 flex items-center gap-2 border-b border-gray-200 dark:border-[#2a2a2a]">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
              </div>
              <div className="p-8 min-h-[400px] bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] dark:from-[#1a1a1a] dark:to-[#1a1a1a] flex flex-col gap-4">
                <div className="bg-[#e0e0e0] dark:bg-[#0a0a0a] rounded-lg p-4">
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded mb-2"></div>
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded w-3/5"></div>
                </div>
                <div className="bg-[#e0e0e0] dark:bg-[#0a0a0a] rounded-lg p-4">
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded mb-2 w-4/5"></div>
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded"></div>
                </div>
                <div className="bg-[#e0e0e0] dark:bg-[#0a0a0a] rounded-lg p-4">
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded mb-2"></div>
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded w-3/5"></div>
                </div>
                <div className="bg-[#e0e0e0] dark:bg-[#0a0a0a] rounded-lg p-4">
                  <div className="h-3 bg-[#c0c0c0] dark:bg-gray-800 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <span className="inline-block px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide mb-4 bg-green-500/10 text-green-600 dark:text-green-500 border border-green-500/30">
              ✓ AFTER
            </span>
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-[#fafafa] dark:bg-[#1a1a1a] p-3 flex items-center gap-2 border-b border-gray-200 dark:border-[#2a2a2a]">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
              </div>
              <div className="p-8 min-h-[400px] bg-gradient-to-br from-[#FF6B35]/5 to-[#fafafa] dark:to-[#1a1a1a] flex flex-col gap-4">
                <div className="bg-white dark:bg-[#0a0a0a] rounded-lg p-4 border border-[#FF6B35]/20">
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded mb-2"></div>
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded w-3/5"></div>
                </div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-lg p-4 border border-[#FF6B35]/20">
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded mb-2 w-4/5"></div>
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded"></div>
                </div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-lg p-4 border border-[#FF6B35]/20">
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded mb-2"></div>
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded w-3/5"></div>
                </div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-lg p-4 border border-[#FF6B35]/20">
                  <div className="h-3 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/30 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 dark:text-gray-600 italic text-sm">
          Screenshots from actual client projects
        </p>
      </div>
    </div>
  )
}

// ========================================
// FILE: components/HowItWorks.js
// ========================================
