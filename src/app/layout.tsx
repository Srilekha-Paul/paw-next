// import "./globals.css"
// import { ThemeProvider } from "next-themes"
// import Navbar from "@/components/navbar"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="min-h-screen bg-background font-sans antialiased">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Navbar />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


// import "./globals.css"
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "PawBite",
//   description: "Healthy & Natural Dog Food",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#f4ece4] min-h-screen">
//         {children}
//       </body>
//     </html>
//   )
// }




// "use client"
// import { CartProvider } from "@/context/CartContext"
// import "./globals.css"
// import { ThemeProvider } from "next-themes"
// import Navbar from "@/components/navbar"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           <Navbar />
//           {children}
//         </ThemeProvider>

//           <CartProvider>
//           {children}
//        </CartProvider>
//       </body>
//     </html>
//   )
// }



import "./globals.css"
import Navbar from "@/components/navbar"
import { CartProvider } from "@/context/CartContext"

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
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}