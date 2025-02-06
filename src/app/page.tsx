import { AboutUs } from '@/components/home/about-us'
import { Intro } from '@/components/home/intro'
import { OurClients } from '@/components/home/our-clients'
import { Solutions } from '@/components/home/solutions'

export default function Home() {
  return (
    <>
      <Intro />
      <AboutUs />
      <Solutions />
      <OurClients />
    </>
  )
}
