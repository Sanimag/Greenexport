// src/components/HeroSection.tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import ContactPopup from './ContactPopup'

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const moveX = useSpring(mouseX, springConfig)
  const moveY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const centerX = innerWidth / 2
      const centerY = innerHeight / 2
      const normalizedX = (event.clientX - centerX) / centerX
      const normalizedY = (event.clientY - centerY) / centerY
      mouseX.set(normalizedX * 20)
      mouseY.set(normalizedY * 20)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Форма отправлена:', data)
    // Здесь можно добавить логику отправки данных на сервер
    alert('Спасибо! Ваше сообщение отправлено.')
    setIsContactOpen(false)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Фоновое изображение с параллакс эффектом */}
      <motion.div 
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
        style={{
          backgroundImage: "url('/farm-tech.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          x: moveX,
          y: moveY
        }}
      />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 backdrop-blur-[1px]" />

      {/* Контент */}
      <div className="relative z-10 h-screen">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Овощи и фрукты от фермера
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2">
                Свежие продукты с доставкой по всей России
              </p>
              <p className="text-lg text-white/70">
                Прямые поставки с нашей фермы
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Link href="/catalog">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-all w-full sm:w-auto"
                >
                  Смотреть каталог
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactOpen(true)}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium border border-white/20 hover:bg-white hover:text-green-800 transition-all w-full sm:w-auto"
              >
                Связаться с нами
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Индикатор скролла */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            >
              <div className="w-1 h-3 bg-white/50 rounded-full mx-auto" />
            </motion.div>
            <p className="text-white/50 text-sm mt-2 text-center">Листайте вниз</p>
          </motion.div>
        </div>
      </div>

      {/* Контактная форма в виде поп-апа */}
      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        onSubmit={handleContactSubmit} 
      />
    </div>
  )
}