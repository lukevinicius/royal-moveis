'use client'

import { motion } from 'framer-motion'
import { Logo } from '@/components/logo'

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
            <Logo width={345} />
          </motion.div>
          <motion.div className="space-y-6 self-center max-md:text-center">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-sky-500 md:text-5xl"
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
              A missão da RSA é proporcionar a melhor experiência para o usuário
              final e oferecer um modelo de gestão simples e dinâmico para
              operadores, permitindo que seu negócio cresça em escala.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-sky-500 md:text-5xl"
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
                <strong>Mais de 50% EM CONVERSÃO:</strong> Nosso sistema
                converte até 50% a mais que os outros sistemas do mercado,
                fazendo com que você tenha até o DOBRO de resultados com o mesmo
                esforço empregado.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="text-zinc-800 md:text-lg"
              >
                <strong>Parceiro de negócios:</strong> Atuamos como verdadeiros
                Partners, direcionando quanto integrações, políticas,
                funcionamento e orientação inicial para que você possa começar
                bem o seu negócio.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
                className="text-zinc-800 md:text-lg"
              >
                <strong>Equipe profissional:</strong> Nosso time é treinado
                constantemente em prol da excelência na resolução de problemas,
                suporte e orientações, tudo isso em 24/7.
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
