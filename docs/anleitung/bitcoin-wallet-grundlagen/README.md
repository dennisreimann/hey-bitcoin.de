# Wallet Grundlagen: Accounts, Derivation Paths und Passphrases

Nachdem du dich für die [Selbstverwahrung](../bitcoin-selber-verwahren/) entschieden hast, warten einige mächtige Funktionen darauf, entdeckt zu werden.
Dieser Artikel erklärt dir wichtige Schlüsselkonzepte, die dir mehr Kontrolle, Organisation und Sicherheit in der Handhabung deiner Wallet geben.
Du lernst, was Accounts, Derivation Paths und Passphrases sind und wie du sie praktisch nutzen kannst.

## Accounts: Deine Kontenverwaltung

Was sind Accounts? Stell dir Accounts wie verschiedene Unterkonten in deinem Wallet vor.
Aus einer einzigen Seed Phrase kannst du mehrere unabhängige Konten erstellen.
Jeder Account generiert seine eigenen Empfangsadressen und verwaltet seine Bitcoin separat.

### Praktische Anwendungsfälle

- Budgetierung und Organisation: Trenne deine Bitcoin nach Verwendungszweck (bspw. Alltag, Sparen, Separierung von [KYC](/glossar/#kyc-und-aml) und Non-KYC Coins)
- Privatsphäre: Verhindere, dass Außenstehende dein gesamtes Vermögen durch Analyse einzelner Adresse nachvollziehen können, indem du Bestände und Transaktionen auf verschiedene Unterkonten verteilst.
- Testumgebungen: Ein Account für riskantere Experimente (bspw. neue Apps mit kleineren Beträge testen), ohne dein Hauptvermögen zu gefährden.

### So richtest du sie ein

In Wallet-Software wie [Sparrow](../sparrow-wallet/) oder auf Geräten wie der BitBox oder ColdCard kannst du einfach neue Accounts hinzufügen.
Sie werden unter verschiedenen Namen geführt, bleiben aber alle durch deine Master-Seed Phrase gesichert.

Beispiel mit drei Accounts, welche durch dieselbe Seed Phrase verwaltet werden, aber transaktionsmäßig getrennt sind:

- Account 1 (Hauptdepot): Der Ableitungspfad ist `m/84'/0'/0'`
- Account 2 (Tägliche Ausgaben): Der Ableitungspfad ist `m/84'/0'/1'`
- Account 3 (Sparplan): Der Ableitungspfad ist `m/84'/0'/3'`

Womit wir direkt beim nächsten Thema wären ...

## Derivation Paths: Ableitungspfade der Adressen

Ein Derivation Path ist eine standardisierte "Formel", die angibt, wie aus deiner Seed Phrase hierarchisch die einzelnen Private Keys und damit die Empfangsadressen abgeleitet werden. Dies ist in [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) definiert.
Er sieht aus wie ein Dateipfad, bspw. `m/84'/0'/0'`.

Warum ist das wichtig?

- Standardisierung: Stellt sicher, dass verschiedene Wallets (Sparrow, Electrum, Hardware-Wallets) aus derselben Seed Phrase dieselben Adressen generieren können.
- Wallet-Typen: Unterschiedliche Pfade werden für verschiedene Adressformate verwendet, bspw.:
  - `m/84'/0'/0'`: Typisch für Native SegWit (`bc1q...`)
  - `m/86'/0'/0'`: Typisch für Taproot (`bc1p...`)

Normalerweise musst du dich nicht manuell um den Pfad kümmern – deine Wallet wählt den passenden Standard.
Das Wissen um den verwendeten Ableitungspfad ist jedoch entscheidend, wenn ...

- Du eine Wallet wiederherstellen willst und die Software den Pfad nicht automatisch erkennt.
- Du fortgeschrittene Setups mit Multi-Sig konfigurierst, bei denen alle Parteien denselben Pfad verwenden müssen.

Merke: Für die meisten Nutzer ist es ausreichend zu wissen, dass es diesen Mechanismus gibt — deine Wallet-Software kümmert sich um die Details.
Du solltest den Ableitungspfad deines Kontos jedoch sicherheitshalber für die Wiederherstellung parat haben.
Hierzu ist auch die [Übersicht der einzelnen Wallet-Standards](https://walletsrecovery.org/) sehr hilfreich.

## Die Passphrase: Ein verstecktes Tresorfach

Eine Passphrase ist ein zusätzliches, selbst gewähltes Passwort, welches du zusätzlich zu deiner Seed Phrase verwendest.
Sie wird daher auch oft als 25. bzw. 13. Wort deiner Seed Phrase bezeichnet.

Technisch gesehen erzeugt die Kombination aus deiner Seed Phrase und der Passphrase eine komplett neue, weitere Wallet mit eigenen Adressen.
Du kannst pro Seed Phrase so viele Passphrases wie du magst einrichten.
Hier gibt es keine Limitierung und jede Passphrase stellt eine neue Wallet dar.

Ebenso hättest du auch hier wieder die Möglichkeit, pro Passphrase weitere Unterkonten anzulegen, welche wiederum getrennt von den Accounts der Wallet ohne Passphrase bzw. mit einer anderen Passphrase wären.

### Vorteile und Anwendungen

- Plausible Deniability (Abstreitbarkeit): Das ist der größte Vorteil.
  Du kannst eine Passphrase einrichten, die auf eine Fake/Decoy-Wallet mit einem kleinen Betrag führt.
  Falls du unter Druck gesetzt wirst, deine Seed Phrase preiszugeben, gibst du sie heraus – der Angreifer findet jedoch nur die Decoy-Wallet.
  Dein Hauptvermögen in der Passphrase-Wallet bleibt versteckt.
- Schutz bei Diebstahl der Seed Phrase: Selbst wenn jemand deine 24 Wörter stiehlt, kann er ohne deine Passphrase nicht auf dein Hauptvermögen zugreifen.
- Ein weiteres Sicherheitsmerkmal: Sie wirkt wie ein zweites Passwort nur für deine Bitcoin.

### Nachteile und Risiken

- Irreversibler Verlust: Wenn du deine Passphrase vergisst, ist das Vermögen in der dazugehörigen Wallet für immer verloren. Es gibt kein Zurück.
- Komplexität: Sie erhöht die Komplexität deines Setups und damit potenziell die Fehleranfälligkeit. Du solltest sie analog zu deiner Seed Phrase auch sicher verwahren und ein [Backup erstellen](../seed-phrase-backup/), dies jedoch nicht am gleichen Ort wie das der Seed Phrase aufbewahren.

### Entscheidungshilfe

Eine Passphrase zu verwenden ist eine gute Idee, wenn ...

- Du größere Beträge verwahrst und zusätzlichen Schutz gegen Erpressung oder Diebstahl wünschst.
- Du dich mit dem Komfort-Trade-off wohlfühlst.

Von der Verwendung absehen solltest du, wenn ...

- Du Sorge hast, das zusätzliche Passwort zu vergessen oder zu verlieren.
- Dein Bitcoin-Betrag den zusätzlichen Aufwand und das Risiko eines Vergessens nicht rechtfertigt.
- Eine einfache Erbregelung Priorität hat und du dem Fall vorbeugen möchtest, dass deine Nachkommen mit der zusätzlichen Komplexität nicht klarkommen.

:::tip Gut zu wissen
Wie du gelernt hast, kannst du dich aber auch immer noch später für die Verwendung einer Passphrase entscheiden — deine Seed Phrase und dein bestehendes Backup ändern sich dadurch nicht.
:::

### Einrichtung einer Passphrase

1. In den Einstellungen deiner Hardware-Wallet (oft unter "Advanced" oder "Security") aktivierst du die Passphrase-Funktion.
2. Wähle eine starke, aber unvergessliche Passphrase:
    - Sie muss nicht zwingend ein einzelnes Wort sein, sondern kann ein Satz oder eine Kombination sein, die du dir sicher merken kannst.
    - Wichtig ist, dass nur du sie kennen kannst und sie sich von deiner Seed Phrase unterscheidet.
3. Backup der Passphrase: Behandle deine Passphrase mit derselben Sorgfalt wie deine Seed Phrase – aber bewahre sie getrennt auf!
   - Erstelle ein **physisches Backup** (z.B. auf einer separaten Stahlplatte oder in einem versiegelten Umschlag).
   - **Wichtiger Sicherheitshinweis**: Bewahre das Backup der Passphrase **nicht am selben Ort** wie das Backup deiner Seed Phrase auf. Im Falle eines Diebstahls oder einer Durchsuchung solltest du vermeiden, dass beide Komponenten zusammen gefunden werden. Ein getrenntes, sicheres Versteck ist ebenso entscheidend für den "Plausible Deniability"-Schutz.

4. Teste die Wiederherstellung! Genau wie bei der Seed Phrase:
   - Sende einen **kleinen Betrag** (z.B. 20 €) an eine Adresse deiner neuen Passphrase-Wallet.
   - Setze deine Wallet **komplett zurück**.
   - Stell sie **neu her** – diesmal durch Eingabe deiner **Seed Phrase UND der Passphrase**.
   - Siehst du deinen Testbetrag wieder? Erst dann funktioniert dein Backup korrekt.

:::warning Achtung
Überspringe den Testschritt nicht leichtfertig.
Ein vergessene oder falsch notierte Passphrase führt zum **irreversiblen Verlust** des Vermögens in dieser Wallet.
:::

Als zusätzliches Wiedererkennungsmerkmal gibt es auch den Wallet-Fingerprint:
Es ist ein achtstelliger Code (bspw. `b16be191`), der als Fingerabdruck die jeweiligen Wallets eindeutig identifiziert.
Du findest den Fingerprint meistens in den Key-Einstellungen deiner Wallet.

## Zusammenfassung

Accounts, Derivation Paths und Passphrases sind wichtige Konzepte für fortgeschrittene Bitcoin-Nutzer.
Zusammengenommen bieten sie dir wirksame Werkzeuge zur Organisation und Schutz deiner Bitcoin, sowie der Sicherstellung von Kompatibilität verschiedener Wallets.

Hierarchisch dargestellt ergibt sich folgende Staffelung:

- Seed Phrase / Private Key
  - (optional: Passphrase)
    - Accounts / Unterkonten
      - Derivation Paths / Ableitungspfade
        - Adressen

Jetzt wo du diese Werkzeuge und Konzepte kennen gelernt hast, kannst du die Funktionen wählen, die zu deinem Sicherheitsbedürfnis und Komfortlevel passen.
