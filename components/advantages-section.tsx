import { Shield, Clock, Leaf, Star, Users, Wrench } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Volledig Verzekerd",
    description: "Wij zijn volledig verzekerd voor uw gemoedsrust en veiligheid.",
  },
  {
    icon: Clock,
    title: "Flexibele Planning",
    description: "Schoonmaak op uw gewenste tijden, ook buiten kantooruren.",
  },
  {
    icon: Leaf,
    title: "Milieuvriendelijk",
    description: "Gebruik van biologisch afbreekbare en veilige schoonmaakmiddelen.",
  },
  {
    icon: Star,
    title: "Kwaliteitsgarantie",
    description: "100% tevredenheidsgarantie op al onze diensten.",
  },
  {
    icon: Users,
    title: "Ervaren Team",
    description: "Getrainde professionals met jarenlange ervaring.",
  },
  {
    icon: Wrench,
    title: "Moderne Apparatuur",
    description: "Gebruik van de nieuwste en meest efficiënte schoonmaakapparatuur.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
            Waarom Kiezen voor <span className="text-primary">SchoonWerk</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek de voordelen die ons onderscheiden van andere schoonmaakbedrijven
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
