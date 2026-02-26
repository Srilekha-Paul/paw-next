"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 border-b bg-background">
      
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-orange-500 cursor-pointer">
          PawBite 🐶
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 items-center font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Right Side Controls */}
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
            <Button size="icon">
              <ShoppingCart size={18} />
            </Button>
          </SheetTrigger>

          {/* <SheetContent className="w-80">
            <h2 className="text-lg font-semibold mb-4">
              Your Cart 🛒
            </h2>

            <p className="text-muted-foreground">
              Cart items appear here
            </p>
          </SheetContent> */}
        <SheetContent className="w-80">
  <SheetHeader>
    <SheetTitle>Your Cart 🛒</SheetTitle>
  </SheetHeader>

  <p className="text-muted-foreground">
    Cart items appear here
  </p>
</SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}