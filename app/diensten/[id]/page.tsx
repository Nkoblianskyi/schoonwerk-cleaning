import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/mock-data"
import { ArrowLeft, CheckCircle, Phone, Mail, Building2, Factory, Hospital, ShoppingBag } from "lucide-react"

const iconMap = {
  kantoor: Building2,
  industrie: Factory,
  medisch: Hospital,
  retail: ShoppingBag,
}

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.category]
  const relatedServices = services.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 2)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/diensten" className="hover:text-primary transition-colors">
                Diensten
              </Link>
              <span>/</span>
              <span className="text-foreground">{service.title}</span>
            </div>
          </div>
        </section>

        {/* Service Hero */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">{service.title}</h1>
                    <p className="text-primary font-medium mt-2">Professionele Schoonmaakdienst</p>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">{service.fullDescription}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Offerte Aanvragen</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} - Professionele schoonmaakdienst`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Wat Is Inbegrepen Bij <span className="text-primary">{service.title}</span>?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Onze {service.title.toLowerCase()} service omvat alle aspecten die nodig zijn voor een schone en
                  gezonde omgeving. Hieronder vindt u een overzicht van wat wij voor u doen.
                </p>
              </div>

              <div className="grid gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                Hoe Werkt Het <span className="text-primary">Proces</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Van eerste contact tot regelmatige service - zo zorgen wij voor een naadloze ervaring
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact & Intake",
                  description: "Neem contact met ons op voor een vrijblijvend gesprek over uw wensen en eisen.",
                },
                {
                  step: "2",
                  title: "Locatie Bezoek",
                  description: "Wij bezoeken uw locatie voor een grondige inspectie en persoonlijk advies.",
                },
                {
                  step: "3",
                  title: "Offerte & Planning",
                  description: "U ontvangt een gedetailleerde offerte en wij plannen de werkzaamheden in.",
                },
                {
                  step: "4",
                  title: "Uitvoering & Service",
                  description: "Ons team voert de werkzaamheden uit volgens afspraak en de hoogste kwaliteit.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Gerelateerde <span className="text-primary">Diensten</span>
                </h2>
                <p className="text-muted-foreground">Ontdek onze andere diensten in dezelfde categorie</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedServices.map((relatedService) => {
                  const RelatedIconComponent = iconMap[relatedService.category]
                  return (
                    <Card
                      key={relatedService.id}
                      className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <RelatedIconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {relatedService.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {relatedService.shortDescription}
                        </p>
                        <Button variant="ghost" asChild className="group/btn">
                          <Link href={`/diensten/${relatedService.id}`} className="inline-flex items-center gap-2">
                            Meer Informatie
                            <ArrowLeft className="h-4 w-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Klaar Om Te Beginnen?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte voor {service.title.toLowerCase()}.
              Onze experts staan klaar om u te helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Offerte Aanvragen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Back to Services */}
        <section className="py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild>
              <Link href="/diensten" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Terug naar Alle Diensten
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}
