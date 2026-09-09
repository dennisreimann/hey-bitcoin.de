# On-Chain-Privatsphäre: CoinJoin, PayJoin und mehr

Die Bitcoin-Blockchain ist ein offenes Kassenbuch:
[Warum das jeden angeht](../finanzielle-privatsphaere/) und wie du mit [UTXO-Management](../utxo-management/) und Coin Control die Grundlagen für bessere Privatsphäre legst, ist bereits in früheren Artikeln beschrieben.
Dieser Artikel baut darauf auf und beantwortet die nächste Frage:
Wie schützt du deine Privatsphäre direkt auf der Blockchain?

Wir sehen uns an, wie Chain-Analysten aus den öffentlichen Daten Profile erstellen und mit welchen Heuristiken sie Adressen zu Personen zusammenführen.
Dann klären wir die Begriffe, mit denen sich Privatsphäre messen lässt und arbeiten uns durch die drei wichtigsten Techniken: **CoinJoin**, **PayJoin** und **Silent Payments**.
Ebenso blicken wir auf die Werkzeuge, praktische Strategien und die Grenzen, die dir Börsen und Regulierung heute setzen.

## Das Problem: Datenpunkte auf der Blockchain

Jede Bitcoin-Transaktion offenbart öffentlich und dauerhaft ihre Inputs, Outputs, Beträge und den Zeitpunkt.
Adressen sind nur pseudonym und sobald **ein einziger Datenpunkt** deine Identität mit einer Adresse verknüpft (KYC-Kauf, Teilen einer Spendenadresse, Zahlung an einen Bekannten), kann die gesamte Historie dieser Adresse und aller damit zusammengeführten Adressen nachvollzogen werden.

Chain-Analyse-Firmen wie Chainalysis oder CipherTrace haben genau darauf ihr Geschäft aufgebaut:
Sie durchforsten die Blockchain, wenden Heuristiken an, um Adressen zu Clustern zusammenzuführen, und verkaufen diese Erkenntnisse an Börsen, Banken und Behörden.
Dein Pseudonym bricht also nicht durch einen einzelnen Fehler, sondern durch die **schrittweise Verknüpfung von Datenpunkten**.

## Die Heuristiken der Chain-Analyse

Eine Heuristik ist eine Daumenregel: Nicht beweisbar, aber in der Praxis so oft zutreffend, dass Analysetools darauf aufbauen.
Diese Regeln sind nicht vollkommen stichfest, aber für Analysefirmen reichen Wahrscheinlichkeiten, um Cluster zu vergrößern.
Hier die wichtigsten Heuristiken im Überblick…

### Common Input Ownership Heuristic

==Gibt eine Transaktion mehrere Inputs aus, nimmt man an, dass alle Inputs derselben Person gehören.==

Warum ist das so wahrscheinlich? Damit eine Transaktion gültig ist, muss **jeder Input einzeln mit dem Private Key signiert** werden.
Eine fremde Person bringt ihre Coins nicht freiwillig in deine Transaktion ein; mehrere Inputs in einer Transaktion stammen daher fast immer aus derselben Wallet.

