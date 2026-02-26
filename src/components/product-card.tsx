// "use client"

// import Image from "next/image"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { toast } from "sonner"

// interface Product {
//   name: string
//   description: string
//   price: number
//   image: string
// }

// export default function ProductCard({ product }: { product: Product }) {
//   const handleAddToCart = () => {
//     toast.success("Added to cart 🛒", {
//       description: `${product.name} added successfully.`,
//     })
//   }

//   return (
//     <Card className="hover:shadow-xl transition duration-300">
//       <div className="relative h-48 w-full">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover rounded-t-lg"
//         />
//       </div>

//       <CardContent className="p-4">
//         <h3 className="font-semibold text-lg">{product.name}</h3>
//         <p className="text-sm text-muted-foreground mt-1">
//           {product.description}
//         </p>

//         <div className="flex items-center justify-between mt-3">
//           <span className="font-bold text-orange-500">
//             ₹{product.price}
//           </span>
//           <Badge variant="secondary">In Stock</Badge>
//         </div>
//       </CardContent>

//       <CardFooter>
//         <Button
//           className="w-full"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

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
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6">

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
            setQuantity((q) => Math.max(1, q - 1))
          }
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>

        <span className="font-medium">{quantity}</span>

        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <Button
        onClick={() =>
          addToCart({
            id,
            name,
            price,
            quantity,
          })
        }
        className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white"
      >
        Add to Cart
      </Button>
    </div>
  )
}