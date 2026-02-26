// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { useTheme } from "next-themes"
// import { Sun, Moon, ShoppingCart } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// export default function Navbar() {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   // Prevent hydration mismatch
//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-10 py-4 border-b bg-background">
      
//       {/* Logo */}
//       <Link href="/">
//         <h1 className="text-2xl font-bold text-orange-500 cursor-pointer">
//           PawBite 🐶
//         </h1>
//       </Link>

//       {/* Navigation Links */}
//       <div className="hidden md:flex gap-6 items-center font-medium">
//         <Link href="/">Home</Link>
//         <Link href="/products">Products</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//       </div>

//       {/* Right Side Controls */}
//       <div className="flex items-center gap-3">

//         {/* Dark Mode Toggle */}
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() =>
//             setTheme(theme === "dark" ? "light" : "dark")
//           }
//         >
//           {theme === "dark" ? (
//             <Sun size={18} />
//           ) : (
//             <Moon size={18} />
//           )}
//         </Button>

//         {/* Cart Drawer */}
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button size="icon">
//               <ShoppingCart size={18} />
//             </Button>
//           </SheetTrigger>

//           {/* <SheetContent className="w-80">
//             <h2 className="text-lg font-semibold mb-4">
//               Your Cart 🛒
//             </h2>

//             <p className="text-muted-foreground">
//               Cart items appear here
//             </p>
//           </SheetContent> */}
//         <SheetContent className="w-80">
//   <SheetHeader>
//     <SheetTitle>Your Cart 🛒</SheetTitle>
//   </SheetHeader>

//   <p className="text-muted-foreground">
//     Cart items appear here
//   </p>
// </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [cartCount] = useState(2) // demo cart count

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b bg-background backdrop-blur-md">

      {/* Logo */}
      <a href="#home">
        <h1 className="text-2xl font-bold text-orange-500 cursor-pointer">
          PawBite 🐶
        </h1>
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 items-center font-medium">
        <a href="#home" className="hover:text-orange-500 transition">Home</a>
        <a href="#products" className="hover:text-orange-500 transition">Products</a>
        <a href="#about" className="hover:text-orange-500 transition">About</a>
        <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Dark Mode Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </Button>

        {/* Cart Drawer */}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="relative">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Button>
          </SheetTrigger>

          <SheetContent className="w-80">
            <SheetHeader>
              <SheetTitle>Your Cart 🛒</SheetTitle>
            </SheetHeader>

            <p className="text-muted-foreground mt-4">
              Cart items appear here
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}