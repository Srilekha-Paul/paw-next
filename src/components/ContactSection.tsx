"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<any>({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    let newErrors: any = {}

    if (!form.name.trim()) newErrors.name = "Full name is required"

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email"
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit number"
    }

    if (!form.message.trim())
      newErrors.message = "Message cannot be empty"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (validate()) {
      setSuccess(true)
      setForm({ name: "", email: "", phone: "", message: "" })
      setErrors({})
    }
  }

  return (
   <section className="bg-[#e9d8c7] py-16">
  <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-orange-600">
            Contact Us
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have questions? Get in touch with PawBite 🐶
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE - DETAILS */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Our Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground text-sm">
                    support@pawbite.com
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground text-sm">
                    +91 98765 43210
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground text-sm">
                    Durgapur, West Bengal
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-muted-foreground text-sm">
                    9 AM – 8 PM
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* RIGHT SIDE - FORM */}
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="text-sm font-medium">Full Name *</label>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Phone *</label>
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Send Message
                </Button>

                {success && (
                  <p className="text-green-600 text-sm text-center mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}



// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

// export default function ContactSection() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const [errors, setErrors] = useState<any>({})
//   const [success, setSuccess] = useState(false)

//   const validate = () => {
//     let newErrors: any = {}

//     if (!form.name.trim()) newErrors.name = "Full name is required"

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       newErrors.email = "Enter a valid email"
//     }

//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone number is required"
//     } else if (!/^[0-9]{10}$/.test(form.phone)) {
//       newErrors.phone = "Enter valid 10 digit number"
//     }

//     if (!form.message.trim())
//       newErrors.message = "Message cannot be empty"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e: any) => {
//     e.preventDefault()

//     if (validate()) {
//       setSuccess(true)
//       setForm({ name: "", email: "", phone: "", message: "" })
//       setErrors({})
//     }
//   }

//   return (
//     <section className="bg-[#e2cbb8] py-16">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-10">
//           <h2 className="text-5xl font-bold text-orange-600">
//             Contact Us
//           </h2>
//           <p className="mt-3 text-muted-foreground">
//             Have questions? Get in touch with PawBite 🐶
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">

//           {/* LEFT SIDE */}
//           <Card className="rounded-2xl shadow-md bg-white">
//             <CardContent className="p-8">
//               <h3 className="text-xl font-semibold mb-6 text-center">
//                 Our Details
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//                 <div className="bg-orange-50 p-4 rounded-xl">
//                   <p className="font-semibold">Email</p>
//                   <p className="text-muted-foreground text-sm">
//                     support@pawbite.com
//                   </p>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl">
//                   <p className="font-semibold">Phone</p>
//                   <p className="text-muted-foreground text-sm">
//                     +91 98765 43210
//                   </p>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl">
//                   <p className="font-semibold">Address</p>
//                   <p className="text-muted-foreground text-sm">
//                     Durgapur, West Bengal
//                   </p>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl">
//                   <p className="font-semibold">Working Hours</p>
//                   <p className="text-muted-foreground text-sm">
//                     9 AM – 8 PM
//                   </p>
//                 </div>

//               </div>
//             </CardContent>
//           </Card>

//           {/* RIGHT SIDE */}
//           <Card className="rounded-2xl shadow-md bg-white">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-5">

//                 <div>
//                   <label className="text-sm font-medium">Full Name *</label>
//                   <Input
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({ ...form, name: e.target.value })
//                     }
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Email *</label>
//                   <Input
//                     type="email"
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm({ ...form, email: e.target.value })
//                     }
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Phone *</label>
//                   <Input
//                     value={form.phone}
//                     onChange={(e) =>
//                       setForm({ ...form, phone: e.target.value })
//                     }
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.phone}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Message *</label>
//                   <Textarea
//                     rows={3}
//                     value={form.message}
//                     onChange={(e) =>
//                       setForm({ ...form, message: e.target.value })
//                     }
//                   />
//                   {errors.message && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white"
//                 >
//                   Send Message
//                 </Button>

//                 {success && (
//                   <p className="text-green-600 text-sm text-center mt-2">
//                     ✅ Message sent successfully!
//                   </p>
//                 )}
//               </form>
//             </CardContent>
//           </Card>

//         </div>
//       </div>
//     </section>
//   )
// }