export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-[#2a2a2a] text-center text-gray-500 dark:text-gray-400 text-[15px]">
      <p>&copy; {new Date().getFullYear()} STANDRD Web Corp — Professional web design for local businesses</p>
      <p className="mt-2">
        <a 
          href="mailto:ashraf@standrdwebcorp.com"
          className="text-[#FF6B35] font-semibold hover:underline"
        >
          roshan@standrdwebcorp.com / ashraf@standrdwebcorp.com
        </a>
      </p>
      
    </footer>
  )
}