"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, GraduationCap, Home, Info, MessageSquare, Phone, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export function SchoolSidebar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("hero")
  const { setOpenMobile } = useSidebar()

  const menuItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About Us", href: "#about", icon: Info },
    { name: "Programs", href: "#programs", icon: BookOpen },
    { name: "Gallery", href: "#memories", icon: Users },
    { name: "Testimonials", href: "#feedback", icon: MessageSquare },
    { name: "Admissions", href: "#admission", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Phone },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const sections = menuItems.map((item) => item.href.substring(1))

    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -20% 0px", // Adjust rootMargin for better detection
      threshold: 0.2,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  // Handle link click to close sidebar on mobile
  const handleLinkClick = () => {
    setOpenMobile(false)
  }

  return (
    <>
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader className="flex items-center justify-center p-4">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">NHMPS</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={activeSection === item.href.substring(1)} tooltip={item.name}>
                  <Link href={item.href} onClick={handleLinkClick}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <SidebarTrigger className="bg-background/80 backdrop-blur-sm shadow-md" />
      </div>
    </>
  )
}
