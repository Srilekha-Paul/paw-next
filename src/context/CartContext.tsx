"use client"

import { createContext, useContext, useState } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, qty: number) => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id)

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: p.quantity + item.quantity,
              }
            : p
        )
      }

      return [...prev, item]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  const updateQuantity = (
    id: number,
    qty: number
  ) => {
    if (qty <= 0) {
      removeFromCart(id)
      return
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: qty }
          : item
      )
    )
  }

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context)
    throw new Error(
      "useCart must be used inside CartProvider"
    )

  return context
}

// "use client"

// import { createContext, useContext, useState } from "react"

// type CartItem = {
//   id: number
//   name: string
//   price: number
//   quantity: number
// }

// type CartContextType = {
//   cart: CartItem[]
//   addToCart: (item: CartItem) => void
//   removeFromCart: (id: number) => void
//   totalItems: number
// }

// const CartContext = createContext<CartContextType | null>(null)

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([])

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find((p) => p.id === item.id)

//       if (existing) {
//         return prev.map((p) =>
//           p.id === item.id
//             ? { ...p, quantity: p.quantity + item.quantity }
//             : p
//         )
//       }

//       return [...prev, item]
//     })
//   }

//   const removeFromCart = (id: number) => {
//     setCart(cart.filter((item) => item.id !== id))
//   }

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, totalItems }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) throw new Error("useCart must be used inside CartProvider")
//   return context
// }