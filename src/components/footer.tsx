import { Logo } from '@/components/logo'
import { Instagram } from 'lucide-react'
import { NavigationLinks } from '@/components/navigation-links'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-slate-800">
      <div className="flex justify-center">
        <div className="grid max-w-7xl gap-6 py-8 md:grid-cols-5">
          <div className="flex items-center justify-center">
            <Logo width={200} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <NavigationLinks />
          </div>
          <p className="flex-1 text-justify text-lg text-zinc-200 max-md:p-6 md:col-span-2">
            A RSA é uma empresa de tecnologia especializada no desenvolvimento
            de plataformas de jogos e apostas online, com foco no mercado
            regulado B2B. Oferecemos soluções completas e abrangentes para
            Sportsbook, Cassino e Loterias, proporcionando uma experiência
            robusta e confiável para nossos parceiros.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="https://www.instagram.com/rsa.bet">
              <Instagram size={30} className="text-zinc-200" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 p-2 text-center text-zinc-200">
        © {new Date().getFullYear()} RSA. Todos os direitos reservados.
      </div>
    </footer>
  )
}
