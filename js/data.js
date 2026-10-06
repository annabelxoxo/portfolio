/* ==========================================================================
   HIER PAS JE ALLES AAN: teksten, contactgegevens en projecten.
   Je hoeft de andere bestanden niet aan te raken om inhoud te wijzigen.

   - SITE      = je naam, introtekst, contact en "Over mij"
   - PROJECTS  = je projecten. Kopieer een blok om er een bij te maken.

   Velden die je leeg laat ("" of []) worden op de site gewoon weggelaten.
   ========================================================================== */

window.SITE = {
  naam: "Annabel",
  kop: "Ik ontwerp digitale ervaringen en bouw ze zelf.",
  intro:
    "Ik ben Annabel, student Experience Design aan Thomas More in Mechelen. Ik werk in Figma en Webflow, maar ik schrijf ook zelf de code: van websites en apps tot 3D-werelden en data-visualisaties.",

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
    foto: "", // bv. "assets/annabel.jpg" (laat leeg als je geen foto wil)
    fotoAlt: "Portretfoto van Annabel",
    tekst: [
      "Ik ben Annabel, student Experience Design aan Thomas More in Mechelen. Ik hou van projecten waar ontwerp en techniek samenkomen: iets bedenken, het uittekenen in Figma en het dan ook echt laten werken.",
      "Ik begon vanuit code en ben steeds meer naar design opgeschoven. Daardoor kan ik zelf bouwen wat ik ontwerp, in Webflow, Framer, React Native of gewoon met code.",
      "Naast school ben ik praeses van studentenvereniging Retabo in Mechelen. Ik zorg er voor de administratie, de financiën, de social media en de events, van TD's tot merchandise. Daarnaast ben ik hoofdanimator bij een jeugdkampenorganisatie, waar ik activiteiten en spellen bedenk en mee de planning van de kampen maak. Daar merk ik elke week dat een goed idee pas werkt als het ook georganiseerd raakt.",
    ],
    vaardigheden: [
      { groep: "Design", items: ["Figma", "Framer", "Webflow", "Personas en user stories", "Prototypes testen"] },
      { groep: "Code", items: ["JavaScript", "React Native", "PHP", "Python", "C#", "D3.js"] },
      { groep: "3D en games", items: ["Unity", "three.js en WebXR", "Blender"] },
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
    titel: "Busleyden Atheneum app",
    lijn: "Een mobiele school-app die op een Webflow CMS draait, met een studiekiezer en een mini-game.",
    categorie: ["Apps"],
    rol: "Design en development",
    tools: ["React Native", "Webflow CMS API", "GitHub"],
    kleur: "geel",
    patroon: "blokken",
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