Das wird dir spätestens beim Bezahlen von 0.3 BTC mit drei UTXOs von jeweils 0.1 BTC zum Verhängnis:
Hängt nur **ein** dieser UTXOs an deiner KYC-Identität, landet der gesamte Cluster im Profil.
Genau deshalb kommt [Coin Control](../utxo-management/#die-losung-coin-control-und-bewusste-utxo-auswahl) ins Spiel:
Wer bewusst entscheidet, welche UTXOs in eine Transaktion wandern und Quellen nicht vermischt, verhindert diese Verkettung von vornherein.

### Peel Chains: Wechselgeld und runde Beträge

Wenn du 0.15 BTC bezahlst, aber ein 0.2-BTC-UTXO ausgibst, entstehen zwei Outputs: der Zahlbetrag und das Wechselgeld.
Analysten nutzen zwei Faustregeln, um sie auseinanderzuhalten:

- **Runde Beträge** wie 0.15 BTC sind eher Zahlungen, ungerade Reste eher Wechselgeld.
- Das Wechselgeld fließt zurück in deine Wallet.
  Der nächste Zahlvorgang aus diesem Rest erzeugt eine **Peel Chain**:
  Eine Kette von Transaktionen, bei der sich von Schritt zu Schritt eine kleine Summe "abschält".
  Wer am Ende der Kette landet, kennt die Ausgabehistorie entlang der Kette.

### Adress-Wiederverwendung

Adressen sind für die einmalige Verwendung gedacht: Wallets erzeugen für jeden Empfang eine frische Adresse.
Wer eine Adresse mehrfach nutzt, verknüpft alle zugehörigen Transaktionen öffentlich miteinander und macht das Clustern trivial.
Das ist die simpelste, aber auch folgenreichste Schwäche.
Glücklicherweise schaffen [Silent Payments](#silent-payments) hier Abhilfe.

### Timing- und Betrags-Korrelation

Auch außerhalb der Transaktionsstruktur verrätst du dich:

- Werden Identität und Adresse auf einer Website, in einem Forum oder bei einer Spende öffentlich verknüpft, ist das Pseudonym gefallen.
- Kaufst du sofort nach einem Banküberweisungszeitpunkt ein, korreliert die Blockchain-Aktivität ggf. mit externen Daten.
- **Dust-Angriffe** schicken winzige Beträge an viele Adressen in der Hoffnung, dass Empfänger sie unbewusst konsolidieren.
  Damit wären per Common Input Ownership Heuristic wieder Cluster zusammenführbar.

:::tip Zusammengefasst:
Keine einzelne Heuristik enthüllt dich, aber **jede Transaktion ist ein Datenpunkt**, den Analysetools verketten.
Privatsphäre-Techniken zielen darauf, genau diese Verkettung zu unterbrechen.
:::

Da wir nun wissen, welche Datenlecks mit welchen Heuristiken ausgewertet werden, können wir uns ansehen, wie man diesen Schwachstellen begegnen kann…

## CoinJoin

Der Grundgedanke der ältesten und einflussreichsten Technik stammt von Greg Maxwell (2013):
Viele Parteien bauen gemeinsam eine einzige Transaktion, in der sich alle Outputs gleichen Betrags mischen.

Der Clou: ==Nach der Transaktion gibt es keinen Beweis mehr, welcher Input zu welchem Output gehört, denn die Signatur der Transaktion gilt für alle Teilnehmer gemeinsam.==
Die Common Input Ownership Heuristic greift hier bewusst ins Leere:
Die Inputs gehören tatsächlich mehreren Personen, die Regel ist schlicht falsch angewendet.
Und weil alle Zahl-Outputs denselben Betrag haben, versagt hier auch die Wechselgeld-Heuristik.

```:no-line-numbers
          ┌── Output 1.5 BTC ── Besitzer A (oder B, C, D …?)
Input A ──┤
Input B ──┼── Output 1.5 BTC ── Besitzer B (oder A, C, D …?)
Input C ──┤
Input D ──┘── Output 1.5 BTC ── Besitzer C (oder A, B, D …?)
              (+ Wechselgeld-Outputs und Gebühr)
```

CoinJoin ändert nicht die Historie deiner Coins, sondern **bricht die Verkettung nach vorne**:
Was vorher als dein Cluster sichtbar war, bleibt sichtbar — aber der gemischte Output lässt sich nicht mehr eindeutig zu dir zurückverfolgen.

Ein wichtiger Begriff dabei ist das **Anonymity Set** — die Menge der Kandidaten, unter denen sich der tatsächliche Besitzer eines UTXOs verbirgt:
Eine Adresse, die nur eine Person verwendet, hat den Anonymity Set 1.
Bei einem CoinJoin-Output unter 100 identischen Outputs liegt der Anonymity Set bei 100.
Ein Beobachter weiß nur, dass du einer dieser 100 Besitzer bist.

### Wasabi Wallet

Die bekannteste Desktop-App für CoinJoins ist [Wasabi Wallet](https://www.wasabiwallet.io/), die das [WabiSabi-Protokoll](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#wabisabi-protocol-step-by-step) implementiert:
Ein **Koordinator** orchestriert die Runde, bekommt die Inputs aber nur als verschlüsselte/blinde Zugangs-Berechtigungen zu sehen.
Der Koordinator kennt die Zuordnung von Inputs zu Outputs nicht, er kann eine Runde höchstens abbrechen (DoS), jedoch nicht stehlen.

Das bis dahin hinter Wasabi stehende Unternehmen zkSNACKs hat seinen Koordinator im Juni 2024 aufgrund von Rechtsunsicherheit abgeschaltet:
Die Wallet selbst wird als Open-Source-Software aktiv weiterentwickelt, erfordert heute aber die Auswahl eines **Dritt-Koordinators** in den Einstellungen.
Im Ökosystem haben sich mehrere unabhängige Koordinatoren etabliert, die in den Wallet-Einstellungen hinterlegt werden.
Die großen Koordinator-Runden erreichen typischerweise **70+ aktive Teilnehmer**, also einen Anonymity Set in ähnlicher Größenordnung.

**Pros:**

- Große, regelmäßig wiederkehrende Anonymity Sets durch strukturierte Runden
- Automatisierung: Die Wallet mischt im Hintergrund, auch über mehrere Runden ("Remixes")
- Offener Koordinatoren-Markt: Wechsel per Eintrag in den Einstellungen

**Cons:**

- Abhängigkeit von der Wahl des Koordinators (Vertrauen, Verfügbarkeit, Gebührenpolitik)
- Mining-Gebühren pro Runde plus ggf. Koordinator-Gebühr
- CoinJoin-Struktur ist on-chain erkennbar (mehr dazu im [Abschnitt zu Börsen](#borsen-und-compliance))

### JoinMarket

JoinMarket verfolgt einen anderen Ansatz:
Statt eines Koordinators gibt es hier einen **offenen Marktplatz** mit zwei Teilnehmergruppen:

- "Makers" stellen ihre Coins als Liquidität bereit und verdienen an den Gebühren,
- "Takers" nutzen diese Liquidität für CoinJoins nach ihren Vorstellungen und zahlen für den Mix.

Die **Sybil-Resistenz** — der Schutz davor, dass Angreifer das Orderbuch mit unzähligen Schein-Angeboten fluten — entsteht hier nicht durch eine zentrale Instanz, sondern durch **Fidelity Bonds**:
Coins, die für eine Zeit "gelocked" werden und die Relevanz der Angebote im Orderbuch erhöhen.
Wer als Schein-Anbieter auftreten will, muss also selbst Kapital binden.

Das [ursprüngliche Projekt](https://github.com/JoinMarket-Org/joinmarket-clientserver) wurde im April 2026 eingestellt, wird aber in der Neufassung als [JoinMarket NG](https://joinmarket-ng.github.io/joinmarket-ng/) aktiv weiterentwickelt.
Es nutzt konsequent Tor und lässt sich über [Jam](https://jamdocs.org/) mit einer Web-Oberfläche nutzen.
Besonderheit: Mit dem **Yield Generator** kannst du deine Coins passiv arbeiten lassen, indem sie als CoinJoin-Liquidität für andere dienen.

**Pros:**

- Kein Koordinator: dezentral, zensur-resistent, keine Koordinator-Gebühr
- Ökonomisches Modell mit Anreizen für Liquiditätsanbieter
- Yield Generator verbindet Mischen und Halten

**Cons:**

- Kleinerer Anonymity Set pro Transaktion (typischerweise einstellige Teilnehmerzahl) — dafür können Taker mehrere aufeinanderfolgende Joins verketten
- Höherer technischer Einstieg als bei Wasabi; empfohlen ist eine eigene Bitcoin-Node (ein Neutrino-Light-Client ist als Backend verfügbar)
- Jam ist als Beta ausgewiesen, die Liquidität im Orderbuch schwankt

### Nach dem CoinJoin: Nichts kaputt machen

Egal wie du coinjoinst, auch anschließend musst du darauf achten, das Ergebnis nicht zu zerstören:

- Gemischte und ungemischte UTXOs niemals in einer Transaktion konsolidieren!
  Genau dann greift die [Common Input Ownership Heuristic](#common-input-ownership-heuristic) wieder und verknüpft die Cluster.
- Separate Accounts in der Wallet helfen, das strukturell zu verhindern.
- Auch gemischte Coins wollen bewusst ausgegeben werden: PayJoin ist hier der ideale Ausgabeweg, denn er hält die Transaktion unauffällig, ohne den Set zu "verbrauchen".

## PayJoin

CoinJoin braucht Viele. PayJoin braucht nur **zwei**: Dich und den Empfänger einer Zahlung.

Die Idee: Der Empfänger trägt zusätzlich zu deinen Inputs eigene Inputs in die Zahlungstransaktion ein.
Was für einen Beobachter wie eine gewöhnliche Transaktion mit mehreren Inputs aussieht, ist in Wahrheit eine Zahlung.
Die Common Input Ownership Heuristic wird hier nicht gebrochen, sondern **unbrauchbar gemacht**:
Sie produziert bei PayJoins systematisch falsche Cluster.

Zusätzlich verwischt die gemeinsame Transaktion die Wechselgeld-Heuristik, denn die Output-Aufteilung ist nicht mehr auf das übliche "Betrag + Rest"-Muster reduzierbar.
Darüber hinaus kann PayJoin sogar Gebühren sparen, da sich Mining-Gebühr und Konsolidierungsaufwand auf beide Parteien verteilen lassen.
Ein Anreiz, der die Nutzung auch ökonomisch sinnvoll macht.

Die zentrale Hürde: ==PayJoin funktioniert nur, wenn **beide Seiten** kompatible Software nutzen.==

### Version 1 und Version 2

- **BIP 78** (seit 2020): Der Empfänger muss einen Server betreiben, an den der Sender seine Transaktion schickt.
  Praktisch machbar vor allem für Händler mit [BTCPay Server](https://btcpayserver.org/); Desktop-Wallets wie [Sparrow](../sparrow-wallet/) können PayJoins senden.
- **BIP 77** (PayJoin v2, 2025 standardisiert): Der Serverbetrieb wird an ein untrusted Relay ("PayJoin Directory") ausgelagert, über [OHTTP](https://payjoin.org/docs/how-it-works/payjoin-v2-bip-77/) wird sogar die IP-Adresse vor dem Relay verschleiert.
  Sender und Empfänger müssen dafür **nicht gleichzeitig online** sein — damit wird PayJoin für mobile Wallets praktikabel.

**Werkzeuge (Stand 2026):**
Mit Bull Bitcoin Wallet (Ende 2024) und Cake Wallet (2025) unterstützen erstmals Mobile-Wallets PayJoin v2 in beide Richtungen.
BTCPay Server kann beide Versionen.
Bei Sparrow wird die [PayJoin v2-Unterstützung diskutiert](https://github.com/sparrowwallet/sparrow/issues/1980).

**Pros:**

- Keine zusätzlichen Gebühren, kein Koordinator, ab v2 keine Spezial-Infrastruktur nötig
- PayJoins sind on-chain von normalen Zahlungen kaum unterscheidbar
- Setzt genau dort an, wo Zahlungen entstehen: bei täglichen Ausgaben

**Cons:**

- Beidseitige Wallet-Unterstützung nötig; Adoption in Wallets wächst, ist aber noch nicht flächendeckend
- Löst nur den Anlass Zahlung, die **Historie** deiner Coins wird wie bei CoinJoin nicht ausradiert
- Aktive Forschung: Unterschiedliche Wallet-Fingerabdrücke (Signatur-Muster, Gebührenwahl) könnten beim Empfänger-Input die Zuordnung trotzdem verraten

## Silent Payments

Silent Payments greifen ein anderes Problem auf: **die wiederverwendbare Empfangsadresse**.
Das Problem ist altbekannt: Eine statische Adresse (für Spenden, Rechnungen, dein Profil) ist bequem, aber jede Wiederverwendung verbindet alle Zahlungen öffentlich miteinander.

[Silent Payments (BIP 352)](https://silentpayments.xyz/) lösen das Problem kryptografisch:
Du veröffentlichst eine **statische Silent-Payment-Adresse** (`sp1q…`).
Der Sender leitet daraus mit seinem eigenen Schlüssel eine **einmalige Taproot-Adresse** ab, auf die nur du mit deinem Scan-Schlüssel schließen kannst.
Jede Zahlung landet on-chain auf einer frischen, völlig normal aussehenden Taproot-Adresse — ohne Benachrichtigungstransaktion, ohne Interaktion, ohne dass Beobachter überhaupt erkennen, dass es sich um Silent Payments handelt.

**Werkzeuge:**
Das Senden an `sp1q…`-Adressen ist inzwischen breit unterstützt (u. a. Sparrow, Cake Wallet, BlueWallet, Wasabi).
Empfangen ist anspruchsvoller, weil deine Wallet die Blockchain nach für dich verschlüsselten Outputs **durchsuchen** muss:
Desktop-nativ funktioniert das mit Sparrow (seit v2.5.0, inkl. Hardware-Signer-Unterstützung), mobil mit Cake Wallet und Nunchuk.
Bitcoin Core unterstützt Silent Payments noch nicht, die Arbeit daran läuft.
Wichtig zu verstehen: Beim Empfang mit Light Wallets kommen "Scan-Daten" von einem Indexer-Server — dieser sieht zwar nicht, welche Coins dir gehören, wohl aber deine Abfragen.
Per Tor oder mit eigener Node lässt sich das verhindern.

**Pros:**

- Statische Adresse mit der Privatsphäre von Einweg-Adressen, ideal für Spenden und Profile
- On-chain nicht als Silent Payment erkennbar, keine Extra-Transaktionen, keine Gebühren
- Breiter Send-Support, Hardware-Signer-Anbindung entsteht

**Cons:**

- Empfangs-Scanning kostet Rechenkapazität und braucht Indexer-Daten. Wer maximal souverän sein will, betreibt den Index selbst, bspw. über [Frigate](https://github.com/sparrowwallet/frigate).
- Verbessert nur die **Empfangsseite**; deckt weder CoinJoin-Historien (Eigentümer-Cluster) noch Betrags-Vertraulichkeit ab
- Ökosystem jung: Wallet-Support senden/empfangen getrennt prüfen (Übersicht bei [silentpayments.xyz](https://silentpayments.xyz/docs/wallets/))

## Vergleich der Techniken

Die drei Techniken sind **komplementär, nicht konkurrierend**:
CoinJoin mischt die Historie, PayJoin macht Zahlungen unauffällig, Silent Payments lösen das Empfangsproblem.
Ein rundes Setup nutzt alle drei dort, wo sie jeweils hineinpassen.

Zusammenfassend hier noch eine Gegenüberstellung der einzelnen Techniken:

| | CoinJoin | PayJoin | Silent Payments |
| --- | --- | --- | --- |
| **Konzept** | Koordinator (blind) oder P2P-Marktplatz | Sender + Empfänger direkt (v2 über Relay) | Sender → Empfänger, statische Adresse |
| **Bricht** | Common Input Ownership + Wechselgeld-Heuristik | Common Input Ownership (beim Zahlanlass) | Adress-Wiederverwendung (beim Empfang) |
| **Anonymity Set** | ~70+ Teilnehmer pro Runde (Koordinator-Runden) | klein, aber Struktur unauffällig | n/a — einmalige Empfangsadressen |
| **Kosten** | Mining-Gebühren + ggf. Koordinator-Gebühr | keine | keine |
| **Voraussetzung** | Zeit, Liquidität, Koordinator-Wahl | Kompatible Wallet auf beiden Seiten | Scan-Infrastruktur fürs Empfangen |
| **Ideal für** | Wertaufbewahrung, Vorab-Mix (Zahlung oder [Lightning-Funding](../lightning-network-privatsphaere/#kanaleroffnung-der-großte-fußabdruck)) | Alltägliche Zahlungen | Statische Empfangsadressen, Spenden |

## Weitere Ansätze

- **Non-KYC-Beschaffung:** Kein Mix-Verfahren ersetzt saubere Herkunft.
  Wer ohne Identitätsbindung [erwirbt](../bitcoin-kaufen-was-beachten/), startet ohne KYC-Ballast.
- **Lightning Netzwerk:** Zahlungen laufen off-chain, auf der Blockchain bleiben nur Kanal-Ereignisse.
  Lightning wird gern als "automatisch anonym" bezeichnet — der Artikel [Privatsphäre im Lightning Netzwerk](../lightning-network-privatsphaere/) zeigt dir jedoch, dass es dabei einiges zu beachten gibt.
- **Liquid Sidechain:** [Liquid](https://blockstream.com/liquid/) verbirgt Beträge und Asset-Typen standardmäßig (Confidential Transactions).
  Nützlich zum privaten Transfer von Wert, aber die Ein-/Auszahlungen (Pegs) zur Bitcoin-Blockchain sind sichtbar, und die Konsensbildung liegt bei einer Föderation.

:::warning Finger weg von Custodial Mixern
Dienste, die dir Coins "anonymisieren" wollen, indem du ihnen deine Bitcoin gibst und "frische" zurückbekommst, verbinden all das, was du vermeiden willst:
Vollständiges Vertrauen in eine zentrale Stelle (Exit-Scam-Risiko), einen Angriffspunkt für Ermittler und eine zentrale Cluster-Quelle, die deine Einzahlungen mit denen aller anderen verknüpft.
Die hier beschriebenen Techniken funktionieren ohne Fremdverwahrung, denn genau dafür wurden sie gebaut.
:::

## Grenzen und praktische Strategien

### Börsen und Compliance

Hier musst du mit Reibung rechnen:
CoinJoin-Transaktionen sind on-chain als solche erkennbar, und Analysetools bewerten die Herkunft von Auszahlungen entsprechend.
EU-lizenzierte Börsen behandeln CoinJoin-assoziierte Einzahlungen als **hochriskant** und das kann von Nachfragen nach der Herkunft über eingefrorene Auszahlungen bis zur Kontoschließung reichen.
Das trifft auch völlig legale Nutzer: Die kooperative Struktur weckt Compliance-Automatismen, unabhängig vom Verwendungszweck.

:::warning Plane deine Ausgangspunkte
Wer Coins gemischt hat, sollte den Weg zurück in die Fiat-Welt separat planen — oder umgekehrt denken:
Gemischte Coins eher dort verwenden, wo keine KYC-Gegenstelle eine Herkunftsprüfung anstellt, und KYC-Börsen-Exits bereits vor dem Mix aus den KYC-UTXOs heraus planen.
:::

### Regulatorischer Rahmen (Stand 2026)

Die Regulierung bewegt sich — für dein Threat-Model lohnt ein Blick auf die Fakten:

- Seit Ende 2024 gilt in der EU die [Travel-Rule-Verordnung](/glossar/#kyc-und-aml) für Krypto-Transfers; in Deutschland verlangt §15a GwG erweiterte Sorgfalt bei Transaktionen mit Selbstverwahrungs-Adressen.
- Zum 10. Juli 2027 greift das EU-AML-Paket (AMLR) direkt; die neue AMLA-Behörde übernimmt ab 2028 die direkte Aufsicht über große Marktteilnehmer.
- Gegen zentrale Mixer wird weiter ermittelt und Vollstreckung betrieben; dezentrale Techniken wie CoinJoin-Marktplätze werden beobachtet und über Börsen-Compliance "eingezäunt", sind jedoch nicht verboten.

==Privatsphäre-Techniken sind nicht illegal — aber ihre Nutzung wird für Börsen zum Risiko-Signal.==
Rechne daher mit mehr Reibung an der Schnittstelle zur regulierten Welt, nicht mit einem Verbot der Werkzeuge selbst.

### Dein Bedrohungsmodell entscheidet

Was sich für dich lohnt, hängt davon ab, was du schützt:

- **Neugierige Geschäftspartner** sehen weniger, wenn du Zahlungen per PayJoin abwickelst und Adressen nie wiederverwendest.
- **Massenüberwachung/Profilbildung** adressiert vor allem ein gut gemischtes UTXO-Set mit diszipliniertem [UTXO-Management](../utxo-management/).
- **Öffentliche Spendenadresse** wird mit Silent Payments endlich ohne Adress-Wiederverwendung möglich.
- **Asset-Verwahrung** profitiert von CoinJoin-Runden mit hohem Anonymity Set, die über Jahre "verwahrt" werden.

## Fazit

On-Chain-Privatsphäre ist kein Schalter, den man umlegt, sondern ein Set aus Werkzeugen und Gewohnheiten:
**CoinJoin** bricht die Rückverfolgbarkeit deiner Historie, **PayJoin** macht Zahlungen unauffällig, **Silent Payments** lösen das Problem der öffentlichen Empfangsadresse — und alles davon funktioniert nur so gut, wie das [UTXO-Management](../utxo-management/) darunter.
Die Werkzeuge sind ausgereift genug für den Alltag, stehen aber unter wachsender regulatorischer Beobachtung.

==Die Frage ist nicht, ob du etwas zu verbergen hast, sondern wer deine finanziellen Daten auswerten darf.==
Fange mit der Basis an, ergänze die Techniken, die zu deinem Bedrohungsmodell passen — und behandle deine Privatsphäre wie das, was sie ist: einen Prozess, den du kontrollierst.

Zusammenfassend noch einmal folgende Checkliste:

1. **Quellen trennen und labeln** — KYC, non-KYC, Lightning, privat, beruflich ([UTXO-Management](../utxo-management/)).
2. **Keine Adress-Wiederverwendung** — frische Adresse pro Empfang, öffentliche Empfangsadresse als [Silent Payment](#silent-payments).
3. **Größere Beträge per CoinJoin mischen** — Wasabi mit gewähltem Koordinator oder JoinMarket NG, dann UTXO-Disziplin bewahren.
4. **Zahlungen per PayJoin abwickeln**, wenn die Gegenstelle es unterstützt (BIP-77-fähige Wallets).
5. **Gemischte und ungemischte UTXOs nie zusammenführen** — separate Accounts nutzen.
6. **On-/Off-Ramping bewusst planen** — non-KYC-Beschaffung prüfen, Börsen-Exits vorbereiten.
7. **Eigene Node und Tor** — keine Wallet-Daten und Abfragen an fremde Server.
