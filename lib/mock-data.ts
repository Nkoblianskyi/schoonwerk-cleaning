export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  category: "kantoor" | "industrie" | "medisch" | "retail"
  icon: string
  image: string
}

export const services: Service[] = [
  {
    id: "kantoorschoonmaak",
    title: "Kantoorschoonmaak",
    shortDescription: "Professionele schoonmaak voor kantoorgebouwen en bedrijfspanden.",
    fullDescription:
      "Onze kantoorschoonmaak service zorgt voor een schone en gezonde werkomgeving. Wij bieden flexibele schema's en gebruiken milieuvriendelijke producten voor optimale resultaten.",
    features: [
      "Dagelijkse of wekelijkse schoonmaak",
      "Stofzuigen en dweilen van alle vloeren",
      "Reiniging van sanitaire voorzieningen",
      "Afval legen en verversen",
      "Ramen en spiegels schoonmaken",
      "Desinfectie van werkplekken",
    ],
    category: "kantoor",
    icon: "🏢",
    image: "/ac108e80b960ccd02f4485220629f6a8.jpg",
  },
  {
    id: "industriele-reiniging",
    title: "Industriële Reiniging",
    shortDescription: "Gespecialiseerde reiniging voor industriële faciliteiten en productieomgevingen.",
    fullDescription:
      "Onze industriële reinigingsdiensten zijn speciaal ontwikkeld voor complexe productieomgevingen. Wij begrijpen de unieke uitdagingen van industriële schoonmaak.",
    features: [
      "Hogedruk reiniging",
      "Chemische reiniging van machines",
      "Stofafzuiging en luchtzuivering",
      "Veiligheidsprotocollen",
      "Specialistische apparatuur",
      "24/7 beschikbaarheid",
    ],
    category: "industrie",
    icon: "🏭",
    image: "/4920d17f38a839703f733ad8b67d468e.jpg",
  },
  {
    id: "medische-reiniging",
    title: "Medische Reiniging",
    shortDescription: "Steriele schoonmaak voor ziekenhuizen, klinieken en medische faciliteiten.",
    fullDescription:
      "Medische faciliteiten vereisen de hoogste hygiënestandaarden. Onze gecertificeerde medewerkers zorgen voor steriele omgevingen volgens medische protocollen.",
    features: [
      "Steriele reinigingstechnieken",
      "Medische desinfectie",
      "HACCP gecertificeerd",
      "Speciale afvalverwerking",
      "Operatiekamer reiniging",
      "Infectiepreventie protocollen",
    ],
    category: "medisch",
    icon: "🏥",
    image: "/9e641ba7740ab2068391a44cb88bd861.jpg",
  },
  {
    id: "winkelreiniging",
    title: "Winkel & Retail Reiniging",
    shortDescription: "Schoonmaakdiensten voor winkels, restaurants en retail omgevingen.",
    fullDescription:
      "Een schone winkel trekt meer klanten aan. Onze retail schoonmaakdiensten zorgen voor een uitnodigende en hygiënische winkelomgeving.",
    features: [
      "Etalage en ramen reiniging",
      "Vloeronderhoud alle materialen",
      "Kassa en winkelinrichting",
      "Kleedkamers en toiletten",
      "Flexibele werktijden",
      "Dagelijkse ondersteuning",
    ],
    category: "retail",
    icon: "🛍️",
    image: "/a34c622ee976f59f0d0bd985de3c6f8e.jpg",
  },
  {
    id: "ramen-gevel-reiniging",
    title: "Ramen & Gevel Reiniging",
    shortDescription: "Professionele raam- en gevelreiniging voor alle hoogtes en gebouwtypes.",
    fullDescription:
      "Schone ramen en gevels maken een professionele indruk. Onze specialisten gebruiken moderne apparatuur voor veilige en effectieve reiniging.",
    features: [
      "Hoogwerker en touwacces",
      "Gevelreiniging alle materialen",
      "Watergevoed systeem",
      "Regelmatige onderhoudscontracten",
      "Verzekerd en gecertificeerd",
      "Milieuvriendelijke methoden",
    ],
    category: "kantoor",
    icon: "🪟",
    image: "/db655eb3fc8a7ff15caea201ca303c88.jpg",
  },
  {
    id: "tapijt-meubelreiniging",
    title: "Tapijt & Meubelreiniging",
    shortDescription: "Diepe reiniging van tapijten, vloerbedekking en stoffering.",
    fullDescription:
      "Tapijten en meubels hebben regelmatig diepe reiniging nodig. Onze specialistische apparatuur verwijdert vlekken en verlengt de levensduur.",
    features: [
      "Stoomreiniging tapijten",
      "Vlekverwijdering specialist",
      "Meubelstoffering reiniging",
      "Snelle droogtijd",
      "Milieuvriendelijke producten",
      "Preventief onderhoud",
    ],
    category: "kantoor",
    icon: "🛋️",
    image: "/95013519eb654136268c56da81ee4af7.jpg",
  },
]

