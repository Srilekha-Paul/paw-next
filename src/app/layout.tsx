import "./globals.css"
import Navbar from "@/components/navbar"
import { CartProvider } from "@/context/CartContext"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "PawBite",
  description: "Healthy food for happy dogs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}