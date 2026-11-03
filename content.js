/* ============================================================================
   CONTENT.JS  —  DIT IS HET ENIGE BESTAND DAT JE MOET AANPASSEN.
   Het staat in de hoofdmap (niet in /js) zodat je het meteen ziet.

   Alles wat je hier verandert, verandert automatisch op alle 5 pagina's.
   Je hoeft geen HTML of CSS aan te raken om tekst, links of projecten te
   wijzigen — dat gebeurt allemaal hier.

   Twee delen:
   - SITE      → je naam, intro, rollen/badges, contact en "Over mij"
   - PROJECTS  → al je projecten. Kopieer een blok om er eentje bij te maken.

   Regels om te onthouden:
   - Tekst tussen aanhalingstekens "zoals dit" mag je vrij aanpassen.
   - Een veld leeg laten ("" of []) → dat onderdeel verdwijnt gewoon op de site.
   - Na een wijziging: bestand opslaan, pagina in de browser verversen (F5).
   ============================================================================ */

window.SITE = {
  naam: "Annabel",
  volledigeNaam: "Annabel Smeulders", // staat naast het logo in de header
  logo: "assets/logo.png", // laat leeg ("") om alleen je naam te tonen
  kop: "DIGITAL DESIGNER &\nCREATIVE DEVELOPER", // \n = nieuwe regel
  intro:
    "Ik ben Annabel, student Experience Design aan Thomas More in Mechelen. Ik werk in Figma en Webflow, maar ik schrijf ook zelf de code: van websites en apps tot 3D-werelden en data-visualisaties.",

  // Kleine stickers/badges onder de intro op de startpagina. Zo veel als je wil, of laat leeg: []
  rollen: ["Experience Design student", "Design + code"],

  // Komt in Google en in de preview als je je link deelt (max. ~150 tekens)
  beschrijving:
    "Portfolio van Annabel, student Experience Design in Mechelen. Websites, apps, Unity en 3D, data-visualisatie en meer.",

  // TODO: vervang door je eigen gegevens
  email: "info@annabelsmeulders.be",
  links: [
    { label: "LinkedIn", url: "" }, // bv. "https://www.linkedin.com/in/jouwnaam"
    { label: "GitHub", url: "" },
    { label: "Instagram", url: "" },
  ],
  cv: "", // bv. "assets/cv-annabel.pdf"

  over: {
    foto: "assets/annabel-over-mij.jpg", // laat leeg ("") als je geen foto wil
    fotoAlt: "Annabel lachend buiten in de zon",
    tekst: [
      "Ik ben Annabel, student Experience Design aan Thomas More in Mechelen. Ik hou van projecten waar ontwerp en techniek samenkomen: iets bedenken, het uittekenen in Figma en het dan ook echt laten werken.",
      "Ik begon vanuit code en ben steeds meer naar design opgeschoven. Daardoor kan ik zelf bouwen wat ik ontwerp, in Webflow, Framer, React Native of gewoon met code.",
      "Wat ik het leukst vind, is iets maken voor echte mensen: een museumbezoeker die niet weet wat er komt, een school die haar leerlingen wil bereiken of iemand met een visuele beperking die gewoon een website wil gebruiken. Daarom begin ik graag bij de gebruiker en test ik zo vroeg mogelijk.",
    ],

    // "De persoon achter alles": wat je naast school doet.
    // Elk blok krijgt een titel, een of meer alinea's en (mag leeg) een foto.
    persoon: {
      titel: "De persoon achter alles",
      intro:
        "Naast school ben ik vooral bezig met mensen samenbrengen. Twee dingen nemen daarbij veel van mijn tijd in: Retabo en de kampen van Activak. Daar merk ik elke week dat een goed idee pas werkt als het ook georganiseerd raakt.",
      blokken: [
        {
          titel: "Praeses van Retabo",
          tekst: [
            "Retabo is een studentenvereniging in Mechelen. Ik ben er Praeses, en ik ben de eerste vrouwelijke Praeses van Retabo die twee jaar verkozen is.",
            "Als praeses van studentenvereniging Retabo ben ik verantwoordelijk voor de algemene leiding van de vereniging. Ik zorg ervoor dat het bestuur goed samenwerkt en dat iedereen weet wat er van hem of haar verwacht wordt. Daarnaast neem ik de administratie en de financiën op mij: ik houd het budget in de gaten, volg uitgaven en inkomsten op en zorg dat alles correct en transparant verloopt.",
            "Ik coördineer ook onze evenementen, van het eerste idee tot de uitvoering. Dat betekent plannen, taken verdelen, contact houden met leveranciers en partners, en bijsturen als er iets misloopt. Verder beheer ik onze sociale media, zodat leden en geïnteresseerden altijd op de hoogte zijn van wat er bij Retabo gebeurt. Kortom: ik ben het aanspreekpunt van de vereniging en zorg ervoor dat Retabo vlot draait, zowel achter de schermen als tijdens onze activiteiten.",
          ],
          foto: "assets/over/retabo.jpg",
          fotoAlt: "Annabel, derde van links met het geel-zwarte lint van Retabo, samen met drie andere studenten met hun verenigingslint voor campus De Ham in Mechelen.",
        },
        {
          titel: "Hoofdanimator bij Activak",
          tekst: [
            "Tijdens de vakanties ben ik hoofdanimator bij Activak. Ik bedenk activiteiten en spellen voor de kinderen, stuur het team animatoren aan en help mee met de planning van de kampen.",
            "Ook als er geen kampen zijn, ben ik ermee bezig. Ik zit in de werkgroep moniwerking: daar organiseren we doorheen het jaar activiteiten voor de animatoren zelf, zodat het team ook buiten de kampen een team blijft.",
          ],
          foto: "assets/over/activak.jpg",
          fotoAlt: "Annabel zwaait lachend vanuit een attractie in een pretpark, naast een kind wiens gezicht verborgen is achter een hartje.",
        },
      ],
    },
    // De eerste groepen zijn je hard skills (concrete tools en technieken).
    // "Soft skills" hieronder zijn vaardigheden, geen tools — pas de lijst
    // gerust aan naar wat echt bij jou past.
    vaardigheden: [
      { groep: "Design", items: ["Figma", "Framer", "Webflow", "Personas en user stories", "Prototypes testen"] },
      { groep: "Code", items: ["JavaScript", "React Native", "PHP", "Python", "C#", "D3.js"] },
      { groep: "3D en games", items: ["Unity", "three.js en WebXR", "Blender"] },
      { groep: "Soft skills", items: ["Leidinggeven", "Organiseren en plannen", "Communicatie", "Samenwerken", "Creatief probleemoplossen"] },
    ],
  },
};

