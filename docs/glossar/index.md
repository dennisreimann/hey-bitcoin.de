---
sidebar: auto
---

# Glossar

Ein paar Begriffserklärungen, weil mittlerweile auch viele englische Bezeichnungen in der deutschsprachigen Diskussion rund um Bitcoin standardmäßig verwendet werden …

## Wallet

Eine Wallet ist eine App, mit der du deine Bitcoins verwalten kannst.
Du kannst dein Guthaben und Transaktionen sehen, sowie Bitcoin senden und empfangen.
Wallets sind quasi Bitcoin-Banking-Apps und es gibt sie für Handys und Computer.

Obwohl Wallet übersetzt Geldbörse bedeutet, gleicht ihre eigentliche Funktion mehr einem Schlüsselbund:
Die Wallet verwaltet deine kryptografischen Schlüssel, die dir Zugang zu deinen Bitcoins geben.
Darüber hinaus übernimmt sie die Kommunikation mit dem Bitcoin-Netzwerk:
Die Wallet prüft und signiert deine Adressen und empfängt und sendet Transaktionen.

## Private Key und Seed Phrase

Der private Schlüssel ist die Grundlage für die [Selbstverwahrung](/anleitung/bitcoin-selber-verwahren/) deiner Bitcoins.
Es ist die sensibelste Information und du solltest ihn möglichst sicher aufbewahren.
Die Seed Phrase ist eine menschenlesliche Entsprechung des privaten Schlüssels.
Es ist die in 24 bzw. 12 Wörter kodierte Form des Schlüssels, die dir auch ein einfacheres analoges Backup ermöglicht.

Man sagt auch "not your keys, not your coins": Wenn du den Schlüssel nicht hast, sind es nicht deine Coins.
Wer den privaten Schlüssel hält, hat auch den Zugriff und nur mit dem privaten Schlüssel lassen sich Transaktionen tätigen.

## Passphrase

Die Passphrase ist ein optionales Feature, welches als zusätzlicher Sicherheitsfaktor genutzt werden kann:
Es ist ein 25. Zusatzwort für deine Seed Phrase, mit dem du eine neue Wallet von deinem Seed ableitest.
Du kannst damit deinen Seed als Basis nehmen, ihn in mehrere "Konten" aufteilen und die Passphrase als Passwort nutzen.
Passphrases solltest du getrennt von deinem Seed aufbewahren und sichern.

## Account / Konto

Genau wie der Begriff Wallet kann auch der Begriff Konto für sehr unterschiedliche Dinge verwendet werden.
In Wallet-Software, die [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) unterstützt (alle üblichen Wallets tun dies), kann ein Bitcoin-Wallet mehrere Konten haben.
Jedes dieser Konten hat seinen eigenen Ableitungspfad und somit auch seine eigenen Adressen.

## Adressen und Signaturen

Von deinem privaten Schlüssel werden Adressen abgeleitet, mit denen du Bitcoin empfangen kannst.
Mit dem privaten Schlüssel kannst du ebenso Signaturen für diese Adressen erstellen.
Die Signatur ist der Beweis, dass dir die Adresse gehört – du benötigst sie, wenn du Bitcoin versenden möchtest.
Das Erstellen von Adressen und Signatur übernimmt deine Wallet.

## Block

Anstatt jede Transaktion einzeln zu verarbeiten, bündelt das Bitcoin-Netzwerk sie in Blöcken.
Blöcke werden etwa alle 10 Minuten erstellt und können auf Grund einer strengen Dateigrößenbegrenzung nur eine bestimmte Anzahl von Transaktionen enthalten.
Sobald ein Block akzeptiert wurde und mehrere Bestätigungen erhalten hat, kann er nie wieder geändert werden.

## Satoshis

Dabei handelt es sich um die Untereinheit eines Bitcoin:
So wie ein Euro in 100 Cent unterteilbar ist, steht ein Bitcoin für 100.000.000 Satoshis (100 Millionen).
Dies bietet als Einheit genug Teilbarkeit, um damit auch bei ggf. massiver Wertsteigerung in der Zukunft gut umgehen zu können.
Satoshis werden auch liebevoll einfach "Sats" genannt.

