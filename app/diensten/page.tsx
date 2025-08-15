import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/mock-data"
import { ArrowRight, Building2, Factory, Hospital, ShoppingBag } from "lucide-react"

const iconMap = {
  kantoor: Building2,
  industrie: Factory,
  medisch: Hospital,
  retail: ShoppingBag,
}

const categoryNames = {
  kantoor: "Kantoor & Bedrijven",
  industrie: "Industriële Reiniging",
  medisch: "Medische Faciliteiten",
  retail: "Retail & Winkels",
}

export default function ServicesPage() {
  const groupedServices = services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = []
      }
      acc[service.category].push(service)
      return acc
    },
    {} as Record<string, typeof services>,
  )

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground">
                Onze <span className="text-primary">Diensten</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                SchoonWerk biedt een breed scala aan professionele schoonmaakdiensten voor elke sector. Van
                kantoorschoonmaak tot gespecialiseerde industriële reiniging - wij hebben de expertise en ervaring om
                aan al uw wensen te voldoen.
              </p>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {Object.entries(groupedServices).map(([category, categoryServices]) => {
              const IconComponent = iconMap[category as keyof typeof iconMap]
              return (
                <div key={category} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-playfair text-3xl font-bold text-foreground">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service) => (
                      <Card
                        key={service.id}
                        className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-card"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-playfair group-hover:text-primary transition-colors font-semibold text-black text-black">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground leading-relaxed text-base">
                            {service.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            variant="default"
                            asChild
                            className="group/btn w-full justify-between bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                          >
                            <Link href={`/diensten/${service.id}`}>
                              Meer Informatie
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Niet Gevonden Wat U Zoekt?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wij bieden ook maatwerk oplossingen voor specifieke schoonmaakbehoeften. Neem contact met ons op voor een
              persoonlijk advies en offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Opnemen</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/over-ons">Meer Over Ons</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
