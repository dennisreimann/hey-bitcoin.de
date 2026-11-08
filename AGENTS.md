# AGENTS.md — hey-bitcoin.de Schreib- und Bildstil-Guide

Diese Datei dient als Richtlinie für KI-generierte Outlines, Artikelinhalte und Social-Media-Vorschaubilder (OG-Images) für [hey-bitcoin.de](https://hey-bitcoin.de).

## Site-Kontext

- **Site**: hey-bitcoin.de — Anleitungen rund um Bitcoin, persönliche Souveränität, Privatsphäre, Datensicherheit und Self-Hosting.
- **Autor**: Dennis Reimann — Bitcoin-Entwickler (u. a. BTCPay Server), Teil von [Einundzwanzig](https://einundzwanzig.space), dem Bitcoin-Podcast. Schreibt in der Ich-Perspektive, teils "wir" für die Einundzwanzig-Community. Selbstverständnis: "Ich bin Dennis, einer von vielen begeisterten Bitcoinern" — Wissen teilen, "schließlich muss nicht jeder Fehler zweimal gemacht werden".
- **Tech**: VuePress 2 (de-DE), Theme Default mit Akzentfarbe **Bitcoin-Orange `#f7931b`** (`--vp-c-accent`), Hover `#f9aa4b`, Logo `/bitcoin.svg` (orangefarbener Kreis mit weißem ₿, Verlauf `#f9aa4b` → `#f7931a`), Dark Mode aktiv.
- **Struktur**: Artikel liegen unter `docs/anleitung/<artikel-key>/README.md`, Übergübersicht in `docs/anleitung/README.md`, Sidebar in `docs/.vuepress/config.ts` (bei neuen Artikeln pflegen!).
- **Vorschaubilder**: Per Konvention liegt das OG-Image jeder Seite in deren Ordner als `image.jpg`: Artikel unter `docs/anleitung/<slug>/image.jpg`, Sonderseiten unter `docs/image.jpg` (Home), `docs/faq/image.jpg`, `docs/glossar/image.jpg`, `docs/links/image.jpg`, `docs/anleitung/image.jpg` (Übersichtsseite). Ein Build-Plugin (`docs/.vuepress/plugins/ogImages.ts`, registriert in `docs/.vuepress/config.ts`) setzt daraus automatisch das `og:image` (`banner`-Frontmatter) und kopiert die Bilder in den Build — **kein Frontmatter-Eintrag nötig**.

## Themenwahl

- **Bitcoin-Kern**: Selbstverwahrung (Hardware-Wallets, Seeds, MultiSig), eigene Fullnode, Lightning, On-Chain-/Lightning-Privatsphäre, UTXO-Management.
- **Souveränitäts-Rahmen**: Themen jenseits von Bitcoin, die demselben Motiv dienen — Self-Hosting, VPN, Tails OS, GrapheneOS, Nostr, Software-Verifizierung. Leitgedanke: "Deine Daten, deine Schlüssel, deine Infrastruktur".
- **Bitcoin-only, klar positioniert**: Keine Shitcoins, kein Zocken. Kritisch gegenüber KYC, zentralen Börsen und Shitcoin-Casinos — aber pragmatisch: Der beste Weg ist der, den der Leser tatsächlich geht (Kraken/Pocket werden als praxisnahe Einstiegsbörsen empfohlen, mit klarem Hinweis auf die Grenzen).
- **Praxisorientiert**: Artikel zeigen konkrete Hardware, Software-Versionen und Schritt-für-Schritt-Anleitungen ("Stand: <Monat Jahr>" bei Versions- und Preisangaben). Empfehlungen sind opinionated ("Meine Empfehlung", "Ich halte X für die beste Option") und immer begründet.
- **Stufenlogik**: Artikel bauen aufeinander auf, verlinken stark querverweisend (relative Links auf Nachbarartikel, `/glossar/#anker`, `/faq/#anker`) und zeigen Lernpfade auf ("Wenn du das noch nicht kennst, lies zuerst …").
- **Ehrlicher Trade-off-Katalog**: Zu jedem Setup gehören Vor- und Nachteile, Risiken und Grenzen — kein Versprechen absoluter Sicherheit, sondern "Privatsphäre ist ein Prozess, kein Zustand".

## Ton

- **Begeisterter Mentor, kein Prediger**: Enthusiastisch (Kaninchenbau-Metaphorik, Spannung am Thema), aber bodenständig. Teilt Eigenerfahrung statt purer Theorie.
- **Nüchtern ans Problem, warm zur Person**: Technische Themen werden sachlich und präzise erklärt; der Leser wird ermutigt, nicht abgeschreckt ("Ich möchte dich damit nicht abschrecken, aber …").
- **Fehleinschätzungen entkräften, nicht bestrafen**: Kritische Aussagen des Lesers werden beim Namen genannt ("Ich habe doch nichts zu verbergen!" als häufigster und gefährlichster Fehlschluss) und anschaulich widerlegt — über Plausibilität und Beispiele, nicht über Moral.
- **Trockener Humor**: Gelegentlich ironisch und selbstironisch (😉, "Das macht Spaß – weiter geht's", "Bleib bescheiden und staple Satoshis!"), nie albern auf Kosten des Lesers.
- **Mantras und Meme-Kultur**: „Not your keys, not your coins", „don't trust, verify", "staple Satoshis" — werden als Mantra eingeführt und konsequent wiederholt.
- **Metaphern für Technisches**: Anschreiben-lassen in der Bar (Verbindlichkeitstransaktionen), Portemonnaie mit Scheinen und Münzen (UTXOs), Litfaßsäule (offene Blockchain), Vogelperspektive (Diagramme). Immer genau eine Metapher pro Konzept, konsequent durchgehalten.

## Ansprache

- **Durchgängig „Du"** (informell), innerhalb des Satzes kleingeschrieben ("du", "dein"), nur am Satzanfang groß.
- Der Leser wird aktiv mitgenommen: rhetorische Fragen ("Was ist das? Warum ist er so wichtig?"), Aufforderungen ("Sehen wir uns das an …", "Stell dir vor …"), direkte Reaktion auf Gedanken des Lesers ("Aber Moment …", "Ok, so viel zum …").
- Der Autor ist `ich`; gemeinsame Community-Aktivitäten sind `wir` (Einundzwanzig-Gruppen, Relays, Shop).
- **Keine Floskel-Abschlüsse**: Kein "Herzlichen Glückwunsch, du hast es geschafft". Fazit-Kapitel geben konkrete Best Practices und Ausblicke auf Folgeartikel ("In kommenden Artikeln tauchen wir noch tiefer ein").

## Schreibstil

- **Satzstruktur**: Kurze Hauptsätze, klare Subordination. Typisch: Hauptsatz + Doppelpunkt + erläuternder Nachschub. Vielschichtiges wird in Stufen aufgeschlüsselt, eine Informationsebene pro Absatz.
- **Soft-Umbrüche**: Im Markdown laufen Gedankengänge oft über mehrere Zeilen (einzelne Umbrüche ohne Leerzeile), die im gerenderten Fließtext einen Absatz ergeben. Erst eine Leerzeile erzeugt einen echten Absatz.
- **Aufbau eines Artikels**: `# H1-Titel` (Muster "Thema: Untertitel bzw. Frage"), dann in kurzes Intro (2–4 Absätze) mit der "Was du hier lernst"-Zusammenfassung eingearbeitet; danach `##`-H2-Kapitel in logischer Reihenfolge, `###`-H3 für Schritte und Unterthemen; abschließend ein Fazit/Best-Practices-Abschnitt mit Ausblick.
- **Listen**: Stichlisten mit **fett** markiertem Begriffs-Signal am Anfang ("**Kapazität**: …") für Erklärungen und Feature-Überblicke; nummerierte Listen für Schrittfolgen, gern mit `**Was du brauchst:**` vorab.
- **`**bold**`**: Fachbegriffe bei der ersten Erwähnung sowie hervorgehobene Kern- und Ermahnungssätze.
- **`==Highlight==`**: Die Kern-Aussagen des Artikels (1–4 pro Artikel), z. B. `==Not your keys, not your coins==`, `=="meine Daten, mein Server"==`.
- **Container**: `:::tip Titel` für Zusatzinfos/Praktisches, `:::warning Achtung!` für handlungsrelevante Warnungen (Sicherheit, Datenverlust).
- **`<kbd>`**: UI-Elemente und Menüpfade (`<kbd>File › Settings</kbd>`, mit `›` als Separator).
- **Tabellen**: Für Gegenüberstellungen (Geräte, Optionen, Methoden).
- **Abbildungen**: Screenshots und Diagramme mit aussagekräftigen, deutschsprachigen Alt-Texten; Dateien lokal im Artikelordner (`./name.png`).
- **Fachbegriffe**: Englische Begriffe bleiben meist englisch (KYC, Coin Control, Watch-Only, air-gapped) und werden verständlich eingeführt bzw. ins [Glossar](https://hey-bitcoin.de/glossar/) verlinkt. Deutsche Fachwörter werden aktiv geprägt ("Selbstverwahrung" statt "Self-Custody").
- **Aktualität**: Statt "aktuell" bei Versions- und Preisangaben lieber "Stand: <Monat Jahr>".

---

# Social-Media-Vorschaubilder (OG-Images)

## Zielsetzung

Für jeden Artikel entsteht ein einheitlich gestyltes Vorschaubild, das beim Teilen auf Social Media als Link-Preview angezeigt wird. Konsistenter Stil = Wiedererkennungswert über alle Artikel hinweg.

## Format und Ablage

- **Ablage (Konvention)**:
  - Artikel: `docs/anleitung/<artikel-key>/image.jpg` — per `node scripts/image.mjs <artikel-key>`.
  - Sonderseiten: Datei direkt im jeweiligen Seitenordner (`index` → `docs/image.jpg`, `faq` → `docs/faq/image.jpg`, `glossar` → `docs/glossar/image.jpg`, `links` → `docs/links/image.jpg`, `anleitung` → `docs/anleitung/image.jpg`). Kein Frontmatter, das Build-Plugin übernimmt die Verkabelung.
- **Auflösung**: Nano Banana liefert bei 16:9 typischerweise 1376×768 px — geringe Abweichung vom OG-Standard 1200×630 (1.91:1) ist akzeptiert; Social-Plattformen skalieren/croppen das verlustarm.
- **Fehlende Bilder prüfen/generieren**: `node scripts/missing-images.mjs` (Batch für alle Artikel und Sonderseiten ohne Bild), `--dry` nur zum Auflisten.
- **Metadaten**: Nach der Generierung entfernt `scripts/image.mjs` per `exiftool` alle in der Datei gespeicherten Metadaten (inkl. KI-/C2PA-Provenance-Tags, falls vorhanden); fehlt `exiftool`, warnt das Script nur und fährt fort.
- **Dev/Build-URLs**: Absolute `og:image`/`og:url` werden über `baseUrl` in `docs/.vuepress/config.ts` gebaut — im Dev-Server (`NODE_ENV=development`) zeigt sie auf `localhost:8080` (anpassbar via `DEV_BASE_URL`), im Build auf die Production-Domain.

## Generischer Basis-Prompt (site-wide Stil)

Der Prompt bleibt immer identisch; nur der `{SCENE}`-Teil wird mit der "Verfeinerung" des jeweiligen Artikels befüllt (Tabelle unten).

Hinweis: Der Prompt ist die einzige Quelle für `scripts/image.mjs` — das Script liest diesen Block direkt aus dieser Datei, deshalb müssen die Markierung `text` und die Zeile `SCENE: {SCENE}` exakt erhalten bleiben.

```text
Flat vector illustration for a social media link preview, wide 1200x630 format,
no text, no lettering, no logos except the Bitcoin coin.

STYLE (always identical):
- Clean minimal flat design with subtle geometric shapes, crisp vector lines,
  generous negative space, one strong central focal point slightly left of center.
- Dark near-black background (#0f1216) with a very subtle warm vignette,
  so the glowing accents dominate.
- Exact color palette: Bitcoin orange gradient (#f9aa4b to #f7931a),
  soft amber highlights, white/off-white (#f5f2ec) shapes, one restrained
  steel-blue secondary tone (#4da3ff) only where cold/tech contrast is wanted.
- Recurring brand motif in every image: a glowing Bitcoin coin —
  a flat orange circle with a white tilted "₿" — as anchor element.
- Unified lighting: the orange brand glow illuminates the scene from one side,
  edges of shapes catch a thin warm rim light.
- Playful, warm and reassuring mood (sovereign, calm, competent —
  never dystopian, scary or sterile); flat design, no 3D render, no photo,
  no glossy gradients on shapes except the exact coin gradient.

SCENE: {SCENE}

COMPOSITION:
- One clear metaphorical scene, not a collage; at most 3–4 large elements.
- Everything readable as a thumbnail at 400px width.
```

## Artikelliste: Kurzbeschreibung + `{SCENE}`-Verfeinerung

Die Kurzbeschreibung fasst die Kerninhalte zusammen (auch als Metadaten-Grundlage nutzbar); die Verfeinerung beschreibt das Bildmotiv für `{SCENE}`.

### Die ersten Schritte

| Artikel | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **bitcoin-kaufen-was-beachten** | Pragmatischer Einstieg: Satoshis stapeln per Sparplan; zentrale Börsen (KYC-Fallstricke, nur Zwischenstation) vs. dezentrale Börsen (Bisq); Bitcoin verdienen/tauschen als beste Privatsphäre-Option. | A hand gently pouring a stream of small glowing coin shapes into a funnel above the glowing Bitcoin coin, beside it a neat pyramid of stacked tiny coins ("Sats"); in the shadowed background, half hidden, a faceless bank-machine silhouette. |
| **bitcoin-selber-verwahren** | Warum "Not your keys, not your coins" gilt: Selbstverwahrung als Paradigmenwechsel, Vorteile, Risiken und Verantwortung; Hardware-Wallet, Seed Phrase, eigene Entropie per Würfeln als sicherer Einstieg. | A glowing Bitcoin coin resting in an open human hand; above it a small set of dice showing actual roll results; in the background a vault door standing open, a lone key silhouette hovering over the coin. |
| **seed-phrase-backup** | Seed Phrase als einziges Vermögen: drei Säulen (Verfügbarkeit, Robustheit, Geheimhaltung), Methoden von Papier über Stahl bis Shamir; "ein Backup ist kein Backup" — Redundanz an getrennten Orten. | Two identical steel plates punched with rows of word-like dots, one on a home shelf and one half-buried in garden soil, connected by a thin glowing orange thread; behind them a paper sheet quietly crumbling to ash. |
| **bitcoin-wallet-grundlagen** | Schlüsselkonzepte nach der Selbstverwahrung: Accounts als Unterkonten, Derivation Paths als Stammbaum der Seed Phrase, Passphrase als 13./25. Wort für Wärme- oder Krypto-Trennung. | A stylized tree rooted at the glowing coin, branches forking into several small sub-account tiles; one branch guarded by a tiny padlock holding a single extra 25th leaf, an orange light rising from root to crown. |
| **utxo-management** | UTXOs als "Scheine" des Wallets: Coin Control und Labels, Konsolidierung für niedrige Gebühren, UTXO-Trennung zum Schutz der Privatsphäre. | A leather wallet shown in cutaway, filled with neat paper-bill shapes of different sizes in warm orange tones; a tiny broom sweeping out crumb-like dust particles; a soft blue magnifier floating above. |
| **finanzielle-privatsphaere** | Warum Privatsphäre jeden angeht: die offene Blockchain, "nichts zu verbergen" als gefährlichster Fehlschluss; Alltagsbeispiele (Einkommen, Einkäufe); UTXO-Management als Pflichtprogramm, nicht Paranoia. | A large street billboard openly pinned with glowing bank-account statements, watched by small silhouettes; one silhouette calmly shielding its own small coin behind its back, lit warm orange instead of the cold blue streetlight. |

### Der Praxisstart

| Artikel | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **bitcoin-fullnode** | Eigene Fullnode mit StartOS auf stromsparendem Mini-PC: Installation von StartOS und Bitcoin Core, Block Download als Geduldsprojekt (3–10 Tage), Indexer und Mempool als empfohlene Zusatzdienste. | A small book-sized mini-PC on a living-room shelf, the glowing coin hovering above it and a thin beam connecting it to a stylized network globe; a tiny green dot on the device indicates that it is running. |
| **sparrow-wallet** | Professionelle Desktop-Wallet für Selbstverwahrung: Watch-Only-Import von Hardware-Wallets, Coin Control über den UTXO-Tab, Labels, Anbindung an die eigene Node mit/ohne Indexer, Fee/Privacy Optimierungsstrategien. | A delicate orange sparrow perched on a laptop displaying an abstract UTXO grid; a thin wire runs from its feet down to the small humming node box, the screen glow warming the bird's breast. |
| **bitcoin-fullnode-mit-wallet-verbinden** | Video-Anleitungen: Sparrow mit der eigenen Fullnode verbinden (RaspiBlitz und Umbrel). | The orange sparrow again, this time holding one wire-end in its beak while the other end plugs into the small node box; a faint translucent play-button triangle glowing in the background. |
| **onchain-privatsphaere** | Chain-Analyse-Heuristiken von Analysten und ihre Grenzen sowie Gegenmittel: CoinJoin, PayJoin, Silent Payments; Werkzeuge, praktische Strategien und Grenzen durch Börsen/Regulierung. | Many dark footprints scattered across a flat surface, converging into neat data-trail arrows; one set of footprints dissolving into a swirl of identical orange coins, the trail unreadable; a large magnifying glass hovering above with nothing left to magnify. |

### Multi-Signatur mit SeedSigner und Specter-DIY

| Artikel | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **seedsigner-hardware** | SeedSigner als komplett offline arbeitender DIY-"Bitcoin-Computer" aus Standardkomponenten (Raspberry Pi Zero, Kamera, kleines Display); Eigenschaften und Einkaufsliste. | A tiny friendly DIY device made of a small screen, camera lens and buttons, shown in exploded view with its bare standard components floating neatly apart; seed-like droplets falling into it from a small orange envelope. |
| **seedsigner-software-seedqr** | Praxis: Software-Image herunterladen und verifizieren, Betrieb auf dem Gerät; SeedQR als QR-Code-Repräsentation der Seed Phrase. | The tiny DIY device projecting a large crisp QR-code square built from small orange pixel blocks; the same seed-like droplets neatly tucked into the QR pattern as tiny round dots. |
| **specter-diy-hardware-wallet** | Open-Source-Selbstbau-Hardware-Wallet aus Standard-Elektronik: air-gapped per QR-Code, von Grund auf für MultiSig ausgelegt, Seed bevorzugt auf SmartCard; DIY vs. Shield-Variante. | A hand-built open-hardware device with its clear case lid off, revealing plain standard electronics beneath; a bank-card-shaped smartcard sliding into a slot while three distinct key silhouettes wait in labeled trays beside it. |
| **multisig-bitcoin-wallet** | Theorie: MultiSig beseitigt den Single Point of Failure des einzelnen Seeds — m-of-n-Schlüsselkonzepte, Vor- und Nachteile, Backup-Strategien für die Schlüsselverteilung. | Three distinct glowing keys of different shapes (dice, steel plate, bank card) hovering around a central vault; any two of them fit together into one orange keyhole shape that opens the door, while the third floats alone. |
| **multisig-wallet-mit-sparrow** | Praxis: 2-von-3-MultiSig mit Sparrow Wallet, SeedSigner und Specter-DIY; air-gapped Workflow per QR-Code und Webcam, PSBTs, Empfangen und Senden, Backup der Walletdatei. | The orange sparrow overseeing a tidy workbench where the tiny DIY device and the open self-built wallet exchange crisp QR-code squares via a laptop webcam; three keys sitting in three labeled trays. |

### Lightning Netzwerk

| Artikel | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **lightning-network-zahlungskanal** | Lebenszyklus eines Zahlungskanals: Eröffnungs- und Verbindlichkeitstransaktionen ("Anschreiben lassen in der Bar"), kooperative und erzwungene Schließung, 1000-Block-Strafmechanismus bei Betrugsversuchen. | Two glass tubes forming an open channel between two small circles, orange liquid sloshing back and forth inside; one tube being gently capped shut, while a tiny gavel hovers over a stale, cracked tube. |
| **lightning-network-routing** | Routing über fremde Kanäle hinweg: Kapazität und Liquidität als entscheidende Faktoren, Kanal-Balance, Gebührenbasierte Wegfindung, Sichtbarkeit für Routing-Nodes. | A stylized network of glowing tubes connecting several node circles; one route lights up bright orange while the rest stay dark; a small fill-level gauge on each tube, one empty tube being bypassed by a longer detour. |
| **lightning-network-privatsphaere** | Was Lightning-Nutzung preisgibt (Kanal-Events on-chain, Sicht der Routing-Nodes) und wie man schützt: Onion-Routing, eigene Node, bewusster Umgang mit Kanal-Transaktionen. | The tube network again, but the sender circle wrapped in layered onion rings of warm orange light; distant observer nodes see only blurred arrows; one observer isolated on a small dark island, out of focus. |

### Tails OS

| Artikel | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **tails-os-privatsphaere-betriebssystem** | Amnesisches Live-OS vom USB-Stick: vergisst alles beim Herunterfahren, Tor by default, keine Spuren auf der Festplatte; Einsatz bei höchsten Sicherheitsanforderungen (Journalismus, Whistleblowing, Bitcoin auf fremden Geräten). | A computer quietly dissolving into drifting pixel-dust as it powers down, while a soft broom sweeps traces off a shadowed drive; only a small USB stick remains, glowing faintly, linked to a tiny onion-ring network symbol. |
| **tails-os-sparrow-wallet** | Sparrow persistent unter Tails installieren und nutzen: Persistent Storage nur für Watch-Only-Wallets, Labels und Konfiguration — private Schlüssel und Seeds bleiben strikt draußen. | The orange sparrow inspecting a labeled suitcase that contains only harmless items (a tiny screen, label tags, an address list); three key silhouettes must stay outside, drifting away on a small floating cloud. |
| **tails-os-veracrypt-digitales-backup** | Digitale Seed-Backups, kontrollierbar gemacht: air-gapped Tails + VeraCrypt-Container als Ergänzung (nicht Ersatz) zu Metall-Backups; Anwendungsfälle und Risiken digitaler Backups. | A password-protected vault box glowing warm orange on a dark desk, standing beside two sturdy steel plates; a discreet thumb drive slipping into a coat pocket near passport and ticket silhouettes. |

### Sonstiges

| Artikel | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **software-verifizieren** | Warum und wie man Bitcoin-Software verifiziert: Hashes vergleichen, PGP-Signaturen prüfen, Fingerabdrücke abgleichen — "Kontrolle geht über Vertrauen", gehört zu jeder Installation und jedem Update dazu. | A small magnifying glass examining the ridge pattern of a fingerprint-shaped software package; two matching fingerprint stamps glowing orange, while a forged copy in the corner dissolves into softly blue-tinted dust. |
| **vpn-leitfaden** | VPN als digitales Grundwerkzeug: Funktionsweise, Nutzen und Grenzen, Auswahlkriterien für seriöse Anbieter, Rothberger-Szenarien; Maximalschutz durch VPN-Integration auf Router-Ebene. | A dark tunnel of layered protective rings connecting a small laptop silhouette to a friendly server tower in the distance; invasive cables shattering into confetti at the tunnel entrance; a tiny home router standing guard in front. |
| **self-hosting** | "Meine Daten, mein Server": Bewährte Open-Source-Apps für den Umzug aus der Cloud (Immich, Nextcloud, Vaultwarden, Paperless, Jellyfin, Home Assistant, Pi-hole …), Hardware-Basics, stückweiser Umzug, Backups und Sicherheit. | A cozy bookshelf-like server cabinet in a warm home corner; app icons sitting like friendly pets in its cubbies, thin wires leading to laptop, phone and TV; distant corporate clouds outside the orange glow fading into faint grey outlines. |
| **grapheneos-sicherheit-privatsphaere** | Smartphone-Souveränität: Chatkontrolle und DSA als konkrete Bedrohung; GrapheneOS als gehärtetes Android mit Sandbox, Sensors-Off und üblicher App-Kompatibilität. | A smartphone standing upright like a small fortress on a pedestal, its privacy switches glowing orange; app-shaped small birds flying freely through open windows; in the cold grey background a pair of binoculars finds nothing left to see. |
| **nostr-dezentrale-twitter-alternative** | Nostr als offene Signatur- und Nachrichten-Schicht: Schlüssel statt Accounts, Relays, Zaps per Lightning, NIP-Standards, eigene Relay-Infrastruktur; Anwendungen von Messaging bis Workspace (BitChat, White Noise, Buzz). | A loose constellation of glowing relay-stars connected by thin lines, note-shaped cards flying freely between them; at the edge a toppled, overgrown monolith tower, the orange light of one star casting it into shadow. |
| **bitcoin-fullnode-raspberry-pi-4** | Legacy-Artikel (nur eingeschränkt empfohlen): Einkaufsliste und Zusammensetzung einer Fullnode auf dem Raspberry Pi 4, Verweis auf den modernen Fullnode-Artikel. | A beloved little circuit-board hero with cables standing proudly on a shelf, holding up the glowing coin and slightly sweat-dropping from overload; a newer, larger box waiting quietly in the shadow beside it. |

### Sonderseiten (keine Artikel)

Diese Seiten bekommen ihr `image.jpg` wie die Artikel direkt in den jeweiligen Seitenordner (siehe Konvention oben; Generierung via `scripts/image.mjs <key>`):

| Seite | Kurzbeschreibung | `{SCENE}`-Verfeinerung |
|---|---|---|
| **index** | Homepage „Hey Bitcoin!“: persönliche Einstiegsside des Autors – Themenrundgang Bitcoin, Souveränität, Privatsphäre, Datensicherheit und Self-Hosting; Einladung in den Kaninchenbau. | The glowing Bitcoin coin rising like a warm sunrise over a calm, stylized silhouette of a cozy home with a tiny server rack in its window; soft rays of orange light reaching the viewer. |
| **anleitung** | Übersichtsseite aller Anleitungen in Lernpfaden: von den ersten Schritten über Praxisstart, MultiSig, Lightning und Tails OS bis zu allgemeinen Werkzeugen. | An open glowing guidebook on a dark desk, fanned chapter-marker chips rising from its pages and arranging into a neat ascending path of small waypoints, freshly lit by the orange glow. |
| **faq** | FAQ-Sammlung: kompakte Antworten auf häufige Fragen rund um Bitcoin, Souveränität und Privatsphäre. | Two round speech-bubble shapes side by side: the left one holding only silent dot-particles, the right one transforming into a warm glowing Bitcoin coin — question meets plain answer. |
| **glossar** | Glossar geprüft: verständliche Begriffserklärungen (KYC, UTXO, Seed Phrase und mehr), verlinkt aus allen Artikeln. | A fanned stack of small index cards on a desk, each showing one abstract circular icon instead of letters — a coin, a padlock, a network dot — all softly lit from one warm orange side. |
| **links** | Linkliste: kuratierte Verweise auf Werkzeuge, Projekte und Anbieter rund um Bitcoin und Souveränität. | A calm constellation of small connected node-dots radiating from one glowing central hub, thin golden-link lines curving outward like curated signposts on a dark plane. |

---

## Workflow für neue Artikel (KI-Checkliste)

1. **Outline**: Struktur nach "Aufbau eines Artikels" entwerfen; passende Nachbarartikel für Querverweise und den Learnings-Pfad bestimmen.
2. **Schreiben**: "Du"-Ton, `==Highlight==`-Kernsätze, `:::tip`/`:::warning`-Container, `<kbd>`-Menüpfade, Glossar- und Artikel-Links, ggf. "Stand:"-Angaben. Sidebar in `docs/.vuepress/config.ts` und Eintrag in `docs/anleitung/README.md` nicht vergessen.
3. **Generieren**: `node scripts/image.mjs <artikel-key>` (legt `docs/anleitung/<artikel-key>/image.jpg` an); für mehrere fehlende Bilder `node scripts/missing-images.mjs`.
4. **Einbinden**: nichts weiter nötig — das Build-Plugin (`ogImagesPlugin` in `docs/.vuepress/config.ts`) setzt automatisch `og:image`; Sidebar in `docs/.vuepress/config.ts` und Eintrag in `docs/anleitung/README.md` trotzdem pflegen.
