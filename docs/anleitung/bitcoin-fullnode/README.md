# Deine eigene Bitcoin Fullnode

## Warum der eigene Node kein Luxus, sondern notwendig ist

Stell dir vor, du nutzt Bitcoin, vertraust dabei aber blind den Aussagen anderer.
Du fragst irgendwen: "Ist diese Transaktion gültig? Ist dieser Block korrekt? Wie hoch ist mein Kontostand wirklich?" – und nimmst die Antwort einfach hin.
Klingt komisch und riskant? Genau das ist es, wenn du Bitcoin ohne eigenen Node verwendest.

Nutzer ohne eigenen Node verlassen sich auf öffentliche Server, welche in ihren Wallets voreingestellt sind.
Das ist bequem, aber es untergräbt die fundamentalen Versprechen von Bitcoin: ==Souveränität, Sicherheit und Privatsphäre==.
Dein eigener Bitcoin-Node ist das technische Fundament, um diese Versprechen einzulösen.
Er ist kein technisches Spielzeug für Enthusiasten, sondern **die logische Konsequenz der Entscheidung, Bitcoin wirklich zu besitzen.**

### Die drei Säulen der Souveränität

Warum lohnt der Aufwand? Ein eigener Node bringt dir drei entscheidende Vorteile:

1. **Vertrauenlosigkeit & Sicherheit:**
  Dein Node führt das Bitcoin-Protokoll komplett eigenständig aus. Er validiert jede Transaktion und jeden Block nach den gleichen unveränderlichen Regeln. Du akzeptierst nur, was diesen Regeln entspricht.

    **Praktisches Beispiel:** Wenn ein Miner versuchen würde, die 21-Millionen-Grenze zu überschreiten oder Transaktionen zu fälschen, würde dein Node diesen Block sofort ablehnen. Du bist vor Betrug geschützt, ohne jemandem vertrauen zu müssen.

2. **Privatsphäre:**
  Wenn deine Wallet (z.B. [Sparrow](../sparrow-wallet/)) sich mit einem Server eines Dritten verbindet, um Blockchain-Daten abzurufen, offenbarst du diesem Server neben deiner IP auch alle abgefragten Bitcoin-Adressen. Das ist ein massiver Verlust an Privatsphäre.

    **Die Lösung:** Dein eigener Node kennt deine Wallet-Daten ohnehin. Alle Abfragen bleiben in deinem lokalen Netzwerk. Niemand kann deine Transaktionen protokollieren oder analysieren.

3. **Dezentralisierung & Zensurresistenz:**
  Jeder zusätzliche, unabhängige Node, über den man seine eigenen Transaktionen abwickelt, macht das Bitcoin-Netzwerk stärker und widerstandsfähiger gegen Zensur oder Angriffe. Indem du einen Node betreibst und diesen wirtschaftlich nutzt, trägst du aktiv zur Dezentralisierung des Netzwerks bei.

### Von kompliziert zu easy-peasy: Die Node In A Box-Revolution

