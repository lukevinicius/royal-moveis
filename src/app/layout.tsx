import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { WhatsappButtom } from '@/components/whatsapp-buttom'

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Royal Moveis',
  description: 'Royal Moveis',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <WhatsappButtom />
      </body>
    </html>
  )
}
