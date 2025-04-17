"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Award, BookOpen, GraduationCap, Users } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum integrates national standards with innovative teaching methods to provide a well-rounded education.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Our teachers are highly qualified professionals dedicated to nurturing each student's potential.",
  },
  {
    icon: Award,
    title: "Modern Facilities",
    description:
      "State-of-the-art infrastructure including smart classrooms, labs, sports facilities, and performing arts spaces.",
  },
  {
    icon: GraduationCap,
    title: "Excellent Track Record",
    description: "Consistent academic excellence with outstanding results in board examinations and competitive tests.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 bg-primary/5">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Why Choose Us</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            New Heritage Montessori Public School stands out for its commitment to academic excellence and holistic
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-3 sm:p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center"
        >
          <div className="p-3 sm:p-4 md:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">25+</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Years of Excellence</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">100+</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Qualified Teachers</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">5000+</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Students Enrolled</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">98%</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
