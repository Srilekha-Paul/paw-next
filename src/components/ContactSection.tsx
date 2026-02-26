{/* Contact Section */}



import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


<div className="mt-24 max-w-6xl mx-auto">
  
  {/* Contact Title */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-orange-600">
      Contact Us
    </h2>
    <p className="mt-4 text-muted-foreground">
      Have questions? Get in touch with PawBite 🐶
    </p>
  </div>

  {/* Contact Grid */}
  <div className="grid md:grid-cols-2 gap-10">

    {/* Left Card - Details */}
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-8 space-y-6 text-center md:text-left">

        <h3 className="text-xl font-semibold text-center mb-6">
          Our Details
        </h3>

        <div>
          <p className="font-semibold">Email:</p>
          <p className="text-muted-foreground">
            support@pawbite.com
          </p>
        </div>

        <div>
          <p className="font-semibold">Phone:</p>
          <p className="text-muted-foreground">
            +91 98765 43210
          </p>
        </div>

        <div>
          <p className="font-semibold">Address:</p>
          <p className="text-muted-foreground">
            Durgapur, West Bengal, India
          </p>
        </div>

        <div>
          <p className="font-semibold">Working Hours:</p>
          <p className="text-muted-foreground">
            9 AM – 8 PM
          </p>
        </div>

      </CardContent>
    </Card>

    {/* Right Card - Form */}
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-8 space-y-4">

        <div>
          <label className="text-sm font-medium">Full Name</label>
          <Input placeholder="Enter your name" className="mt-2"/>
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <Input placeholder="Enter your email" className="mt-2"/>
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <Input placeholder="Enter your phone number" className="mt-2"/>
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <Textarea
            placeholder="Write your message"
            className="mt-2"
          />
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4">
          Send Message
        </Button>

      </CardContent>
    </Card>

  </div>
</div>