// src/components/landing/SeasonalitySection.tsx
'use client'
import { motion } from 'framer-motion'

export default function SeasonalitySection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        >
          Сезонность продуктов
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8"
        >
          Узнайте, в какие месяцы какие овощи и фрукты наиболее доступны и вкусны.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left">Месяц</th>
                <th className="p-3 text-left">Овощи</th>
                <th className="p-3 text-left">Фрукты</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-3 font-semibold text-gray-800 dark:text-gray-100">
                  Январь
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-300">
                  Картофель, Морковь
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-300">
                  Яблоки (хранение)
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-3 font-semibold text-gray-800 dark:text-gray-100">
                  Февраль
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-300">
                  Капуста, Свекла
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-300">
                  Груши (хранение)
                </td>
              </tr>
              {/* ...добавьте остальные месяцы */}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
