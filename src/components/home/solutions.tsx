'use client'

import { motion } from 'framer-motion'
import { Gauge, Headset, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Solutions() {
  return (
    <div className="flex justify-center py-28" id="solutions">
      <div className="max-w-7xl space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-bold text-[#254171]"
        >
          Soluções inovadoras
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-lg text-zinc-800"
        >
          Porque você precisa de uma equipe especializada que entenda de design
          e funcionalidade. Estamos prontos para transformar qualquer ambiente e
          garantir que cada espaço seja utilizado com eficiência e sofisticação.
        </motion.p>
        <div className="text-center">
          <Link href="https://api.whatsapp.com/send?phone=5588988889005&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: [null, 1.2, 1.1] }}
            >
              <Button
                className="h-11 w-full rounded-full border-[#b39667] bg-transparent text-base font-semibold text-[#b39667] delay-75 hover:bg-[#b39667] hover:text-[#f2f2f2]"
                variant="outline"
              >
                Solicitar Orçamento
              </Button>
            </motion.button>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <Headset className="text-[#254171]" size={64} />
            <p className="text-2xl font-bold text-[#254171]">
              Equipe preparada
            </p>
            <p>
              Cada projeto é único! Nossa equipe conta com anos de experiência
              no mercado, garantindo suporte especializado desde a concepção até
              a instalação, proporcionando um serviço completo e personalizado.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <Rocket className="text-[#254171]" size={64} />
            <p className="text-2xl font-bold text-[#254171]">Qualidade</p>
            <p>
              Transforme seus ambientes sem preocupações! Nossos móveis são
              projetados com materiais de alta qualidade e tecnologia de ponta,
              garantindo durabilidade, sofisticação e um acabamento impecável.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <Gauge className="text-[#254171]" size={64} />
            <p className="text-2xl font-bold text-[#254171]">
              Máxima Otimização
            </p>
            <p>
              Planejamos cada detalhe para otimizar seu espaço ao máximo. Nossos
              projetos são pensados para unir funcionalidade e estética, criando
              ambientes organizados, modernos e confortáveis.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
