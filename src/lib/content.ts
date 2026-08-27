export const COMPANY = {
  name: "Conex Groep",
  legal: "Conex Groep B.V.",
  tagline: "Werken voor wie je wilt, zolang je wilt — in de techniek.",
  phone: "036 751 9799",
  phoneHref: "tel:0367519799",
  address: ["Transistorstraat 31", "1322CK Almere"],
  kvk: "92108156",
  btw: "NL865888425B01",
};

export const SERVICE_PATHS = {
  uitzenden: "/uitzenden",
  "werving-selectie": "/werving-selectie",
  detachering: "/detachering",
  zzp: "/zzp",
} as const;

export const SERVICES = [
  {
    slug: "uitzenden" as const,
    title: "Uitzenden",
    eyebrow: "Flexibele inzet",
    intro:
      "Snel de juiste vakmensen op de bouwplaats of in de werkplaats. Wij werven, screenen en begeleiden — jij houdt de regie op het werk.",
    points: [
      "Inzetbaar binnen dagen, niet weken",
      "Screening op diploma, VCA en referenties",
      "Begeleiding tijdens de opdracht",
      "Schaalbaar bij piek en dal",
    ],
  },
  {
    slug: "werving-selectie" as const,
    title: "Werving & selectie",
    eyebrow: "Vaste plaatsing",
    intro:
      "De juiste professional voor een vaste rol. Wij zoeken, toetsen en presenteren kandidaten die passen bij vak, cultuur en ambitie.",
    points: [
      "Actieve search in ons technisch netwerk",
      "Competenties én klik met het team",
      "Begeleiding tot en met onboarding",
      "Transparante fee, geen verrassingen",
    ],
  },
  {
    slug: "detachering" as const,
    title: "Detachering",
    eyebrow: "Vrijheid + zekerheid",
    intro:
      "Detachering volgens de zp-standaard: jij kiest opdracht en duur, wij regelen contract, uitbetaling en sociale zekerheid. Eigen regie blijft bij jou.",
    points: [
      "Recht op WW, WIA en ziektewet",
      "Transparante verloning op basis van jouw tarief",
      "Geen gedoe met KvK of facturatie als je dat niet wilt",
      "Vangnet tussen opdrachten",
    ],
  },
  {
    slug: "zzp" as const,
    title: "ZZP & zelfstandig werken",
    eyebrow: "DBA-bewust",
    intro:
      "Zelfstandig werken in de techniek, zonder dat jij of je opdrachtgever wakker ligt van schijnzelfstandigheid. Wij toetsen de opdracht en zetten de juiste constructie neer.",
    points: [
      "Toetsing van de arbeidsrelatie vóór start",
      "Contracten die standhouden bij controle",
      "Toegang tot een pool van technische ZZP’ers",
      "Administratieve en juridische eerstelijns hulp",
    ],
  },
];

export const EXTRA_SERVICES = [
  { title: "Eerstelijns juridische ondersteuning", body: "Vragen over contract, aansprakelijkheid of een lastige opdrachtgever? Eerst bij ons, niet meteen bij een duur kantoor." },
  { title: "Belangenbehartiging", body: "Wij staan naast jou in gesprekken met opdrachtgever of intermediair." },
  { title: "Hulp bij de accountant", body: "Heldere antwoorden zodat je boekhouder niet hoeft te gokken." },
  { title: "Instap, overstap en uitstap", body: "Begeleiding als je start, overstapt van constructie of stopt." },
  { title: "Inlenersaansprakelijkheid", body: "Dekking zodat opdrachtgevers veilig kunnen inlenen." },
  { title: "Verzekeringen & arbodienst", body: "Toegang tot voordelige verzekeringen en poortwachter-coördinatie." },
  { title: "Netwerk & coaching", body: "Bijeenkomsten met vakgenoten en ondernemerscoaching." },
  { title: "CV- en facturatiemodule", body: "In het portal: profiel, uren en facturen op één plek." },
  { title: "G-rekening & NEN", body: "Ondersteuning bij g-rekening, audits en certificering." },
  { title: "Hypotheek- en pensioenadvies", body: "Gratis oriënterend gesprek via ons netwerk van specialisten." },
];

export const VALUES = [
  { title: "Vrijheid", body: "Werken voor wie je wilt, zolang je wilt — binnen de wet, met eigen regie." },
  { title: "Zekerheid", body: "Samenwerken zonder fiscaal of arbeidsrechtelijk risico. Sociale zekerheid waar dat past." },
  { title: "Ondersteuning", body: "Adviseurs die in jóuw belang werken. Geen verkooppraatje, een passend advies." },
  { title: "Erkend", body: "Jarenlange ervaring in bouw en techniek. Persoonlijk, lokaal, betrouwbaar." },
];

