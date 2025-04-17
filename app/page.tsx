import { HeroSection } from "@/components/hero-section"
import { MemoriesSection } from "@/components/memories-section"
import { ProgramsSection } from "@/components/programs-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FeedbackSection } from "@/components/feedback-section"
import { AdmissionFormSection } from "@/components/admission-form-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MemoriesSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <FeedbackSection />
      <AdmissionFormSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
