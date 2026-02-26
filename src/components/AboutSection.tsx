// "use client"

// import { motion } from "framer-motion"

// export default function AboutSection() {
//   return (
//     <section className="py-20 bg-[#f4ece4] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Title Animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-orange-600 mb-6"
//         >
//           About PawBite 🐾
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-3xl mx-auto mb-16"
//         >
//           At PawBite, we believe your dog deserves the best nutrition.
//           Our recipes are crafted with love using 100% natural ingredients
//           and approved by certified veterinarians.
//         </motion.p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-10">

//           {/* Mission Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
//           >
//             <h3 className="text-2xl font-semibold mb-4">🎯 Our Mission</h3>
//             <p className="text-gray-600">
//               To provide healthy, affordable, and delicious dog food made
//               with premium natural ingredients.
//             </p>
//           </motion.div>

//           {/* Vision Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
//           >
//             <h3 className="text-2xl font-semibold mb-4">🌍 Our Vision</h3>
//             <p className="text-gray-600">
//               To become India’s most trusted dog nutrition brand,
//               ensuring every dog lives a long and energetic life.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }


import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <section className="bg-[#e6d7c8] dark:bg-background py-20 px-6">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
          About PawBite 🐾
        </h1>

        <p className="mt-6 text-muted-foreground text-lg">
          At PawBite, we believe your dog deserves the best nutrition.
          Our recipes are crafted with love using 100% natural ingredients
          and approved by certified veterinarians.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
        
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              🎯 Our Mission
            </h3>
            <p className="text-muted-foreground">
              To provide healthy, affordable, and delicious dog food
              made with premium natural ingredients.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              🌍 Our Vision
            </h3>
            <p className="text-muted-foreground">
              To become India’s most trusted dog nutrition brand,
              ensuring every dog lives a long and energetic life.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Features */}
      <div className="grid md:grid-cols-4 gap-6 mt-14 max-w-6xl mx-auto">
        
        <Card className="rounded-2xl shadow-sm text-center">
          <CardContent className="p-6">
            🌿 <h4 className="font-semibold mt-2">100% Natural</h4>
            <p className="text-sm text-muted-foreground mt-2">
              No artificial preservatives or harmful chemicals.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm text-center">
          <CardContent className="p-6">
            👨‍⚕️ <h4 className="font-semibold mt-2">Vet Approved</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Certified recipes designed by expert veterinarians.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm text-center">
          <CardContent className="p-6">
            🚚 <h4 className="font-semibold mt-2">Fast Delivery</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Quick and safe delivery at your doorstep.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm text-center">
          <CardContent className="p-6">
            ❤️ <h4 className="font-semibold mt-2">Loved by Dogs</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Thousands of happy pet parents trust PawBite.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center gap-16 mt-16 text-center">
        
        <div>
          <h2 className="text-4xl font-bold text-orange-600">
            10,000+
          </h2>
          <p className="text-muted-foreground mt-2">
            Happy Customers
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-orange-600">
            25+
          </h2>
          <p className="text-muted-foreground mt-2">
            Healthy Recipes
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-orange-600">
            50+
          </h2>
          <p className="text-muted-foreground mt-2">
            Cities Served
          </p>
        </div>

      </div>

    </section>
  )
}