/* --------------------------------------------------------------------------
   PROJECTEN
   Velden per project:
     slug        korte naam zonder spaties, komt in de link (project.html?p=slug)
     titel       naam van het project
     lijn        1 zin die uitlegt wat het is (staat ook in Google)
     categorie   lijst; bepaalt de filters op de projectenpagina
     jaar        bv. "2025-2026" (mag leeg)
     rol         wat jij deed (mag leeg)
     context     school, klant of vak (mag leeg)
     tools       lijst met tools
     team        lijst met namen van teamgenoten (mag leeg)
     kleur       blauw | roze | geel | mint | oranje (kleur van de cover)
     patroon     cirkels | blokken | strepen | golven | stippen | bogen
     cover       pad naar een echte afbeelding, bv. "assets/projecten/eko.jpg"
                 (zonder cover krijg je een getekende cover in de kleur hierboven)
     coverAlt    beschrijving van die afbeelding voor screenreaders
     opdracht    wat was de vraag? (tekst; lege regel = nieuwe alinea)
     aanpak      lijst van { titel, tekst }: wat heb je gedaan?
     video       embed-link, bv. "https://www.youtube.com/embed/XXXX"
     beelden     lijst van { src, alt, bijschrift }
     beeldenGroot  true = beelden onder elkaar op volle breedte (voor beelden met details)
     resultaat   wat is er uitgekomen? (tekst)
     leerpunten  lijst van zinnen
     links       lijst van { label, url }, bv. "Bekijk de site" of "Code op GitHub"
     uitgelicht  true = staat op de startpagina
     klein       true = komt onderaan in "Kleiner werk", zonder eigen pagina
     verborgen   true = staat nergens op de site (handig voor een concept)
   -------------------------------------------------------------------------- */

