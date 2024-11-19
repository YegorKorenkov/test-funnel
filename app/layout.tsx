import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import './globals.css'

import StateInitializer from 'components/StateInitializer'
import Header from 'components/elements/Header'

import StoreProvider from 'lib/providers/StoreProvider'

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic', 'greek', 'math'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Test questionnaire',
  description: 'Test questionnaire'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} antialiased dark:bg-main-gradient`}>
        <Header />

        <StoreProvider>
          {children}

          <StateInitializer />
        </StoreProvider>
      </body>
    </html>
  )
}
