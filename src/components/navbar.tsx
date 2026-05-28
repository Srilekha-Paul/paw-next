"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  Sun,
  Moon,
  ShoppingCart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] =
    useState(false)

  const {
    cart,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
  } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b bg-background">

      <a href="#home">
        <h1 className="text-2xl font-bold text-orange-500">
          PawBite 🐶
        </h1>
      </a>

      <div className="hidden md:flex gap-6 font-medium">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="flex gap-3">

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="relative"
            >
              <ShoppingCart size={18} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2">
                  {totalItems}
                </span>
              )}
            </Button>
          </SheetTrigger>

          <SheetContent className="w-96 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                Your Cart 🛒
              </SheetTitle>
            </SheetHeader>

            {cart.length === 0 ? (
              <p className="mt-4 text-muted-foreground">
                Cart is empty
              </p>
            ) : (
              <div className="mt-6 space-y-6">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-xl p-4"
                  >
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price}
                    </p>

                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                      className="text-red-500 mt-3 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <h3 className="font-bold">
                    Total: ₹{totalPrice}
                  </h3>
                </div>

                <div className="space-y-3">

                  <input
                    placeholder="Full Name"
                    className="w-full border rounded p-2"
                  />

                  <input
                    placeholder="Phone Number"
                    className="w-full border rounded p-2"
                  />

                  <input
                    placeholder="Address"
                    className="w-full border rounded p-2"
                  />

                  <select className="w-full border rounded p-2">
                    <option>
                      Cash on Delivery
                    </option>
                    <option>
                      UPI
                    </option>
                    <option>
                      Debit / Credit Card
                    </option>
                  </select>

                  <Button className="w-full bg-orange-500 text-white">
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}