export default function ComparisonTable() {
  return (
    <div className="py-24 px-8 bg-white dark:bg-[#0a0a0a]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold tracking-tight text-[#0a0a0a] dark:text-white">
          Why choose STANDRD?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[680px] mx-auto">
          See how we stack up against DIY builders and expensive agencies.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto overflow-x-auto hide-scrollbar">
        <table className="w-full border-collapse bg-[#fafafa] dark:bg-[#1a1a1a] rounded-xl overflow-hidden">
          <thead className="bg-[#f5f5f5] dark:bg-[#1a1a1a]">
            <tr>
              <th className="p-6 text-left font-bold text-[#0a0a0a] dark:text-white border-b-2 border-gray-200 dark:border-[#2a2a2a] w-2/5"></th>
              <th className="p-6 text-left font-bold text-[#0a0a0a] dark:text-white border-b-2 border-gray-200 dark:border-[#2a2a2a] bg-[#FF6B35]/5">
                STANDRD
              </th>
              <th className="p-6 text-left font-bold text-[#0a0a0a] dark:text-white border-b-2 border-gray-200 dark:border-[#2a2a2a]">
                DIY Builders
              </th>
              <th className="p-6 text-left font-bold text-[#0a0a0a] dark:text-white border-b-2 border-gray-200 dark:border-[#2a2a2a]">
                Big Agencies
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>Cost</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5 font-semibold">
                $500-$1,000
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                $10-50/month forever
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                $3,000-$10,000+
              </td>
            </tr> */}
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>Timeline</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5 font-semibold">
                7-14 days
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                Weeks/months (if you finish)
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                2-6 months
              </td>
            </tr>
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>Design Quality</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Professional
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> Template-based
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Professional
              </td>
            </tr>
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>Mobile Optimized</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Always
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Sometimes
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Always
              </td>
            </tr>
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>SEO Setup</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Included
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> You handle it
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Extra cost
              </td>
            </tr>
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>You Own It</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> 100%
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> Platform locked
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Usually
              </td>
            </tr>
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>Ongoing Fees</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> None (optional)
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> Monthly forever
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> Maintenance fees
              </td>
            </tr>
            <tr>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <strong>Support</strong>
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Personal support
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> Help articles only
              </td>
              <td className="p-5 border-b border-gray-200 dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Expensive add-on
              </td>
            </tr>
            <tr>
              <td className="p-5 text-gray-600 dark:text-gray-400">
                <strong>Money-Back Guarantee</strong>
              </td>
              <td className="p-5 text-gray-600 dark:text-gray-400 bg-[#FF6B35]/5">
                <span className="text-green-600 dark:text-green-500 text-2xl font-bold">✓</span> Yes
              </td>
              <td className="p-5 text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> No
              </td>
              <td className="p-5 text-gray-600 dark:text-gray-400">
                <span className="text-red-500 text-2xl font-bold">✗</span> Rarely
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
