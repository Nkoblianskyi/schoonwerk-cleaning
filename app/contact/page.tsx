"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SuccessPopup } from "@/components/success-popup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { companyInfo } from "@/lib/mock-data"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccessPopup(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="bg-gradient-to-b from-muted to-background py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Neem Contact Op</h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte? Wij staan klaar om u te helpen met
              al uw schoonmaakbehoeften.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Vraag een Offerte Aan</h2>
                    <p className="text-secondary text-lg">
                      Vul onderstaand formulier in en wij nemen binnen 24 uur contact met u op.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Naam *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Uw volledige naam"
                          className="h-12 bg-input border-border focus:border-accent focus:ring-accent/20"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-foreground font-medium">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="uw.email@bedrijf.nl"
                          className="h-12 bg-input border-border focus:border-accent focus:ring-accent/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Telefoon
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+31 6 12345678"
                          className="h-12 bg-input border-border focus:border-accent focus:ring-accent/20"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-foreground font-medium">
                          Bedrijf
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Uw bedrijfsnaam"
                          className="h-12 bg-input border-border focus:border-accent focus:ring-accent/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-foreground font-medium">
                        Type Dienst
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="h-12 bg-input border-border focus:border-accent focus:ring-accent/20">
                          <SelectValue placeholder="Selecteer een dienst" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kantoorschoonmaak">Kantoorschoonmaak</SelectItem>
                          <SelectItem value="industriele-reiniging">Industriële Reiniging</SelectItem>
                          <SelectItem value="medische-reiniging">Medische Reiniging</SelectItem>
                          <SelectItem value="winkelreiniging">Winkel & Retail Reiniging</SelectItem>
                          <SelectItem value="ramen-gevel">Ramen & Gevel Reiniging</SelectItem>
                          <SelectItem value="tapijt-meubel">Tapijt & Meubelreiniging</SelectItem>
                          <SelectItem value="anders">Anders / Maatwerk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Bericht *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Beschrijf uw schoonmaakbehoeften, gewenste frequentie, locatie details, etc."
                        rows={5}
                        className="bg-input border-border focus:border-accent focus:ring-accent/20 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Verzenden..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Offerte Aanvragen
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-secondary text-center">
                      Door dit formulier te verzenden gaat u akkoord met ons{" "}
                      <a href="/privacy-policy" className="text-accent hover:underline font-medium">
                        privacybeleid
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Contactgegevens</h3>
                    <p className="text-secondary">Ons ervaren team staat klaar om al uw vragen te beantwoorden.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border-50">
                      <div className="w-12 h-12 bg-accent-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground">Adres</h4>
                        <p className="text-secondary text-sm">{companyInfo.address}</p>
                        <p className="text-secondary text-sm">Nederland</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted-50 border border-border-50">
                      <div className="w-12 h-12 bg-accent-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground">Telefoon</h4>
                        <p className="text-secondary text-sm">{companyInfo.phone}</p>
                        <p className="text-secondary text-xs">24/7 bereikbaar voor spoedgevallen</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted-50 border border-border-50">
                      <div className="w-12 h-12 bg-accent-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground">E-mail</h4>
                        <p className="text-secondary text-sm">{companyInfo.email}</p>
                        <p className="text-secondary text-xs">Reactie binnen 24 uur</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted-50 border border-border-50">
                      <div className="w-12 h-12 bg-accent-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-foreground">Openingstijden</h4>
                        <div className="text-secondary text-sm space-y-1">
                          <p>Ma - Vr: 8:00 - 18:00</p>
                          <p>Zaterdag: 9:00 - 15:00</p>
                          <p>Zondag: Op afspraak</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Veelgestelde Vragen</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Hier vindt u antwoorden op de meest gestelde vragen over onze schoonmaakdiensten.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Hoe snel kunnen jullie beginnen met schoonmaken?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Wij kunnen meestal binnen 48-72 uur na uw aanvraag starten. Voor spoedgevallen bieden wij ook same-day
                  service aan tegen een kleine toeslag.
                </p>
              </div>

              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Welke schoonmaakmiddelen gebruiken jullie?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Wij gebruiken uitsluitend professionele, milieuvriendelijke schoonmaakmiddelen die veilig zijn voor
                  mensen, dieren en het milieu. Op verzoek kunnen wij ook biologische producten gebruiken.
                </p>
              </div>

              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Zijn jullie verzekerd en gecertificeerd?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Ja, wij zijn volledig verzekerd (WA en bedrijfsschade) en gecertificeerd volgens de Nederlandse
                  kwaliteitsnormen. Al onze medewerkers zijn geschoold en hebben een VOG.
                </p>
              </div>

              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Kunnen jullie ook buiten kantooruren werken?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Absoluut! Wij bieden flexibele werktijden aan, inclusief avonden, weekenden en feestdagen. Dit is
                  ideaal voor kantoren die geen hinder willen ondervinden tijdens werkuren.
                </p>
              </div>

              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Wat gebeurt er als ik niet tevreden ben?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Wij bieden een 100% tevredenheidsgarantie. Als u niet volledig tevreden bent, komen wij binnen 24 uur
                  terug om het probleem kosteloos op te lossen.
                </p>
              </div>

              <div className="bg-background rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Hoe worden de prijzen bepaald?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Onze prijzen zijn gebaseerd op de grootte van de ruimte, frequentie van schoonmaak, type diensten en
                  specifieke wensen. Wij bieden altijd een gratis inspectie en offerte aan.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-secondary mb-4">Heeft u nog andere vragen?</p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => document.getElementById("message")?.focus()}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Stel Uw Vraag
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Offerte Aanvraag Verzonden!"
        message="Bedankt voor uw interesse in SchoonWerk. Wij hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op voor een persoonlijk gesprek."
      />
    </div>
  )
}
