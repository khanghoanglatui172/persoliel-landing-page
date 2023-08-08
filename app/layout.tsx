import './globals.css'
import type { Metadata } from 'next'
import Index from "@/app/components/nav-bar";

export const metadata: Metadata = {
  title: 'Perq Soliel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         {children}
      </body>
    </html>
  )
}
