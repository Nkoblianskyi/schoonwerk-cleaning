import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/favicon.ico" alt="SchoonWerk Logo" width={40} height={40} />
              <p className="font-playfair font-bold text-2xl text-white">SchoonWerk</p>
            </Link>
            <p className="text-background/80 leading-relaxed">
              Uw betrouwbare partner voor professionele schoonmaakdiensten in Nederland.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">{companyInfo.email}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Diensten</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/diensten/kantoorschoonmaak"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Kantoorschoonmaak
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/industriele-reiniging"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Industriële Reiniging
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/medische-reiniging"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Medische Reiniging
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/winkelreiniging"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Winkel & Retail
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Bedrijf</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons" className="text-background/80 hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-background/80 hover:text-primary transition-colors">
                  Privacy Beleid
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-background/80 hover:text-primary transition-colors">
                  Cookie Beleid
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <p className="text-background/80 text-sm leading-relaxed">
              Neem contact met ons op voor een vrijblijvende offerte of voor meer informatie over onze diensten.
            </p>
            <div className="text-sm text-background/60">
              <p>Maandag - Vrijdag: 8:00 - 18:00</p>
              <p>Weekend: Op afspraak</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 SchoonWerk. Alle rechten voorbehouden. | Website: www.schoonwerk.online
          </p>
        </div>
      </div>
    </footer>
  )
}
