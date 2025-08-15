"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("schoonwerk-cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("schoonwerk-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("schoonwerk-cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
      <Card className="max-w-4xl mx-auto border-border shadow-2xl bg-background/95 backdrop-blur-md">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">

            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Wij Gebruiken Cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SchoonWerk gebruikt cookies om uw ervaring op onze website te verbeteren, verkeer te analyseren en
                  gepersonaliseerde content te bieden. Door op "Accepteren" te klikken, stemt u in met ons gebruik van
                  cookies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={acceptCookies}
                  size="sm"
                  className="hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                >
                  Alle Cookies Accepteren
                </Button>
                <Button
                  variant="outline"
                  onClick={declineCookies}
                  size="sm"
                  className="hover:bg-black hover:border-primary/50 hover:scale-105 transition-all duration-200  text-black"
                >
                  Alleen Noodzakelijke
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-muted hover:text-primary hover:scale-105 transition-all duration-200 text-black"
                >
                  <Link href="/cookie-policy">Meer Informatie</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Lees ons{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  privacybeleid
                </Link>{" "}
                en{" "}
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  cookiebeleid
                </Link>{" "}
                voor meer informatie.
              </p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={declineCookies}
              className="h-8 w-8 p-0 flex-shrink-0 hover:bg-muted hover:scale-110 transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
