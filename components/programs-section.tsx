"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    id: 1,
    title: "Primary Education",
    description:
      "Foundation years focusing on core skills, creativity, and character development for students aged 5-10.",
    image: "/placeholder.svg?height=400&width=600",
    grades: "Grades 1-5",
  },
  {
    id: 2,
    title: "Middle School",
    description:
      "Comprehensive curriculum with increased academic rigor and diverse extracurricular activities for students aged 11-13.",
    image: "/placeholder.svg?height=400&width=600",
    grades: "Grades 6-8",
  },
  {
    id: 3,
    title: "Secondary Education",
    description:
      "Specialized streams with advanced coursework preparing students for higher education and career paths.",
    image: "/placeholder.svg?height=400&width=600",
    grades: "Grades 9-12",
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="programs" ref={ref} className="py-12 sm:py-16 md:py-20">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Our Programs</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            NHMPS offers comprehensive educational programs designed to nurture intellectual growth and personal
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-primary text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                    {program.grades}
                  </div>
                </div>
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-base sm:text-lg md:text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-3 sm:p-4 md:p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full group text-xs sm:text-sm" asChild>
                    <Link href="#admission">
                      Learn More
                      <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
