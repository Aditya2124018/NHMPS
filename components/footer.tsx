import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">NHMPS</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              New Heritage Montessori Public School in Deoria is committed to providing quality education with a focus
              on holistic development since 1998.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8" asChild>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#admission" className="text-muted-foreground hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="#memories" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#feedback" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  New Heritage Montessori Public School, Deoria - 274001, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">info@nhmps.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">Newsletter</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Subscribe to our newsletter to receive updates and news about our school.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="text-xs sm:text-sm h-8 sm:h-9" required />
              <Button type="submit" className="w-full h-8 sm:h-9 text-xs sm:text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 md:mt-10 pt-3 sm:pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} New Heritage Montessori Public School. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
