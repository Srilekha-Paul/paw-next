import AboutSection from "@/components/AboutSection"
import BestSellers from "@/components/bestSellers"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
      
        <h1 className="text-4xl font-bold text-orange-500">
          Healthy Food for Happy Dogs
        </h1>
      </section>

      {/* Best Sellers Section */}
      <section id="products">
      <BestSellers />
      </section>

      {/* About Us Section */}
       <section id="about">
      <AboutSection />
      </section>

      {/* Contact Section */}
       <section id="contact">
      <ContactSection />
      </section>
      
       <Footer />
     
     
    </>
  )
}
  