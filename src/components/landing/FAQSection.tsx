// src/components/landing/FAQSection.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const faqData = [
  {
    question: 'Как оформить заказ?',
    answer:
      'Выберите нужные товары в каталоге, добавьте в корзину и оформите заказ...',
  },
  {
    question: 'Как быстро осуществляется доставка?',
    answer:
      'Как правило, доставка занимает 1–2 дня...',
  },
  {
    question: 'Можно ли вернуть или обменять товар?',
    answer:
      'Если что-то не устроило по качеству, свяжитесь с нами...',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          Частые вопросы
        </motion.h2>

        <div className="max-w-2xl mx-auto text-left">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {item.question}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {openIndex === index ? '–' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-gray-50 dark:bg-gray-800 mt-2 p-4 rounded-lg shadow text-gray-600 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
