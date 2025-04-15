'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-8 mt-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Верхняя часть футера */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Логотип / Название */}
          <div className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4 md:mb-0">
            AGRO
          </div>

          {/* Короткое описание */}
          <p className="text-center md:text-right text-gray-600 dark:text-gray-300 max-w-md">
            Свежие овощи и фрукты напрямую с фермы. Быстрая доставка по всему Казахстану.
          </p>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-6" />

        {/* Средняя часть: контакты и соцсети */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Контакты */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold mb-2">Контакты</h4>
            <p className="text-gray-600 dark:text-gray-300">Телефон: +7 (700) 123-45-67</p>
            <p className="text-gray-600 dark:text-gray-300">Email: info@agro.kz</p>
          </div>

          {/* Соцсети */}
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://t.me"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <FaTelegramPlane size={20} />
            </Link>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-6" />

        {/* Нижняя часть: копирайт */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2023 Agro. Все права защищены.
        </div>
      </motion.div>
    </footer>
  )
}
