import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SchoolSidebar } from "@/components/school-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Heritage Montessori Public School | NHMPS Deoria",
  description:
    "New Heritage Montessori Public School (NHMPS) is a premier educational institution in Deoria dedicated to providing quality education with a focus on holistic development and academic excellence.",
  keywords:
    "NHMPS, nhmps, nhmps.in, New Heritage Montessori Public School, School in Deoria, School near me, best school, education, academy, learning, admission, CBSE, ICSE, India",
  openGraph: {
    title: "New Heritage Montessori Public School | NHMPS Deoria",
    description:
      "New Heritage Montessori Public School (NHMPS) is a premier educational institution in Deoria dedicated to providing quality education with a focus on holistic development and academic excellence.",
    url: "https://nhmps.in",
    siteName: "New Heritage Montessori Public School",
    images: [
      {
        url: "/images/school-og.jpg",
        width: 1200,
        height: 630,
        alt: "New Heritage Montessori Public School",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <SchoolSidebar />
              <main className="flex-1">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'