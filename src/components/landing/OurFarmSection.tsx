// src/components/landing/OurFarmSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurFarmSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="relative w-full h-0 pb-[56.25%]">
            <Image
              src="/images/our-farm.jpg"
              alt="Наша ферма"
              fill
              className="object-cover rounded-lg shadow"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:pl-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Наша ферма
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Мы находимся в экологически чистом регионе ...
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Наши специалисты постоянно следят за состоянием почвы ...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
