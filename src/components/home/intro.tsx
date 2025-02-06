'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

import fortuneTiger from '@/assets/home/fortune-tiger.webp'
import Image from 'next/image'
import Link from 'next/link'

export function Intro() {
  return (
    <div className="min-h-screen w-full bg-slate-800">
      <Header />
      <div className="flex justify-center p-5">
        <div className="grid max-w-7xl items-center md:grid-cols-2">
          <div className="space-y-6 self-center">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-sky-500 md:text-6xl"
            >
              Tenha o seu próprio site de apostas online com poucos cliques
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="text-zinc-200 md:text-lg"
            >
              Com os <strong>principais jogos</strong> e os{' '}
              <strong>melhores recursos</strong> do mercado com até{' '}
              <strong>50%</strong> mais conversão.
            </motion.p>
            <div>
              <Link href="https://calendly.com/lucas-vinicius-guaruba/demonstracao-do-sistema-rsa">
                <motion.button
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: [null, 1.2, 1.1] }}
                  className="w-full"
                >
                  <Button
                    className="h-11 w-full rounded-full border-sky-500 bg-transparent text-base font-semibold text-zinc-200 delay-75 hover:bg-sky-500 hover:text-zinc-200"
                    variant="outline"
                  >
                    Agendar Demonstração
                  </Button>
                </motion.button>
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={fortuneTiger}
              alt="Intro"
              className="object-contain fade-in-5 max-md:mt-6"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
