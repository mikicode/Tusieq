"use client"

import { Star, Quote, CheckCircle } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Afikk",
    role: "534 tys. subskrybentów",
    content:
      "wszystko dobrze zrobione, dobry kontakt, zaangażowanie bardzo wysokie, a tego bardzo się szuka wśród techników i napewno sam będę korzystał z usług i polecam dla każdego.",
    rating: 5,
    avatarImage: "/images/ggfgff.jpg",
    verified: true,
    hasPlus: true,
  },
  {
    name: "MrChlopak",
    role: "4,67 tys. subskrybentów",
    content: "Zamówiłem plugin u tusieq i działa świętnie nawet lepiej niż oczekiwałem, film wyszedł super z nim!!!",
    rating: 5,
    avatarImage: "/images/mrchlopak.jpg",
    verified: true,
    hasPlus: false,
  },
  {
    name: "Mimitokox",
    role: "Klient",
    content: "Wszystko pięknie, bez błędów działa. Widac że chłopak mocno ogarnia. Polecam",
    rating: 5,
    avatarImage: "/images/mimitokox.png",
    verified: false,
    hasPlus: false,
  },
  {
    name: "N0rfi",
    role: "Klient",
    content:
      "Nie spodziewałem się że on ogarnię to tak dobrze, zamówiłem by zrobił mi serwer smp i jeden plugin i powiem POLECAM :0",
    rating: 5,
    avatarImage: "/images/n0rfi.png",
    verified: false,
    hasPlus: false,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-16 px-4">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">Opinie</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">Co mówią klienci</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Zaufało mi już wielu właścicieli serwerów, youtuberów i firm
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="animate-float-smooth"
            style={{
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${3 + (index % 2) * 0.5}s`,
            }}
          >
            <div className="bg-card border border-border rounded-2xl p-5 h-full hover:border-accent/30 transition-colors flex flex-col">
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-accent/30 mb-3" />

              {/* Rating with gold plus AFTER stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
                {testimonial.hasPlus && <span className="text-yellow-500 font-bold ml-1">+</span>}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-4 leading-relaxed flex-grow text-xs">{`"${testimonial.content}"`}</p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatarImage || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    {testimonial.verified && <CheckCircle className="w-3.5 h-3.5 text-accent fill-accent/20" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <span className="font-minecraft text-accent/70 text-base transform rotate-3">Brakuje tu tylko twojej ;)</span>
      </div>
    </section>
  )
}
