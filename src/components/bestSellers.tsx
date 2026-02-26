import ProductCard from "./product-card"

export default function BestSellers() {
  return (
    <section className="py-20 bg-[#f4ece4]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
          Our Best Sellers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ProductCard
            id={1}
            name="Chicken Delight"
            price={299}
            image="/products/chicken.jpg"
            tag="High Protein"
            description="Rich in protein & vitamins"
          />

          <ProductCard
            id={2}
            name="Paneer Boost"
            price={249}
            image="/products/paneer.jpg"
            tag="Energy"
            description="High energy formula"
          />

          <ProductCard
            id={3}
            name="Veggie Mix"
            price={199}
            image="/products/veggie.jpg"
            tag="Balanced"
            description="Healthy & balanced meal"
          />

        </div>
      </div>
    </section>
  )
}