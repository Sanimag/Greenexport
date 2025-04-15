'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    id: 1,
    title: 'Дыня Торпеда',
    image: '/products/melon.jpg',
    season: 'Лето',
    category: 'Бахчевые',
    price: '650',
    description: 'Сладкая, ароматная дыня сорта Торпеда. Отличается удлиненной формой и насыщенным вкусом. Мякоть светло-зеленая, сочная и нежная.',
    storageConditions: 'Хранить при температуре 8-10°C до 20 дней. После разрезания хранить в холодильнике не более 2 дней.',
    origin: 'Туркестанская область, Казахстан',
    weightOptions: ['2-3 кг', '3-4 кг', '4-5 кг'],
    nutritionalValue: {
      calories: '33 ккал',
      proteins: '0.6 г',
      fats: '0.3 г',
      carbohydrates: '7.8 г'
    }
  },
  {
    id: 2,
    title: 'Арбуз',
    image: '/products/watermelon.jpg',
    season: 'Лето',
    category: 'Бахчевые',
    price: '450',
    description: 'Сочный, сладкий арбуз с темно-красной мякотью и маленькими косточками. Выращен без применения химических удобрений.',
    storageConditions: 'Хранить при комнатной температуре до 7 дней, в холодильнике до 14 дней.',
    origin: 'Шымкент, Казахстан',
    weightOptions: ['3-5 кг', '5-7 кг', '7-10 кг'],
    nutritionalValue: {
      calories: '27 ккал',
      proteins: '0.7 г',
      fats: '0.2 г',
      carbohydrates: '6.9 г'
    }
  },
  {
    id: 3,
    title: 'Капуста',
    image: '/products/cabbage.jpg',
    season: 'Весна',
    category: 'Овощи',
    price: '280',
    description: 'Свежая белокочанная капуста. Плотные, сочные кочаны. Идеально подходит для салатов, борщей и других блюд.',
    storageConditions: 'Хранить в холодильнике при температуре 0-1°C до 4 месяцев.',
    origin: 'Алматинская область, Казахстан',
    weightOptions: ['1-1.5 кг', '1.5-2 кг', '2-3 кг'],
    nutritionalValue: {
      calories: '25 ккал',
      proteins: '1.8 г',
      fats: '0.1 г',
      carbohydrates: '4.7 г'
    }
  }
]

const seasons = ['Все', 'Весна', 'Лето', 'Осень', 'Зима']
const categories = ['Все', 'Овощи', 'Фрукты', 'Бахчевые', 'Зелень']

export default function CatalogPage() {
  const [selectedSeason, setSelectedSeason] = useState('Все')
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = products
    .filter(product => selectedSeason === 'Все' || product.season === selectedSeason)
    .filter(product => selectedCategory === 'Все' || product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхний баннер */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Левая часть: заголовки */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Каталог продукции</h1>
            <p className="text-xl opacity-90">Свежие овощи и фрукты от фермера</p>
          </div>

          {/* Правая часть: кнопка на главную */}
          <div className="mt-4 md:mt-0">
            <Link
              href="/"
              className="inline-flex items-center bg-white text-green-600 px-4 py-2 rounded-lg shadow hover:bg-green-100 transition-colors font-medium"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Мобильная кнопка фильтров */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden w-full mb-4 px-4 py-2 bg-white rounded-lg shadow flex items-center justify-between"
        >
          <span>Фильтры</span>
          <span>{isFilterOpen ? '↑' : '↓'}</span>
        </button>

        {/* Панель фильтров */}
        <div className={`md:block ${isFilterOpen ? 'block' : 'hidden'} mb-6`}>
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Сезоны */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Сезон</h3>
              <div className="flex flex-wrap gap-2">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedSeason === season
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>

            {/* Категории */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Категория</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Результаты фильтрации */}
        <div className="mb-4 text-gray-600">
          Найдено товаров: {filteredProducts.length}
        </div>

        {/* Сетка продуктов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full"
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* Сообщение, если ничего не найдено */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-500"
          >
            По вашему запросу ничего не найдено
          </motion.div>
        )}
      </div>
    </div>
  )
}
