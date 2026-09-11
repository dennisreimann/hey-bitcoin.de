---
sidebar: auto
---

# Glossar

Ein paar Begriffserklärungen, weil mittlerweile auch viele englische Bezeichnungen in der deutschsprachigen Diskussion rund um Bitcoin standardmäßig verwendet werden …

## Ableitungspfad

Ein standardisiertes Pfadschema (bspw. `m/84'/0'/0'`), über das aus deinem Seed deterministisch sämtliche Schlüssel und Adressen deiner Wallet abgeleitet werden.
Die einzelnen Schritte des Pfades kodieren dabei Verwendungszweck, Netzwerk und [Account / Konto](#account-konto).
Weicht eine Wallet beim Import vom tatsächlich verwendeten Ableitungspfad ab, sucht sie an der falschen Stelle — dann bleiben eingehende Transaktionen unsichtbar, obwohl dein Guthaben unangetastet ist.
Die wichtigsten Ableitungspfade im Überblick findest du in den [Wallet-Grundlagen](../anleitung/bitcoin-wallet-grundlagen/).

## Account / Konto

Genau wie der Begriff Wallet kann auch der Begriff Konto für sehr unterschiedliche Dinge verwendet werden.
In Wallet-Software, die [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) unterstützt (alle üblichen Wallets tun dies), kann ein Bitcoin-Wallet mehrere Konten haben.
Jedes dieser Konten hat seinen eigenen [Ableitungspfad](#ableitungspfad) und somit auch seine eigenen Adressen.

## Adressen und Signaturen

Von deinem privaten Schlüssel werden Adressen abgeleitet, mit denen du Bitcoin empfangen kannst.
Mit dem privaten Schlüssel kannst du ebenso Signaturen für diese Adressen erstellen.
Die Signatur ist der Beweis, dass dir die Adresse gehört – du benötigst sie, wenn du Bitcoin versenden möchtest.
Das Erstellen von Adressen und Signaturen übernimmt deine Wallet.

## Anonymity Set

Die Menge der Kandidaten, unter denen sich die tatsächliche Besitzerin einer Transaktionsausgabe verbirgt:
Eine Adresse, die nur eine Person verwendet, hat den Anonymity Set 1 — bei einem [CoinJoin](#coinjoin)-Output unter 100 identischen Outputs liegt der Anonymity Set bei 100, ein Beobachter weiß nur, dass einer dieser 100 Besitzer du bist.
Der Anonymity Set ist eine Zahl und kein Dauerzustand:
Wer einen gemischten Output später mit identifizierbaren UTXOs konsolidiert, verkleinert ihn wieder.

## BIP - Bitcoin Improvement Proposal

Ein standardisiertes technisches Verfahren und Dokumentformat, um Änderungen an Bitcoin vorzuschlagen und als neuen Standard zu etablieren.
Soll bspw. ein neues Feature in Bitcoin hinzugefügt werden, so muss es zunächst durch solch einen Verbesserungsvorschlag spezifiziert und dokumentiert werden.
Einige der wichtigsten BIPs sind bspw.:

- [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonischer Code für die Erzeugung deterministischer Schlüssel
- [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): Multi-Account-Hierarchie für HD-Wallets
- [BIP 174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): PSBT, Partially Signed Bitcoin Transactions, siehe [PSBT](#psbt)

## Block

Anstatt jede Transaktion einzeln zu verarbeiten, bündelt das Bitcoin-Netzwerk sie in Blöcken.
Blöcke werden etwa alle 10 Minuten erstellt und können auf Grund einer strengen Dateigrößenbegrenzung nur eine bestimmte Anzahl von Transaktionen enthalten.
Sobald ein Block akzeptiert wurde und mehrere Bestätigungen erhalten hat, kann er nie wieder geändert werden.

## BOLT - Basis of Lightning Technology

Analog zu den BIPs für Bitcoin, gibt es für Lightning die BOLTs.
Die verschiedenen Lightning-Implementierungen (bspw. LND, Core Lightning, Eclair) müssen sich an die BOLTs halten, um interoperabel zu sein.
Die verschiedenen Implementierungen können jedoch auch Funktionen enthalten, die in den BOLTs nicht definiert sind.
So werden neue Features ausprobiert, welche dann ggf. später als Standard etabliert werden.
Als Faustregel für ein offiziell verabschiedetes BOLT gilt, dass dies von mindestens zwei Implementierungen unterstützt werden muss.

## Chain-Analyse

Die systematische Auswertung öffentlicher Blockchain-Daten mit dem Ziel, Transaktionen und Adressen zu Clustern (vermutlich identischen Besitzern) zusammenzuführen und diese mit realen Identitäten zu verknüpfen.
Chain-Analyse-Firmen wie Chainalysis wenden dafür Heuristiken an — die bekannteste ist die **Common Input Ownership Heuristic**:
Gibt eine Transaktion mehrere Inputs aus, wird angenommen, dass alle derselben Person gehören.
Die Erkenntnisse werden an Börsen, Banken und Behörden verkauft und fließen in Compliance- und Risikobewertungen ein.

## Child-pays-for-parent (CPFP)

Ermöglicht dem Empfänger einer anstehenden Transaktion, die Bestätigung zu beschleunigen.
Er erstellt eine neue Transaktion (Child), bei der er die zu erhaltenden Bitcoin mit einer höheren Gebühr ausgibt als die ursprüngliche Transaktion (Parent).
Dies signalisiert den Minern, beide Transaktionen zu verarbeiten, wofür sie mit der höheren Gebühr belohnt werden.

## Coin Control

Die aktive Auswahl der UTXOs, die in einer Transaktion verschickt werden sollen.
Wallets können die zu verwendenden UTXOs automatisch auswählen — es ist aus mehreren Gesichtspunkten aber oft ratsam, die zu sendenden UTXOs manuell auszuwählen:

- Die Gebühren richten sich nach dem Transaktionsvolumen, das sich nach der Anzahl der Ausgaben richtet. Wer also weniger Ausgänge wählt, kann die Gebühren senken.
- Privatsphäre: Da es möglich ist, den Transaktionsverlauf von UTXOs zu verfolgen und zu sehen, wie sie zuvor ausgegeben wurden, kann der Empfänger möglicherweise weitere Informationen aus dem erhaltenen UTXO ableiten.

## CoinJoin

Eine kollaborative Transaktion, bei der mehrere Parteien ihre Inputs gemeinsam in einer einzigen Transaktion zusammenführen und sich dabei in Outputs gleichen Betrags mischen.
Da die Transaktion von allen gemeinsam signiert wird, lässt sich on-chain nicht mehr nachvollziehen, welcher Input zu welchem Output gehört — die Common Input Ownership Heuristic greift ins Leere.
Bekannte Implementierungen sind [Wasabi Wallet](https://www.wasabiwallet.io/) (WabiSabi-Protokoll mit [Koordinator](#koordinator)) und [JoinMarket NG](https://github.com/joinmarket-ng/joinmarket-ng) (dezentraler Marktplatz mit Liquiditätsanbietern).

## Custodial und Non-Custodial

Diese Klassifizierung begegnet einem häufig im Zusammenhang mit Apps und Anbietern.
Kurzgesagt geht es darum, ob eine Drittpartei deine Schlüssel bzw. sensitiven Informationen verwahrt oder du selbst.
Wenn du bspw. deine Coins auf einer Börse liegen hast, dann verwahrt der Anbieter deine Schlüssel und Coins (custodial).
Nutzt du selbst eine [Wallet](#wallet) zum Aufbewahren deiner Schlüssel und Coins, dann bezeichnet man dies als self-custody (non-custodial).

## Fiatgeld

Als Fiatgeld werden Zahlungsmittel bezeichnet, die von einer Regierung ausgegeben werden.
Der Wert von Fiatgeld ist nicht durch Rohstoffe wie Gold oder Silber gedeckt oder daran gebunden, sondern ergibt sich aus dem Verhältnis zwischen Angebot und Nachfrage und der Stabilität der ausgebenden Regierung.
Beispiele für Fiatgeld sind der Euro, US-Dollar oder der japanische Yen.

## Fingerprint

Ein achtstelliger Code (bspw. `b16be191`), der deinen Seed eindeutig identifiziert.
Er lässt sich ohne den Seed selbst aus dem öffentlich abgeleiteten Schlüsselmaterial berechnen und verrät daher nichts Sensibles — er taugt aber als unverwechselbares "Kennzeichen".
Gerade beim Einrichten einer [Multisig](../anleitung/multisig-bitcoin-wallet/) ist der Fingerprint wichtig, um die einzelnen Geräte den drei Seeds korrekt zuzuordnen und Verwechslungen auszuschließen.
Du findest ihn in den Key-Einstellungen deiner Wallet, bspw. in Sparrow unter [Policy Settings](../anleitung/sparrow-wallet/).

## Gap-Limit

Aus Performancegründen erstellen On-Chain-Wallets in der Regel nur eine bestimmte Anzahl von Adressen (bspw. 20) und überwachen sie auf eingehende Transaktionen.
Wird eine dieser Adressen verwendet, wird eine neue generiert und überwacht.
Da nur die aufeinanderfolgenden, bisher ungenutzten Adressen überwacht werden, werden eingehende Transaktionen auf darüber hinaus gehende Adressen nicht erkannt.

Ein üblicher Fall ist, dass zwei verschiedene Wallets für den selben Private Key benutzt werden.
In einer der Wallets tauchen dann ggf. Transaktionen auf, welche in der anderen Wallet nicht angezeigt werden.
Dies ist oftmals auf das Gap-Limit zurückzuführen und lässt sich beheben, indem man das Gap-Limit erhöht und einen erneuten Scan der Blockchain durchführt.

## HTLC: Hashed Time-Locked Contract

Der zentrale Mechanismus, mit dem Lightning-Zahlungen über mehrere Hops hinweg abgesichert werden.
Der Sender hinterlegt dafür einen Hash eines Geheimnisses (dem sogenannten Preimage) in die Zahlung:
Jeder Knoten auf der Route kann den Betrag nur dann einlösen, wenn er das Preimage vorweisen kann — kennen tut es zunächst nur der Empfänger, der am Ende der Route damit die Zahlung "rückwärts" entlang der Route auslöst.
Zusätzlich enthält jeder HTLC eine Zeitsperre (Time-Lock), nach deren Ablauf der Betrag zurückschlägt und die Zahlung abgebrochen wird.
Dadurch sind Lightning-Routen atomar: Entweder funktioniert die komplette Route, oder nichts davon.
Wie das im Detail abläuft, zeigt der Artikel zum [Lightning-Routing](../anleitung/lightning-network-routing/).

## Invoice

Die Standardform der Lightning-Zahlungsanforderung (BOLT11), auch Rechnung genannt.
Eine Invoice beginnt mit `lnbc…`, enthält Betrag, Zahlungshash und eine Ablaufzeit und wird als praktischer QR-Code an den Sender übergeben.
Im Gegensatz zur on-chain-Adresse, die dauerhaft verwendbar ist, gilt eine Invoice einmalig und zeitlich begrenzt — für jede Zahlung erstellt der Empfänger eine neue.
Wie viel Informationsvorsprung eine Invoice tatsächlich enthält, beleuchtet der Artikel zur [Lightning-Privatsphäre](../anleitung/lightning-network-privatsphaere/).

## Koordinator

Der zentrale Vermittler einer [CoinJoin](#coinjoin)-Runde:
Der Koordinator orchestriert die Runde, bekommt die Inputs der Teilnehmer aber nur verschlüsselt bzw. "blind" zu sehen — er kennt die Zuordnung von Inputs zu Outputs nicht.
Er kann eine Runde höchstens abbrechen (DoS), jedoch nicht stehlen.
Wasabi-Nutzer wählen ihren Koordinator heute in den Wallet-Einstellungen, beim dezentralen JoinMarket gibt es dagegen gar keinen Koordinator.
Details und ein Vergleich der Ansätze findest du im Artikel zur [Onchain-Privatsphäre](../anleitung/onchain-privatsphaere/).

## KYC und AML

*[KYC]: Know Your Customer
*[AML]: Anti Money Laundering

Dies sind regulatorische Richtlinien im Finanzwesen:
KYC ("Kenne deinen Kunden") erfordert seitens Anbietern wie Börsen, dass sie dich als Kunden möglichst umfassend registrieren.
Du gibst dafür viele persönliche Daten preis und dein Einverständnis, dass sämtliche Transaktionen erfasst und protokolliert werden.
Dies soll Geldwäsche, Terrorismus, Drogengeschäfte, etc. verhindern, worin man die Berechtigung für diese AML-Maßnahmen ("Anti-Geldwäsche") sieht.

In der Praxis ist es jedoch leider so, dass dies für den ehrlichen Normalmenschen erhebliche Nachteile mit sich bringt.
Diese umfassende und zentrale Form der Datenerhebung ist ein wahrer Honigtopf für kriminelle Hacker:
Es ermöglicht Identitätsdiebstahl, das Abgreifen von sensiblen Zahlungsinformationen und erleichtert auch physische Angriffe, wenn bspw. Adressdaten abhanden kommen.
Für kleine Unternehmen und Startups stellen diese Richtlinien eine große regulatorische Hürde dar:
Sie werden aus dem Markt gedrängt oder ferngehalten, da sie die Anforderungen oftmals nur mit unverhältnismäßigem Aufwand erfüllen können.

Leider sehen wir in dem Zusammenhang zunehmend große Leaks persönlicher Daten (bspw. [Ledger](https://www.blocktrainer.de/ledger-leak-infos/)), sowie eine schleichende Ausweitung von Überwachung, Kontrolle und Zensur.
Dies ist umso bedauerlicher, da es keine handfesten Belege dafür gibt, dass diese Maßnahmen die ursprünglichen Probleme effektiv bekämpfen.

## Onion Service

Ein Dienst, der ausschließlich über das Tor-Netzwerk erreichbar ist und dessen Standort verborgen bleibt.
Server und Client verbinden sich über jeweils drei verschlüsselte Hops Ende-zu-Ende — der Service kennt deine IP-Adresse nicht, und du kennst nicht seine.
Moderne onion-Adressen (V3) setzen sich aus 56 Zeichen und dem Suffix `.onion` zusammen und bezeichnen den Public Key des Services.
Nützliche Dienste wie Dateiübertragung via OnionShare oder deine eigene [Lightning-Node](../anleitung/lightning-network-routing/) sind so erreichbar, ohne dass deine IP-Adresse dabei übertragen wird — wie im [Tails-OS-Leitfaden](../anleitung/tails-os-privatsphaere-betriebssystem/) zu sehen.

## PayJoin

Eine Zahlungstechnik, bei der der Empfänger einer Zahlung eigene Inputs in die Transaktion des Senders einbringt.
Aus Sicht der Blockchain sieht das aus wie eine gewöhnliche Transaktion mit mehreren Inputs — die Common Input Ownership Heuristic produziert dabei systematisch falsche Cluster.
PayJoin v1 (BIP 78) erfordert beim Empfänger einen Server, v2 (BIP 77) funktioniert asynchron über ein untrusted Relay und ist damit für mobile Wallets praktikabel.
Voraussetzung ist kompatible Software auf beiden Seiten.

## Passphrase

Die Passphrase ist ein optionales Feature, welches als zusätzlicher Sicherheitsfaktor genutzt werden kann:
Es ist ein 25. Zusatzwort für deine Seed Phrase, mit dem du eine neue Wallet von deinem Seed ableitest.
Du kannst damit deinen Seed als Basis nehmen, ihn in mehrere "Konten" aufteilen und die Passphrase als Passwort nutzen.
Passphrases solltest du getrennt von deinem Seed aufbewahren und sichern.

## Private Key und Seed Phrase

Der private Schlüssel ist die Grundlage für die [Selbstverwahrung](../anleitung/bitcoin-selber-verwahren/) deiner Bitcoins.
Es ist die sensibelste Information und du solltest ihn möglichst sicher aufbewahren.
Die Seed Phrase ist eine menschenlesliche Entsprechung des privaten Schlüssels.
Es ist die in 24 bzw. 12 Wörter kodierte Form des Schlüssels, die dir auch ein einfacheres [analoges Backup](../anleitung/seed-phrase-backup/) ermöglicht.

Man sagt auch "not your keys, not your coins": Wenn du den Schlüssel nicht hast, sind es nicht deine Coins.
Wer den privaten Schlüssel hält, hat auch den Zugriff und nur mit dem privaten Schlüssel lassen sich Transaktionen tätigen.

## PSBT: Partially Signed Bitcoin Transaction

Ein standardisiertes Transaktionsformat (BIP 174) für den mehrstufigen Signaturprozess.
Eine noch unvollständige Transaktion wird als PSBT aus der Wallet-Software an das Signaturgerät übergeben — bspw. eine [Hardware Wallet](../anleitung/bitcoin-wallet-grundlagen/) oder den SeedSigner, der sie als QR-Code empfängt.
Das Gerät ergänzt seine Signaturen und gibt die PSBT zur Fertigstellung zurück; erst wenn genug Signaturen beigetragen sind, wird die finale Transaktion zusammengesetzt und versendet.
PSBTs sind damit das Fundament für [Multisig](../anleitung/multisig-bitcoin-wallet/) und das Air-gapped-Signieren — der komplette Workflow ist im [Sparrow-Multisig-Artikel](../anleitung/multisig-wallet-mit-sparrow/) gezeigt.

## Replace-by-fee (RBF)

Ein Transaktionsmerkmal, das es erlaubt eine unbestätigte Transaktion durch eine andere Transaktion zu ersetzen, die mindestens einen der gleichen Inputs ausgibt und eine höhere Transaktionsgebühr zahlt.
Dies kann nützlich sein, wenn eine Transaktion in Zeiten höherer Netzwerkgebühren als üblich stecken geblieben ist und man die Mininggebühr erhöhen möchte, um die Transaktion zu beschleunigen.

## Satoshis

Dabei handelt es sich um die Untereinheit eines Bitcoin:
So wie ein Euro in 100 Cent unterteilbar ist, steht ein Bitcoin für 100.000.000 Satoshis (100 Millionen).
Dies bietet als Einheit genug Teilbarkeit, um damit auch bei ggf. massiver Wertsteigerung in der Zukunft gut umgehen zu können.
Satoshis werden auch liebevoll einfach "Sats" genannt.

## SegWit: Segregated Witness

Ein Bitcoin-Upgrade aus dem Jahr 2017, das die Signaturen ("Witness") von den restlichen Transaktionsdaten trennt.
Das behebt eine Design-Schwäche (Transaction Malleability), erhöht die Kapazität pro Block und senkt die Gebühren, da Signaturen günstiger zählen als der Transaktionskern.
Aus SegWit gingen die heutigen Standard-Adressformate Native SegWit (`bc1q…`, Bech32) hervor; sie sind zudem die Basis, auf der neuere Upgrades wie Taproot aufbauen.
In Wallet-Software begegnest du SegWit meist als Script-Type-Auswahl ("Native SegWit", P2WPKH bzw. P2WSH in [Multisig](../anleitung/multisig-bitcoin-wallet/)) im Unterschied zum älteren "Legacy"-Format.

## Silent Payments

Mit [BIP 352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) standardisiertes Verfahren für eine statische Empfangsadresse (`sp1q…`), aus der Sender für jede Zahlung eine eigene, einmalige Taproot-Adresse ableiten.
Beobachter können weder die Zahlungen einander noch der statischen Adresse zuordnen — Adress-Wiederverwendung entfällt kryptografisch.
Der Aufwand liegt auf der Empfängerseite: Die Wallet muss die Blockchain nach für sie verschlüsselten Outputs durchsuchen, wofür Light Wallets Scan-Daten von einem Indexer beziehen.

## Testnet und Signet

Alternative Bitcoin-Netzwerke, in denen die Coins technisch identisch sind, aber keinen Wert haben.
Sie eignen sich ideal, um Wallets, Hardware-Geräte oder neue Workflows risikofrei auszuprobieren, bevor echte Satoshis im Spiel sind.
Das Testnet ist das älteste, frei verfügbare Beispiel; Signet läuft stabiler, ist aber nur per Einladung zugänglich, während RegTest meist für lokale Softwareentwicklung eingesetzt wird.
Im [SeedSigner](../anleitung/seedsigner-hardware/) lässt sich das Netzwerk beim Erzeugen der Keys wählen.

## UTXO: Unspent Transaction Output

In Bitcoin gibt es keine Konten und auch kein Konzept eines Benutzers, dem so ein Konto gehören könnte.
Stattdessen gibt es "unausgegebene Transaktionsergebnisse":
Jede Transaktion hat sogenannte Inputs (das Geld was versendet wird) und Outputs (die neue Verteilung des versendeten Geldes).
Vereinfacht und bildlich kann man sagen, dass durch eine Transaktion die Inputs in neue Bitcoins umgeschmolzen werden:
Die Anzahl Satoshis bleibt dabei gleich, aber die Verteilung auf die in der Transaktion involvierten Adressen ändert sich.
Dabei stehen die in den Inputs versendeten Satoshis nach der Bestätigung einer Transaktion dann selbst wieder als unausgegebene Transaktionsergebnisse dem Besitzer der Empfängeradresse als Inputs für seine nächste Transaktion zur Verfügung.

## Wallet

Eine Wallet ist eine App, mit der du deine Bitcoins verwalten kannst.
Du kannst dein Guthaben und Transaktionen sehen, sowie Bitcoin senden und empfangen.
Wallets sind quasi Bitcoin-Banking-Apps und es gibt sie für Handys und Computer.

Obwohl Wallet übersetzt Geldbörse bedeutet, gleicht ihre eigentliche Funktion mehr einem Schlüsselbund:
Die Wallet verwaltet deine kryptografischen Schlüssel, die dir Zugang zu deinen Bitcoins geben.
Darüber hinaus übernimmt sie die Kommunikation mit dem Bitcoin-Netzwerk:
Die Wallet prüft und signiert deine Adressen und empfängt und sendet Transaktionen.

## Watch-Only

Eine Wallet, die nur den öffentlichen Schlüssel (siehe [xPub](#xpub)) kennt und selbst nichts ausgeben kann.
Du siehst Guthaben und Transaktionsverlauf und kannst Empfangsadressen erzeugen, aber ein Senden ist ohne den privaten Schlüssel unmöglich — das macht sie zur sicheren Beobachtungsinstanz.
Daher eignet sich eine Watch-Only-Wallet auch für spezielle Umgebungen ([Tails](../anleitung/tails-os-sparrow-wallet/) ist ein praktisches Beispiel), weil deine privaten Schlüssel dort gar nicht installiert sind.

## xPub

Der erweiterte öffentliche Schlüssel (extended public key), aus dem deine Wallet sämtliche Adressen generiert und beobachtet.
Wer deinen xpub kennt, kann dein komplettes Guthaben einsehen und alle Transaktionen nachverfolgen — er kann damit aber keine Bitcoin ausgeben.
Der xpub ist daher die Grundlage für [Watch-Only](#watch-only)-Wallets und den [Multisig](../anleitung/multisig-bitcoin-wallet/)-Aufbau, bei dem jedes Gerät seinen eigenen xpub mit [Fingerprint](#fingerprint) und [Ableitungspfad](#ableitungspfad) beisteuert.
Varianten wie `ypub` oder `zpub` kodieren in ihrer Bech32-Variante denselben Inhalt für andere Adressformate.
Handhabung und Export eines xpubs zeigen der [Sparrow-Wallet-Leitfaden](../anleitung/sparrow-wallet/) und der [Tails-Sparrow-Beitrag](../anleitung/tails-os-sparrow-wallet/).
