// src/app/page.tsx
'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/landing/WhyChooseUs'
import Steps from '@/components/landing/Steps'
import Testimonials from '@/components/landing/Testimonials'
import SeasonalitySection from '@/components/landing/SeasonalitySection'
import OurFarmSection from '@/components/landing/OurFarmSection'
import FAQSection from '@/components/landing/FAQSection'
import ContactFormSection from '@/components/landing/ContactFormSection'
import UsefulTipsSection from '@/components/landing/UsefulTipsSection'
import MapSection from '@/components/landing/MapSection'
import Footer from '@/components/landing/Footer' 

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="text-gray-800 dark:text-gray-100">
        {/* 1. Hero: пусть внутри HeroSection есть фон-картинка, 
            а кнопки будут зелёные и оранжевые. */}
        <section className="relative h-screen">
          <HeroSection />
        </section>

        {/* 2. WhyChooseUs: фон белый, 
            заголовок/иконки можно подсветить зелёным/оранжевым. */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <WhyChooseUs />
          </div>
        </section>

        {/* 3. Steps: градиент с использованием кастомного зелёного (#15803D) */}
        <section 
          className="
            py-16
            bg-gradient-to-b 
            from-[#15803D]/10  /* светлый оттенок зелёного (10% прозрачности) */ 
            to-[#15803D]/30    /* более тёмный низ (30% прозрачности) */
            dark:from-gray-800 
            dark:to-gray-700
          "
        >
          <div className="container mx-auto px-4">
            <Steps />
          </div>
        </section>

        {/* 4. Testimonials: фон белый, 
            карточки внутри могут иметь границу оранжевого. */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <Testimonials />
          </div>
        </section>

        {/* 5. SeasonalitySection: 
            Используем оранжевый градиент (F97316) */}
        <section
          className="
            py-16
            bg-gradient-to-b 
            from-[#F97316]/10
            to-[#F97316]/30
            dark:from-gray-700 
            dark:to-gray-900
          "
        >
          <div className="container mx-auto px-4">
            <SeasonalitySection />
          </div>
        </section>

        {/* 6. OurFarmSection: белый фон, текст с зелёными заголовками */}
        <section className="bg-white dark:bg-gray-900 py-16 text-gray-800 dark:text-gray-100">
          <div className="container mx-auto px-4">
            <OurFarmSection />
          </div>
        </section>

        {/* 7. FAQSection: 
            Попробуем чисто зелёный фон (#15803D) + белый текст */}
        <section className="py-16 bg-[#15803D] text-white dark:bg-[#14532D]">
          <div className="container mx-auto px-4">
            <FAQSection />
          </div>
        </section>

        {/* 8. ContactFormSection: 
            Оранжевый градиент + белый текст */}
        <section 
          className="
            py-16
            bg-gradient-to-b from-[#F97316]/20 to-[#F97316]/60
            text-gray-800 dark:text-gray-100
          "
        >
          <div className="container mx-auto px-4">
            <ContactFormSection />
          </div>
        </section>

        {/* 9. UsefulTipsSection: снова белый фон */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <UsefulTipsSection />
          </div>
        </section>

        {/* 10. MapSection: 
            Градиент зелёно-оранжевый (на ваш вкус). */}
        <section 
          className="
            py-16 
            bg-gradient-to-b 
            from-[#15803D] to-[#F97316]
            text-white
            dark:from-gray-800 dark:to-gray-700
          "
        >
          <div className="container mx-auto px-4">
            <MapSection />
          </div>
        </section>
      </main>
       <Footer />
    </>
  )
}
