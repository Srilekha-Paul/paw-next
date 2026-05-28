"use client"

import { Button } from "@/components/ui/button"

export default function AskQuestionSection() {
  return (
    <section className="py-20 bg-[#f7f3ee]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-500">
            Ask Any Question 🐶
          </h2>

          <p className="text-muted-foreground mt-3">
            Frequently asked by pet parents
          </p>
        </div>

        {/* Demo Questions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg">
              Which food is best for puppies?
            </h3>

            <p className="text-muted-foreground mt-3">
              Paneer Boost and Chicken Delight are
              great for puppies because they are rich
              in protein and help healthy growth.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg">
              Do you deliver outside Kolkata?
            </h3>

            <p className="text-muted-foreground mt-3">
              Yes! PawBite currently delivers in
              multiple cities with fast and safe
              doorstep delivery.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg">
              Is your dog food vet approved?
            </h3>

            <p className="text-muted-foreground mt-3">
              Yes. Our recipes are designed using
              healthy ingredients and reviewed for
              pet nutrition standards.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg">
              Can I order every week?
            </h3>

            <p className="text-muted-foreground mt-3">
              Absolutely. Many customers place weekly
              repeat orders for regular meals.
            </p>
          </div>
        </div>

        {/* Ask Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Your Question
            </label>

            <textarea
              rows={5}
              placeholder="Type your question here..."
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Send Question
          </Button>
        </div>
      </div>
    </section>
  )
}