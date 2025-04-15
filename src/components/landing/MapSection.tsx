// src/components/landing/MapSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function MapSection() {
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
          Где мы находимся
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-96 rounded-lg overflow-hidden shadow bg-gray-50 dark:bg-gray-800"
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d207825.59116227485!2d76.85297715266108!3d43.30562740906883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skz!4v1739820024881!5m2!1sen!2skz"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
