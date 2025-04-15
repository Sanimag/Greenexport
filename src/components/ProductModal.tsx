// src/components/ProductModal.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    title: string
    image: string
    season: string
    price: string
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
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
        >
          {/* Заголовок */}
          <div className="relative h-64 bg-green-50">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Контент */}
          <div className="p-6 overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                <p className="text-green-600 text-xl font-medium">{product.price} ₸/кг</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {product.season}
              </span>
            </div>

            <div className="space-y-6">
              {/* Описание */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Описание</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Условия хранения */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Условия хранения</h3>
                <p className="text-gray-600">{product.storageConditions}</p>
              </div>

              {/* Происхождение */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Место производства</h3>
                <p className="text-gray-600">{product.origin}</p>
              </div>

              {/* Варианты фасовки */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Варианты фасовки</h3>
                <div className="flex flex-wrap gap-2">
                  {product.weightOptions.map((option) => (
                    <span
                      key={option}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>

              {/* Пищевая ценность */}
              {product.nutritionalValue && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Пищевая ценность на 100г</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Калории</p>
                      <p className="text-lg font-medium text-gray-800">{product.nutritionalValue.calories}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Белки</p>
                      <p className="text-lg font-medium text-gray-800">{product.nutritionalValue.proteins}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Жиры</p>
                      <p className="text-lg font-medium text-gray-800">{product.nutritionalValue.fats}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Углеводы</p>
                      <p className="text-lg font-medium text-gray-800">{product.nutritionalValue.carbohydrates}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Футер с кнопкой */}
          <div className="border-t p-4">
            <button
              onClick={onClose}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Заказать
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}