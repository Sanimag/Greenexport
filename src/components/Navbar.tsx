// src/components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
// Можно импортировать иконку телефона
import { FaPhone } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Переключатель темы (добавляем/убираем класс "dark" на <html>)
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setIsDark(!isDark)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/50 backdrop-blur-lg shadow-lg dark:bg-gray-900/50'
          : 'bg-transparent backdrop-blur-none dark:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-white dark:text-gray-100'
            }`}
          >
            AGROLINE
          </Link>

          {/* Меню, телефон и переключатель */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/catalog"
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-800 dark:text-gray-200 hover:text-green-600' 
                  : 'text-white hover:text-green-200 dark:text-gray-100'
              }`}
            >
              Каталог
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-800 dark:text-gray-200 hover:text-green-600' 
                  : 'text-white hover:text-green-200 dark:text-gray-100'
              }`}
            >
              О нас
            </Link>
            <Link
              href="/contacts"
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-800 dark:text-gray-200 hover:text-green-600' 
                  : 'text-white hover:text-green-200 dark:text-gray-100'
              }`}
            >
              Контакты
            </Link>

            {/* Номер телефона с иконкой */}
            <a 
              href="tel:+77479876729" 
              className={`flex items-center transition-all ${
                isScrolled
                  ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300'
                  : 'text-white hover:text-green-200 dark:hover:text-green-200'
              }`}
            >
              <FaPhone className="mr-2" />
              <span className="hidden md:inline">+7 747 987 6729</span>
              <span className="md:hidden">Позвонить</span>
            </a>

            {/* Слайдер-переключатель темы */}
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="theme-toggle"
                className="sr-only"
                checked={isDark}
                onChange={toggleTheme}
              />
              <label
                htmlFor="theme-toggle"
                className="block w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer"
              />
              <div
                className={`
                  absolute left-0 top-0 w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow
                  transform transition-transform
                  ${isDark ? 'translate-x-6' : 'translate-x-0'}
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}