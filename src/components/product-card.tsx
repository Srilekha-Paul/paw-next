"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

interface Product {
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const handleAddToCart = () => {
    toast.success("Added to cart 🛒", {
      description: `${product.name} added successfully.`,
    })
  }

  return (
    <Card className="hover:shadow-xl transition duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-orange-500">
            ₹{product.price}
          </span>
          <Badge variant="secondary">In Stock</Badge>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}