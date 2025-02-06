'use client'

import { motion } from 'framer-motion'
import rmLogoV from '@/assets/rm-logo-v.png'
import Image from 'next/image'

export function AboutUs() {
  return (
    <div className="flex justify-center bg-zinc-200" id="about-us">
      <div className="max-w-7xl">
        <div className="grid items-center space-y-10 px-2 py-10 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:w-4/5"
          >
            <Image src={rmLogoV} alt="Royal Moveis" />
          </motion.div>
          <motion.div className="space-y-6 self-center max-md:text-center">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#254171] md:text-5xl"
            >
              Quem nós somos
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="text-zinc-800 md:text-lg"
            >
              A missão da Royal Moveis é transformar ambientes com móveis
              planejados de alta qualidade, oferecendo soluções personalizadas
              que unem design, funcionalidade e sofisticação. Nosso compromisso
              é proporcionar uma experiência única para cada cliente, garantindo
              conforto e aproveitamento máximo dos espaços.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#254171] md:text-5xl"
            >
              O que nós te oferecemos
            </motion.p>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
                className="text-zinc-800 md:text-lg"
              >
                <strong>Mais de 50% em aproveitamento de espaço:</strong> Nossos
                móveis planejados garantem até 50% mais otimização do ambiente
                em comparação com móveis convencionais, permitindo que você
                tenha mais funcionalidade e estilo sem comprometer espaço.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="text-zinc-800 md:text-lg"
              >
                <strong>Parceiro de projetos:</strong> Atuamos como verdadeiros
                parceiros, auxiliando desde a concepção do design até a
                instalação, oferecendo suporte completo para transformar suas
                ideias em realidade.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
                className="text-zinc-800 md:text-lg"
              >
                <strong>Equipe profissional:</strong> Nosso time é altamente
                capacitado e constantemente treinado para entregar soluções
                inovadoras e um atendimento de excelência, acompanhando cada
                detalhe do seu projeto do início ao fim.
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
