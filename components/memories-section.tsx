"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const memories = [
  {
    id: 1,
    title: "Annual Day Celebration",
    description: "NHMPS students showcasing their talents in our grand annual day celebration.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Science Exhibition",
    description: "Young scientists presenting innovative projects at our science fair.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Sports Day",
    description: "Students participating in various athletic events during our annual sports day.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Cultural Festival",
    description: "Celebrating diversity through cultural performances and exhibitions.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Graduation Ceremony",
    description: "Proud moment for our graduating students as they embark on new journeys.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function MemoriesSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const next = () => {
    setCurrent((current + 1) % memories.length)
  }

  const prev = () => {
    setCurrent((current - 1 + memories.length) % memories.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      next()
    }, 5000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <section id="memories" ref={ref} className="py-12 sm:py-16 md:py-20 bg-muted">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">School Gallery</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Relive the special moments and milestones that make our NHMPS community unique.
          </p>
        </motion.div>

        <div className="relative">
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
              <div className="flex w-full">
                {memories.map((memory) => (
                  <Card key={memory.id} className="min-w-full px-2 sm:px-4">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                        <div className="relative h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-full rounded-lg overflow-hidden">
                          <Image
                            src={memory.image || "/placeholder.svg"}
                            alt={memory.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="space-y-2 sm:space-y-3 p-2 sm:p-3 md:p-4">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{memory.title}</h3>
                          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{memory.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            onClick={prev}
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            onClick={next}
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Next slide</span>
          </Button>

          <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 gap-1 sm:gap-2">
            {memories.map((_, index) => (
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
