# Portfolio Annabel

Een site met vijf pagina's: startpagina, projecten (met filter), projectpagina, over mij en contact.
Speels en persoonlijk qua stijl (stickers, plakband, een golvende rand, chunky knoppen), maar geen
framework en geen installatie nodig: gewoon HTML, CSS en JavaScript.

## Wat staat waar

| Bestand | Wat er in zit |
| --- | --- |
| `content.js` | **Hier pas je alles aan**: je teksten, je rollen/badges, je contactgegevens en al je projecten. Staat in de hoofdmap zodat je hem meteen ziet |
| `css/style.css` | Kleuren en lettertypes staan bovenaan (`:root`), de rest is de opmaak |
| `js/app.js` | Bouwt de pagina's op uit `content.js`. Zoek de functie `home()`, `overzicht()`, `detail()`, `over()` of `contact()` |
| `*.html` | De vijf pagina's. Ze zijn bewust kort |
| `assets/projecten/` | Zet hier je screenshots en foto's |

`content.js` is het enige bestand dat je voor gewone updates hoeft te openen: nieuwe tekst, een
project erbij, een link aanpassen. Alles daar staat in gewoon Nederlands becommentarieerd, en elke
wijziging verschijnt automatisch op alle 5 pagina's zodra je de pagina ververst (F5). Je hoeft nooit
HTML of CSS aan te raken om inhoud te wijzigen.

## Eerst doen (dit moet jij invullen)

1. Je mailadres (`info@annabelsmeulders.be`) staat bovenaan in `content.js` bij `email`.
2. Vul je LinkedIn, GitHub en Instagram in (leeg laten mag, dan verdwijnt de link).
3. Pas `rollen` aan naar de badges/stickers die jij op je startpagina wil (nu: Experience Design
   student, Design + code).
4. Zet per project de links (live site, GitHub) bij `links`.
5. Zet echte screenshots in `assets/projecten/` en verwijs ernaar met `cover: "assets/projecten/eko.jpg"`.
   Tot dan krijgt elk project een getekende cover in zijn eigen kleur.
6. Lees elk project na en pas de tekst aan zodat het klopt met wat jij effectief gemaakt hebt.
7. Vul bij elk project `resultaat` en `leerpunten` in. Die stukken staan nu bewust leeg, want dat kan alleen jij.

## Een project toevoegen

Kopieer in `content.js` een blok van een bestaand project, plak het onder het laatste project en pas het aan.
`slug` moet uniek zijn en mag geen spaties hebben. Zet `uitgelicht: true` als het op de startpagina moet staan.

Je D3-project staat er al als concept in (`verborgen: true`). Vul het aan en zet `verborgen` op `false`.

## Verstopte verrassingen 🐍

Voor de speler in jou (en voor je jury):

- **Typ ergens op de site het woord `snake`** (niet in een invulveld) → er verschijnt een speelbaar Snake-spelletje, gestuurd met pijltjes of WASD. Werkt overal, ook op de "project niet gevonden"-pagina.
- **Konami-code**: ↑ ↑ ↓ ↓ ← → ← → b a → confetti in je eigen kleuren.
- **5x snel klikken** op je naam onderaan in de footer → opent ook Snake.
- Open de browserconsole (F12) voor een geheim berichtje.

Dit alles zit in `js/snake.js`, helemaal los van `content.js` — je hoeft er niets aan te veranderen
om tekst of projecten te wijzigen. Wil je het uitschakelen? Verwijder gewoon de regel
`<script src="js/snake.js"></script>` uit de HTML-bestanden.

De hoogste Snake-score wordt per bezoeker onthouden in de browser (`localStorage`), niet gedeeld
tussen bezoekers.

## De speelse stijl aanpassen


- **Stickers/badges** (de scheve pilletjes onder je intro): kleuren staan in `.sticker.s0` t/m `.s3`
  in `css/style.css`. Voeg je een 5de rol toe in `content.js`, dan herhaalt het patroon gewoon.
- **Golvende rand** boven de footer: dat is één SVG-golfje dat herhaalt, in `.voet::before`.
- **Plakbandje** op covers en stickers: kleine witte rechthoekjes via `::before`/`::after`.
- **Chunky schaduw** op knoppen, filters en tags (`box-shadow: 4px 4px 0 var(--inkt)`): dat vervangt
  bewust de gewone zachte grijze schaduw, voor een tastbaar, geknipt-en-geplakt gevoel.
- Wil je het rustiger? Zet de `box-shadow`- en `transform`-regels in die klassen gewoon terug op niets.

## Afbeeldingen

- Formaat: liefst 1600 x 900 pixels, als `.jpg` of `.webp`, en kleiner dan 300 KB.
- Geef altijd een `alt` mee bij `beelden` en een `coverAlt` bij de cover: dat is voor screenreaders en Google.
- Een video toevoegen: zet bij `video` de embed-link van YouTube of Vimeo (`https://www.youtube.com/embed/...`).

## Online zetten

Het is een statische site, dus elke gratis host werkt:

- **Netlify Drop**: ga naar app.netlify.com/drop en sleep de hele map erin. Klaar in een minuut.
- **GitHub Pages**: zet de map in een repo en zet bij Settings > Pages de branch aan.
- **Vercel** of je eigen domein via Combell of hetzelfde soort hosting kan ook.

Testen op je eigen computer: dubbelklik op `index.html`, of run `npx serve` in de map.

## Voor Personal branding & marketing

- Titel en beschrijving per pagina staan in de `<head>` van elke `.html`. Pas ze aan naar jouw eigen woorden.
  Op projectpagina's neemt de site de projectnaam en de zin bij `lijn` automatisch over.
- Wil je dat elk project een eigen deelbare preview krijgt (Open Graph) of een eigen pagina die Google los indexeert?
  Dan is de volgende stap om per project een aparte `.html` te genereren. Daar kunnen we later samen aan werken.
