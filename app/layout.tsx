import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"

import FloatingNav from "@/components/FloatingNav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Phyo Sandar Win",
  description: "2025 Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(inter.className, "relative min-h-screen antialiased")}
      >
        <FloatingNav />

        {/* Main content container with max width */}
        <main className="relative z-10 mx-auto max-w-4xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
