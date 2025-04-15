// src/components/ProductCard.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProductModal from './ProductModal'

interface ProductCardProps {
  title: string
  image: string
  season: string
  price?: string
  description: string
  storageConditions: string
  origin: string
  weightOptions: string[]
  nutritionalValue?: {
    calories: string
    proteins: string
    fats: string
    carbohydrates: string
  }
}

export default function ProductCard({ 
  title, 
  image, 
  season, 
  price,
  description,
  storageConditions,
  origin,
  weightOptions,
  nutritionalValue
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              {season}
            </span>
          </div>
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          {price && (
            <p className="text-green-600 font-medium text-lg mb-4">
              {price} ₸/кг
            </p>
          )}
          
          <div className="mt-auto flex gap-2">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Заказать
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="w-10 flex items-center justify-center border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              ⓘ
            </motion.button>
          </div>
        </div>
      </motion.div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          title,
          image,
          season,
          price: price || '',
          description,
          storageConditions,
          origin,
          weightOptions,
          nutritionalValue
        }}
      />
    </>
  )
}