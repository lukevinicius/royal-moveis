'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import onlybet from '@/assets/home/our-clients/onlybet.png'
import apostabet from '@/assets/home/our-clients/apostabet.png'
import click from '@/assets/home/our-clients/1click.png'
import pagueibet from '@/assets/home/our-clients/paguei.png'
import pixgames from '@/assets/home/our-clients/pixgames.png'
import skymoney from '@/assets/home/our-clients/skymoney.png'
import playwin from '@/assets/home/our-clients/playwin.png'

const clients = [
  {
    name: 'OnlyBet',
    logo: onlybet,
  },
  {
    name: 'PlayWin',
    logo: playwin,
  },
  {
    name: '1Click',
    logo: click,
  },
  {
    name: 'PagueiBet',
    logo: pagueibet,
  },
  {
    name: 'PixGames',
    logo: pixgames,
  },
  {
    name: 'ApostaBet',
    logo: apostabet,
  },
  {
    name: 'SkyMoney',
    logo: skymoney,
  },
]

export function OurClients() {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-20 bg-zinc-200 py-28"
      id="solutions"
    >
      <div className="max-w-7xl space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-bold text-sky-500"
        >
          Nossos clientes
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-lg text-zinc-800"
        >
          Porque você precisa de uma equipe preparada e que entenda do mercado
          de apostas brasileiro. Estamos prontos para atender qualquer demanda e
          maximizar os seus resultados.
        </motion.p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center md:basis-1/5"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="h-28 w-fit"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
