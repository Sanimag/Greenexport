// src/components/landing/Testimonials.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonialsData = [
  {
    name: 'Анастасия',
    text: 'Очень довольна качеством овощей и фруктов! Всё свежее, ароматное и доставили быстро.',
    avatar: '/images/avatar1.jpg',
  },
  {
    name: 'Максим',
    text: 'Заказываю уже в третий раз. Удобно, что можно выбрать нужный вес и не переживать за свежесть.',
    avatar: '/images/avatar2.jpg',
  },
  {
    name: 'Марина',
    text: 'Раньше покупала в супермаркете, теперь только здесь. Качество лучше, а цены не выше.',
    avatar: '/images/avatar3.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100"
        >
          Отзывы наших клиентов
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow flex flex-col"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-3"
                />
                <div className="text-gray-800 dark:text-gray-100 font-semibold">
                  {item.name}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
