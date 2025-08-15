import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cleaningTips } from "@/lib/mock-data"
import { Lightbulb } from "lucide-react"

export function TipsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
            Handige <span className="text-primary">Schoonmaak Tips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionele tips van onze experts om uw werkplek schoon te houden
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cleaningTips.map((tip) => (
            <Card key={tip.id} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{tip.title}</CardTitle>
                    <div className="text-xs text-primary font-medium mt-1">{tip.category}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