window.PROJECTS = [
  {
    slug: "club-coco",
    titel: "Club Coco",
    lijn: "Een website voor Club Coco, een nieuwe zaak in Kapellen met specialty coffee, ontbijt en lunch.",
    categorie: ["Websites"],
    jaar: "2026",
    rol: "", // TODO: wat deed je precies? bv. "Design en development"
    context: "Voor de nieuwe zaak van een vriendin in Kapellen",
    tools: [], // TODO: waarmee is de site gebouwd?
    kleur: "roze",
    patroon: "bogen",
    cover: "assets/projecten/club-coco.png",
    coverAlt: "Startpagina van de Club Coco-site: het lila logo op een achtergrond van koffiebonen, met de kop 'Specialty coffee, ontbijt en lunch' en de knoppen 'Kom langs' en 'Bekijk de kaart'.",
    uitgelicht: true,
    opdracht:
      "Club Coco is een nieuwe zaak in Kapellen, van een vriendin van mij, met specialty coffee, ontbijt en lunch. De website moet tonen wat ze doen en mensen goesting geven om langs te komen.",
    aanpak: [
      {
        titel: "De sfeer van de zaak",
        tekst:
          "De site neemt de kleuren en het logo van Club Coco over: lila, bordeaux en een ruitjesband die aan de tegels in de zaak doet denken.",
      },
      {
        titel: "De kaart op de site",
        tekst:
          "De volledige kaart staat op de site, met prijzen per categorie en een hartje bij de favorieten van het huis.",
      },
      {
        titel: "Ook op je gsm",
        tekst:
          "Op mobiel worden de foto's bij de kaart een rij om door te swipen, zodat de kaart zelf snel in beeld komt.",
      },
    ],
    beelden: [
      { src: "assets/projecten/club-coco-kaart.png", alt: "De kaart op desktop: drie foto's van ontbijt, koffie en huisgemaakte buns, met daaronder de eerste categorieën en prijzen.", bijschrift: "De kaart" },
      { src: "assets/projecten/club-coco-fotos.png", alt: "De fotopagina op desktop: een raster met foto's van de toog, het raam met schapenvachten en de kaart van Club Coco.", bijschrift: "Een kijkje binnen" },
      { src: "assets/projecten/club-coco-mobiel-home.png", alt: "De startpagina op een smartphone, met het logo en de knoppen 'Kom langs' en 'Bekijk de kaart'.", bijschrift: "Startpagina op mobiel" },
      { src: "assets/projecten/club-coco-mobiel-kaart.png", alt: "De kaart op een smartphone: een rij foto's om door te swipen, met daaronder de koffies en hun prijzen.", bijschrift: "De kaart op mobiel" },
      { src: "assets/projecten/club-coco-mobiel-fotos.png", alt: "De foto's op een smartphone: een grote foto van de toog met daaronder twee kleinere foto's naast elkaar.", bijschrift: "Foto's op mobiel" },
    ],
    links: [{ label: "Bekijk de site", url: "https://annabelxoxo.github.io/club-coco-website/" }],
  },

  {
    slug: "ikigai",
    titel: "IKIGAI",
    lijn: "Logo en branding voor IKIGAI, een startend sportswearmerk in Japanse stijl.",
    categorie: ["Branding"],
    jaar: "2026",
    rol: "Logo-ontwerp",
    context: "Voor een ondernemer die een sportswearmerk opricht",
    tools: [], // TODO: waarmee heb je de logo's gemaakt?
    kleur: "roze",
    patroon: "cirkels",
    cover: "assets/projecten/ikigai.png",
    coverAlt: "Het logo van IKIGAI: een halve zon op een horizonlijn boven het woord IKIGAI, met Est. 2026 eronder, in gebroken wit op een bordeauxrode achtergrond.",
    opdracht:
      "Iemand die een sportswearmerk in Japanse stijl opricht, vroeg me om een logo. De naam IKIGAI (生き甲斐) betekent: een reden om op te staan.",
    aanpak: [
      {
        titel: "Het teken als beeldmerk",
        tekst:
          "In een aantal versies staat het Japanse teken centraal: 生 in een vierkant, een cirkel of een onderbroken ring, of de volledige naam 生き甲斐 als stempel.",
      },
      {
        titel: "Japans schrift en letterkeuze",
        tekst:
          "In andere versies test ik hoe ver het schrift kan gaan: verticaal gezet, 生き甲斐 of イキガイ als hoofdrol, van een fijne schreefletter tot een zware, sportieve letter.",
      },
      {
        titel: "Een eigen symbool",
        tekst:
          "Twee versies vertrekken niet vanuit het schrift: een opkomende zon boven een horizon, die aansluit bij de betekenis van de naam, en een losse i die ook als app-icoon werkt.",
      },
      {
        titel: "Een branding sheet per richting",
        tekst:
          "Per richting maakte ik een branding sheet met het primaire logo, een negatieve versie, een icoon, de kleuren en de typografie. Elke sheet toont ook een toepassing op kleding, zoals een neklabel, een borstprint of een borduursel op de mouw.",
      },
    ],
    beeldenGroot: true,
    beelden: [
      { src: "assets/projecten/ikigai-sheet-04.png", alt: "Branding sheet Opkomende zon: een halve zon op een horizonlijn boven IKIGAI, een negatieve versie, icoon, kleuren, typografie en neklabel.", bijschrift: "Sheet 04: Opkomende zon, de beste richting" },
      { src: "assets/projecten/ikigai-sheet-01.png", alt: "Branding sheet Serif + hanko: IKIGAI in Cormorant Garamond met 生 in een bordeaux vierkant, een negatieve versie, icoon, kleuren, typografie en neklabel.", bijschrift: "Sheet 01: Serif + hanko" },
      { src: "assets/projecten/ikigai-sheet-02.png", alt: "Branding sheet Enso: het teken 生 in een open ring boven IKIGAI in Jost Light, een negatieve versie, icoon, kleuren, typografie en neklabel.", bijschrift: "Sheet 02: Enso" },
      { src: "assets/projecten/ikigai-sheet-03.png", alt: "Branding sheet Verticaal label: IKIGAI letter onder letter in een marineblauw vlak, een negatieve versie met 生き甲斐, icoon, kleuren, typografie en zijlabel.", bijschrift: "Sheet 03: Verticaal label" },
      { src: "assets/projecten/ikigai-sheet-05.png", alt: "Branding sheet i-monogram: een losse i naast IKIGAI in Jost, een negatieve versie met de slogan Move with purpose, app-icoon, kleuren, typografie en borduursel op de mouw.", bijschrift: "Sheet 05: i-monogram" },
      { src: "assets/projecten/ikigai-sheet-07.png", alt: "Branding sheet Mincho: 生き甲斐 groot boven IKIGAI in Zen Old Mincho, een negatieve versie, icoon, kleuren, typografie en neklabel.", bijschrift: "Sheet 07: Mincho" },
      { src: "assets/projecten/ikigai-sheet-08.png", alt: "Branding sheet Penseel: 生 in penseelstijl in een bordeaux cirkel naast IKIGAI in Yuji Syuku, een negatieve versie, icoon, kleuren, typografie en rugprint.", bijschrift: "Sheet 08: Penseel" },
      { src: "assets/projecten/ikigai-sheet-09.png", alt: "Branding sheet Sport gothic: IKIGAI in de zware Dela Gothic One met イキガイ erbij, een negatieve versie, icoon, kleuren, typografie en een label op de broekspijp.", bijschrift: "Sheet 09: Sport gothic" },
      { src: "assets/projecten/ikigai-sheet-10.png", alt: "Branding sheet Katakana: イキガイ in vet naast een dunne IKIGAI met Sportswear, een negatieve versie, icoon, kleuren, typografie en neklabel.", bijschrift: "Sheet 10: Katakana" },
      { src: "assets/projecten/ikigai-sheet-11.png", alt: "Branding sheet Ronde hanko: 生き甲斐 als stempel in een cirkel naast IKIGAI in Zen Antique, een negatieve versie, icoon, kleuren, typografie en borstprint.", bijschrift: "Sheet 11: Ronde hanko" },
    ],
    resultaat:
      "Uit alle richtingen vonden de opdrachtgever en ik sheet 04, de opkomende zon, de beste. De zon verwijst naar de betekenis van de naam: een reden om op te staan.",
    links: [],
  },

  {
    slug: "eko-motorwear",
    titel: "EKO Motorwear",
    lijn: "Een redesign van een motorkledingwebshop, met een Webflow-site, een app en een mini-game.",
    categorie: ["Websites", "Apps"],
    jaar: "2025-2026",
    rol: "Design en development",
    context: "Opdracht 2XD voor een bestaand merk uit Kontich",
    tools: ["Webflow", "Webflow CMS", "React Native", "REST API", "GitHub"],
    kleur: "oranje",
    patroon: "strepen",
    cover: "assets/projecten/eko-motorwear.png",
    coverAlt: "Startpagina van de nieuwe EKO Motorwear-site, met een motorrijder op de baan en de slogan 'Rijd verder. Kom veilig thuis.'",
    uitgelicht: true,
    opdracht:
      "EKO Motorwear is een motorkledingmerk uit Kontich. Ik moest hun bestaande webshop herontwerpen en daarna zelf bouwen: eerst een nieuw design, daarna een website in Webflow, een mobiele app op dezelfde gegevens en een kleine game in die app.",
    aanpak: [
      {
        titel: "Redesign vanuit de echte site",
        tekst:
          "Ik ging uit van de bestaande EKO-site en herontwierp home, navigatie, hero, productoverzicht, blogoverzicht, footer en de detailpagina's. Geen lorem ipsum: de inhoud komt van wat EKO echt verkoopt en schrijft.",
      },
      {
        titel: "Webflow met CMS en webshop",
        tekst:
          "De site heeft blogs uit het CMS, met categorieën, filter en detailpagina. De shop heeft producten met categorieën, filters, maatkeuze en een werkend winkelmandje.",
      },
      {
        titel: "Producten en blogs als API",
        tekst:
          "Alle producten en blogs zijn beschikbaar als JSON, met een aparte URL per product en per blog. Zo gebruiken de site en de app dezelfde gegevens.",
      },
      {
        titel: "React Native-app en mini-game",
        tekst:
          "De app toont dezelfde producten en blogs met herbruikbare componenten (ProductCard en BlogCard), navigatie tussen home, productdetail en blogdetail, en zoeken, filteren en sorteren. In de app zit ook een kleine game met score, timer en herstartknop.",
      },
    ],
    links: [
      { label: "Bekijk de Webflow-site", url: "" },
      { label: "Code op GitHub", url: "" },
    ],
  },

  {
    slug: "wat-neem-je-mee",
    titel: "Wat neem je mee",
    lijn: "Een immersive installatie voor het Poldermuseum in Lillo: je wordt bewoner van Wilmarsdonk in 1966 en kiest wat in één koffer past.",
    categorie: ["3D en games", "UX en onderzoek"],
    jaar: "2025-2026",
    rol: "Concept, prototype en test",
    context: "Lab 3: immersive worlds, voor het Poldermuseum in Lillo",
    tools: ["three.js", "WebXR", "Paper prototype"],
    kleur: "mint",
    patroon: "bogen",
    cover: "assets/projecten/wat-neem-je-mee.png",
    coverAlt: "Startscherm van Wat neem je mee: een donkere kamer uit 1966 met een koffer op tafel en de tekst 'Leg je hand op de koffer'.",
    uitgelicht: true,
    opdracht:
      "Voor het museum in Lillo ontwierp ik een immersive experience. Ze moest passen binnen het museum, zonder extra uitleg bruikbaar zijn en een duidelijk begin en einde hebben.",
    aanpak: [
      {
        titel: "Persona en concept",
        tekst:
          "Ik vertrok vanuit één persona en bedacht een ervaring waarin je bewoner van Wilmarsdonk in 1966 wordt. Je moet kiezen wat er in één koffer past, en wat je dus achterlaat.",
      },
      {
        titel: "Paper prototype en test",
        tekst:
          "Nog voor ik iets digitaal maakte, bouwde ik een paper prototype en testte ik dat met een proefpersoon.",
      },
      {
        titel: "Hi-fi prototype in de browser",
        tekst:
          "Het uitgewerkte prototype draait in de browser, zodat iedereen het meteen kan testen zonder iets te installeren.",
      },
    ],
    links: [
      { label: "Test het prototype", url: "" },
      { label: "Code op GitHub", url: "" },
    ],
  },

  {
    slug: "ba-app",
    titel: "Busleyden Atheneum",
    lijn: "Een nieuwe website voor Busleyden Atheneum, met daarnaast een mobiele school-app die op het Webflow CMS draait.",
    categorie: ["Websites", "Apps"],
    rol: "Design en development",
    tools: ["React Native", "Webflow CMS API", "GitHub"],
    kleur: "geel",
    patroon: "blokken",
    cover: "assets/projecten/busleyden-atheneum.png",
    coverAlt: "Startpagina van de Busleyden Atheneum-site met de kop 'De grootste school van Mechelen' en een foto van lachende leerlingen.",
    uitgelicht: true,
    opdracht:
      "Een React Native-app bouwen die zijn inhoud ophaalt uit een Webflow CMS via een API, voor Busleyden Atheneum.",
    aanpak: [
      {
        titel: "Schermen",
        tekst:
          "De app heeft schermen voor producten, nieuws en campussen, plus een studiekiezer.",
      },
      {
        titel: "Mini-game",
        tekst: "Een klein vang-spel zit als extraatje in de app.",
      },
    ],
    links: [{ label: "Code op GitHub", url: "" }],
  },

  {
    slug: "project-next",
    titel: "Project NEXT",
    lijn: "Een UX-project en website voor een jeugdorganisatie in Mechelen.",
    categorie: ["Websites", "UX en onderzoek"],
    rol: "UX en webdesign",
    context: "Teamproject",
    tools: ["Framer"],
    kleur: "oranje",
    patroon: "stippen",
    cover: "assets/projecten/project-next.png",
    coverAlt: "Startpagina van de NEXT-website met de kop 'Leer. Groei. Word jouw beste zelf.' en een foto van jongeren aan een vijver.",
    opdracht:
      "Samen met een team ontwierp ik een website voor een jeugdorganisatie in Mechelen, vanuit de vraag wie de bezoekers zijn en wat ze nodig hebben.",
    aanpak: [
      {
        titel: "Onderzoek",
        tekst: "We maakten personas en user stories om het ontwerp op echte gebruikers te baseren.",
      },
      {
        titel: "Website in Framer",
        tekst: "De site is gebouwd in Framer en werd voorgesteld tijdens een jurypitch.",
      },
    ],
    links: [{ label: "Bekijk de site", url: "" }],
  },

  {
    slug: "licht-en-liefde",
    titel: "Licht en Liefde redesign",
    lijn: "Een redesign van de website van Blindenzorg Licht en Liefde, met toegankelijkheid als vertrekpunt.",
    categorie: ["Websites", "UX en onderzoek"],
    rol: "UX en webdesign",
    context: "Teamproject",
    tools: [],
    kleur: "mint",
    patroon: "blokken",
    cover: "assets/projecten/licht-en-liefde.png",
    coverAlt: "Startpagina van het redesign van Licht en Liefde, met een welkomstbanner en drie grote knoppen: Ik heb hulp nodig, Vrijwilliger worden en Doneer.",
    uitgelicht: true,
    opdracht:
      "Blindenzorg Licht en Liefde wilde een website die ook echt bruikbaar is voor mensen met een visuele beperking. Wij herontwierpen die met toegankelijkheid als vertrekpunt.",
    links: [],
  },

  /* ----- CONCEPT: dit project staat nog niet op de site (verborgen: true) -----
     Vul de velden aan en zet verborgen op false om je D3-project te tonen. */
  {
    verborgen: true,
    slug: "d3-visualisatie",
    titel: "D3 data-visualisatie",
    lijn: "Vul hier in wat je visualiseerde en waarom.",
    categorie: ["Data"],
    jaar: "",
    rol: "Design en development",
    context: "",
    tools: ["D3.js", "JavaScript"],
    kleur: "blauw",
    patroon: "stippen",
    opdracht: "Welke data had je? Welke vraag wilde je beantwoorden?",
    aanpak: [
      { titel: "Data", tekst: "Waar komt de data vandaan en wat heb je ermee gedaan?" },
      { titel: "Visualisatie", tekst: "Welke keuzes maakte je en waarom?" },
    ],
    links: [{ label: "Bekijk de visualisatie", url: "" }],
  },
];
