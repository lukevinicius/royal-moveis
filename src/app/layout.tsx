import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { WhatsappButtom } from '@/components/whatsapp-buttom'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'RSA',
  description: 'RSA IGaming Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WRWZNLFF" />
      <body className={inter.className}>
        {children}
        <Footer />
        <WhatsappButtom />
        <Analytics />
      </body>
    </html>
  )
}
