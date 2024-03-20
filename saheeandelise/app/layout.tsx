import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/wedding/components/Navbar'
import GoogleAnalytics from './GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sahlise',
  description: 'Sahee and Elise website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
      
    //   <body className={inter.className}>
    //     {children}
    //   </body>
    // </html>

<html lang="en">
<GoogleAnalytics GA_TRACKING_ID="G-KHC3Z3VFL7"/>
<body>      
  {children}
</body>
</html>
  )
}
