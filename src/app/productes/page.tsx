import ProductCard from "@/components/product-card"

const products = [
  {
    name: "Chicken Delight",
    description: "Rich in protein & vitamins",
    price: 499,
    image: "/dog1.jpg",
  },
  {
    name: "Paneer Boost",
    description: "High energy formula",
    price: 599,
    image: "/dog2.jpg",
  },
  {
    name: "Veggie Mix",
    description: "Healthy & balanced meal",
    price: 449,
    image: "/dog3.jpg",
  },
]

export default function Products() {
  return (
    <div className="px-10 py-20">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
        Our Best Sellers
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}