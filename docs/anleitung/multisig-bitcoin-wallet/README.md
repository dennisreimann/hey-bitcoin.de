# MultiSig Teil 1: Theorie und Konzepte

Multi-Signatur (kurz MultiSig) beseitigt den Single Point of Failure einer Einzelschlüssel-Wallet:
Mehrere Schlüssel müssen zusammenwirken, um Bitcoin auszugeben.
Dieser erste Teil der Serie erklärt die Theorie, Vorteile und Nachteile.
Teil 2 zeigt die [Umsetzung mit Sparrow](../multisig-wallet-mit-sparrow/).

## Warum MultiSig?

### Das Problem: Ein einzelner Seed als Single Point of Failure

Bei einer klassischen Einzelschlüssel-Wallet hängt dein gesamtes Vermögen an einem einzigen [privaten Schlüssel/Seed Phrase](/glossar/#private-key-und-seed-phrase).
Genau ein Geheimnis entscheidet darüber, ob du deine Coins kontrollierst oder jemand anderes.

Das führt zu dem fundamentalen Problem der Einzelschlüssel-Wallets:
Es gibt genau einen Angriffspunkt (den "Single Point of Failure"), an dem ein einziges Versagen alles kosten kann:

- **Verlust**: Deine Seed Phrase geht verloren, fällt einem Brand oder Wasserschaden zum Opfer — dein Vermögen ist unwiederbringlich weg.
- **Diebstahl**: Jemand erlangt Kenntnis von deiner Seed Phrase — dein Vermögen kann vollständig abgehoben werden, du hast keine Chance, dagegen vorzugehen.

MultiSig verteilt diese Verantwortung auf mehrere unabhängige Schlüssel:
Statt einer einzelnen Phrase braucht es mehrere Seeds, um über die Coins zu verfügen.

### Mehr als eine Passphrase: Der entscheidende Unterschied

Wer bereits eine [Passphrase](../bitcoin-wallet-grundlagen/#die-passphrase-ein-verstecktes-tresorfach) nutzt, schützt seine Wallet mit einem zusätzlichen Geheimnis, doch auch das bleibt technisch eine Einzelschlüssel-Wallet.
Fallen Seed Phrase und Passphrase zusammen in fremde Hände, ist alles verloren; beide Geheimnisse gehören derselben Wurzel an.

MultiSig geht einen Schritt weiter und löst sich konzeptionell davon, dass aus *einem* Seed eine Wallet entsteht.
Stattdessen bringen **mehrere unabhängige Schlüssel** zusammen eine gemeinsame Wallet hervor, die nur mit einer Kombination davon ausgegeben werden kann.
Selbst wenn ein Angreifer einen der Schlüssel vollständig besitzt, nützt ihm das nichts — er braucht auch die übrigen.

### Die Grundidee: M-von-N

Der Name verrät das Prinzip: **M-von-N** bedeutet, dass von insgesamt `N` Schlüsseln mindestens `M` zusammenwirken müssen, um Transaktionen zu signieren.

Beim Standardfall **2-von-3** existieren drei Schlüssel und zwei davon genügen für eine gültige Transaktion:

- Verlierst du einen Schlüssel, bleiben dir immer noch zwei und du kannst weiter ausgeben.
- Ein Dieb, der *einen* Schlüssel stiehlt, kommt weder an Coins noch an deine Wallet-Historie.
- Nur wer zwei von drei Schlüsseln besitzt, verfügt über die Wallet.

Statt eines einzelnen Angriffspunkts gibt es nun mehrere, unabhängig voneinander verwahrte Bausteine:
Jeder einzelne für sich wertlos, erst zusammengenommen sind sie nützlich.

## Technisches

### Jeder Schlüssel lebt auf einem eigenen Gerät bzw. eigenem Seed

Im Kern besteht eine MultiSig-Wallet aus mehreren, voneinander **unabhängigen Seeds**.
Idealerweise lebt jeder davon auf seinem eigenen Gerät und wurde dort auch frisch generiert:
Eine BitBox, ein [SeedSigner](../seedsigner-hardware/), ein [Specter-DIY](../specter-diy-hardware-wallet/) und so weiter.

Gerade bei MultiSig ist es ratsam, **Geräte verschiedener Hersteller** zu verwenden.
So verhinderst du, dass ein einziger Firmware- oder Hardware-Fehler alle deine Schlüssel gleichzeitig gefährdet.
Diese Unabhängigkeit ist der entscheidende Punkt:
Die Seeds stammen aus verschiedenen Zufallsprozessen, liegen in verschiedenen Händen und Orten und teilen sich keinerlei gemeinsames Geheimnis.
Nur so erhältst du echte Redundanz statt mehrfach verwalteter, aber letztlich verbundener Kopien.

### Das gemeinsame Skript: `wsh(sortedmulti(m, xpub…))`

Die gemeinsame Wallet entsteht nicht dadurch, dass die Geräte kommunizieren, sondern über eine **Skriptdefinition**, die festlegt, wie die Schlüssel zusammenwirken:

```text:no-line-numbers
wsh(sortedmulti(2,
  [fingerprint1/48h/0h/0h/2h]xpub…,
  [fingerprint2/48h/0h/0h/2h]xpub…,
  [fingerprint3/48h/0h/0h/2h]xpub…
))
```

- `wsh` steht für **Witness Script Hash** (Native SegWit, Adressen mit `bc1q…`).
- `sortedmulti(2, …)` verlangt **2 von 3** Signaturen der aufgeführten öffentlichen Schlüssel (die `xpub…` sind abgekürzte Platzhalter für deine gerätespezifischen Extended Public Keys, inklusive des jeweiligen Ableitungspfads).
- `sortedmulti` sortiert die Schlüssel standardisiert aufsteigend, so dass alle beteiligten Wallets dasselbe Skript bilden, egal in welcher Reihenfolge sie die Schlüssel importieren.

### Der Descriptor: Die "Identität" der Wallet

Das komplette Skript samt aller Schlüsselinformationen nennt man **Output Script Descriptor**.
Er ist die Identität deiner Wallet und beschreibt vollständig, *welche Schlüssel* wie zusammenwirken müssen.
Dies ist in [BIP 380 (Output Script Descriptors)](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki) sowie [BIP 388 (Wallet Policies for Descriptor Wallets)](https://github.com/bitcoin/bips/blob/master/bip-0388.mediawiki) spezifiziert.

:::tip Hinweis
Zwei Wallets mit demselben Descriptor bezeichnen dieselbe Wallet, egal ob du sie mit Sparrow aufbaust, an einem anderen Gerät importierst oder nach Jahren aus einem Backup wiederherstellst.
:::

Adressen lassen sich direkt aus dem Descriptor ableiten: Wie bei der Einzelschlüssel-Wallet werden interne (Wechselgeld) und externe (Empfang) Adressketten mithilfe des Ableitungspfads generiert — nur dass hierbei eben mehrere Schlüssel gleichzeitig eingebettet sind.

### Script-Typen: P2WSH als Standard

In der Praxis ist **P2WSH** (Native SegWit) mit `wsh()` der Standard für MultiSig-Wallets:
Kleine Transaktionen, niedrige Gebühren und breite Unterstützung durch alle gängigen Wallets und Hardware-Geräte.

Für die Zukunft lohnt es sich, folgende Optionen im Blick zu haben:

- **Taproot**: Einerseits wird bessere Privatsphäre ermöglicht, da MultiSig-Skripte nicht mehr von anderen Skripttypen unterscheidbar sein müssen.
  Andererseits haben Taproot-MultiSig-Wallets bisher längst nicht dieselbe Verbreitung gefunden wie P2WSH und die Unterstützung für [MuSig2 (BIP 327)](https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki) ist deutlich geringer.
- **FROST**: Ein Forschungsprojekt, das Mehrparteien-Signaturen über einen einzigen gemeinsamen aggregierten Schlüssel realisiert.
  Auch hier gilt: vielversprechend, aber noch experimentell und von den Wallets nicht flächendeckend umgesetzt.

## MultiSig-Schemata im Vergleich

### 2-von-3: Der Standard für Privatpersonen

Zwei von drei Schlüsseln genügen.
Du verlierst einen Schlüssel (oder dessen Besitzer fällt aus), ohne den Zugriff zu verlieren.
Ein Dieb müsste gleich zwei der drei unabhängigen Bestandteile erbeuten.
Es ist die bewährte Balance aus Komplexität, Kosten und Sicherheit.

### 2-von-2: Einfacher, aber ohne Reserve

Zwei Schlüssel, beide nötig.
Das Setup ist überschaubar und günstig, bietet aber **keinen Reserve-Schlüssel**: Verlierst du *einen* der beiden Schlüssel, ist das Vermögen weg.
Sinnvoll höchstens für Szenarien, in denen zwei getrennte Parteien gemeinsam verfügen sollen (etwa bei einem Unternehmen) — für den Privatgebrauch fehlt die Fehlertoleranz.

### 3-von-5: Verteilte Kontrolle

Drei von fünf Schlüsseln reichen zum Ausgeben.
Drei Verluste müssten zusammenkommen, um das Setup unbrauchbar zu machen.
Interessant für Familien oder Organisationen, in denen mehrere Personen ein Mitspracherecht haben sollen.
Oder für Setups über mehrere, sehr getrennte Verwahrungsorte hinweg.

## Hardware-Optionen im Überblick

Idealerweise kombinierst du Geräte unterschiedlicher Hersteller und Bauarten:

- [BitBox02](https://bitbox.swiss/bitbox02/): Klassische Hardware-Wallet mit Anbindung per USB, Schlüssel intern im Secure Element.
- [SeedSigner](../seedsigner-hardware/): Air-gapped Signiergerät, verwahrt seinen Seed als SeedQR auf Papier oder Stahl.
- [Specter-DIY](../specter-diy-hardware-wallet/): Selbstgebaute Hardware-Wallet, funktioniert air-gapped über QR-Codes — der Seed wird wahlweise auf einer SmartCard oder als SeedQR gesichert.

:::tip Grundsatz: Mische Hersteller und Geräte
Nutze **verschiedene Hersteller und Gerätetypen** für deine MultiSig-Wallet.
So schützt du dich vor systematischen Fehlern einzelner Hersteller — etwa einer fehlerhaften Firmware, eines Schwachpunkts in der Chip-Familie oder einer Kompromittierung der Lieferkette.
Drei Seeds auf drei baugleichen Geräten desselben Herstellers sind sicherheitstechnisch fragiler als ein Mix aus verschiedenen Herstellern.
:::

## Backup und Notfall

Das Backup einer MultiSig-Wallet ist zweigeteilt und deutlich umfangreicher als bei einer einzelnen Wallet:

- **Jeder Seed einzeln sichern**: Jeder Schlüssel ist ein Geheimnis für sich und wird wie eine eigene Wallet behandelt. Tipps zur sicheren Verwahrung findest du in der Anleitung [Seed Phrase Backup](../seed-phrase-backup/) — inklusive der Empfehlung, Seeds an getrennten Orten zu lagern.

- **Alle xpubs, das Quorum und den Descriptor sichern**: ==Für die Wiederherstellung werden immer auch alle xpubs und das Quorum benötigt — der einzelne Seed allein reicht nicht!==
  Verlorene Seeds allein genügen also nicht:
  Um deine Coins wiederzusehen, musst du die Wallet aus *allen* Seeds *und* dem Descriptor neu aufbauen — also so, als würdest du das Setup von vorne aufsetzen.

- **Sparrow-Wallet-Setup-Export**: Aus den Wallet-Einstellungen lässt sich der MultiSig-Descriptor inklusive QR-Code als PDF exportieren.
  Dies ist ideal sowohl für ein physisches als auch digitales Backup.

- **Test-Recovery als Pflicht**: Übe die Wiederherstellung, bevor nennenswerte Beträge in der Wallet landen.
  Stelle sowohl die einzelnen Seeds als auch den kompletten Descriptor wieder her.
  Ersteinrichtung und Notfall sind die Momente, in denen dir ein gut geplanter und reproduzierbarer Ablauf Sicherheit gibt.

:::warning Und weil es so wichtig ist, noch einmal:
Nur die Seeds allein ergeben noch keine MultiSig-Wallet! Erst **alle xpubs + Quorum + Descriptor** zusammen machen die MultiSig-Wallet aus und werden daher auch als Backup benötigt.
:::

## Mehrere Accounts mit MultiSig

Eine MultiSig-Wallet kann wie jede andere Wallet **mehrere Accounts** besitzen.
Über den Ableitungspfad wickelst du verschiedene Zwecke sauber voneinander getrennt ab, die Grundlagen dazu findest du in den [Wallet-Grundlagen](../bitcoin-wallet-grundlagen/).

Ein klassisches Anwendungsbeispiel auch bei MultiSig: **KYC- und Non-KYC-Coins trennen**.
Damit vermeidest du, dass registrierte, persönlich zuordenbare Bestände mit anonymen UTXOs in derselben Transaktion landen.
Wie eine saubere Trennung aussieht, beschreibt das [UTXO-Management](../utxo-management/).

:::warning Wichtig auch hier:
Jeder Account ist eine eigene MultiSig-Wallet und muss daher ebenfalls separat gesichert werden:
Nutzt du zwei Accounts, so brauchst du auch hier jeweils die xpubs und den Descriptor der Accounts.
:::

## Entscheidungshilfe zu MultiSig-Setups

MultiSig ist mächtig, aber nicht für jeden das richtige Werkzeug. Frag dich ehrlich:

- **Dein Vermögen**: Je größer dein Bestand, desto eher rechtfertigt sich die Komplexität. Für den Sparplan-Bestand im vierstelligen Bereich sind eine solide Passphrase und ein sorgfältiges Backup oft die passendere Antwort.
- **Deine Disziplin**: MultiSig lohnt nur, wenn du die Xpubs dokumentierst, die Wiederherstellung übst und das Setup langfristig pflegst. Ein halbherzig eingerichtetes MultiSig-Setup ist gefährlicher als eine gut verstandene Einzelschlüssel-Wallet.
- **Dein Umfeld**: Teilst du die Kontrolle mit anderen (Familie, Verein, Firma), ermöglicht MultiSig faire Machtverteilung — einzelnen Anfängern bringt es vor allem Komplexität.

Als Faustregel: **2-von-3** mit gemischten Geräten ist der Sweet Spot für die meisten Selbstverwahrer.
Für größere Vermögen oder Erbschafts-Konstellationen wird der Descriptor zentral — das fließt auch in die geplante Anleitung zu *Bitcoin vererben und Nachlassplanung* ein, wo der MultiSig-Descriptor ein zentrales Element der Übergabe ist.

**Vorteile:**

- **Redundanz**: Der Verlust eines einzelnen Schlüssels bedeutet nicht mehr den Verlust des Vermögens. Solange du das Quorum erreichst, bleibst du handlungsfähig.
- **Schutz vor Diebstahl**: Ein Angreifer braucht mehrere Schlüssel. Selbst bei physischer Gewalt oder Kompromittierung eines Geräts bleibt der Rest deiner Wallet außer Reichweite.
- **Kein Single Point of Failure**: Das gilt sowohl technisch (mehrere Geräte, mehrere Seeds) als auch räumlich (die Schlüssel können an verschiedenen Orten verwahrt werden).

**Nachteile:**

- **Höhere Komplexität**: Mehr Geräte, mehr Schritte, mehr Dinge, die bei der Einrichtung schiefgehen können. Die Fehlerquellen *verlagern* sich von der Einzel-Wallet auf den Aufbau- und Backup-Prozess.
- **Höhere Gebühren**: Mehr Signaturen bedeuten größere Transaktionen und damit höhere On-Chain-Gebühren pro Ausgabe.
- **Dokumentationspflicht**: Alle xpubs und das Quorum müssen sorgfältig dokumentiert und sicher aufbewahrt werden — der einzelne Seed allein taugt nicht zur Wiederherstellung.

## Weiter zur Praxis

Im zweiten Teil, [MultiSig-Wallet mit Sparrow](../multisig-wallet-mit-sparrow/), setzen wir nun ein konkretes 2-von-3-Setup auf und sehen uns alles von der Einrichtung der Keystores bis zum Transaktions-Workflow an.
