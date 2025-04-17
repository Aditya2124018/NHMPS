"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "NHMPS has provided my child with not just academic knowledge but also valuable life skills. The teachers are caring and attentive to individual needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Alumni",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "My years at NHMPS shaped my future. The strong foundation I received here helped me excel in my higher studies and professional career.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Student",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "I love the interactive learning environment and the wide range of extracurricular activities. The school truly focuses on all-round development.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Parent",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "The school's emphasis on both academic excellence and character building is commendable. My children have flourished in this nurturing environment.",
    rating: 5,
  },
]

export function FeedbackSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      next()
    }, 6000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <section id="feedback" ref={ref} className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            What People Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about their experiences at New Heritage Montessori Public School.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="min-w-full">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 items-center">
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="mb-3 sm:mb-4 italic text-xs sm:text-sm md:text-base">{testimonial.content}</p>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            onClick={prev}
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            onClick={next}
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>

          <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 gap-1 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrent(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
