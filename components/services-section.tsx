import Link from "next/link"
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

export function ServicesSection() {
  const featuredServices = services.slice(0, 4)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-foreground">
            Onze <span className="text-primary">Diensten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van kantoorschoonmaak tot industriële reiniging - wij bieden professionele schoonmaakoplossingen voor elke
            sector en elke behoefte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => {
            const IconComponent = iconMap[service.category]
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                  <Button variant="ghost" asChild className="group/btn">
                    <Link href={`/diensten/${service.id}`} className="inline-flex items-center gap-2">
                      Meer Info
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/diensten" className="inline-flex items-center gap-2">
              Alle Diensten Bekijken
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
