"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

export default function BestSellers() {

const products = [
  {
    name: "Chicken Delight",
    description: "Rich in protein & vitamins",
    image: "/products/Chicken-bowl.jpg",
    tag: "High Protein",
  },
  {
    name: "Paneer Boost",
    description: "High energy formula",
    image: "/products/Paneer.jpg",
    tag: "Energy",
  },
  {
    name: "Veggie Mix",
    description: "Healthy & balanced meal",
    image: "/products/Vagitables.jpg",
    tag: "Balanced",
  },
]
  return (
    <section className="py-20 bg-[#f3ece6] dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
          Our Best Sellers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="text-center space-y-2 pt-6">
                <Badge variant="secondary">
                  {product.tag}
                </Badge>

                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>

              <CardFooter className="flex justify-center pb-6">
                <Button
                  className="rounded-full"
                  onClick={() =>
                    toast.success(`${product.name} added to cart`)
                  }
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}