"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function AdmissionFormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="admission" ref={ref} className="py-12 sm:py-16 md:py-20 bg-muted">
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
            Admission Enquiry
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards providing your child with an exceptional education at NHMPS Deoria. Fill out the
            form below to begin the admission process.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader className="p-3 sm:p-4 md:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Student Information</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Please provide accurate information to help us process your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 md:p-6">
              <form className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="firstName" className="text-xs sm:text-sm">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="h-8 sm:h-9 text-xs sm:text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="lastName" className="text-xs sm:text-sm">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="h-8 sm:h-9 text-xs sm:text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="dob" className="text-xs sm:text-sm">
                      Date of Birth
                    </Label>
                    <Input id="dob" type="date" className="h-8 sm:h-9 text-xs sm:text-sm" required />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label className="text-xs sm:text-sm">Gender</Label>
                    <RadioGroup defaultValue="male" className="flex flex-wrap gap-3 sm:gap-4">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="text-xs sm:text-sm">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="text-xs sm:text-sm">
                          Female
                        </Label>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="text-xs sm:text-sm">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="grade" className="text-xs sm:text-sm">
                      Applying for Grade
                    </Label>
                    <Select>
                      <SelectTrigger id="grade" className="h-8 sm:h-9 text-xs sm:text-sm">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="kg">Kindergarten</SelectItem>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i} value={`grade-${i + 1}`}>
                            Grade {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="academicYear" className="text-xs sm:text-sm">
                      Academic Year
                    </Label>
                    <Select>
                      <SelectTrigger id="academicYear" className="h-8 sm:h-9 text-xs sm:text-sm">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-2025">2024-2025</SelectItem>
                        <SelectItem value="2025-2026">2025-2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="text-base sm:text-lg font-medium">Parent/Guardian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="parentName" className="text-xs sm:text-sm">
                        Parent/Guardian Name
                      </Label>
                      <Input
                        id="parentName"
                        placeholder="Enter full name"
                        className="h-8 sm:h-9 text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="relationship" className="text-xs sm:text-sm">
                        Relationship to Student
                      </Label>
                      <Select>
                        <SelectTrigger id="relationship" className="h-8 sm:h-9 text-xs sm:text-sm">
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="guardian">Legal Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        className="h-8 sm:h-9 text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="phone" className="text-xs sm:text-sm">
                        Mobile Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        className="h-8 sm:h-9 text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2 md:col-span-2">
                      <Label htmlFor="address" className="text-xs sm:text-sm">
                        Address
                      </Label>
                      <Textarea
                        id="address"
                        placeholder="Enter complete address"
                        rows={3}
                        className="text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="city" className="text-xs sm:text-sm">
                        City
                      </Label>
                      <Input id="city" placeholder="Enter city" className="h-8 sm:h-9 text-xs sm:text-sm" required />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="pincode" className="text-xs sm:text-sm">
                        PIN Code
                      </Label>
                      <Input
                        id="pincode"
                        placeholder="Enter 6-digit PIN code"
                        className="h-8 sm:h-9 text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="comments" className="text-xs sm:text-sm">
                    Additional Comments
                  </Label>
                  <Textarea
                    id="comments"
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                    className="text-xs sm:text-sm"
                  />
                </div>

                <Button type="submit" className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                  Submit Application
                </Button>

                <p className="text-[10px] sm:text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
