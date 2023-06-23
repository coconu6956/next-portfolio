import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '채은 포트폴리오',
  description: '👀💡',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <Header></Header>
        {children}
        <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
