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
          className="text-center text-6xl font-bold text-sky-500"
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
          Porque você precisa de uma equipe preparada e que entenda do mercado
          de apostas brasileiro. Estamos prontos para atender qualquer demanda e
          maximizar os seus resultados.
        </motion.p>
        <div className="text-center">
          <Link href="https://calendly.com/lucas-vinicius-guaruba/demonstracao-do-sistema-rsa">
            <motion.button
              whileHover={{ scale: [null, 1.2, 1.1] }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <Button
                className="h-11 w-full rounded-full border-sky-500 bg-sky-500 text-base font-semibold text-zinc-50 delay-75 hover:bg-sky-500 hover:text-zinc-50"
                variant="outline"
              >
                Agendar Demonstração
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
            <Headset className="text-sky-500" size={64} />
            <p className="text-2xl font-bold text-sky-500">Equipe preparada</p>
            <p>
              Problemas técnicos e dúvidas podem surgir a qualquer momento,
              necessitando de respostas rápidas. São mais de 5 anos de
              experiência no mercado, e toda essa expertise é colocada em
              prática em seu sistema.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <Rocket className="text-sky-500" size={64} />
            <p className="text-2xl font-bold text-sky-500">Performance</p>
            <p>
              Expanda seu negócio sem preocupação! Nossa plataforma está
              construída sob uma infraestrutura de computação, segura, confiável
              e escalável.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <Gauge className="text-sky-500" size={64} />
            <p className="text-2xl font-bold text-sky-500">Máxima Otimização</p>
            <p>
              Realizamos centenas de atualizações e melhorias a cada ano para
              ajudar as operações a ficar na vanguarda da indústria.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