## Custodial und Non-Custodial

Diese Klassifizierung begegnet einem häufig im Zusammenhang mit Apps und Anbietern.
Kurzgesagt geht es darum, ob eine Drittpartei deine Schlüssel bzw. sensitiven Informationen verwahrt oder du selbst.
Wenn du bspw. deine Coins auf einer Börse liegen hast, dann verwahrt der Anbieter deine Schlüssels und Coins (custodial).
Nutzt du selbst eine [Wallet](#wallet) zum Aufbewahren deiner Schlüssel und Coins, dann bezeichnet man dies als self-custody (non-custodial).

## KYC und AML

*[KYC]: Know Your Customer
*[AML]: Anti Money Laundering

Dies sind regulatorische Richtlinien im Finanzwesen:
KYC ("Kenne deinen Kunden") erfordert seitens Anbietern wie Börsen, dass sie dich als Kunden möglichst umfassend registrieren.
Du gibst dafür viele persönliche Daten preis und dein Einverständnis, dass sämtliche Transaktionen erfasst und protokolliert werden.
Dies soll Geldwäsche, Terrorismus, Drogengeschäfte, etc. verhindern, worin man die Berechtigung für diese AML-Maßnahmen ("Anti-Geldwäsche") sieht.

In der Praxis ist es jedoch leider so, dass dies für den ehrlichen Normalmenschen erhebliche Nachteile mit sich bringt.
Diese umfassende und zentrale Form der Datenerhebung ist ein wahrer Honigtopf für kriminelle Hacker:
Es ermöglicht Identitätsdiebstahl, das Abgreifen von sensiblen Zahlungsinformation und erleichtert auch physische Angriffe, wenn bspw. Adressdaten abhanden kommen.
Für kleine Unternehmen und Startups stellen diese Richtlinien eine große regulatorische Hürde dar:
Sie werden aus dem Markt gedrängt oder ferngehalten, da sie die Anforderungen oftmals nur mit unverhältnismäßigem Aufwand erfüllen können.

Leider sehen wir in dem Zusammenhang zunehmend große Leaks persönlicher Daten (bspw. [Ledger](https://www.blocktrainer.de/ledger-leak-infos/)), sowie eine schleichende Ausweitung von Überwachung, Kontrolle und Zensur.
Dies ist umso bedauerlicher, da es keine handfesten Belege dafür gibt, dass diese Maßnahmen die ursprünglichen Probleme effektiv bekämpfen.

## UTXO: Unspent Transaction Output

In Bitcoin gibt es keine Konten und auch kein Konzept eines Benutzers, dem so ein Konto gehören könnte.
Stattdessen gibt es "unausgegebene Transaktionsergebnisse":
Jede Transaktion hat sogenannte Inputs (das Geld was versendet wird) und Outputs (die neue Verteilung des versendeten Geldes).
Vereinfacht und bildlich kann man sagen, dass durch eine Transaktion die Inputs in neue Bitcoins umgeschmolzen werden:
Die Anzahl Satoshis bleibt dabei gleich, aber die Verteilung auf die in der Transaktion involvierten Adressen ändert sich.
Dabei stehen die in den Inputs versendeten Satoshis nach der Bestätigung einer Transaktion dann selbst wieder als unausgegebene Transaktionsergebnisse dem Besitzer der Empfängeradresse als Inputs für seine nächste Transaktion zur Verfügung.

## Gap-Limit

Aus Performancegründen erstellen Onchain-Wallets in der Regel nur eine bestimmte Anzahl von Adressen (bspw. 20) und überwachen sie auf eingehende Transaktionen.
Wird eine dieser Adressen verwendet, wird eine neue generiert und überwacht.
Da nur die aufeinanderfolgenden, bisher ungenutzten Adressen überwacht werden, werden eingehende Transaktionen auf darüber hinaus gehende Adressen nicht erkannt.

Ein üblicher Fall ist, dass zwei verschiedene Wallets für den selben Private Key benutzt werden.
In einer der Wallets tauchen dann ggf. Transaktionen auf, welche in der anderen Wallet nicht angezeigt werden.
Dies ist oftmal auf das Gap-Limit zurückzuführen und lässt sich beheben, indem man das Gap-Limit erhöht und einen erneuten Scan der Blockchain durchführt.

## BIP - Bitcoin Improvement Proposal

Ein standardisiertes technisches Verfahren und Dokumentformat , um Änderungen an Bitcoin vorzuschlagen und als neuen Standard zu etablieren.
Soll bspw. ein neues Feature in Bitcoin hinzugefügt werden, so muss es zunächst durch solch einen Verbesserungsvorschlag spezifiziert und dokumentiert werden.
Einige der wichtigsten BIPs sind bspw.:

- [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonischer Code für die Erzeugung deterministischer Schlüssel
- [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): Multi-Account-Hierarchie für HD-Wallets
- [BIP 174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): PSBT, Partially Signed Bitcoin Transactions

## BOLT - Basis of Lightning Technology

Analog zu den BIPs für Bitcoin, gibt es für Lightning die BOLTs.
Die verschiedenen Lightning-Implementierungen (bspw. LND, Core Lightning, Eclair) müssen sich an die BOLTs halten, um interoperabel zu sein.
Die verschiedenen Implementierungen können jedoch auch Funktionen enthalten, die in den BOLTs nicht definiert sind.
So werden neue Features ausprobiert, welche dann ggf. später als Standard etabliert werden.
Als Faustregel für ein offiziel verabschiedetes BOLT gilt, dass dies von mindestens zwei Implementierungen unterstützt werden muss.

## Replace-by-fee (RBF)

Ein Transaktionsmerkmal, das es erlaubt eine unbestätigte Transaktion durch eine andere Transaktion zu ersetzen, die mindestens einen der gleichen Inputs ausgibt und eine höhere Transaktionsgebühr zahlt.
Dies kann nützlich sein, wenn eine Transaktion in Zeiten höherer Netzwerkgebühren als üblich stecken geblieben ist und man die Mininggebühr erhöhen möchte, um die Transaktion zu beschleunigen.

## Child-pays-for-parent (CPFP)

Ermöglicht dem Empfänger einer anstehenden Transaktion, die Bestätigung zu beschleunigen.
Er erstellt eine neue Transaktion (Child), bei der er die zu erhaltenden Bitcoin mit einer höheren Gebühr ausgibt als die ursprüngliche Transaktion (Parent).
Dies signalisiert den Minern, beide Transaktionen zu verarbeiten, wofür sie mit der höheren Gebühr belohnt werden.

## Coin Control

Die aktive Auswahl der UTXOs, die in einer Transaktion verschickt werden sollen.
Wallets können die zu verwendenden UTXOs automatisch auswählen — es ist aus mehreren Gesichtspunkten aber oft ratsam, die zu sendenden UTXOs manuell auszuwählen:

- Die Gebühren richten sich nach dem Transaktionsvolumen, das sich nach der Anzahl der Ausgaben richtet. Wer also weniger Ausgänge wählt, kann die Gebühren senken.
- Privatsphäre: Da es möglich ist, den Transaktionsverlauf von UTXOs zu verfolgen und zu sehen, wie sie zuvor ausgegeben wurden, kann der Empfänger möglicherweise weitere Informationen aus dem erhaltenen UTXO ableiten.

## Fiatgeld

Als Fiatgeld werden Zahlungsmittel bezeichnet, die von einer Regierung ausgegeben werden.
Der Wert von Fiatgeld ist nicht durch Rohstoffe wie Gold oder Silber gedeckt oder daran gebunden, sondern ergibt sich aus dem Verhältnis zwischen Angebot und Nachfrage und der Stabilität der ausgebenden Regierung.
Beispiele für Fiatgeld sind der Euro, US-Dollar oder der japanische Yen.
