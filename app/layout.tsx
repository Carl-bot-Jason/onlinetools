import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer, Sidebar } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toolstant',
  description: 'Online tools to make your life easier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} 'h-min'`}>
      <body className='min-h-screen flex flex-col'>
        <Header />
        <div className='relative h-full flex justify-around flex-grow'>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
