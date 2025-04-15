import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agro Website',
  description: 'Fresh vegetables and fruits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}