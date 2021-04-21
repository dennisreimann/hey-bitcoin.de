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

Der private Schlüssel ist die Grundlage für den Zugriff auf deine Bitcoins.
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

## Adressen und Signaturen

Von deinem privaten Schlüssel werden Adressen abgeleitet, mit denen du Bitcoin empfangen kannst.
Mit dem privaten Schlüssel kannst du ebenso Signaturen für diese Adressen erstellen.
Die Signatur ist der Beweis, dass dir die Adresse gehört – du benötigst sie, wenn du Bitcoin versenden möchtest.
Das Erstellen von Adressen und Signatur übernimmt deine Wallet.

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
