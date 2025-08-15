import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { companyInfo } from "@/lib/mock-data"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
                Privacy <span className="text-primary">Beleid</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                SchoonWerk respecteert uw privacy en beschermt uw persoonlijke gegevens. Dit privacybeleid legt uit hoe
                wij uw informatie verzamelen, gebruiken en beschermen.
              </p>
              <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 2025</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">1. Wie Zijn Wij?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  SchoonWerk is een professioneel schoonmaakbedrijf gevestigd in {companyInfo.address}. Wij zijn
                  verantwoordelijk voor de verwerking van uw persoonlijke gegevens zoals beschreven in dit
                  privacybeleid.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Contactgegevens:</strong>
                  </p>
                  <p className="text-sm">E-mail: {companyInfo.email}</p>
                  <p className="text-sm">Telefoon: {companyInfo.phone}</p>
                  <p className="text-sm">Adres: {companyInfo.address}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">2. Welke Gegevens Verzamelen Wij?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij verzamelen alleen de gegevens die noodzakelijk zijn voor het verlenen van onze diensten:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Contactgegevens:</strong> Naam, e-mailadres, telefoonnummer, bedrijfsnaam
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Locatiegegevens:</strong> Adres van de te reinigen locatie
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Servicegegevens:</strong> Type dienst, frequentie, specifieke wensen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Websitegegevens:</strong> IP-adres, browsertype, bezochte pagina's (via cookies)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">3. Waarvoor Gebruiken Wij Uw Gegevens?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij gebruiken uw persoonlijke gegevens uitsluitend voor:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Het verlenen van schoonmaakdiensten en uitvoeren van contracten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Communicatie over offertes, planning en service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Facturering en administratieve doeleinden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Verbetering van onze website en dienstverlening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Naleving van wettelijke verplichtingen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">4. Hoe Beschermen Wij Uw Gegevens?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij nemen de beveiliging van uw gegevens zeer serieus en hebben passende technische en
                  organisatorische maatregelen getroffen:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>SSL-versleuteling voor alle datatransmissie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Beveiligde servers en regelmatige back-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Toegangscontrole en autorisatie voor medewerkers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Regelmatige beveiligingsaudits en updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">5. Delen Wij Uw Gegevens?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij verkopen, verhuren of delen uw persoonlijke gegevens niet met derden, behalve:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Met uw uitdrukkelijke toestemming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Voor het uitvoeren van onze diensten (bijv. onderaannemers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Wanneer wettelijk verplicht (bijv. belastingdienst)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>Voor technische ondersteuning (hosting, e-mail services)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">6. Uw Rechten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Onder de AVG heeft u de volgende rechten betreffende uw persoonlijke gegevens:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u hebben
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Recht op vergetelheid:</strong> U kunt verzoeken uw gegevens te verwijderen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Recht op beperking:</strong> U kunt de verwerking laten beperken
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Recht op overdraagbaarheid:</strong> U kunt uw gegevens opvragen in een leesbaar formaat
                    </span>
                  </li>
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Contact voor privacyverzoeken:</strong> {companyInfo.email}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">7. Bewaartermijnen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij bewaren uw gegevens niet langer dan noodzakelijk:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Klantgegevens:</strong> Gedurende de contractperiode + 7 jaar (fiscale bewaarplicht)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Offertegegevens:</strong> 2 jaar na laatste contact
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span>
                      <strong>Websitegegevens:</strong> 2 jaar (analytische doeleinden)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">8. Wijzigingen in Dit Beleid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina
                  gepubliceerd met een nieuwe datum. Wij adviseren u dit beleid regelmatig te controleren.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-black">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">9. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Heeft u vragen over dit privacybeleid of over hoe wij uw gegevens verwerken? Neem dan contact met ons
                  op:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p className="text-sm">
                    <strong>SchoonWerk</strong>
                  </p>
                  <p className="text-sm">E-mail: {companyInfo.email}</p>
                  <p className="text-sm">Telefoon: {companyInfo.phone}</p>
                  <p className="text-sm">Adres: {companyInfo.address}</p>
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
