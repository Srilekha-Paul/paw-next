import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="px-10 py-20 text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">
        About PawBite 🐾
      </h1>

      <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
        We believe every dog deserves the best nutrition crafted with love and
        approved by veterinarians.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            🌱 100% Natural <br/>
            No artificial preservatives.
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            👨‍⚕️ Vet Approved <br/>
            Designed by experts.
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            🚚 Fast Delivery <br/>
            Safe & quick shipping.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}