export const APPROACH = [
  { title: "Zoeken", body: "We luisteren eerst naar wat je nodig hebt. Pas daarna zoeken we. Vak, regio, uren, werkvorm." },
  { title: "Zorgen", body: "We zorgen voor onze mensen zoals we zelf verzorgd zouden willen worden. Contract, uitbetaling, een vast gezicht." },
  { title: "Zij-aan-zij", body: "Is er een uitdaging op de bouwplaats of in de werkplaats? Dan staan we er. Niet alleen op papier." },
];

export const BRANCHES = [
  { slug: "bouw", title: "Bouw", body: "Uitvoerders, timmerlieden, werkvoorbereiders.", image: "/media/branche-bouw.jpg" },
  { slug: "techniek", title: "Techniek", body: "Elektro, WTB, engineers, calculators.", image: "/media/branche-techniek.jpg" },
  { slug: "installatie", title: "Installatie", body: "Service, klimaat, montage.", image: "/media/branche-installatie.jpg" },
];

export const CERTS = ["VCA", "KVK 92108156", "G-rekening", "NEN-bewust", "DBA-toets"];

export const COMPARISON = [
  {
    title: "Uitzenden",
    contract: "Flexibel in uren en duur",
    fit: "Tijdelijke pieken en ziekte",
    note: "Administratie en ziekterisico bij Conex. Jij betaalt gewerkte uren.",
    href: "/uitzenden" as const,
  },
  {
    title: "Werving & selectie",
    contract: "In dienst bij jou als werkgever",
    fit: "Permanente invulling van de functie",
    note: "Wij zoeken en presenteren. Je betaalt bij een succesvolle plaatsing.",
    href: "/werving-selectie" as const,
  },
  {
    title: "Detachering",
    contract: "Afgesproken periode, duidelijk einde",
    fit: "Langer nodig, wél flexibel blijven",
    note: "Medewerker in dienst bij ons, onder jouw leiding. Jij betaalt gewerkte uren.",
    href: "/detachering" as const,
  },
];

export const FAQ_EMPLOYER = [
  { q: "Is er een vast aanspreekpunt?", a: "Ja. Je krijgt een consultant in Almere die jouw projecten en mensen kent." },
  { q: "Spreken jullie kandidaten persoonlijk?", a: "Altijd. Geen cv over de schutting. We bellen, toetsen vak en klik, en stellen pas daarna voor." },
  { q: "Hoe verloopt het wervingsproces?", a: "Intake van de rol, search in het netwerk, screening (diploma, VCA, referenties), voorstellen, startbegeleiding." },
  { q: "Begeleiden jullie de eerste werkdag?", a: "Ja. We checken of iemand er is, of de introductie klopt, en blijven bereikbaar." },
  { q: "Hoe gaan jullie om met ziekteverzuim?", a: "Bij uitzenden en detachering ligt het risico bij ons. Wij regelen vervanging waar mogelijk." },
  { q: "Kunnen jullie DBA-proof inlenen?", a: "Ja. We toetsen de opdracht. Past ZZP niet, dan detachering of uitzenden — schoon en uitlegbaar." },
];

export type Job = {
  slug: string;
  title: string;
  location: string;
  field: "Bouw" | "Techniek" | "Installatie" | "Kantoor";
  hours: string;
  type: "Uitzend" | "Detachering" | "Vast" | "ZZP";
  salary: string;
  excerpt: string;
};

