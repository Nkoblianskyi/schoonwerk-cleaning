"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Droplets, Leaf, Clock, Sparkles, Shield, ChevronRight, Info } from "lucide-react"

const cleaningFacts = [
  {
    id: 1,
    icon: Droplets,
    title: "Wist je dat...",
    fact: "Een gemiddeld toetsenbord 20.000 keer meer bacteriën bevat dan een toiletbril?",
    tip: "Reinig je toetsenbord wekelijks met alcoholdoekjes voor optimale hygiëne.",
    category: "Hygiëne",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Milieuvriendelijk",
    fact: "Azijn en bakingsoda kunnen 90% van alle huishoudelijke schoonmaaktaken vervangen?",
    tip: "Deze natuurlijke ingrediënten zijn veilig, effectief en milieuvriendelijk.",
    category: "Eco-tips",
  },
  {
    id: 3,
    icon: Clock,
    title: "Tijdsbesparing",
    fact: "Professionele schoonmaak bespaart gemiddeld 4 uur per week aan huishoudelijk werk?",
    tip: "Besteed die tijd aan wat echt belangrijk is: familie, hobby's en ontspanning.",
    category: "Efficiency",
  },
  {
    id: 4,
    icon: Shield,
    title: "Gezondheid",
    fact: "Een schone werkplek kan de productiviteit met 15% verhogen?",
    tip: "Regelmatige professionele reiniging verbetert luchtkwaliteit en welzijn.",
    category: "Welzijn",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Kwaliteit",
    fact: "Stof accumuleert 40% sneller in ruimtes zonder regelmatige professionele reiniging?",
    tip: "Wekelijkse professionele reiniging houdt uw ruimte langer fris en schoon.",
    category: "Onderhoud",
  },
  {
    id: 6,
    icon: Lightbulb,
    title: "Smart Cleaning",
    fact: "Microfiber doeken kunnen 99% van bacteriën verwijderen zonder chemicaliën?",
    tip: "Wij gebruiken geavanceerde microfiber technologie voor optimale resultaten.",
    category: "Technologie",
  },
]

export function InteractiveFactsSection() {
  const [activeFact, setActiveFact] = useState(cleaningFacts[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleFactChange = (fact: (typeof cleaningFacts)[0]) => {
    if (fact.id === activeFact.id) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveFact(fact)
      setIsAnimating(false)
    }, 150)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="h-4 w-4" />
            Interessante Schoonmaakfeiten
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-4">
            Ontdek de Wetenschap van Schoonmaken
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klik op de categorieën hieronder om fascinerende feiten en handige tips te ontdekken
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Buttons */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {cleaningFacts.map((fact) => {
                const IconComponent = fact.icon
                const isActive = activeFact.id === fact.id

                return (
                  <Button
                    key={fact.id}
                    variant={isActive ? "default" : "outline"}
                    className={`w-full justify-start text-left p-4 h-auto transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow-lg scale-105"
                        : "hover:bg-accent/20 hover:border-accent/50 hover:text-accent hover:scale-102"
                    }`}
                    onClick={() => handleFactChange(fact)}
                  >
                    <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium">{fact.category}</div>
                      <div className="text-xs opacity-75 mt-1">{fact.title}</div>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? "rotate-90" : ""}`} />
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Active Fact Display */}
          <div className="lg:col-span-2">
            <Card
              className={`h-full transition-all duration-300 ${isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <activeFact.icon className="h-8 w-8 text-accent" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-3">
                        <Info className="h-3 w-3" />
                        {activeFact.category}
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-primary mb-3">{activeFact.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground leading-relaxed">{activeFact.fact}</p>

                      <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-primary mb-1">💡 Professionele Tip:</p>
                        <p className="text-sm text-muted-foreground">{activeFact.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <a href="/contact">
              <Sparkles className="mr-2 h-5 w-5" />
              Ontdek Onze Professionele Aanpak
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