export interface Testimonial {
  id: string
  name: string
  company: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria van der Berg",
    company: "TechStart Amsterdam",
    text: "SchoonWerk heeft ons kantoor getransformeerd. Hun aandacht voor detail en betrouwbaarheid is uitstekend. Onze medewerkers werken nu in een veel schonere omgeving.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jan Pietersen",
    company: "Productie Maatschappij Utrecht",
    text: "Voor onze industriële faciliteit hadden we een specialist nodig. SchoonWerk begrijpt onze complexe eisen en levert altijd kwaliteit.",
    rating: 5,
  },
  {
    id: "3",
    name: "Dr. Sarah Jansen",
    company: "Medisch Centrum Rotterdam",
    text: "In de medische sector is hygiëne cruciaal. SchoonWerk voldoet aan alle onze strenge eisen en werkt volgens de hoogste standaarden.",
    rating: 5,
  },
  {
    id: "4",
    name: "Peter de Vries",
    company: "Retail Keten Nederland",
    text: "Onze winkels zien er altijd perfect uit dankzij SchoonWerk. Hun flexibiliteit en professionaliteit maken het verschil.",
    rating: 5,
  },
]

export interface Tip {
  id: string
  title: string
  description: string
  category: string
}

export const cleaningTips: Tip[] = [
  {
    id: "1",
    title: "Dagelijkse Kantoor Hygiëne",
    description:
      "Desinfecteer werkplekken dagelijks, vooral toetsenborden en telefoons. Dit voorkomt de verspreiding van bacteriën en virussen.",
    category: "Kantoor",
  },
  {
    id: "2",
    title: "Tapijt Onderhoud Tips",
    description:
      "Stofzuig tapijten minstens 2x per week en behandel vlekken onmiddellijk. Professionele reiniging elke 6-12 maanden verlengt de levensduur.",
    category: "Vloeren",
  },
  {
    id: "3",
    title: "Ramen Schoonhouden",
    description:
      "Gebruik gedestilleerd water voor streepvrije ramen. Reinig bij bewolkt weer om snelle droging en vlekken te voorkomen.",
    category: "Ramen",
  },
  {
    id: "4",
    title: "Milieuvriendelijk Schoonmaken",
    description:
      "Kies voor biologisch afbreekbare producten en microvezel doeken. Dit is beter voor het milieu en de gezondheid van uw medewerkers.",
    category: "Milieu",
  },
]

export const companyInfo = {
  name: "SchoonWerk",
  tagline: "Professionele Schoonmaakdiensten",
  description:
    "SchoonWerk is uw betrouwbare partner voor professionele schoonmaakdiensten in Nederland. Met meer dan 10 jaar ervaring zorgen wij voor schone, gezonde en uitnodigende omgevingen voor bedrijven van alle groottes.",
  address: "Zuidas Business District, Amsterdam",
  phone: "+31 20 12644868",
  email: "info@schoonwerk.online",
  website: "www.schoonwerk.online",
  founded: "2015",
  employees: "50+",
  clients: "200+",
}
