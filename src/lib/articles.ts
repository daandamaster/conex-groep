import { media } from "./media";
export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  minutes: number;
  cover: string;
  sections: ArticleSection[];
};

export const ARTICLE_CATEGORIES = [
  "Alles",
  "Wet DBA",
  "Wetgeving",
  "Werkvormen",
  "Praktijk",
  "Opdrachtgevers",
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "prinsjesdag-2025-zelfstandigen",
    title: "Prinsjesdag 2025: wat technische zelfstandigen écht moeten weten",
    date: "16 september 2025",
    category: "Wetgeving",
    minutes: 11,
    cover: media("branche-techniek.jpg"),
    excerpt:
      "Niet de krantenkop, wel je tarief, je aftrek en of opdrachtgevers nog ZZP inkopen. Dit is de vertaling naar de bouwplaats.",
    sections: [
      {
        paragraphs: [
          "Prinsjesdag is voor veel zelfstandigen in de techniek geen feestje op het bordes. Het is het moment waarop aftrekposten, plannen voor de arbeidsmarkt en de toon van het kabinet doorsijpelen naar inkoopafdelingen. En inkoopafdelingen bepalen of jij volgende maand als ZZP’er factureert, of dat de opdracht ‘even on hold’ gaat.",
          "Wij vertalen de miljoenennota niet naar een hoorcollege. We kijken naar drie dingen: je netto, de houding van opdrachtgevers, en of jouw huidige constructie nog uitlegbaar is. Dat is de enige volgorde die telt als je maandag weer de bus in moet.",
        ],
      },
      {
        heading: "Wat dit jaar wél raakt — en wat lawaai is",
        paragraphs: [
          "Elk jaar verschijnen dezelfde koppen: zelfstandigenaftrek, mkb-winstvrijstelling, bijtelling, mogelijk een verplichte AOV. Sommige maatregelen grijpen in op je aangifte. Andere zijn voornemens die pas over twee jaar wet worden — maar waar juristen van opdrachtgevers nu al zenuwachtig van worden.",
          "Voor monteurs, engineers en projectleiders is het tweede effect groter dan het eerste. Een paar tientjes netto meer of minder is vervelend. Een opdrachtgever die ‘geen ZZP meer inkoopt tot nader order’ is een inkomensklap.",
        ],
        bullets: [
          "Aftrek en winstvrijstelling: reken je voorlopige aanslag opnieuw, niet pas in mei.",
          "Arbeidsmarktplannen: opdrachtgevers lezen ‘handhaving’ en zetten inkoop stil.",
          "Verzekeringen: AOV-verplichting is nog geen wet, wél een gesprek dat je nu moet voeren.",
        ],
      },
      {
        heading: "De beweging die we in de techniek zien",
        paragraphs: [
          "Sinds de handhaving op de Wet DBA weer op stoom is, vragen grotere aannemers en installatiebedrijven standaard: ‘Kunnen we deze rol ook detacheren?’ Niet omdat ze je vak niet vertrouwen. Omdat hun accountant geen naheffing wil.",
          "Dat is geen reden tot paniek. Het is een reden om twee sporen klaar te hebben: een schone ZZP-route waar de opdracht dat toelaat, en een detacheringsroute waar gezag, inbedding of duur ZZP onhoudbaar maken. Wie maar één spoor heeft, verliest opdrachten aan iemand die beide kan.",
        ],
      },
      {
        heading: "Wat jij deze maand concreet doet",
        paragraphs: [
          "Geen spreadsheet van 40 tabbladen. Vier acties, in deze volgorde.",
        ],
        bullets: [
          "Zet al je lopende opdrachten op een rij: duur, tarief, wie plant, wie instrueert.",
          "Vraag per opdracht of de opdrachtgever intern een DBA-beleid heeft — en wat dat voor jou betekent.",
          "Laat twijfelgevallen toetsen vóór je een verlenging tekent. Ná tekenen is te laat.",
          "Plan een gesprek over AOV, arbeidsongeschiktheid en wat je gezin nodig heeft als je twee maanden stilligt.",
        ],
      },
      {
        heading: "Onze lijn bij Conex",
        paragraphs: [
          "Wij laten je niet leiden door krantenkoppen. We toetsen de opdracht, kiezen de werkvorm die bij duur, tarief en gezag past, en leggen dat vast. ZZP als het past. Detachering als dat schoner is. Altijd uitlegbaar naar Belastingdienst én naar de uitvoerder op de steiger.",
          "In een adviesgesprek lopen we jouw opdrachten, kosten en gezinssituatie langs. Daarna weet je of je doorgaat, aanpast of overstapt — zonder dat je een jurist hoeft te worden.",
        ],
      },
    ],
  },
  {
    slug: "dba-proof-najaar",
    title: "DBA-proof het najaar in: contracten, werkvloer en wat opdrachtgevers nu eisen",
    date: "12 augustus 2025",
    category: "Wet DBA",
    minutes: 12,
    cover: media("hero.jpg"),
    excerpt:
      "Augustus is te laat om te beginnen, net op tijd om te herijken. Zo kom je het najaar door zonder gedoe.",
    sections: [
      {
        paragraphs: [
          "Het najaar is in de techniek het seizoen van opleveringen, storingspieken en ‘kun jij nog twee maanden bijspringen?’. Precies dan stellen opdrachtgevers de scherpste vragen over je constructie. Wie dan pas zijn papierwerk op orde brengt, mist de klus.",
          "DBA-proof werken is geen modelovereenkomst printen en in een la leggen. Het is de echte werkwijze op de bouwplaats of in het projectteam naast de wet leggen — en durven te zeggen: deze opdracht past niet bij ZZP.",
        ],
      },
      {
        heading: "Drie toetsstenen, geen checklist-theater",
        paragraphs: [
          "De Belastingdienst kijkt naar gezag, inbedding en ondernemerschap. Opdrachtgevers vertalen dat naar hun eigen vragen. Als jij die vragen niet voor bent, vult iemand anders het antwoord in.",
        ],
        bullets: [
          "Gezag: wie bepaalt hoe, wanneer en met wie jij werkt? De uitvoerder of jij?",
          "Inbedding: draag je hun helm, hun pas, hun rooster, hun toolbox? Dan lijk je op een werknemer.",
          "Ondernemerschap: meerdere opdrachtgevers, eigen acquisitie, eigen tools, eigen risico bij fouten.",
        ],
      },
      {
        heading: "Wat ‘goed papier’ wél en níet redt",
        paragraphs: [
          "Een overeenkomst van opdracht helpt als de praktijk ermee klopt. Helpt niet als je om 06:45 in hun bus stapt, hun werkkleding draagt en om 15:30 hun planning volgt. Feiten wegen zwaarder dan kopjes.",
          "Hetzelfde geldt voor een bv. Een bv is geen vrijbrief. De inspecteur kijkt naar de mens op de klus, niet naar de KvK-inschrijving.",
        ],
      },
      {
        heading: "Vier acties voor september",
        paragraphs: [
          "Dit is het minimum om het najaar in te gaan zonder dat inkoop je belt met ‘we zetten alles on hold’.",
        ],
        bullets: [
          "Loop elk contract na: einddatum, tarief, vervanging, aansprakelijkheid.",
          "Zet je urenregistratie op orde — per opdracht, niet in één bak.",
          "Vraag een schriftelijk advies voor opdrachten langer dan drie maanden of met dagelijkse sturing.",
          "Bespreek met de opdrachtgever nu al het alternatief: detachering via Conex, zodat de klus niet stilvalt.",
        ],
      },
      {
        heading: "Als ZZP niet past",
        paragraphs: [
          "Dan zetten wij detachering neer. Jij houdt invloed op tarief en voorwaarden. Wij zijn juridisch werkgever. De opdrachtgever huurt in zonder loonheffingen-risico. Jij blijft op dezelfde klus.",
          "Dat is geen degradatie. Dat is het verschil tussen doorwerken en twee weken bellen of de factuur nog wel mag.",
        ],
      },
    ],
  },
  {
    slug: "vijf-vragen-opdrachtgever",
    title: "Wat mag een opdrachtgever jou vragen? Vijf vragen — en hoe je ze rustig beantwoordt",
    date: "28 juli 2025",
    category: "Praktijk",
    minutes: 10,
    cover: media("branche-installatie.jpg"),
    excerpt:
      "Opdrachtgevers checken strenger. Dit mag je verwachten, dit hoef je niet te slikken, en zo formuleer je het.",
    sections: [
      {
        paragraphs: [
          "Sinds de handhaving is terug, krijgt bijna elke technische ZZP’er dezelfde mail: ‘Mag ik je KvK, je VCA, je verzekeringspolis en een toelichting op je zelfstandigheid?’ Dat voelt als een sollicitatie. Het is het niet. Het is inkoop die haar eigen risico afdekt.",
          "Je hoeft niet alles te beantwoorden alsof je verdachte bent. Je hoeft ook niet te weigeren uit principe. Hier zijn de vijf vragen die we het vaakst zien — met een antwoord dat klopt én de klus openhoudt.",
        ],
      },
      {
        heading: "1. Heb je meerdere opdrachtgevers?",
        paragraphs: [
          "Eerlijk antwoorden. Eén langdurige opdracht is niet verboden, maar het is een oranje sein. Zeg hoeveel opdrachtgevers je dit jaar had, en of deze klus een piek is of je enige broodwinning. Als het de enige is, zeg dat je openstaat voor een andere constructie als de duur oploopt. Dat komt serieuzer over dan ‘ja ja, ik heb er meer’ terwijl dat niet zo is.",
        ],
      },
      {
        heading: "2. Wie bepaalt hoe je werkt?",
        paragraphs: [
          "Als de uitvoerder jouw dag indelt, de volgorde van de woningen bepaalt en je naar de toolbox stuurt, is dat gezag. Ontken dat niet. Zeg: ‘Op het resultaat stuur ik zelf; de planning van de bouwplaats respecteer ik.’ Als die zin niet waar is, past ZZP niet. Dan is detachering het schone antwoord — niet een creatieve formulering.",
        ],
      },
      {
        heading: "3. Breng je eigen gereedschap en verzekering mee?",
        paragraphs: [
          "Eigen gereedschap, eigen bus, eigen AVB: dat ondersteunt ondernemerschap. Het maakt een loondienstrelatie niet ongedaan als de rest naar werknemer ruikt. Stuur polissen mee, noem de dekking, en stop daar. Geen roman.",
        ],
      },
      {
        heading: "4. Mag je je laten vervangen?",
        paragraphs: [
          "Op papier mag het bijna altijd. In de praktijk: alleen als jij écht iemand uit je netwerk kunt sturen die het vak aankan. Als vervanging alleen in artikel 12 staat en de uitvoerder ‘jou’ wil, telt het niet. Wees precies. ‘Ik heb twee vakmensen die kunnen overnemen bij ziekte’ is beter dan ‘uiteraard, zie contract’.",
        ],
      },
      {
        heading: "5. Hoe factureer je — eenmanszaak of bv?",
        paragraphs: [
          "De rechtsvorm is relevant voor aansprakelijkheid, niet voor de DBA-toets. Een bv is geen vrijbrief. Zeg welke entiteit factureert, wat je btw-status is, en dat je g-rekening of ketenaansprakelijkheid kunt ondersteunen als de opdrachtgever dat eist. Daarna: de feiten op de werkvloer wegen zwaarder. Dat zinnetje hoort erbij.",
        ],
      },
      {
        heading: "Wat je níet hoeft te geven",
        paragraphs: [
          "Je privéadres op een bouwplaatslijst voor iedereen, je BSN aan een willekeurige voorman, of een ‘verklaring dat je nooit werknemer bent’. BSN gaat via de wettelijke kanalen. Inhoudelijke DBA-oordelen laat je schriftelijk door iemand geven die ervoor tekent — niet door jezelf in een WhatsApp.",
          "Twijfel je over een vragenlijst van zes pagina’s? Stuur hem door. Wij zeggen welke velden terecht zijn en welke overvragen.",
        ],
      },
    ],
  },
  {
    slug: "dba-check-drie-stappen",
    title: "DBA-check in drie stappen: zelfstandig én uitlegbaar, vóór je tekent",
    date: "4 juni 2025",
    category: "Wet DBA",
    minutes: 9,
    cover: media("branche-techniek.jpg"),
    excerpt:
      "Een korte check voor je een opdracht aanneemt. Drie stappen, geen juridisch proza, wél een besluit.",
    sections: [
      {
        paragraphs: [
          "De meeste gedoe ontstaat niet tijdens de klus, maar bij het tekenen. Iemand belt: ‘Kun je maandag?’ Je zegt ja. Twee weken later wil inkoop alsnog een DBA-formulier en blijkt de uitvoerder je in het rooster te hebben gezet als ‘inhuur, sturing bij ons’.",
          "Doe deze check in twintig minuten. Twijfel je na stap 2? Start niet als ZZP.",
        ],
      },
      {
        heading: "Stap 1 — De opdracht",
        paragraphs: [
          "Wat is het resultaat? Wat is de duur? Wie is verantwoordelijk als het misgaat? Een klus van drie weken met een duidelijk oplevermoment ruikt naar aanneming van werk. Een open einde van acht maanden ‘meedraaien in het team’ ruikt naar arbeidsovereenkomst.",
          "Schrijf in één zin op wat je levert. Als je die zin niet kunt schrijven zonder ‘beschikbaar zijn’, is ZZP al wankel.",
        ],
        bullets: [
          "Duur korter dan drie maanden en duidelijk einde: groener.",
          "Onbepaalde verlenging, ‘we zien wel’: oranje tot rood.",
          "Boetes, herstelplicht, eigen materiaal: past bij ondernemerschap.",
        ],
      },
      {
        heading: "Stap 2 — Gezag",
        paragraphs: [
          "Wie plant, wie instrueert, wie beoordeelt? Hoe meer de opdrachtgever dat doet, hoe minder ZZP past. In de techniek is dit de valkuil: de bouwplaats heeft een uitvoerder, en die uitvoerder heeft een beláng bij sturing. Begrijpelijk. Niet verenigbaar met zuiver opdrachtnemerschap.",
          "Vraag hardop: ‘Wie bepaalt morgen om 07:00 waar ik sta?’ Als het antwoord ‘onze uitvoerder’ is, kies detachering.",
        ],
      },
      {
        heading: "Stap 3 — Ondernemerschap",
        paragraphs: [
          "Tel de feiten, niet de wens. Meerdere opdrachtgevers dit jaar. Eigen acquisitie. Eigen tools. Eigen risico. Eigen verzekering. Je eigen bus. Als drie van de vijf ontbreken, is het verhaal te dun — ook al voel jij je ondernemer.",
        ],
      },
      {
        heading: "Het besluit",
        paragraphs: [
          "Groen op alle drie: ZZP, contract scherp, starten. Oranje op gezag of duur: wij toetsen schriftelijk. Rood op gezag: detachering of uitzenden, dezelfde maandag, zelfde helm, schoon voor iedereen.",
          "Dat besluit nemen we met je. Niet nádat de factuur is afgewezen.",
        ],
      },
    ],
  },
  {
    slug: "schijnzelfstandigheid-wet-dba",
    title: "Zelfstandig of loondienst? Zo voorkom je schijnzelfstandigheid in de techniek",
    date: "18 januari 2025",
    category: "Wet DBA",
    minutes: 13,
    cover: media("branche-bouw.jpg"),
    excerpt:
      "Handhaving is terug. Wat dat betekent voor monteur, engineer en projectleider — en hoe je naheffing voorkomt.",
    sections: [
      {
        paragraphs: [
          "Schijnzelfstandigheid ontstaat als je werkt als werknemer, maar wordt ingekocht als ondernemer. De Belastingdienst kijkt naar de praktijk: gezag, inbedding, ondernemersrisico. Niet naar hoe jullie het zelf noemen.",
          "In de techniek gebeurt dat snel. Helm van de aannemer. Pasje van de aannemer. Toolbox om 07:00. Rooster van de uitvoerder. Zelfde kantine, dezelfde bus, dezelfde app-groep. Op papier ZZP. In de feiten: een uitzendkracht zonder vangnet.",
        ],
      },
      {
        heading: "Waarom de techniek kwetsbaar is",
        paragraphs: [
          "Bouw- en installatieprojecten draaien op sturing. Veiligheid eist dat iemand de plaats leidt. Ketens zijn lang: opdrachtgever, hoofdaannemer, onderaannemer, inhuur. Elke schakel duwt het risico naar de volgende. Aan het eind van die keten sta jij, met een eenmanszaak en een factuur van 65 euro per uur.",
          "Dat model werkte toen handhaving stil lag. Dat model kraakt nu. Opdrachtgevers hebben brieven gehad. Accountants hebben memo’s geschreven. Inkoop heeft een nieuw formulier.",
        ],
      },
      {
        heading: "Wat de inspecteur wél en niet gelooft",
        paragraphs: [
          "Gelooft: meerdere opdrachtgevers, eigen materieel, resultaatverplichting, vervanging die ooit écht is gebeurd, commerciële onderhandeling over tarief.",
          "Gelooft niet: een modelovereenkomst die niemand heeft gelezen, een bv zonder andere klanten, ‘ik mag me laten vervangen’ terwijl de uitvoerder alleen jou wil, een uurtarief dat in feite een maandloon is.",
        ],
      },
      {
        heading: "Gevolgen als het mis is",
        paragraphs: [
          "Voor de opdrachtgever: naheffing loonheffingen, boete, gedoe met de keten. Voor jou: discussie over premies, soms terugvordering, altijd een opdracht die stopt. Voorkomen is goedkoper dan herstellen. Herstellen doe je niet ‘even tussendoor’ terwijl de woning op oplevering staat.",
        ],
      },
      {
        heading: "De schone route",
        paragraphs: [
          "Conex toetst opdrachten vooraf. Past ZZP, dan ZZP — met een contract dat de praktijk volgt. Past ZZP niet, dan detachering: jij in dienst bij ons, uitgeleend onder leiding van de opdrachtgever, risico bij ons. Jij houdt invloed op tarief. De opdrachtgever kan uitleggen waarom dit geen schijnzelfstandigheid is.",
          "Dat is geen ideologie. Dat is vakmensen aan het werk houden zonder dat iemand de regels hoeft te rekken.",
        ],
      },
    ],
  },
  {
    slug: "van-zzp-naar-flexibel",
    title: "Van ZZP’er naar flexibel dienstverband: je opties op een rij",
    date: "2 maart 2025",
    category: "Werkvormen",
    minutes: 10,
    cover: media("branche-installatie.jpg"),
    excerpt:
      "Niet elke opdracht past bij zelfstandigheid. Detachering, uitzenden of vast: wat het je kost en wat het je oplevert.",
    sections: [
      {
        paragraphs: [
          "Er is een mythe dat ‘terug naar loondienst’ een nederlaag is. In de techniek is het vaak het omgekeerde: je kiest de vorm die de klus toelaat, zodat je kunt blijven doen waar je goed in bent. De vorm is gereedschap. Niet je identiteit.",
          "Hier zijn de drie schone opties, met wat je wint en wat je inlevert.",
        ],
      },
      {
        heading: "Optie 1 — Detachering",
        paragraphs: [
          "Jij komt in dienst bij Conex. Wij lenen je uit voor een afgesproken periode. De opdrachtgever heeft leiding en toezicht. Jij hebt loon, vakantiedagen, loondoorbetaling bij ziekte, pensioenopbouw waar dat hoort. En — belangrijk — invloed op het tarief dat wij met de opdrachtgever afspreken, omdat jij het vak inbrengt.",
          "Past bij: langere klussen, projecten met sturing op de bouwplaats, opdrachtgevers die geen ZZP meer inkopen. Past niet bij: de ondernemer die per se vijf opdrachtgevers en eigen acquisitie wil houden. Die blijft ZZP, op opdrachten die dat toelaten.",
        ],
      },
      {
        heading: "Optie 2 — Uitzenden",
        paragraphs: [
          "Snel inzetten, flexibel in uren, administratie en ziekterisico bij ons. Minder regie op de lange lijn, wél zekerheid van uitbetaling. Past bij pieken, ziektevervanging, ‘we hebben maandag vier man nodig’.",
        ],
      },
      {
        heading: "Optie 3 — Werving & selectie",
        paragraphs: [
          "Een vaste rol bij de opdrachtgever. Jij wordt hun werknemer. Wij zoeken, toetsen, presenteren. De opdrachtgever betaalt bij plaatsing. Past als je klaar bent met wisselen van helm en een team wilt waar je blijft.",
        ],
      },
      {
        heading: "Hoe je kiest",
        paragraphs: [
          "Vier vragen: hoe lang duurt de klus écht? Wie plant je dag? Wat heeft je gezin nodig bij ziekte? Wat eist de opdrachtgever intern? Het antwoord op die vier is het advies. Geen brochure, geen push naar de vorm die voor ons het meest oplevert.",
          "In één gesprek zetten we het op een rij. Daarna kies jij.",
        ],
      },
    ],
  },
  {
    slug: "als-zzp-niet-meer-mag",
    title: "De opdrachtgever huurt geen ZZP meer in — en nu?",
    date: "11 maart 2025",
    category: "Werkvormen",
    minutes: 9,
    cover: media("branche-bouw.jpg"),
    excerpt:
      "Steeds vaker: ‘we huren geen ZZP meer in.’ Het werk stopt niet. De vorm verandert. Zo houd je de klus.",
    sections: [
      {
        paragraphs: [
          "De mail komt meestal op donderdag: ‘Vanuit compliance kunnen wij ZZP niet meer inzetten op dit project. De opdracht stopt per vrijdag. Sorry.’ Geen ruzie, geen verwijt. Beleid. En jij zit met een lege volgende week.",
          "Paniek is nergens voor nodig. De vraag naar vakmensen in installatie, elektro en WTB is er nog. Wat ontbreekt is een vorm die de opdrachtgever mag tekenen.",
        ],
      },
      {
        heading: "Vraag waarom — precies",
        paragraphs: [
          "Is het concernbeleid, een audit, of één jurist die alles op slot zet? Is het deze vestiging of landelijk? Is het deze rol (meedraaien in het team) of alle inhuur? Het antwoord bepaalt of ZZP op een andere klus wél mag, of dat je voor deze opdrachtgever überhaupt alleen nog via loondienst kunt.",
        ],
      },
      {
        heading: "Bied het alternatief aan, niet je cv opnieuw",
        paragraphs: [
          "De opdrachtgever heeft geen tekort aan cv’s. Hij heeft een tekort aan een constructie die door de audit komt. Detachering via Conex is voor veel opdrachtgevers acceptabel omdat het loonheffingen-risico bij ons ligt, de medewerker onder hun leiding werkt, en de keten documenteerbaar is.",
          "Zeg: ‘Ik blijf, via Conex, dezelfde maandag, zelfde tariekindicatie, jullie hebben een inleenovereenkomst in plaats van een overeenkomst van opdracht.’ Dat is een oplossing. ‘Ik ben wél écht zelfstandig hoor’ is een discussie.",
        ],
      },
      {
        heading: "Wat jij behoudt",
        paragraphs: [
          "De klus. Het team. De regio. Inkomen. Wat verandert: wie je werkgever is, hoe je wordt uitbetaald, en dat ziekte niet meteen een omzetgat is. Wat niet verandert: je vak.",
          "Wij regelen de overstap zo dat de uitvoerder er niks van merkt, behalve dat inkoop ophoudt met zeuren.",
        ],
      },
    ],
  },
  {
    slug: "netwerk-techniek-almere",
    title: "Samen sterker: hoe het Conex-netwerk in de techniek matcht",
    date: "20 mei 2025",
    category: "Praktijk",
    minutes: 8,
    cover: media("hero.jpg"),
    excerpt:
      "Honderden plaatsingen verder. Wat we daarvan geleerd hebben over matchen in bouw, installatie en industrie.",
    sections: [
      {
        paragraphs: [
          "Een goede match is geen cv-scan. Het is luisteren naar hoe iemand wil werken — en naar wat een uitvoerder écht nodig heeft op maandagochtend. Die twee gesprekken duren langer dan een algoritme. Ze leveren minder mismatches op.",
          "Daarom bellen we. Daarom kennen we de regio. Daarom zitten we in Almere, niet achter een landelijk belcentrum dat ‘Flevoland’ als filter heeft.",
        ],
      },
      {
        heading: "Wat we hebben geleerd",
        paragraphs: [
          "Ten eerste: tarief is zelden het breekpunt. Sturing, reistijd en ‘word ik als vakman gezien of als extra paar handen’ wel. Ten tweede: opdrachtgevers onthouden de vorige inhuur. Als die te laat kwam of de VCA niet bij zich had, is de lat voor de volgende hoger. Ten derde: mensen blijven langer als de eerste week klopt. Introductie is geen extraatje.",
        ],
        bullets: [
          "We spreken kandidaten persoonlijk vóór we voorstellen.",
          "We checken diploma, VCA en referenties — niet ná de start.",
          "We hebben een vast gezicht per opdrachtgever, geen ticketing-systeem.",
        ],
      },
      {
        heading: "Het netwerk nu",
        paragraphs: [
          "Monteurs elektro en WTB, werkvoorbereiders, calculators, uitvoerders, projectleiders, service-technici klimaat. Opdrachtgevers die terugkomen omdat het de vorige keer klopte. Dat is het kapitaal. Niet een database van tienduizend namen waar nooit iemand mee praat.",
        ],
      },
      {
        heading: "Wil je erin?",
        paragraphs: [
          "Schrijf je in of bel. We hoeven geen roman. Vak, regio, of je ZZP, detachering of vast zoekt, en wanneer je kunt starten. De rest doen we in een gesprek.",
        ],
      },
    ],
  },
  {
    slug: "nieuwe-wetgeving-zelfstandigen",
    title: "Nieuwe wetgeving voor zelfstandigen: waar let je nú op?",
    date: "9 april 2025",
    category: "Wetgeving",
    minutes: 11,
    cover: media("branche-techniek.jpg"),
    excerpt:
      "Handhaving, verzekeringen, discussie over minimumtarief. Je hoeft geen jurist te zijn. Wel deze drie dingen weten.",
    sections: [
      {
        paragraphs: [
          "De arbeidsmarkt voor zelfstandigen blijft schuiven. Handhaving op de Wet DBA is terug. Er wordt gepraat over een verplichte arbeidsongeschiktheidsverzekering. Periodiek duikt een minimumtarief op. Geen van die dossiers is ‘af’. Allemaal beïnvloeden ze hoe opdrachtgevers inkopen.",
          "Jij hoeft de memorie van toelichting niet te lezen. Wel: weten welke constructie je nu hebt, en of die nog past als de regels strakker worden.",
        ],
      },
      {
        heading: "Handhaving: het is geen oefening meer",
        paragraphs: [
          "De periode van ‘we kijken mee maar we bekeuren niet’ is voorbij. Opdrachtgevers gedragen zich daarnaar. Dat merkt je in de vragenlijst, in de weigering van langdurige ZZP-inhuur, in de voorkeur voor intermediairs die het risico dragen.",
          "Praktisch: elke nieuwe opdracht toetsen. Elke verlenging opnieuw. Niet omdat de wet elke maand verandert, omdat de feiten van de klus veranderen.",
        ],
      },
      {
        heading: "Verzekeringen: wacht niet op de plicht",
        paragraphs: [
          "Of AOV verplicht wordt of niet: twee maanden rug is twee maanden zonder omzet. In de techniek is dat geen hypothese. Regel een dekking die je gezin overeind houdt. Wij wijzen je naar specialisten; we verkopen zelf geen polissen.",
        ],
      },
      {
        heading: "Minimumtarief en ‘echte zelfstandigen’",
        paragraphs: [
          "Politiek komt en gaat. Wat blijft: opdrachtgevers gebruiken lage tarieven als argument dat iemand geen ondernemer is. Als jouw uurtarief in de praktijk een vermomd maandloon is, heb je een probleem — wet of geen wet. Reken je tarief vanuit kosten, risico, lege weken en materieel. Niet vanuit ‘wat de vorige ZZP’er deed’.",
        ],
      },
      {
        heading: "Wat wij doen",
        paragraphs: [
          "Wij vertalen wetsvoorstellen naar jouw opdrachten. Geen hoorcollege. Een concreet advies: doorgaan, aanpassen of overstappen. Als de vorm moet wijzigen, regelen we de overstap zodat de uitvoerder zijn man niet kwijt is.",
        ],
      },
    ],
  },
  {
    slug: "tarieven-techniek-2026",
    title: "Tarieven in de techniek 2026: wat is reëel voor monteur, engineer en uitvoerder?",
    date: "14 januari 2026",
    category: "Praktijk",
    minutes: 10,
    cover: media("branche-techniek.jpg"),
    excerpt:
      "Geen landelijke mythes. Wat we in Almere, Utrecht en Amsterdam zien — en hoe je niet onder je niveau zakt.",
    sections: [
      {
        paragraphs: [
          "Tariefgesprekken lopen scheef als iemand een Facebook-groep als waarheid neemt. ‘Ik hoor 85 euro’ is geen onderbouwing. Kosten, schaarste, diploma, regio en of je ’s nachts storingen doet: dat is een onderbouwing.",
          "Hier is hoe wij het in 2026 met kandidaten en opdrachtgevers bespreken. Geen garantie, wél een ijkpunt.",
        ],
      },
      {
        heading: "Wat de bandbreedte bepaalt",
        paragraphs: [
          "Vakrichting (elektro, WTB, klimaat, uitvoering). Niveau (monteur, first engineer, projectleider). Certificaten (VCA-VOL, NEN, f-gassen, hoogspanning). Regio en reistijd. Beschikbaarheid. En de werkvorm: ZZP-tarief is iets anders dan detacheringsmaandloon. Die twee door elkaar halen is de snelste weg naar een ruzie.",
        ],
      },
      {
        heading: "ZZP versus loon — reken terug",
        paragraphs: [
          "Een ZZP-tarief moet vakantie, ziekte, acquisitie, verzekering, bus, gereedschap en lege weken dragen. Wie 55 euro factureert ‘omdat hij in loondienst 4.200 kreeg’ rekent zich arm. Reken terug: welke omzet heb je nodig om netto hetzelfde over te houden, plus buffer? Als het tarief dat niet haalt, is ZZP voor díe klus geen vrijheid. Het is korting.",
        ],
      },
      {
        heading: "Hoe wij onderhandelen",
        paragraphs: [
          "Niet maximaliseren tot de opdrachtgever afhaakt. Wél: jouw ondergrens kennen, de markt kennen, en een bandbreedte afspreken die bij de rol past. Opdrachtgevers respecteren een vakman die zijn prijs kan uitleggen. Ze respecteren geen bluffen.",
          "In het adviesgesprek zetten we jouw ondergrens op papier. Daarna praten we met de opdrachtgever. Jij wordt niet verrast door een tarief in een contract dat je niet hebt gezien.",
        ],
      },
    ],
  },
  {
    slug: "g-rekening-nen-opdrachtgever",
    title: "G-rekening, NEN en inlenersaansprakelijkheid: wat opdrachtgevers van je eisen",
    date: "3 februari 2026",
    category: "Opdrachtgevers",
    minutes: 12,
    cover: media("branche-bouw.jpg"),
    excerpt:
      "Niet sexy, wél de reden dat inkoop ja of nee zegt. Zo zorg je dat de keten klopt.",
    sections: [
      {
        paragraphs: [
          "Opdrachtgevers in bouw en installatie worden aangesproken op de keten. Als ergens in die keten premies of loonheffingen niet zijn afgedragen, kan de inlener meebetalen. Vandaar g-rekening, NEN-achtige eisen, SNA, verklaringen van de Belastingdienst. Vandaar dat ‘we kennen hem, hij is goed’ niet meer genoeg is.",
          "Dit artikel is voor opdrachtgevers die schoon willen inlenen — en voor vakmensen die begrijpen waarom ze ineens om papieren worden gevraagd.",
        ],
      },
      {
        heading: "Wat de g-rekening doet",
        paragraphs: [
          "Een geblokkeerde rekening waar de opdrachtgever een deel van de factuur op stort, bedoeld voor loonheffingen en btw. Het verlaagt het risico van de inlener. Het is geen verdenking van jou. Het is standaard in de keten. Wie weigert ‘omdat hij dat niet nodig heeft’, valt af bij serieuze aannemers.",
        ],
      },
      {
        heading: "Wat NEN en SNA betekenen in de praktijk",
        paragraphs: [
          "Het gaat om aantoonbaar correcte administratie van identiteit, loon, premies, vreemdelingenrecht waar van toepassing. Voor Conex als intermediair is dat ons werk. Voor de ZZP’er: identiteit, KvK, btw, verzekering, VCA. Voor de opdrachtgever: controleren dat je niet inleent bij iemand die dit niet op orde heeft.",
        ],
        bullets: [
          "Vraag je intermediair naar de verklaring betalingsgedrag en de inschrijvingen.",
          "Bewaar VCA en diploma’s actueel — verlopen papieren stoppen de poort.",
          "Leg vast wie de inlener is, wie de werkgever is, wie factureert.",
        ],
      },
      {
        heading: "Inlenersaansprakelijkheid kort",
        paragraphs: [
          "De inlener kan aansprakelijk zijn voor loonheffingen van de uitlener. Daarom willen opdrachtgevers een partij die dat risico draagt en kan laten zien. Detachering of uitzenden via ons is voor hen vaak de schoonste weg. ZZP blijft mogelijk als de opdracht dat toelaat — met extra vragen.",
        ],
      },
      {
        heading: "Wat wij afdekken",
        paragraphs: [
          "Wij werken met een nette administratie, VCA-screening, en ondersteuning bij g-rekening en audits. Opdrachtgevers hoeven de keten niet zelf te reconstrueren. Vakmensen hoeven geen fiscalist te worden. Iedereen houdt zijn rol.",
        ],
      },
    ],
  },
  {
    slug: "eerste-werkdag-detachering",
    title: "De eerste werkdag bij detachering: wat jij, wij en de opdrachtgever doen",
    date: "21 maart 2026",
    category: "Praktijk",
    minutes: 8,
    cover: media("branche-installatie.jpg"),
    excerpt:
      "De meeste mismatches sterven in week één. Dit is onze startprocedure — saai, en daarom effectief.",
    sections: [
      {
        paragraphs: [
          "Een plaatsing is geslaagd als iemand op dag drie nog weet waar de kantine is, wie de uitvoerder is, en of zijn pas werkt. Dat klinkt triviaal. Het is de reden dat mensen blijven of de tweede maandag niet meer komen.",
          "Bij detachering is de keten langer: jij, Conex, opdrachtgever. Als niemand de introductie agendeert, agendeert niemand haar. Daarom doen wij het wel.",
        ],
      },
      {
        heading: "De dag ervoor",
        paragraphs: [
          "Je weet het adres, de starttijd, de contactpersoon op de vloer, wat je mee moet (VCA, schoenen, eigen tools of niet), en hoe je je meldt. Wij hebben de opdrachtgever gevraagd naar parkeren, poort, kleding, PBM. Jij hoeft dat niet zelf uit te zoeken via LinkedIn.",
        ],
      },
      {
        heading: "De ochtend zelf",
        paragraphs: [
          "Wij checken of je er bent. Niet als controlfreak, als vangnet. Als de poort dicht is of de uitvoerder ziek, moeten wij dat als eerste weten — niet jij na drie kwartier wachten. De opdrachtgever zorgt voor introductie op de werkvloer. Wij blijven bereikbaar.",
        ],
      },
      {
        heading: "Na drie dagen",
        paragraphs: [
          "Kort gesprek: klopt de rol, klopt de sturing, klopt het gereedschap, is er iets dat we moeten bijsturen? Kleine ergernissen op dag drie zijn opzeggingen in week zes. Liever nu.",
        ],
      },
      {
        heading: "Wat we niet doen",
        paragraphs: [
          "Je dumpen met een WhatsApp-locatie. ‘Bel maar als er iets is’ zonder dat wij zelf bellen. Papieren die pas op dag vier compleet zijn. Dat is hoe je een netwerk afbreekt.",
        ],
      },
    ],
  },
  {
    slug: "vca-diploma-screening",
    title: "VCA, diploma’s en referenties: hoe screening in de techniek écht werkt",
    date: "8 april 2026",
    category: "Opdrachtgevers",
    minutes: 9,
    cover: media("branche-bouw.jpg"),
    excerpt:
      "Opdrachtgevers willen zekerheid vóór de poort. Kandidaten willen geen circus. Dit is het midden.",
    sections: [
      {
        paragraphs: [
          "Een uitvoerder heeft geen tijd voor verrassingen bij de poort. Een vakman heeft geen zin om vijf keer hetzelfde diploma te mailen. Screening is het compromis: één keer goed, daarna beschikbaar voor de volgende klus.",
        ],
      },
      {
        heading: "Wat we standaard vragen",
        paragraphs: [
          "Identiteit. VCA (basis of VOL, geldig). Vakdiploma’s die bij de rol horen. Recente referenties die we mogen bellen. Rijbewijs als de rol dat eist. Voor bepaalde installaties: NEN, f-gassen, hoogspanning — alleen als de klus dat nodig heeft. Geen collectie ‘voor de zekerheid’.",
        ],
      },
      {
        heading: "Wat we met referenties doen",
        paragraphs: [
          "We bellen. We vragen naar stiptheid, zelfstandigheid, hoe iemand is in een team, en of ze hem terug zouden huren. We nemen ‘prima vent’ niet als antwoord. We nemen ook geen anonieme LinkedIn-recensie.",
        ],
      },
      {
        heading: "Wat opdrachtgevers terugkrijgen",
        paragraphs: [
          "Geen cv over de schutting. Een voorstel van iemand die we hebben gesproken, wiens papieren kloppen, en van wie een referent niet wegliep. Als we twijfelen, stellen we niet voor. Liever een gat van drie dagen dan een mismatch van drie weken.",
        ],
      },
      {
        heading: "Voor kandidaten",
        paragraphs: [
          "Houd VCA geldig. Fotografeer diploma’s een keer goed. Geef referenten een seintje dat we kunnen bellen. Dat scheelt een week. En ja: verlopen VCA is de nummer één reden dat een start een week opschuift. Saai. Waar.",
        ],
      },
    ],
  },
  {
    slug: "piek-bouw-flex",
    title: "Piek op de bouw: wanneer uitzenden, wanneer detacheren, wanneer vast?",
    date: "19 mei 2026",
    category: "Opdrachtgevers",
    minutes: 10,
    cover: media("branche-bouw.jpg"),
    excerpt:
      "Opleverdruk, ziekte, een fase die uitloopt. De verkeerde werkvorm kost meer dan het tariefverschil.",
    sections: [
      {
        paragraphs: [
          "Opdrachtgevers bellen ons het vaakst als het al schuurt: de oplevering schuift, twee man ziek, de onderaannemer levert niet. Dan is de vraag ‘stuur mensen’. De betere vraag is: voor hoe lang, onder wiens leiding, en wat mag er niet misgaan in de keten?",
        ],
      },
      {
        heading: "Uitzenden — de piek",
        paragraphs: [
          "Tijdelijk, uren flexibel, je betaalt gewerkte uren, ziekterisico bij ons. Past als de behoefte weken is, niet seizoenen, en de mensen in jouw ritme meedraaien. Niet past: een sleutelrol van negen maanden ‘even via uitzend, dan zien we wel’. Dat wordt gedoe.",
        ],
      },
      {
        heading: "Detacheren — de fase",
        paragraphs: [
          "Afgesproken periode, duidelijk einde, medewerker in dienst bij ons, onder jouw leiding. Past bij een projectfase, een vervanging van een uitvoerder, een engineer die het ontwerp door de uitvoering moet trekken. De medewerker kan niet zomaar weglopen. Jij kunt uitleggen waarom dit geen ZZP is.",
        ],
      },
      {
        heading: "Werving & selectie — de structurele stoel",
        paragraphs: [
          "Als de stoel blijft, is inhuur een dure gewoonte. Wij zoeken de vaste kracht. Je betaalt bij plaatsing. Duurt langer dan een belletje op donderdag. Scheelt je over een jaar drie rotaties.",
        ],
      },
      {
        heading: "ZZP — alleen als de opdracht het toelaat",
        paragraphs: [
          "Resultaat, eigen ondernemerschap, geen dagelijkse sturing als werknemer. In de piek van een woningbouwcasco is dat zelden het geval. Op een afgebakend engineeringsstuk vaker. Wij toetsen. We duwen niemand in ZZP om een factuur te kunnen sturen.",
        ],
      },
      {
        heading: "Bel ons vóór de piek",
        paragraphs: [
          "Als je in week 12 al ziet dat week 18 krap wordt, kunnen we screenen. Als je vrijdag om 16:00 belt voor maandag, doen we wat kan — met minder keuze. Planning is goedkoper dan paniek.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function relatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  const rest = ARTICLES.filter((a) => a.slug !== slug);
  const same = rest.filter((a) => a.category === current?.category);
  const other = rest.filter((a) => a.category !== current?.category);
  return [...same, ...other].slice(0, limit);
}
