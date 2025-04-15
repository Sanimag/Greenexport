// src/components/landing/Steps.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const stepsData = [
  {
    title: 'Вы выбираете продукт',
    text: 'Сортируйте, фильтруйте и находите нужные овощи и фрукты',
    icon: '/icons/step1.png',
  },
  {
    title: 'Мы собираем заказ',
    text: 'Фермеры отбирают самые свежие и качественные товары',
    icon: '/icons/step2.png',
  },
  {
    title: 'Быстрая доставка',
    text: 'Отправляем в день заказа или на следующий день',
    icon: '/icons/step3.png',
  },
  {
    title: 'Вы наслаждаетесь!',
    text: 'Готовьте вкусные блюда из натуральных продуктов',
    icon: '/icons/step4.png',
  },
]

export default function Steps() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100"
        >
          Как мы работаем
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={64}
                height={64}
                className="mb-4"
                priority={index === 0}
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
