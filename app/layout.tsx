import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '町の何でも屋さん',
  description: '家事代行から不用品回収、修理まで、日常のお困りごとを解決します。何でも屋さんは、あなたの生活をより快適にするお手伝いをいたします。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
