"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-20">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Contact Us</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Have questions or need more information about NHMPS? Reach out to us and we'll be happy to assist you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                <form className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm">
                        Full Name
                      </Label>
                      <Input id="name" placeholder="Your name" className="h-8 sm:h-9 text-xs sm:text-sm" required />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="h-8 sm:h-9 text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="phone" className="text-xs sm:text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="h-8 sm:h-9 text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="subject" className="text-xs sm:text-sm">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Message subject"
                      className="h-8 sm:h-9 text-xs sm:text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="text-xs sm:text-sm"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <Card>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  You can reach us through any of the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0 space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Address</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      New Heritage Montessori Public School,
                      <br />
                      Deoria - 274001, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Phone</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">+91 98765 43210</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">+91 5568 123456 (Office)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Email</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">info@nhmps.in</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">admissions@nhmps.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-lg sm:text-xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday & Holidays:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.30028781148!2d83.72419037472693!3d26.50298117152088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993e2d7955e3e3d%3A0xd1a6eef0c728c4c9!2sDeoria%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NHMPS Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
