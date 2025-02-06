import { Logo } from '@/components/logo'
import { NavigationLinks } from '@/components/navigation-links'

export function Header() {
  return (
    <header className="flex h-20 items-center max-md:p-5 md:justify-around">
      <Logo width={150} height={150} />
      <nav className="space-x-6 max-sm:hidden">
        <NavigationLinks />
      </nav>
      <div></div>
    </header>
  )
}
