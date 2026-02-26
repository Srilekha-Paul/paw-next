import AboutSection from "@/components/AboutSection"
import BestSellers from "@/components/bestSellers"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-orange-500">
          Healthy Food for Happy Dogs
        </h1>
      </section>

      {/* Best Sellers Section */}
      <BestSellers />

      <AboutSection />  {/* About Us Section */}
    </>
  )
}
  