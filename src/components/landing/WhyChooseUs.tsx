'use client'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Натуральность',
    text: 'Продукты выращены без химических удобрений',
    icon: '🌱',
  },
  {
    title: 'Быстрая доставка',
    text: 'Доставляем продукцию максимально свежей',
    icon: '🚚',
  },
  {
    title: 'Гарантия качества',
    text: 'Строгий отбор и контроль на каждом этапе',
    icon: '✅',
  },
]

export default function WhyChooseUs() {
  return (
    // Делаем высоту на весь экран, 
    // фон белый в светлой теме, и bg-gray-900 в тёмной.
    // flex + items-center + justify-center => вертикальное и горизонтальное центрирование
    <section className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      {/* Контейнер с text-center для горизонтального выравнивания контента */}
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100"
        >
          Почему выбирают нас
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg shadow bg-gray-50 dark:bg-gray-800 
                         flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
