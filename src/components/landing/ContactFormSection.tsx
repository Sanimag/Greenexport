// src/components/landing/ContactFormSection.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма отправлена:', formData)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100"
        >
          Свяжитесь с нами
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
              Ваше имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition-colors font-medium w-full"
          >
            Отправить
          </button>
        </motion.form>
      </div>
    </section>
  )
}
