"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="NHMPS campus"
          fill
          priority
          className="object-cover brightness-[0.7]"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-8 md:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white space-y-3 sm:space-y-4 md:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              New Heritage <br />
              <span className="text-primary">Montessori Public School</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
              NHMPS Deoria provides a holistic education that empowers students to excel academically and develop into
              responsible global citizens.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <Button size="sm" className="text-xs sm:text-sm" asChild>
                <Link href="#admission">Apply Now</Link>
              </Button>
              <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm text-xs sm:text-sm" asChild>
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="NHMPS students learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
