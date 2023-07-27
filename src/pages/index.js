import RootLayout from '@/components/layout/RootLayout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>hello next pc builder</h1>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
