// import ProductCard from "@/components/product-card"

// const products = [
//   {
//     id: 1,
//     name: "Chicken Delight",
//     description: "Rich in protein & vitamins",
//     price: 299,
//     image: "/products/chicken.jpg",
//     tag: "High Protein"
//   },
//   {
//     id: 2,
//     name: "Paneer Boost",
//     description: "High energy formula",
//     price: 249,
//     image: "/products/paneer.jpg",
//     tag: "Energy"
//   },
//   {
//     id: 3,
//     name: "Veggie Mix",
//     description: "Healthy & balanced meal",
//     price: 199,
//     image: "/products/veggie.jpg",
//     tag: "Balanced"
//   }
// ]

// export default function Products() {
//   return (
//     <div className="px-10 py-20">
//       <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
//         Our Best Sellers
//       </h2>

//       {products.map((product, index) => (
//       <ProductCard key={index} {...product} />
//     ))}
//     </div>
//   )
// }





import ProductCard from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Chicken Delight",
    description: "Rich in protein & vitamins",
    price: 299,
    image: "/products/chicken.jpg",
    tag: "High Protein",
  },
  {
    id: 2,
    name: "Paneer Boost",
    description: "High energy formula",
    price: 249,
    image: "/products/paneer.jpg",
    tag: "Energy",
  },
  {
    id: 3,
    name: "Veggie Mix",
    description: "Healthy & balanced meal",
    price: 199,
    image: "/products/veggie.jpg",
    tag: "Balanced",
  },
]

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        Our Best Sellers
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

    </div>
  )
}