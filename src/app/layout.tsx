import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Opyra Infotech - Digital Agency',
  description: 'Digital Agency That Thrives on Your Success. We help you create a remarkable presence online.',
  keywords: 'digital agency, web design, web development, digital marketing, SEO, Los Angeles',
  authors: [{ name: 'Opyra Infotech' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="creative-text antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}