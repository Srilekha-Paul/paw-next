"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

type ProductCardProps = {
  id: number
  name: string
  price: number
  image: string
  tag?: string
  description: string
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  tag,
  description,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()

  return (
    <div className="bg-background rounded-2xl shadow-md overflow-hidden p-6">

      {/* Product Image */}
      <div className="relative h-48 w-full mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Tag */}
      {tag && (
        <span className="inline-block bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full mb-3">
          {tag}
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mt-2">
        {description}
      </p>

      {/* Price */}
      <p className="mt-3 font-bold text-orange-500">
        ₹{price}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() =>
            setQuantity((q) => Math.max(0, q - 1))
          }
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          -
        </button>

        <span className="font-medium">{quantity}</span>

        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <Button
        onClick={() => {
          if (quantity > 0) {
            addToCart({
              id,
              name,
              price,
              quantity,
            })
          }
        }}
        className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-600 dark:hover:bg-orange-700"
      >
        Add to Cart
      </Button>
    </div>
  )
}

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { useCart } from "@/context/CartContext"

// type ProductCardProps = {
//   id: number
//   name: string
//   price: number
//   image: string
//   tag?: string
//   description: string
// }

// export default function ProductCard({
//   id,
//   name,
//   price,
//   image,
//   tag,
//   description,
// }: ProductCardProps) {
//   const [quantity, setQuantity] = useState(1)
//   const { addToCart } = useCart()

//   return (
//     <div className="bg-background rounded-2xl shadow-md overflow-hidden p-6">

//       {/* Product Image */}
//       <div className="relative h-48 w-full mb-4">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover rounded-xl"
//         />
//       </div>

//       {/* Tag */}
//       {tag && (
//         <span className="inline-block bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full mb-3">
//           {tag}
//         </span>
//       )}

//       {/* Title */}
//       <h3 className="text-lg font-semibold">{name}</h3>

//       {/* Description */}
//       <p className="text-sm text-muted-foreground mt-2">
//         {description}
//       </p>

//       {/* Price */}
//       <p className="mt-3 font-bold text-orange-500">
//         ₹{price}
//       </p>

//       {/* Quantity Selector */}
//       <div className="flex items-center justify-center gap-4 mt-4">
//         <button
//           onClick={() =>
//             setQuantity((q) => Math.max(1, q - 1))
//           }
//           className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
//         >
//           -
//         </button>

//         <span className="font-medium">{quantity}</span>

//         <button
//           onClick={() => setQuantity((q) => q + 1)}
//           className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
//         >
//           +
//         </button>
//       </div>

//       {/* Add to Cart */}
//       <Button
//         onClick={() =>
//           addToCart({
//             id,
//             name,
//             price,
//             quantity,
//           })
//         }
//         className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-600 dark:hover:bg-orange-700"
//       >
//         Add to Cart
//       </Button>
//     </div>
//   )
// }