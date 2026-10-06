/* ==========================================================================
   SNAKE.JS  —  de verstopte verrassingen van de site.

   1. Typ ergens op de site (niet in een invulveld) het woord "snake"
      → er verschijnt een speelbaar Snake-spelletje.
   2. Konami-code (↑ ↑ ↓ ↓ ← → ← → b a) → confetti.
   3. 5x snel klikken op je naam onderaan (in de footer) → ook Snake.
   4. Een geheime groet in de browserconsole (F12) voor wie meekijkt.

   Wil je dit uitzetten of aanpassen? Dit bestand staat helemaal los van
   content.js — je hoeft er niets aan te veranderen om tekst of projecten
   te wijzigen.
   ========================================================================== */

(function () {
  "use strict";

  console.log(
    "%c🐍 hey, nieuwsgierig aagje!%c\nTyp ergens op deze site het woord snake voor een verrassing.",
    "font-size:15px;font-weight:700;color:#3a2cf0;",
    "font-size:12px;color:#1c1240;"
  );

  const kleur = (naam, fallback) => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(naam).trim();
    return v || fallback;
  };

  /* ---------------- Confetti + toast (voor de Konami-code) ---------------- */

  function confetti() {
    const kleuren = [kleur("--geel", "#ffd84a"), kleur("--oranje", "#ff6a3d"), kleur("--roze", "#ff9ad5"), kleur("--mint", "#7fe0c0"), kleur("--blauw", "#3a2cf0")];
    const laag = document.createElement("div");
    laag.className = "confetti-laag";
    document.body.append(laag);
    for (let i = 0; i < 60; i++) {
      const stuk = document.createElement("i");
      stuk.style.setProperty("--x", Math.random() * 100 + "vw");
      stuk.style.setProperty("--r", Math.random() * 360 + "deg");
      stuk.style.setProperty("--d", 2.2 + Math.random() * 1.6 + "s");
      stuk.style.setProperty("--k", kleuren[i % kleuren.length]);
      stuk.style.setProperty("--v", Math.random() * 0.4 + "s");
      laag.append(stuk);
    }
    setTimeout(() => laag.remove(), 4200);
  }

  function toast(tekst) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = tekst;
    document.body.append(el);
    requestAnimationFrame(() => el.classList.add("zichtbaar"));
    setTimeout(() => {
      el.classList.remove("zichtbaar");
      setTimeout(() => el.remove(), 400);
    }, 2600);
  }

  /* ---------------- Snake ---------------- */

  const CELLEN = 15;
  const CEL = 20;
  let overlay, canvas, ctx, scoreEl, bestEl, hintEl;
  let slang, richting, volgende, eten, score, beste, timer, gepauzeerd, gedaan;
  let vorigeFocus;

  const RICHTINGEN = {
    up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0],
    w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0],
    arrowup: [0, -1], arrowdown: [0, 1], arrowleft: [-1, 0], arrowright: [1, 0],
  };

  function bouwOverlay() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.className = "snake-overlay";
    overlay.hidden = true;
    overlay.innerHTML =
      `<div class="snake-card" role="dialog" aria-modal="true" aria-label="Verstopt spelletje: Snake">` +
      `<button type="button" class="snake-close" aria-label="Sluiten">×</button>` +
      `<p class="snake-kicker">Verrassing gevonden</p>` +
      `<h2 class="snake-titel">Een potje Snake?</h2>` +
      `<div class="snake-score-row"><span>Score <strong id="snakeScore">0</strong></span><span>Beste <strong id="snakeBest">0</strong></span></div>` +
      `<canvas id="snakeCanvas" width="${CELLEN * CEL}" height="${CELLEN * CEL}"></canvas>` +
      `<p class="snake-hint" id="snakeHint">Pijltjes of WASD. Spatie om te pauzeren.</p>` +
      `<div class="snake-dpad">` +
      `<button type="button" data-dir="up" aria-label="Omhoog">↑</button>` +
      `<button type="button" data-dir="left" aria-label="Links">←</button>` +
      `<button type="button" data-dir="down" aria-label="Omlaag">↓</button>` +
      `<button type="button" data-dir="right" aria-label="Rechts">→</button>` +
      `</div></div>`;
    document.body.append(overlay);

    canvas = overlay.querySelector("#snakeCanvas");
    ctx = canvas.getContext("2d");
    scoreEl = overlay.querySelector("#snakeScore");
    bestEl = overlay.querySelector("#snakeBest");
    hintEl = overlay.querySelector("#snakeHint");

    overlay.querySelector(".snake-close").addEventListener("click", sluitSnake);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) sluitSnake(); });
    overlay.querySelectorAll(".snake-dpad button").forEach((b) => b.addEventListener("click", () => zetRichting(b.dataset.dir)));

    try {
      beste = Number(localStorage.getItem("snake-beste")) || 0;
    } catch (e) {
      beste = 0;
    }
    bestEl.textContent = beste;
  }

  function zetRichting(naam) {
    const nieuw = RICHTINGEN[naam];
    if (!nieuw) return;
    if (richting && nieuw[0] === -richting[0] && nieuw[1] === -richting[1]) return; // niet ombuigen in het tegenovergestelde
    volgende = nieuw;
    if (gedaan) herstart();
  }

  function nieuwEten() {
    do {
      eten = [Math.floor(Math.random() * CELLEN), Math.floor(Math.random() * CELLEN)];
    } while (slang.some((s) => s[0] === eten[0] && s[1] === eten[1]));
  }

  function herstart() {
    slang = [[7, 7], [6, 7], [5, 7]];
    richting = [1, 0];
    volgende = [1, 0];
    score = 0;
    gedaan = false;
    gepauzeerd = false;
    nieuwEten();
    scoreEl.textContent = "0";
    hintEl.textContent = "Pijltjes of WASD. Spatie om te pauzeren.";
    clearInterval(timer);
    timer = setInterval(tik, 110);
    tekenen();
  }

  function tik() {
    if (gepauzeerd || gedaan) return;
    richting = volgende;
    const kop = [slang[0][0] + richting[0], slang[0][1] + richting[1]];
    const botst =
      kop[0] < 0 || kop[1] < 0 || kop[0] >= CELLEN || kop[1] >= CELLEN || slang.some((s) => s[0] === kop[0] && s[1] === kop[1]);

    if (botst) {
      gedaan = true;
      clearInterval(timer);
      if (score > beste) {
        beste = score;
        try {
          localStorage.setItem("snake-beste", String(beste));
        } catch (e) {}
        bestEl.textContent = beste;
      }
      hintEl.textContent = "Game over — spatie of tik om opnieuw te beginnen.";
      tekenen();
      return;
    }

    slang.unshift(kop);
    if (kop[0] === eten[0] && kop[1] === eten[1]) {
      score++;
      scoreEl.textContent = String(score);
      nieuwEten();
    } else {
      slang.pop();
    }
    tekenen();
  }

  function tekenen() {
    const papier = kleur("--papier", "#f2f0ff");
    const inkt = kleur("--inkt", "#1c1240");
    const geel = kleur("--geel", "#ffd84a");
    const oranje = kleur("--oranje", "#ff6a3d");

    ctx.fillStyle = papier;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = oranje;
    ctx.beginPath();
    ctx.arc(eten[0] * CEL + CEL / 2, eten[1] * CEL + CEL / 2, CEL / 2.6, 0, Math.PI * 2);
    ctx.fill();

    slang.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? inkt : geel;
      const pad = 2;
      const x = s[0] * CEL + pad, y = s[1] * CEL + pad, w = CEL - pad * 2, h = CEL - pad * 2;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, w, h, 5);
      else ctx.rect(x, y, w, h);
      ctx.fill();
    });

    if (gedaan) {
      ctx.fillStyle = "rgba(28,18,64,0.82)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = papier;
      ctx.textAlign = "center";
      ctx.font = "700 20px sans-serif";
      ctx.fillText("Game over!", canvas.width / 2, canvas.height / 2 - 10);
      ctx.font = "500 14px sans-serif";
      ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2 + 16);
    }
  }

  function openSnake() {
    bouwOverlay();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    herstart();
    overlay.querySelector(".snake-close").focus();
  }
  window.openSnake = openSnake;

  function sluitSnake() {
    clearInterval(timer);
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (vorigeFocus) vorigeFocus.focus();
  }

  document.addEventListener("keydown", (e) => {
    if (overlay && !overlay.hidden) {
      if (e.key === "Escape") return sluitSnake();
      if (e.key === " ") {
        e.preventDefault();
        return gedaan ? herstart() : (gepauzeerd = !gepauzeerd);
      }
      const naam = e.key.toLowerCase();
      if (RICHTINGEN[naam]) {
        e.preventDefault();
        zetRichting(naam);
      }
    }
  });

  /* ---------------- Geheime triggers ---------------- */

  function ingeeftype(e) {
    const t = e.target;
    return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
  }

  let typBuffer = "";
  const KONAMI = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
  let konamiBuffer = [];

  document.addEventListener("keydown", (e) => {
    if (overlay && !overlay.hidden) return;
    if (ingeeftype(e)) return;

    if (/^[a-z]$/i.test(e.key)) {
      typBuffer = (typBuffer + e.key.toLowerCase()).slice(-5);
      if (typBuffer === "snake") {
        vorigeFocus = document.activeElement;
        openSnake();
        typBuffer = "";
      }
    }

    konamiBuffer.push(e.key.toLowerCase());
    konamiBuffer = konamiBuffer.slice(-KONAMI.length);
    if (konamiBuffer.join(",") === KONAMI.join(",")) {
      confetti();
      toast("Jij kent je codes! Hier, wat confetti. 🎉");
      konamiBuffer = [];
    }
  });

  // 5x snel klikken op je naam in de footer
  const jaarklik = document.getElementById("jaarklik");
  if (jaarklik) {
    let klikken = 0, resetTimer;
    jaarklik.addEventListener("click", () => {
      klikken++;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => (klikken = 0), 1200);
      if (klikken >= 5) {
        klikken = 0;
        vorigeFocus = jaarklik;
        openSnake();
      }
    });
  }
})();
