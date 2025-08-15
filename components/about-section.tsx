import Link from "next/link"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/mock-data"
import { Users, Calendar, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                Over <span className="text-primary">SchoonWerk</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{companyInfo.description}</p>
              <p className="text-muted-foreground leading-relaxed">
                Gevestigd in het hart van Amsterdam, bedienen wij klanten door heel Nederland. Onze ervaren medewerkers
                zijn getraind in de nieuwste schoonmaaktechnieken en werken altijd volgens de hoogste
                kwaliteitsstandaarden.
              </p>
            </div>

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
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Medewerkers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Tevreden Klanten</div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/over-ons">Meer Over Ons</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/f7902fc4df603fbdbb7297d78123ed7b.jpg"
                alt="Professioneel schoonmaakteam aan het werk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