export const JOBS: Job[] = [
  { slug: "calculator-elektrotechniek", title: "Calculator Elektrotechniek", location: "Almere", field: "Techniek", hours: "40 uur", type: "Vast", salary: "€ 3.500 – € 5.500 p/m", excerpt: "Offertes en nacalculatie voor elektro-installaties. Je rekent scherp en overlegt met de werkvoorbereiding." },
  { slug: "projectleider-wtb", title: "Projectleider WTB", location: "Schiphol", field: "Techniek", hours: "40 uur", type: "Vast", salary: "€ 4.600 – € 5.900 p/m", excerpt: "Sturing op werktuigbouwkundige projecten rondom Schiphol. Planning, mensen, oplevering." },
  { slug: "servicemonteur-installatie", title: "Servicemonteur Installatietechniek", location: "Almere", field: "Installatie", hours: "40 uur", type: "Detachering", salary: "€ 3.400 – € 4.200 p/m", excerpt: "Storingen en onderhoud bij woningen en utiliteit. Zelfstandig op pad, vast aanspreekpunt." },
  { slug: "backoffice-medewerker", title: "Backoffice Medewerker", location: "Almere", field: "Kantoor", hours: "36 uur", type: "Vast", salary: "€ 2.700 – € 3.200 p/m", excerpt: "Contracten, uren en diploma-administratie op ons kantoor in Almere." },
  { slug: "werkvoorbereider-installatie", title: "Werkvoorbereider Installatietechniek", location: "Utrecht", field: "Techniek", hours: "40 uur", type: "Vast", salary: "€ 3.800 – € 4.800 p/m", excerpt: "Tekeningen, materialen en planning voor installatieprojecten in de regio Utrecht." },
  { slug: "monteur-elektrotechniek", title: "Monteur Elektrotechniek", location: "Almere", field: "Techniek", hours: "40 uur", type: "Uitzend", salary: "€ 3.200 – € 4.100 p/m", excerpt: "Aanleg en aansluitingen in nieuwbouw en renovatie. Direct inzetbaar." },
  { slug: "uitvoerder-woningbouw", title: "Uitvoerder Woningbouw", location: "Flevoland", field: "Bouw", hours: "40 uur", type: "Detachering", salary: "€ 4.200 – € 5.400 p/m", excerpt: "Dagelijkse leiding op de bouwplaats. Jij regelt, wij staan erbij." },
  { slug: "engineer-wtb", title: "Engineer Werktuigbouwkunde", location: "Amsterdam", field: "Techniek", hours: "40 uur", type: "ZZP", salary: "€ 4.000 – € 5.200 p/m", excerpt: "Engineering van installaties. Opdracht wordt DBA-getoetst vóór start." },
  { slug: "service-klimaat", title: "Service Technician Klimaat", location: "Almere", field: "Installatie", hours: "40 uur", type: "Vast", salary: "€ 3.300 – € 4.300 p/m", excerpt: "Onderhoud en storingen op warmtepompen en luchtbehandeling." },
  { slug: "calculator-wtb", title: "Calculator WTB", location: "Amersfoort", field: "Techniek", hours: "40 uur", type: "Vast", salary: "€ 3.600 – € 4.800 p/m", excerpt: "Calculeren van werktuigbouwkundige installaties. Nauwkeurig en commercieel scherp." },
];

export function getJob(slug: string) {
  return JOBS.find((j) => j.slug === slug);
}

export { ARTICLES, ARTICLE_CATEGORIES, getArticle, relatedArticles } from "./articles";
export type { Article, ArticleSection } from "./articles";

export const ADVICE_QUESTIONS = [
  "Hoe werk ik zo zelfstandig mogelijk, en ben ik toch verzekerd bij ziekte, zwangerschap of werkloosheid?",
  "Hoe stap ik geleidelijk over naar ondernemerschap, met opdrachten en ervaring?",
  "Hoe bouw ik af richting pensioen, maar werk ik nog een paar jaar minder?",
  "Hoe werk ik zelfstandig en gebruik ik wél het sociale stelsel — zonder gedwongen loondienst?",
  "Hoe voorkom ik fiscale risico’s voor mij, de opdrachtgever en de intermediair?",
  "Hoe voorkom ik dat ik steeds in en uit loondienst moet voor een stabiele werksituatie?",
];

export const PROCESS_DETACH = [
  { step: "1", title: "Adviesgesprek", body: "Vrijblijvend. We kijken naar opdracht, tarief, wensen en of detachering past." },
  { step: "2", title: "Afspraken & contract", body: "Jij bepaalt voorwaarden op basis van je tarief. Wij sluiten met de opdrachtgever." },
  { step: "3", title: "Aan de slag", body: "Uitbetaling, ziektewet, WW-vangnet. Jij werkt. Wij regelen de rest." },
];

export const PROCESS_ZZP = [
  { step: "1", title: "Opdracht toetsen", body: "DBA-check: gezag, inbedding, ondernemerschap. Eerlijk oordeel." },
  { step: "2", title: "Constructie kiezen", body: "ZZP als het past. Anders detachering of uitzenden — schoon en uitlegbaar." },
  { step: "3", title: "Begeleiden", body: "Contract, facturatie of verloning, en een aanspreekpunt tijdens de klus." },
];

export const TEAM_ROLES = [
  { role: "Consultants techniek", focus: "Matching, adviesgesprekken, relaties met vakmensen en opdrachtgevers." },
  { role: "Backoffice", focus: "Contracten, uren, uitbetaling, VCA- en diploma-administratie." },
  { role: "Accountmanagement", focus: "Opdrachtgevers in bouw, installatie en industrie." },
];
