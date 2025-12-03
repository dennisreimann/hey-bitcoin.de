# Bitcoin selber verwahren

Selbstverwahrung (oder englisch Self-Custody) bedeutet, die uneingeschränkte Kontrolle über deine Bitcoin zu übernehmen:
=="Not your keys, not your coins"== ist ein seit Bitcoins Ursprung bestehendes Mantra, welches die wichtigste Regel der Bitcoin-Selbstverwahrung treffend zusammenfasst.
Es bedeutet: Wenn du nicht selber im Besitz der privaten Schlüssel zu deinen wertvollen [Satoshis](/glossar/#satoshis) bist, besitzt du sie streng genommen nicht, sondern vertraust stattdessen einer Drittpartei (wie bspw. einer Börse), welche die Kontrolle darüber hat.

In diesem Artikel erfährst du, warum Selbstverwahrung essenziell für die Kernversprechen von Bitcoin ist, welche Vorteile, Risiken und Verantwortungen damit einhergehen und wie du sicher in dieses grundlegende Thema startest.

## Warum Selbstverwahrung?

Bitcoin wurde mit dem Prinzip der Eigenverantwortung erschaffen, um seinen Nutzern ein System finanzieller Souveränität und Zensurresistenz zu bieten.
Die Verwahrung durch Dritte (Börsen oder Banken) und damit einhergehende Abhängigkeit von ihnen widerspricht diesem Prinzip fundamental.

Drittparteien können deine Konten einfrieren, Transaktionen blockieren oder auch insolvent gehen.
Einige bekannte und traurige Beispiel:

- Mt. Gox (2014): 850.000 Bitcoin verloren
- Celsius (2022): 4,7 Milliarden Dollar Vermögen eingefroren
- FTX-Pleite (2022): 8,7 Milliarden Dollar Vermögenslücke

Selbstverwahrung bedeutet, dein eigener Bankier zu sein. Damit gehen sowohl Vorteile, als auch Risiken und Verantwortung einher.

### Die praktischen Vorteile

- Du hast die vollständige Kontrolle: Niemand kann deine Bitcoin ohne deine Zustimmung blockieren oder beschlagnahmen.
- Zensurresistenz und Unabhängigkeit: Du kannst jederzeit und an jeden Transaktionen durchführen.
- Sicherheit vor Gegenparteirisiko: Börsen und Banken können pleite gehen oder gehackt werden.

### Die Kehrseite: Die Verantwortung liegt ganz allein bei dir

Du bist deine eigene Bank und trägst damit auch die volle Verantwortung:
Es gibt keine Hotline, die dir dein Passwort zurücksetzen kann.
Die größten Risiken:

- Verlust deines [privaten Schlüssels](/glossar/#private-key-und-seed-phrase):
  Ohne ihn sind deine Bitcoin für immer verloren - es gibt keine weitere Wiederherstellungsoption.
- Diebstahl deiner [Seed Phrase](/glossar/#private-key-und-seed-phrase):
  Sollte jemand anderes deine 12 oder 24 Wörter in die Hände bekommen, kann diese Person ebenfalls über deine Bitcoin verfügen und sie stehlen. Ein digital oder online gespeicherter Seed ist besonders gefährdet.

==Selbstverwahrung ist kein Komfort-Feature, sondern ein fundamentaler Paradigmenwechsel:
Du tauschst Bequemlichkeit gegen absolute finanzielle Souveränität.==

## Die Praxis - Wie startet man sicher?

Dieser Teil gibt einen Überblick über die notwendigen Komponenten und grundlegenden Prinzipien.
Für die Bitcoin-Selbstverwahrung benötigst du:

- Eine Hardware-Wallet: Ein spezialisiertes Endgerät, welches deinen privaten Schlüssel generiert und sicher speichert.
- Ein Backup deines privaten Schlüssels: Physisch, robust, geheim und bestenfalls redundant.
- Einen sicheren Computer, der frei von Malware ist: Idealerweise ein dediziertes Gerät oder eine Live-Umgebung wie Tails OS.
- Eine Wallet-Software: Die Schnittstelle zur Bitcoin-Blockchain, mit der du deine Konten und Transaktionen verwaltest.

### Das zentrale Element: Der private Schlüssel/die Seed Phrase

Was ist das? 12 oder 24 zufällig generierte Wörter aus einer standardisierten Wortliste ([BIP](/glossar/#bip-bitcoin-improvement-proposal) 39).
Warum ist er so wichtig? Aus diesen Wörtern lassen sich alle Adressen und weitere private Schlüssel ableiten.
Wer diese Wörter hat, hat die Kontrolle über alle dazugehörigen Satoshis.

Die zwei goldenen Regeln:

1. Absolute Geheimhaltung: Keine Fotos, keine Cloud-Speicher, keine E-Mails, kein Passwort-Manager.
2. Physische Sicherheit: Schutz vor Feuer, Wasser und Diebstahl durch robuste Backups (z.B. auf Stahlplatten)

### Der praktische Einstieg und bewährtes Vorgehen

Es gibt verschiedene Hersteller und Modelle von Hardware-Wallets.
Ich empfehle dir die [BitBox](https://shop.bitbox.swiss/) (einfach und benutzerfreundlich) und/oder eine [ColdCard](https://coldcard.com/) (etwas komplexer, dafür mit umfangreicheren Nutzungsmöglichkeiten).

Die konkreten Schritte der Einrichtung können je nach Modell variieren, siehe dazu die jeweiligen Anleitungen der Hersteller.
Die zugrundeliegende Logik bleibt jedoch gleich, daher konzentriert sich dieser Leitfaden nicht auf ein spezielles Modell, sondern auf die essenziellen Schritte und Prinzipien, die unabhängig von der gewählten Hardware-Wallet gelten.

### Schritt 1: Die richtige Vorbereitung

Bevor du deine Wallet anfasst, ist die mentale Vorbereitung der wichtigste Schritt.

- Bildung: Nimm dir Zeit, diesen Artikel und die empfohlenen Ressourcen in Ruhe zu lesen.
  Verstehe die Konzepte, bevor du handelst.
- Umgebung: Wähle einen ruhigen, ungestörten Ort ohne Zeitdruck.
  Schalte Ablenkungen aus, so dass du konzentriert die folgenden Schritte ausführen und reflektieren kannst.
- Material: Halte dein physisches Backup-Medium (z.B. Stahlplatte und Stempel oder einen unlöschbaren Stift und robusten Zettel) griffbereit.
  Besorge dir dieses Material vor der Initialisierung der Wallet.

### Schritt 2: Deine Hardware-Wallet initialisieren

Schließe deine neue, originalverpackte Hardware-Wallet an und folge den Setup-Anweisungen des Herstellers.
Wähle die Option, eine neue Wallet zu erstellen.
Das Gerät wird nun eine Reihe von Wörtern – deine Seed Phrase – generieren.
Dies ist der kritischste Moment.

:::warning Achtung!
Überspringe jeden Schritt, der dir anbietet, einen bereits existierenden "Seed" wiederherzustellen, es sei denn, das ist genau das, was du vorhast.
Bei der Ersteinrichtung sollte deine Harware-Wallet vollkommen unbestückt daherkommen und es sollte auch kein bestehender Seed beiliegen.
:::

### Schritt 3: Die Seed Phrase sicher dokumentieren

Führe diesen Schritt von Hand und offline durch!
Die Wörter werden dir auf dem Display deiner Wallet angezeigt.
Schreibe jedes Wort sauber von Hand und in der exakten Reihenfolge auf dein vorbereitetes Backup-Medium.

Überprüfung ist Pflicht: Die Wallet wird dich auffordern, einige der Wörter zur Bestätigung erneut einzugeben.
Dies dient nicht dazu, dich zu testen, sondern stellt sicher, dass du die Phrase korrekt notiert hast.
Fahre erst fort, wenn diese Überprüfung erfolgreich abgeschlossen ist.

Goldene Regel: Deine Seed Phrase darf den Bildschirm der Wallet niemals verlassen.
Sie wird nicht digital erfasst, fotografiert oder in den Computer eingegeben.

### Schritt 4: Eine PIN einrichten

Nach der Seed Phrase wirst du aufgefordert, eine PIN für dein Gerät zu vergeben.
Wähle eine PIN, die nicht einfach zu erraten ist, die du dir aber gut merken kannst.
Diese PIN schützt dein physisches Gerät vor unbefugtem Zugriff.

### Schritt 5: Das Backup finalisieren und sicher verwahren

Dein handschriftlicher Zettel ist nun dein Schlüssel zum Vermögen.
Übertrage die Wörter nun auf dein robustes, langfristiges Backup (z.B. eine Stahlplatte).
Bewahre dein Backup an einem sicheren Ort auf, der vor Feuer, Wasser und unbefugtem Zugriff geschützt ist.
Erwäge eine redundante Lagerung (bspw. ein zweites Backup an einem anderen Ort).

### Schritt 6: Dein Setup testen

Du simulierst den Verlustfall mit einem kleinen Betrag:
Dieser Schritt baut Vertrauen in dein Setup auf und ist unerlässlich, um dir zu beweisen, dass du alles richtig gemacht hast.

Sende einen kleinen, für dich vertretbaren Betrag (z.B. 20 €) an eine Empfangsadresse deiner neuen Wallet.
Setze deine Hardware-Wallet komplett zurück ­— folge dafür den Anweisungen des Herstellers für einen sicheren Reset.

Wiederherstellung: Richte die Wallet erneut ein, aber wähle diesmal die Option zum Wiederherstellen einer vorhandenen Wallet.
Gib die auf deinem Backup-Medium notierte Seed Phrase in der richtigen Reihenfolgen ein.

Erfolgskontrolle: Wenn die Wallet wiederhergestellt ist und du deinen kleinen Testbetrag siehst, hast du bewiesen, dass dein Backup funktioniert. Jetzt kannst du mit größeren Beträgen fortfahren.

Du bist jetzt deine eigene Bank. Handle entsprechend verantwortungsvoll und hab Spaß daran.

### Weitere Schritte und Ausbaumöglichkeiten

Mit einer Hardware-Wallet und einem sicheren Backup hast du das Fundament für die Selbstverwahrung gelegt.
Um deine Privatsphäre und Souveränität weiter zu stärken, empfehle ich dir die folgenden nächsten Schritte:

- Mach dich mit den Wallet Grundlagen vertraut und lerne die Konzepte [Accounts, Derivation Paths und Passphrases](/anleitung/bitcoin-wallet-grundlagen/) kennen.
- Für maximale Privatsphäre: Lass [deinen eigenen Bitcoin-Node](/anleitung/bitcoin-fullnode-raspberry-pi-4/) laufen
 und [verbinde deine Wallet mit deiner Bitcoin-Node](/anleitung/bitcoin-fullnode-mit-wallet-verbinden/).
  Dies verhindert, dass du dich auf die Server Dritter verlassen musst und diese deine IP sowie Transaktionsdaten nachvollziehen können.
- Für fortgeschrittene Nutzer: Die Kombination aus einer Hardware-Wallet und der leistungsstarken Software Sparrow Wallet auf einem sicheren System bietet dir ein Maximum an Sicherheit und Kontrolle. Ich werde diese Serie bei Gelegenheit um weitere Artikel dazu erweitern.
