"use client"

import { useEffect } from "react"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export function SuccessPopup({
  isOpen,
  onClose,
  title = "Bericht Verzonden!",
  message = "Bedankt voor uw bericht. Wij nemen binnen 24 uur contact met u op.",
}: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto close after 5 seconds

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = "unset"
      }
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Popup */}
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in fade-in-0 zoom-in-95 duration-300">
        <Button variant="ghost" size="sm" className="absolute top-4 right-4 h-8 w-8 p-0" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>

          <div className="space-y-2">
            <h3 className="font-playfair text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{message}</p>
          </div>

          <Button onClick={onClose} className="w-full">
            Sluiten
          </Button>
        </div>
      </div>
    </div>
  )
}
