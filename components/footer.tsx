"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.svg"
              alt="Charterstone Homes"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/80 mb-4">
              Building luxury custom homes in Pecan Plantation's premier golf and aviation community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/models" className="text-sm text-white/80 hover:text-champagne transition-colors">
                  Our Models
                </Link>
              </li>
              <li>
                <Link href="/available-plots" className="text-sm text-white/80 hover:text-champagne transition-colors">
                  Available Plots
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-white/80 hover:text-champagne transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-champagne transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-champagne transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  Pecan Plantation
                  <br />
                  Granbury, TX 76049
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+18477575571" className="hover:text-champagne transition-colors">
                  (847) 757-5571
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@charterstonehomes.com" className="hover:text-champagne transition-colors">
                  info@charterstonehomes.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to receive updates on new models and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button type="submit" className="w-full bg-champagne hover:bg-champagne/90 text-navy font-semibold">
                {isSubmitted ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span>Energy Star Certified</span>
            <span className="hidden sm:inline">•</span>
            <span>10-Year Structural Warranty</span>
            <span className="hidden sm:inline">•</span>
            <span>Preferred Builder</span>
            <span className="hidden sm:inline">•</span>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>&copy; {new Date().getFullYear()} Charterstone Homes. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-champagne transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-champagne transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
