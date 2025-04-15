// src/components/landing/UsefulTipsSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const tipsData = [
  {
    title: 'Как правильно хранить овощи',
    text: 'Держите овощи в прохладном месте...',
    image: '/images/tips-1.jpg',
  },
  {
    title: 'Рецепт быстрого салата',
    text: 'Нарежьте свежие огурцы, помидоры...',
    image: '/images/tips-2.jpg',
  },
]

export default function UsefulTipsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        >
          Полезно знать
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipsData.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