Was früher stundenlange Kommandozeilen-Frickelei erforderte, ist heute um ein vielfaches einfacher geworden:
Mit [StartOS](https://docs.start9.com), [Umbrel](https://umbrel.com/umbrelos) oder [Raspiblitz](https://docs.raspiblitz.org/) stehen dir gute und nutzerfreundliche Betriebssysteme zur Verfügung.
Sie sind darauf ausgelegt, einen vollwertigen Bitcoin-Node mit wenigen Schritten einzurichten – inklusive aller nützlichen Zusatzdienste.

In diesem Guide führen wir dich Schritt für Schritt durch:

- **Die optimale Hardware:** Welche Komponenten du brauchst.
- **Die einfache Installation:** Wie du StartOS und Bitcoin Core zum Laufen bringst.
- **Die Integration:** Wie du deine Wallet mit deinem eigenen Node verbindest.

Leg los und mach dich finanziell souverän. Dein Node wartet darauf, gestartet zu werden.

## Die Hardware-Einkaufsliste

Die gute Nachricht: Du brauchst kein High-End-Gaming-Computer.
Die schlechte Nachricht: mit einem uralten Laptop oder einem Raspberry Pi 4 wirst du heute jedoch auch nicht mehr glücklich.
Die Bitcoin-Blockchain wächst stetig, und die Anforderungen für eine Node mit Zusatzdiensten haben sich in den letzten Jahren weiterentwickelt.
Diese Einkaufsliste hilft dir, ein zukunftssicheres Setup aufzubauen.

### Anforderungen und Überlegungen für einen modernen Node (2025)

| Komponente                | **Empfohlenes Minimum** | **Warum?** |
| :---                      | :---                    | :---       |
| **CPU (Prozessor)**       | Intel i5 oder AMD Ryzen 5 (ab Gen 8) | Die anfängliche Synchronisation (**Initial Block Download, IBD**) ist sehr CPU-intensiv. Eine schwache CPU braucht Wochen statt Tage. |
| **Arbeitsspeicher**       | 16 GB RAM               | Je mehr Extraservices du betreiben möchtest (bspw. deinen eigene Mempool.space Instanz), umso mehr solltest du nehmen. 16 GB sind ausreichend, 32 GB groß dimensioniert. |
| **Festplatte**            | 2 TB SSD | **Die SSD ist nicht verhandelbar.** Eine HDD ist 10-20x langsamer – der IBD würde ewig dauern. Die Blockchain ist ~700 GB groß, 2 TB geben Luft für Jahre. NVMe ist schneller als SATA. |
| **Stromverbrauch**        | ~20 W (Mini-PC)<br>~100 W (Laptop)   | Ein Mini-PC kostet im Dauerbetrieb nur **ca. 20 € pro Jahr**. Ein alter Laptop leicht das 5-fache. |
| **Netzwerk**              | Kabelgebunden        | Eine kabelgebundene LAN-Verbindung ist stabiler und zuverlässiger. Dein Node sollte nicht wegen einer schlechten WLAN-Verbindung ausfallen. |

### Option 1: Dedizierter Mini-PC <Badge type="tip" text="Empfehlung" vertical="middle" />

Dies ist die **ideale Lösung** für die allermeisten Nutzer.
Ein kleiner, leiser und extrem effizienter Computer, der nur eine Aufgabe hat — dein Bitcoin-Node zu sein:

- **Energieeffizient:** Läuft für nur wenige Cent am Tag.
- **Leise & kompakt:** Ist unauffällig in einer Ecke oder einem Schrank platziert.
- **Preis-Leistung:** Eine einmalige Investition von **ca. 300-500 €** für Jahre sorgenfreien Betriebs.
- **Zweckgebunden:** Keine Risiken durch anderen Software, das Gerät wird nur für den Node genutzt.

**Konkrete Einkaufsliste:**

1. **Mini-PC:** Günstig sind wiederaufbereitete Geräte wie z.B. **Dell Optiplex 7050**, **Lenovo Thinkcenter M720q** oder vergleichbare Modelle wie ein Intel NUC liegen preislich um die 200 EUR.
2. **Separate SSD:** Oft ist es günstiger, einen Mini-PC mit kleiner SSD zu kaufen und diese dann gegen eine große, eigene auszutauschen.
   Beispiele wären eine **Samsung 970 Evo Plus NVMe**, **Samsung 870 EVO SATA** oder **Crucial P3**.

### Option 2: Ein alter Laptop <Badge type="warning" text="Kompromiss" vertical="middle" />

Du hast einen alten Laptop rumliegen? Das kann ein **guter Startpunkt für erste Gehversuche** sein.

**Vorteile:**

- **Kostenneutral:** Du musst nichts Neues kaufen.
- **All-in-One:** Display, Tastatur und Akku (als unterbrechungsfreie Stromversorgung) sind bereits integriert.

**Nachteile:**

- **Ineffizient:** Verbraucht deutlich mehr Strom als ein Mini-PC.
- **Unbequem:** Ein herumliegender Laptop ist keine elegante Dauerlösung.

### Option 3: Der Single-Board-Computer <Badge type="danger" text="Notlösung" vertical="middle" />

Vor einigen Jahren war der Raspberry Pi die Standard-Empfehlung.
Heute sind die Anforderungen höher und Single-Board-Computer vom Preis-Leistungs-Verhältnis auch nicht mehr die klare Wahl.

- **Raspberry Pi 4/5 mit 8 GB RAM:** Es ist **möglich**, aber der IBD ist sehr langsam und die Performance an der Grenze.
    Als Notlösung machbar, aber dann unter Verzicht auf Extraservices.
- **Probleme:** Häufigere Synchronisationsverzögerungen, besonders unter Last.
    Einen Lightning-Node sollte man damit nicht mehr betreiben.
- **Einschätzung:** Die Preise für Pi's sind stark gestiegen, während preiswerte Mini-PCs mehr Leistung für ähnliches Geld bieten.

:::tip Zusammenfassung und Empfehlung
Dein Node läuft **24/7**, es geht um Stabilität und Effizienz.

**Investiere in einen energieeffizienten Mini-PC mit mindestens 16 GB RAM und einer 2 TB SSD.**

Diese einmalige Investition gibt dir **Jahre** lang ein sicheres, schnelles und souveränes Bitcoin-Fundament, das alle fortgeschrittenen Features (wie einen Lightning-Node, eigener Mempool.space Instanz und Indexer) problemlos mitmacht.
Du umgehst einige Fallstricke und sparst langfristig sogar Stromkosten.
:::

## StartOS vs. Umbrel vs. RaspiBlitz

Es gibt mehrere "Node-in-a-Box"-Lösungen mit jeweils unterschiedlichem Fokus und Stärken.
Wir werden uns im weiteren Verlauf StartOS ansehen, dennoch möchte ich die Unterschiede der verschiedenen Projekte kurz beleuchten.
Hier die wichtigsten Punkte auf einen Blick:

|  | **StartOS** | **Umbrel** | **RaspiBlitz** |
| :--- | :--- | :--- | :--- |
| **Zielgruppe** | **Einsteiger & Fortgeschrittene**, Fokus auf Stabilität und Benutzerfreundlichkeit | **Einsteiger**, sehr beliebt und benutzerfreundlich | **Fortgeschrittene**, Fokus auf Education und DIY |
| **Installation** | **Einfach** (Image auf USB-Stick, booten, fertig) | **Sehr einfach** | **Mittelmäßig** (mehr manuelle Schritte) |
| **Hardware-Support** | **Breit** (x64 Mini-PCs, Laptops) | **Breit** (x64 Mini-PCs, Raspberry Pi) | **Eingeschränkter** (primär Raspberry Pi) |
| **Philosophie** | "It just works" – Stabilität und Souveränität | Maximale Benutzerfreundlichkeit und großer "App Store" | "Lerne Bitcoin by doing" – viel Transparenz |
| **Kurzfassung** | **Meine Empfehlung** für ein sorgenfreies, stabiles Setup | Viele Apps mit Anwendungsfällen, die über Bitcoin hinaus gehen | Ideal für Tüftler, die mehr von den Details verstehen wollen |

:::tip Warum ich StartOS empfehle

Es bietet die perfekte Balance aus Einfachheit und stabiler Performance.
Die wichtigsten Zusatzdienste wie eigene Mempool.space Instanz, verschiedene Indexer und Lightning-Implementierungen werden unterstützt.
Das Ganze lässt sich mit einer benutzerfreundlichen Web-Oberfläche konfigurieren und bedienen.
Die Dienste laufen zuverlässig.
:::

## Installation von StartOS und Bitcoin Core

Folge diesen Schritten, um deinen Node in weniger als einer Stunde einzurichten — die anschließende Synchronisation dauert dann allerdings ein paar Tage.

### Schritt 1: StartOS installieren (Stand v0.3.5)

**Was du brauchst:** Deinen Mini-PC, einen USB-Stick (min. 8 GB), einen zweiten Computer für die Vorbereitung.

1. **Image herunterladen:** [Lade das neueste StartOS-Image](https://docs.start9.com/0.3.5.x/flashing-guides/) für deine Hardware herunter (in der Regel x86_64).

2. **USB-Stick vorbereiten:** Stecke den USB-Stick in deinen Computer.
    Lade ein Tool wie [BalenaEtcher](https://etcher.balena.io/) herunter und installiere es.
    Öffne Etcher, wähle das heruntergeladene StartOS-Image aus, wähle deinen USB-Stick und klicke auf "Flash!".

3. **Vom USB-Stick booten:** Stecke den vorbereiteten USB-Stick in deinen Mini-PC.
    Schließe Tastatur, Maus, Monitor und Netzwerkkabel an.
    Schalte den Mini-PC ein und drücke die Taste, um das Boot-Menü zu öffnen (oft F12, F10 oder ESC).
    Wähle deinen USB-Stick als Boot-Gerät aus.

4. **Installation durchführen:** Der StartOS-Installer startet, folge den Anweisungen:
    - Wähle deine Sprache und Tastatur.
    - Wähle die **2 TB SSD** als Installationsziel. **Achtung:** Hierbei werden alle darauf vorhandenen Daten gelöscht!
    - Vergebe ein sicheres Passwort für den Administrator-Zugang.
    - Der Installer kopiert nun StartOS auf deine SSD und startet neu.

### Schritt 2: Bitcoin Core über die StartOS-Oberfläche installieren

1. **StartOS aufrufen:** Nach dem Neustart zeigt der Mini-PC eine IP-Adresse aus deinem Heimnetzwerk an (z.B. `192.168.1.50`).
    Öffne einen Browser und gib diese IP-Adresse oder `https://startos.local` ein.
    Melde dich mit deinem Passwort an.

2. **Bitcoin Core installieren:** Du landest im "Home Screen" von StartOS.
    Klicke auf "Marketplace". Finde die App **"Bitcoin Core"** und klicke auf "Install".

3. **Konfiguration:** Es öffnet sich ein Konfigurationsfenster.
    Für den Anfang musst du **nichts ändern**.
    Die Standardeinstellungen sind perfekt.
    Klicke auf "Install".

4. **Geduld haben:** StartOS lädt nun Bitcoin Core herunter, richtet es ein und startet den Dienst.
    Der grüne Punkt neben "Bitcoin Core" zeigt an, wenn der Dienst läuft.

Jetzt beginnt der "Initial Block Download" (IBD).
Dies kann, abhängig von deiner Internetverbindung, **3-10 Tage dauern.**
Das ist völlig normal. Du kannst das Browser-Fenster schließen, der Node synchronisiert im Hintergrund weiter.

### Wie geht es weiter?

- **Status prüfen:** In der StartOS-Oberfläche siehst du unter "Bitcoin Core" den Synchronisationsfortschritt.
- **Zusatzdienste (optional, aber empfohlen):** Gehe zurück in den App Store und installiere:
  - **Electrum Server:** Wichtig, um deine Wallet (z.B. Sparrow) mit deinem Node zu verbinden.
  - **Mempool.space:** Ein Block Explorer und Fee-Schätzer, der auf deinen eigenen Daten läuft.
- Komm in die [**Einundzwanzig StartOS-Gruppe auf Signal**](https://signal.group/#CjQKIKqlRP8ZfdXx1S9jVvKyPKm_czYtbf-3SXZ4rm2hz9vHEhBvKli2gLD6iAVesjGa3LCD): Hier kannst du dich mit anderen Nutzern austauschen und bleibst auf dem Laufenden.

Dein souveräner Bitcoin-Node ist bald betriebsbereit!
In den nächsten Kapiteln erfährst du, wie du ihn [mit deiner Wallet verbindest](../bitcoin-fullnode-mit-wallet-verbinden/) und mit [Sparrow](../sparrow-wallet/) nutzen kannst.
