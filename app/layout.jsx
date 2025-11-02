// ========================================
// FILE: app/layout.jsx
// ========================================
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'STANDRD — Stop Losing Customers to Your Outdated Website',
  description:
    'Get more local customers with a website that actually works. Professional redesign in 14 days. Money-back guarantee.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>{children}</body>
    </html>
  )
}
