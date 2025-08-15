import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { companyInfo } from "@/lib/mock-data"
import { Users, Calendar, Award, Shield, Leaf, Target, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Betrouwbaarheid",
      description: "Wij staan voor onze afspraken en leveren altijd de beloofde kwaliteit.",
    },
    {
      icon: Leaf,
      title: "Duurzaamheid",
      description: "Milieuvriendelijke producten en methoden voor een betere toekomst.",
    },
    {
      icon: Heart,
      title: "Zorgzaamheid",
      description: "Aandacht voor detail en zorg voor onze klanten en medewerkers.",
    },
    {
      icon: Target,
      title: "Professionaliteit",
      description: "Hoogste standaarden in service, kwaliteit en klantenservice.",
    },
  ]

  const timeline = [
    {
      year: "2015",
      title: "Oprichting SchoonWerk",
      description: "Gestart als klein familiebedrijf met focus op kantoorschoonmaak in Amsterdam.",
    },
    {
      year: "2017",
      title: "Uitbreiding Diensten",
      description: "Toevoeging van industriële reiniging en medische schoonmaak aan ons aanbod.",
    },
    {
      year: "2019",
      title: "Landelijke Dekking",
      description: "Uitbreiding naar heel Nederland met vestigingen in meerdere steden.",
    },
    {
      year: "2021",
      title: "Duurzame Innovatie",
      description: "Volledige overstap naar milieuvriendelijke producten en methoden.",
    },
    {
      year: "2023",
      title: "Digitale Transformatie",
      description: "Lancering van online platform voor klantenbeheer en planning.",
    },
    {
      year: "2025",
      title: "Marktleider",
      description: "Erkend als een van de toonaangevende schoonmaakbedrijven in Nederland.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground">
                  Over <span className="text-primary">SchoonWerk</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{companyInfo.description}</p>
                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">10+</div>
                    <div className="text-sm text-muted-foreground">Jaar Ervaring</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{companyInfo.employees}</div>
                    <div className="text-sm text-muted-foreground">Medewerkers</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{companyInfo.clients}</div>
                    <div className="text-sm text-muted-foreground">Tevreden Klanten</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/f7902fc4df603fbdbb7297d78123ed7b.jpg"
                    alt="SchoonWerk team bij modern kantoorgebouw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Onze <span className="text-primary">Missie</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wij geloven dat een schone omgeving de basis is voor productiviteit, gezondheid en welzijn. Onze
                  missie is om bedrijven te helpen hun doelen te bereiken door het creëren van schone, veilige en
                  uitnodigende werkplekken.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Met onze jarenlange ervaring, professionele aanpak en persoonlijke service zorgen wij ervoor dat onze
                  klanten zich kunnen focussen op waar zij het beste in zijn, terwijl wij zorgen voor een perfecte
                  schoonmaak.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Onze <span className="text-primary">Visie</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wij streven ernaar de meest vertrouwde en innovatieve schoonmaakpartner van Nederland te zijn. Door
                  continue verbetering, duurzame praktijken en technologische innovatie willen wij de standaard zetten
                  in de schoonmaakbranche.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Onze visie is een toekomst waarin elke werkplek niet alleen schoon is, maar ook bijdraagt aan de
                  gezondheid van mensen en het milieu. Wij investeren daarom continu in milieuvriendelijke producten en
                  methoden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                Onze <span className="text-primary">Waarden</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deze kernwaarden vormen de basis van alles wat wij doen en hoe wij onze klanten bedienen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                Onze <span className="text-primary">Geschiedenis</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Van bescheiden begin tot marktleider - ontdek hoe SchoonWerk is gegroeid
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="border-border hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 space-y-3">
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                  Waarom Kiezen Klanten Voor <span className="text-primary">SchoonWerk</span>?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Onze klanten kiezen voor SchoonWerk vanwege onze betrouwbaarheid, kwaliteit en persoonlijke aanpak.
                  Wij begrijpen dat elke klant unieke behoeften heeft.
                </p>

                <div className="space-y-4">
                  {[
                    "Persoonlijke account manager voor elke klant",
                    "Flexibele planning en 24/7 bereikbaarheid",
                    "Gebruik van milieuvriendelijke producten",
                    "Volledig verzekerd en gecertificeerd",
                    "Transparante communicatie en rapportage",
                    "Concurrerende prijzen zonder verborgen kosten",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/57e10a73e3f48481302e0c79ce632168.jpg"
                    alt="Tevreden SchoonWerk team met moderne apparatuur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Klaar Om Samen Te Werken?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ontdek hoe SchoonWerk uw bedrijf kan helpen met professionele schoonmaakdiensten. Neem vandaag nog contact
              met ons op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Opnemen</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/diensten">Onze Diensten</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
