import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import { DataProvider } from "@/contexts/data-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pesta Anak Timur - Learning Management System",
  description: "Empowering young talents in Eastern Indonesia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DataProvider>
            {children}
            <Toaster />
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
