import AboutSection from "@/components/AboutSection"
import BestSellers from "@/components/bestSellers"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>

      {/* HERO SECTION */}
      <section id="home" className="bg-[#fb923c] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Healthy Food for Happy Dogs
            </h1>

            <p className="mt-4 text-lg text-orange-50">
              Premium natural dog food made with love, nutrition, and care.
            </p>

            <a
              href="#products"
              className="inline-block mt-8 bg-white text-[#fb923c] font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition duration-300 shadow-md"
            >
              Shop Now
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/Dog.jpg"
              alt="Dog"
              className="w-80"
            />
          </div>

        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="products">
        <BestSellers />
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutSection />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* FOOTER */}
      <Footer />

    </>
  )
}