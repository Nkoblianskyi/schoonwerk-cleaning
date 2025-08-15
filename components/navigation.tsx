"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/favicon.ico" alt="SchoonWerk Logo" width={40} height={40} />
              <p className="font-playfair font-bold text-2xl text-primary">SchoonWerk</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/diensten"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Diensten
              </Link>
              <Link
                href="/over-ons"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Over Ons
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="ml-4">
                <Link href="/contact">Offerte Aanvragen</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link
                href="/"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/diensten"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Diensten
              </Link>
              <Link
                href="/over-ons"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Over Ons
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
