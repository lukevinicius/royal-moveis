import Link from 'next/link'

export function NavigationLinks() {
  return (
    <>
      <Link href="#" className="text-lg text-zinc-200 hover:text-zinc-400">
        Início
      </Link>
      <Link
        href="#about-us"
        className="text-lg text-zinc-200 hover:text-zinc-400"
      >
        Sobre Nós
      </Link>
      <Link
        href="#solutions"
        className="text-lg text-zinc-200 hover:text-zinc-400"
      >
        Soluções
      </Link>
      {/* <Link href="#" className="hover:text-zinc-400 text-zinc-200 text-lg">
        Contato
      </Link> */}
    </>
  )
}
