import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { companyInfo } from "@/lib/mock-data"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
                Cookie <span className="text-primary">Beleid</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dit cookiebeleid legt uit hoe SchoonWerk cookies en vergelijkbare technologieën gebruikt op onze website
                www.schoonwerk.online.
              </p>
              <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 2025</p>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">1. Wat Zijn Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden opgeslagen wanneer u
                  onze website bezoekt. Ze helpen ons de website goed te laten functioneren en uw gebruikerservaring te
                  verbeteren.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies bevatten informatie over uw websitebezoek, zoals uw voorkeuren, inloggegevens en
                  browsersessie. Ze kunnen niet worden gebruikt om u persoonlijk te identificeren, tenzij u persoonlijke
                  informatie heeft verstrekt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">2. Welke Cookies Gebruiken Wij?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Noodzakelijke Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deze cookies zijn essentieel voor het functioneren van onze website en kunnen niet worden
                    uitgeschakeld.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Sessie cookies:</strong> Voor het bijhouden van uw browsersessie
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Beveiligingscookies:</strong> Voor het beschermen tegen misbruik
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Cookie voorkeuren:</strong> Voor het onthouden van uw cookie-instellingen
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Functionele Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deze cookies verbeteren de functionaliteit van onze website en uw gebruikerservaring.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Taalvoorkeuren:</strong> Voor het onthouden van uw taalkeuze
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Formuliergegevens:</strong> Voor het tijdelijk opslaan van formulierinvoer
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Gebruikersvoorkeuren:</strong> Voor het onthouden van uw instellingen
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Analytische Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat we deze kunnen
                    verbeteren.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Google Analytics:</strong> Voor het analyseren van websiteverkeer (geanonimiseerd)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Prestatiemetingen:</strong> Voor het meten van laadtijden en prestaties
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>
                        <strong>Gebruiksstatistieken:</strong> Voor het bijhouden van populaire pagina's
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">3. Cookies van Derden</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Onze website kan cookies van derden bevatten voor specifieke functionaliteiten:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Google Analytics:</strong> Voor websiteanalyse en rapportage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Google Maps:</strong> Voor het tonen van locatie-informatie
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Social Media:</strong> Voor het delen van content (indien gebruikt)
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                  <strong>Let op:</strong> Deze derden hebben hun eigen cookiebeleid. Wij hebben geen controle over hun
                  cookies en raden u aan hun privacybeleid te lezen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">4. Hoe Lang Bewaren Wij Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  De bewaartermijn van cookies verschilt per type:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Sessiecookies:</strong> Worden verwijderd wanneer u uw browser sluit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Permanente cookies:</strong> Blijven opgeslagen voor een bepaalde periode (max. 2 jaar)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Analytische cookies:</strong> Worden na 26 maanden automatisch verwijderd
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">5. Uw Cookie Voorkeuren Beheren</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  U heeft verschillende opties om cookies te beheren:
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Via Onze Website</h4>
                    <p className="text-sm text-muted-foreground">
                      Gebruik de cookie-instellingen banner die verschijnt bij uw eerste bezoek, of wijzig uw voorkeuren
                      via de cookie-instellingen in de footer.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Via Uw Browser</h4>
                    <p className="text-sm text-muted-foreground">
                      Alle browsers bieden de mogelijkheid om cookies te beheren via de instellingen. U kunt cookies
                      blokkeren, verwijderen of waarschuwingen instellen.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <strong>Belangrijk:</strong> Het uitschakelen van bepaalde cookies kan de functionaliteit van onze
                  website beperken en uw gebruikerservaring beïnvloeden.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">6. Wijzigingen in Dit Cookiebeleid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze website of wetgeving te
                  reflecteren. Controleer deze pagina regelmatig voor updates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bij belangrijke wijzigingen zullen wij u hiervan op de hoogte stellen via een melding op onze website
                  of per e-mail (indien u zich heeft aangemeld voor onze nieuwsbrief).
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl color-black">7. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-black">
                <p className="text-muted-foreground leading-relaxed">
                  Heeft u vragen over ons cookiebeleid of over hoe wij cookies gebruiken? Neem dan contact met ons op:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-black">
                  <p className="text-sm">
                    <strong>SchoonWerk</strong>
                  </p>
                  <p className="text-sm ">E-mail: {companyInfo.email}</p>
                  <p className="text-sm">Telefoon: {companyInfo.phone}</p>
                  <p className="text-sm">Adres: {companyInfo.address}</p>
                  <p className="text-sm">Website: www.schoonwerk.online</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
