import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Shield, Clock, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center bg-gradient-to-br from-background via-muted to-background overflow-hidden py-4 sm:py-6 lg:py-8">
      <div className="absolute inset-0 bg-[url('/fbab190bcd9a7cb17f937a906e2d35e8.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="hidden sm:block absolute top-10 sm:top-20 right-10 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-48 h-24 sm:h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Nederland's Meest Vertrouwde Schoonmaakdienst
              </div>

              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                Professionele{" "}
                <span className="text-accent relative">
                  Schoonmaak
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-accent/30 rounded-full"></div>
                </span>{" "}
                voor Uw Ruimte
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Fris, Schoon en Betrouwbaar. SchoonWerk transformeert uw werkruimte in een gezonde, productieve omgeving
                waar u trots op kunt zijn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Ontdek Onze Diensten
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 hover:bg-muted transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/contact">Gratis Offerte</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-sm border">
                <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm sm:text-base">10+ Jaar Ervaring</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bewezen expertise</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-sm border">
                <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm sm:text-base">200+ Tevreden Klanten</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Vertrouwd door bedrijven</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-sm border">
                <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm sm:text-base">Milieuvriendelijk</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Duurzame producten</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-sm border">
                <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm sm:text-base">24/7 Bereikbaar</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Altijd voor u klaar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-card shadow-2xl">
              <img
                src="/6566309e73fdd83e31b195dc0eb42cb4.jpg"
                alt="Professioneel schoonmaakteam in modern kantoorgebouw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white border shadow-2xl p-4 sm:p-6 rounded-xl sm:rounded-2xl max-w-[280px] sm:max-w-xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm sm:text-base">Direct Contact</p>
                  <p className="text-accent font-medium text-sm sm:text-base">+31 20 12644868</p>
                  <p className="text-xs text-muted-foreground">Gratis advies & offerte</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-accent text-accent-foreground p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold">98%</p>
                <p className="text-xs opacity-90">Klanttevredenheid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
