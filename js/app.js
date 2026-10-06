/* ==========================================================================
   APP.JS bouwt de pagina's op uit de gegevens in data.js.
   Voor nieuwe projecten of teksten hoef je dit bestand NIET aan te passen.
   Wil je iets aan de opbouw veranderen? Zoek dan de functie met de naam
   van de pagina: home(), overzicht(), detail(), over() of contact().
   ========================================================================== */

(function () {
  "use strict";

  const S = window.SITE;
  const ALLE = window.PROJECTS.filter((p) => !p.verborgen);
  const PROJECTEN = ALLE.filter((p) => !p.klein);
  const KLEIN = ALLE.filter((p) => p.klein);
  const PAGINA = document.body.dataset.pagina;

  const $ = (sel, root) => (root || document).querySelector(sel);

  // Tekst veilig in HTML zetten
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Lege lijnen in een tekst worden nieuwe alinea's
  const alineas = (t) =>
    String(t)
      .split(/\n\s*\n/)
      .map((x) => `<p>${esc(x)}</p>`)
      .join("");

  const zet = (sel, tekst) => {
    const el = $(sel);
    if (el) el.textContent = tekst;
  };

  /* ---------- Covers: echte afbeelding of een getekende cover ---------- */

  const PAL = { blauw: "#3a2cf0", roze: "#ff9ad5", geel: "#ffd84a", mint: "#7fe0c0", oranje: "#ff6a3d" };
  const INKT = "#1c1240";
  const PAPIER = "#f2f0ff";
  // kleuren voor de vormen op elke achtergrond (allemaal goed leesbaar)
  const COMBO = {
    blauw: ["#ffd84a", "#ff9ad5", PAPIER],
    roze: [INKT, "#3a2cf0", "#ffd84a"],
    geel: [INKT, "#3a2cf0", "#ff6a3d"],
    mint: [INKT, "#3a2cf0", PAPIER],
    oranje: [INKT, "#ffd84a", PAPIER],
  };

  const PATRONEN = {
    cirkels: ([a, b, c]) =>
      `<circle cx="140" cy="160" r="110" fill="${a}"/><circle cx="250" cy="120" r="80" fill="${b}"/><circle cx="300" cy="215" r="46" fill="none" stroke="${c}" stroke-width="14"/>`,

    blokken: ([a, b, c]) => {
      let s = "";
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
          const k = (i * 3 + j * 2) % 5;
          const kleur = k === 0 ? a : k === 1 ? b : k === 2 ? c : null;
          if (kleur) s += `<rect x="${20 + i * 76}" y="${14 + j * 70}" width="62" height="56" rx="14" fill="${kleur}"/>`;
        }
      }
      return s;
    },

    strepen: ([a, b]) => {
      let s = '<g transform="rotate(-25 200 150)">';
      for (let i = -2; i < 12; i++) s += `<rect x="${i * 56 - 40}" y="-100" width="26" height="500" fill="${i % 2 ? a : b}"/>`;
      return s + "</g>";
    },

    golven: ([a, b, c]) =>
      [a, b, c, a, b]
        .map(
          (kleur, i) =>
            `<path d="M-20 ${70 + i * 44} q 40 -40 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0" fill="none" stroke="${kleur}" stroke-width="14" stroke-linecap="round"/>`
        )
        .join(""),

    stippen: ([a, b]) => {
      let s = `<circle cx="320" cy="70" r="90" fill="${b}"/>`;
      for (let i = 0; i < 12; i++) for (let j = 0; j < 9; j++) s += `<circle cx="${22 + i * 32}" cy="${24 + j * 32}" r="6" fill="${a}"/>`;
      return s;
    },

    bogen: ([a, b, c]) =>
      [[190, a], [145, b], [100, c], [55, a]]
        .map(([r, kleur]) => `<path d="M${200 - r} 300 a ${r} ${r} 0 0 1 ${2 * r} 0 z" fill="${kleur}"/>`)
        .join(""),
  };

  function cover(p, decoratief) {
    if (p.cover) {
      return `<img src="${esc(p.cover)}" alt="${decoratief ? "" : esc(p.coverAlt || "")}" loading="lazy">`;
    }
    const kleuren = COMBO[p.kleur] || COMBO.blauw;
    const tekenen = PATRONEN[p.patroon] || PATRONEN.cirkels;
    return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><rect width="400" height="300" fill="${PAL[p.kleur] || PAL.blauw}"/>${tekenen(kleuren)}</svg>`;
  }

  /* ---------- Kop en voet op elke pagina ---------- */

  function chrome() {
    const menu = [
      ["Projecten", "projecten.html", "projecten"],
      ["Over mij", "over-mij.html", "over"],
      ["Contact", "contact.html", "contact"],
    ];

    const skip = document.createElement("a");
    skip.className = "skip";
    skip.href = "#main";
    skip.textContent = "Naar de inhoud";

    const kop = document.createElement("header");
    kop.className = "kop wrap";
    kop.innerHTML =
      `<a class="logo" href="index.html" aria-label="${esc(S.volledigeNaam || S.naam)}, naar de startpagina">` +
      (S.logo ? `<img src="${esc(S.logo)}" alt="" width="44" height="44">` : "") +
      `<span>${esc((S.volledigeNaam || S.naam).toLowerCase())}</span></a>` +
      `<nav class="menu" aria-label="Hoofdmenu">` +
      menu
        .map(([tekst, href, sleutel]) => {
          const actief = PAGINA === sleutel || (PAGINA === "project" && sleutel === "projecten");
          return `<a href="${href}"${actief ? ' aria-current="page"' : ""}>${tekst}</a>`;
        })
        .join("") +
      `</nav>`;

    document.body.prepend(kop);
    document.body.prepend(skip);

    const links = S.links.filter((l) => l.url);
    if (S.cv) links.push({ label: "CV", url: S.cv });

    const voet = document.createElement("footer");
    voet.className = "voet";
    voet.innerHTML =
      `<div class="wrap">` +
      `<h2>Zin om samen iets te maken?</h2>` +
      `<a class="voet-mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a>` +
      `<div class="voet-onder"><span id="jaarklik">${esc(S.naam)}, ${new Date().getFullYear()}</span>` +
      (links.length
        ? `<ul>${links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join("")}</ul>`
        : "") +
      `</div></div>`;
    document.body.append(voet);
  }

  /* ---------- Een rij in de projectenlijst ---------- */

  function rij(p) {
    return (
      `<li><a class="rij" href="project.html?p=${encodeURIComponent(p.slug)}" data-slug="${esc(p.slug)}">` +
      `<span class="rij-titel">${esc(p.titel)}</span>` +
      `<span class="rij-info"><span>${esc(p.categorie.join(", "))}</span>${p.jaar ? `<span>${esc(p.jaar)}</span>` : ""}</span>` +
      `<span class="rij-thumb" aria-hidden="true">${cover(p, true)}</span>` +
      `</a></li>`
    );
  }

  // De kop van de startpagina: woorden schuiven één keer omhoog
  function woorden(h1) {
    // Een \n in de tekst wordt een nieuwe regel.
    const tekst = h1.textContent.trim();
    h1.setAttribute("aria-label", tekst.replace(/\s+/g, " "));
    let i = 0;
    h1.innerHTML = tekst
      .split("\n")
      .map((regel) =>
        regel
          .trim()
          .split(" ")
          .map((w) => `<span class="w" aria-hidden="true"><span style="--i:${i++}">${esc(w)}</span></span>`)
          .join(" ")
      )
      .join("<br>");
  }

  /* ---------- Startpagina ---------- */

  function home() {
    zet("#kop", S.kop);
    woorden($("#kop"));
    zet("#intro", S.intro);

    const rollen = $("#rollen");
    if (rollen) {
      if (S.rollen && S.rollen.length) {
        rollen.innerHTML = S.rollen.map((r, i) => `<li class="sticker s${i % 4}">${esc(r)}</li>`).join("");
      } else {
        rollen.remove();
      }
    }

    const lijst = $("#uitgelicht");
    lijst.innerHTML = PROJECTEN.filter((p) => p.uitgelicht).map(rij).join("");
    zet("#over-tekst", S.over.tekst[0]);
  }

  /* ---------- Alle projecten met filter ---------- */

  function overzicht() {
    const cats = [];
    PROJECTEN.forEach((p) => p.categorie.forEach((c) => cats.includes(c) || cats.push(c)));

    const start = new URLSearchParams(location.search).get("cat");
    let actief = cats.includes(start) ? start : null;

    const filters = $("#filters");
    const lijst = $("#projectlijst");
    const teller = $("#teller");

    filters.innerHTML = [["", "Alles"], ...cats.map((c) => [c, c])]
      .map(([waarde, tekst]) => `<button type="button" class="chip" data-cat="${esc(waarde)}" aria-pressed="false">${esc(tekst)}</button>`)
      .join("");

    function teken() {
      const zichtbaar = PROJECTEN.filter((p) => !actief || p.categorie.includes(actief));
      lijst.innerHTML = zichtbaar.map(rij).join("");
      teller.textContent = `${zichtbaar.length} ${zichtbaar.length === 1 ? "project" : "projecten"}${actief ? ` in ${actief}` : ""}`;
      filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String((b.dataset.cat || null) === actief)));
    }

    filters.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      actief = b.dataset.cat || null;
      teken();
    });

    teken();

    // Kleiner werk onderaan
    const klein = $("#klein");
    if (KLEIN.length) {
      $("#klein-lijst").innerHTML = KLEIN.map((p) => {
        const link = p.links && p.links.find((l) => l.url);
        const titel = link ? `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(p.titel)}</a>` : esc(p.titel);
        return `<li class="klein-rij"><strong>${titel}</strong><span>${esc(p.lijn)}</span><span>${esc((p.tools || []).join(", "))}</span></li>`;
      }).join("");
    } else if (klein) {
      klein.remove();
    }
  }

  /* ---------- Eén project ---------- */

  function detail() {
    const slug = new URLSearchParams(location.search).get("p");
    const i = PROJECTEN.findIndex((p) => p.slug === slug);
    const root = $("#project");

    if (i < 0) {
      document.title = `Project niet gevonden | ${S.naam}`;
      root.innerHTML =
        `<h1>Dit project bestaat niet (meer)</h1>` +
        `<p class="lead"><a href="projecten.html">Bekijk alle projecten</a></p>` +
        `<button type="button" class="knop" id="snake-cta">Speel ondertussen een potje Snake</button>`;
      const btn = $("#snake-cta");
      if (btn) btn.addEventListener("click", () => window.openSnake && window.openSnake());
      return;
    }

    const p = PROJECTEN[i];
    document.title = `${p.titel} | ${S.naam}`;
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", p.lijn);

    const meta = [
      ["Rol", p.rol],
      ["Context", p.context],
      ["Jaar", p.jaar],
      ["Tools", (p.tools || []).join(", ")],
      ["Team", (p.team || []).join(", ")],
    ].filter(([, waarde]) => waarde);

    const links = (p.links || []).filter((l) => l.url);

    const sectie = (titel, inhoud) => (inhoud ? `<section class="sectie"><h2>${titel}</h2><div class="tekst">${inhoud}</div></section>` : "");

    const aanpak = (p.aanpak || []).map((s) => `<div class="stap"><h3>${esc(s.titel)}</h3><p>${esc(s.tekst)}</p></div>`).join("");

    const beelden = (p.beelden || [])
      .map(
        (b) =>
          `<figure><img src="${esc(b.src)}" alt="${esc(b.alt || "")}" loading="lazy">${b.bijschrift ? `<figcaption>${esc(b.bijschrift)}</figcaption>` : ""}</figure>`
      )
      .join("");
    const video = p.video ? `<div class="video"><iframe src="${esc(p.video)}" title="Video over ${esc(p.titel)}" loading="lazy" allowfullscreen></iframe></div>` : "";
    const media = video || beelden ? `<section class="sectie"><h2>Zo ziet het eruit</h2><div class="media">${video}${beelden}</div></section>` : "";

    const volgende = PROJECTEN.length > 1 ? PROJECTEN[(i + 1) % PROJECTEN.length] : null;

    root.innerHTML =
      `<a class="terug" href="projecten.html">Alle projecten</a>` +
      `<h1>${esc(p.titel)}</h1>` +
      `<p class="lead">${esc(p.lijn)}</p>` +
      (links.length ? `<div class="knoppen">${links.map((l) => `<a class="knop" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : "") +
      (meta.length ? `<dl class="meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : "") +
      `<div class="cover">${cover(p, false)}</div>` +
      sectie("De opdracht", p.opdracht ? alineas(p.opdracht) : "") +
      sectie("Wat ik gedaan heb", aanpak) +
      media +
      sectie("Resultaat", p.resultaat ? alineas(p.resultaat) : "") +
      sectie("Wat ik geleerd heb", p.leerpunten && p.leerpunten.length ? `<ul>${p.leerpunten.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : "") +
      (volgende ? `<aside class="volgende"><p>Volgend project</p><ul class="lijst" id="volgende">${rij(volgende)}</ul></aside>` : "");

  }

  /* ---------- Over mij ---------- */

  function over() {
    const o = S.over;
    $("#over-tekst").innerHTML =
      (o.foto ? `<img class="over-foto" src="${esc(o.foto)}" alt="${esc(o.fotoAlt || "")}">` : "") + o.tekst.map((t) => `<p>${esc(t)}</p>`).join("");
    $("#vaardigheden").innerHTML = o.vaardigheden
      .map((g) => `<div class="groep"><h2>${esc(g.groep)}</h2><ul class="tags">${g.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`)
      .join("");

    // "De persoon achter alles"
    const p = o.persoon;
    const sectie = $("#persoon");
    if (!p || !p.blokken || !p.blokken.length) {
      if (sectie) sectie.remove();
      return;
    }
    $("#persoon-kop").textContent = p.titel || "De persoon achter alles";
    if (p.intro) $("#persoon-intro").textContent = p.intro;
    else $("#persoon-intro").remove();
    $("#persoon-blokken").innerHTML = p.blokken
      .map(
        (b) =>
          `<article class="persoon-blok">` +
          (b.foto ? `<img src="${esc(b.foto)}" alt="${esc(b.fotoAlt || "")}" loading="lazy">` : "") +
          `<div class="tekst"><h3>${esc(b.titel)}</h3>${b.tekst.map((t) => `<p>${esc(t)}</p>`).join("")}</div>` +
          `</article>`
      )
      .join("");
  }

  /* ---------- Contact ---------- */

  function contact() {
    const mail = $("#contact-mail");
    mail.href = `mailto:${S.email}`;
    mail.textContent = S.email;
    const links = S.links.filter((l) => l.url);
    if (S.cv) links.push({ label: "CV downloaden", url: S.cv });
    $("#contact-links").innerHTML = links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join("");
  }

  /* ---------- Starten ---------- */

  chrome();
  if (PAGINA === "home") home();
  else if (PAGINA === "projecten") overzicht();
  else if (PAGINA === "project") detail();
  else if (PAGINA === "over") over();
  else if (PAGINA === "contact") contact();
})();
