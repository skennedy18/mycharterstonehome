"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Brian Carlin",
    role: "Operator / Builder",
    image: "/team/brian-carlin.png",
    bio: "The son of a builder/developer, he started working for his father's company after graduating from the University of Texas at Austin in 1999. Brian stays actively engaged in building education, learning from the leading engineers and professionals in the field. He has a passion for working with people helping them bring their vision to life. However, building is his second love, his first: his wife and daughters.",
  },
  {
    name: "Ted Broden",
    role: "Construction Manager",
    image: "/team/ted-broden.png",
    bio: "With nearly 25 years of experience in real estate development and construction management, Ted has a proven track record of managing and executing technically complex, high-profile projects. His notable developments include 8899 Beverly and The Rosewood Houses, both exemplifying a commitment to quality, innovation, and sustainability. Ted brings expertise in luxury residential development and LEED-certified design to every project.",
  },
  {
    name: "Celeste McFarland",
    role: "Operations Manager",
    image: "/team/celeste-mcfarland.png",
    bio: "Celeste is the Operations Manager overseeing daily operations across our territory. With a focus on optimizing efficiency and driving process improvements, Celeste ensures that every project runs smoothly and meets our high standards. In her free time she loves spending quality time with her husband and two children while exploring the DFW area.",
  },
]

const testimonials = [
  {
    name: "Robert & Linda Thompson",
    home: "The Oakmont",
    quote:
      "Building with Charterstone was a dream come true. The attention to detail and quality craftsmanship exceeded our expectations.",
    image: "/testimonial-couple-1.jpg",
  },
  {
    name: "James Martinez",
    home: "The Aviator",
    quote:
      "As a pilot, having a hangar home was essential. Charterstone made the process seamless and delivered exactly what we wanted.",
    image: "/testimonial-pilot.jpg",
  },
  {
    name: "The Anderson Family",
    home: "The Magnolia",
    quote: "We love our new home and the Pecan Plantation community. Charterstone helped us every step of the way.",
    image: "/testimonial-family.jpg",
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-burgundy to-navy text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">About Charterstone Homes</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Building dreams and creating lasting legacies in Pecan Plantation since 2015.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Charterstone Homes was founded with a simple mission: to build exceptional custom homes that reflect the
                unique lifestyle and dreams of each homeowner. Over the years, we've become the preferred builder in
                Pecan Plantation, known for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-navy mb-1">{member.name}</h3>
                      <p className="text-sm text-burgundy font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-white/70">{testimonial.home}</p>
                      </div>
                    </div>
                    <p className="text-white/90 italic leading-relaxed">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
