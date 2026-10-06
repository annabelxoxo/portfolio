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
            "Als praeses ben ik verantwoordelijk voor de administratie, de financiën, de social media en de organisatie van events: van het Zomerbuffet en TD's tot cantussen en onze eigen merchandise, zoals hoodies, t-shirts, sokken en lintjes. Ik werk samen met een team van andere studenten, en ik stuur ook de algemene Praesidiumvergaderingen aan. Het is een hele verantwoordelijkheid, maar ik vind het geweldig om te doen.",
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
     resultaat   wat is er uitgekomen? (tekst)
     leerpunten  lijst van zinnen
     links       lijst van { label, url }, bv. "Bekijk de site" of "Code op GitHub"
     uitgelicht  true = staat op de startpagina
     klein       true = komt onderaan in "Kleiner werk", zonder eigen pagina
     verborgen   true = staat nergens op de site (handig voor een concept)
   -------------------------------------------------------------------------- */

window.PROJECTS = [
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

  /* ----- Kleiner werk: geen eigen pagina, staat onderaan de projectenpagina ----- */
  {
    klein: true,
    slug: "kamerplant-club",
    titel: "KamerPlant Club",
    lijn: "Een mobiele app in React Native.",
    categorie: ["Apps"],
    tools: ["React Native"],
  },
  {
    klein: true,
    slug: "blender-bal",
    titel: "Bouncing ball met stof",
    lijn: "Een Blender-animatie van een stuiterende bal met cloth simulation.",
    categorie: ["3D en games"],
    tools: ["Blender"],
  },
  {
    klein: true,
    slug: "ux-dagboek",
    titel: "UX-dagboek",
    lijn: "Vijf echte UX-observaties uit mijn eigen leven, uitgewerkt in een dagboekstudie.",
    categorie: ["UX en onderzoek"],
    tools: [],
  },
];
