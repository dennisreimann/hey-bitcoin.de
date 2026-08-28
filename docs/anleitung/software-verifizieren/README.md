# Software verifizieren

## Was und warum?

Die meisten seriösen Webseiten, auf denen du Bitcoin-bezogene Software herunterladen kannst, weisen dich drauf hin, den Download zu verifizieren.
Dies ist wichtig um sicherzustellen, dass du auch wirklich die vom Hersteller angebotene Software installierst.

Es gibt einige potentielle Möglichkeiten, mit denen Angreifer dir eine schadhafte Software-Version unterschieben können.
Herkömmlicherweise werden die meisten dieser Angriffsszenarien durch die App Stores von Apple, Google, Microsoft, etc. überprüft.
Bitcoin-bezogene Software wird oftmals jedoch außerhalb dieser zentralen Plattformen angeboten, was bspw. Vorteile in der Zensurresistenz hat.
Indem du prüfst, dass die Software von der richtigen Website heruntergeladen wurde und sie anschließend verifizierst, schützt du dich weitestgehend vor Angreifern.

Auch wenn es auf den ersten Blick recht technisch erscheint, solltest du dich mit den folgenden Schritten vertraut machen.
Das Verifizieren der Software gehört zu jeder Installation und jedem Update dazu – Kontrolle geht über Vertrauen, schließlich geht es um dein Geld.

## Wie verifiziere ich Software?

Voraussetzung ist die Software **GPG**, die du für dein Betriebssystem installieren musst:

- Windows: [Gpg4win](https://gpg4win.org/download.html)
- macOS: [GPGTools](https://gpgtools.org/)
- Linux: [GnuPG](https://gnupg.org/download/index.html)

Bevor wir loslegen noch ein paar Begriffe, die du während des Vorgangs gebrauchen wirst:

- **Private Key**: Der private Schlüssel, mit dem der Software-Hersteller die Datei signiert. Nur der Hersteller hat diesen Schlüssel und er kann damit öffentlich einsehbare Signaturen erstellen.
- **Signature**: Öffentlich zugängliche Information, mit der sichergestellt werden kann, dass sie vom Besitzer eines bestimmten privaten Schlüssels erstellt wurde.
- **Public Key**: Dieser Schlüssel ist das öffentliche Gegenstück zum privaten Schlüssel, mit denen die Allgemeinheit die Signatur des Herstellers überprüfen kann.
- **Checksum**: Prüfsumme, die den Dateiinhalt kryptografisch beschreibt. Ändert sich der Dateiinhalt auch nur im geringsten, dann erhält man auch eine andere Prüfsumme.
- **SHA256**: Die kryptografische Funktion, mit der die Prüfsumme erstellt wird. Sie wird mit dem Dateinamen der zu überprüfenden Datei aufgerufen. Die Funktion liefert unabhängig vom Betriebssystem bei gleichem Dateiinhalt immer das gleiche Ergebnis.

Der Ablauf ist dabei immer gleich:

0. Öffentlichen Schlüssel des Herstellers herunterladen und importieren: Dies ist nur beim ersten Mal  nötig (oder bei Änderungen des Schlüssels). Im Idealfall bezieht man den öffentlichen Schlüssel vom Hersteller direkt und unabhängig von der Software-Downloadseite.
1. Software-Datei herunterladen
2. Prüfsumme erstellen und vergleichen
3. Signatur-Datei herunterladen
4. Signatur der Software-Datei verifizieren

Je nach Betriebssystem und GPG-Software kannst du einzelne Teilschritte der Verifizierung auch in der grafischen Benutzeroberfläche machen.
Den vollständigen Weg gehen wir im folgenden aber auf der Kommandozeile durch – keine Angst, es ist einfacher als es zunächst klingt. 😉

## Beispiel: BitBox App

Sehen wir uns den Vorgang am Beispiel der [BitBox App](https://bitbox.swiss/download/) (hier Version 4.51.4) an:
Zusätzlich zu den Download-Buttons siehst du die *Checksums* für die jeweiligen Dateien.

::: tip HINWEIS
Die Screenshots in diesem Artikel zeigen teils eine ältere Version – der Ablauf ist aber bei jeder Version identisch.
:::

![BitBox App verifizieren](./bitbox-app-verifizieren.png)

### Schritt 1: Prüfsumme vergleichen

Du lädst die Datei für dein Betriebssystem hinunter und öffnest den Download-Ordner in der Kommandozeile.
Mit dem Befehl `sha256sum` und dem Dateinamen kannst du die Prüfsumme erstellen und sie dann mit der Angabe auf der Website vergleichen:

![Prüfsumme erstellen und vergleichen](./sha256-bitbox.png)

Die Prüfsumme stimmt – das ist schon mal ein guter erster Schritt.

::: tip HINWEIS
Bis hierhin kann die Sache aber immer noch einen Haken haben:
Hat ein Angreifer die Download-Seite kompromitiert, wäre es ihm wahrscheinlich sehr leicht möglich, neben der Datei auch die Prüfsumme auszutauschen.
Daher sollte nicht nur die Prüfsumme, sondern auch die Signatur der heruntergeladenen Datei gecheckt werden!
:::

### Schritt 2: Signatur überprüfen

Die meisten Hersteller bieten dir auf ihrer Download-Seite eine Anleitung zum Verifizieren der Signatur an. So auch ShiftCrypto in den GitHub-Release-Notes zum jeweiligen Release, die du über den [Verify Signature](https://github.com/BitBoxSwiss/bitbox-wallet-app/releases/tag/v4.51.4)-Link erreichst.

Solltest du den öffentlichen Schlüssel für die ShiftCrypto Software-Releases noch nicht importiert haben, dann kannst du ihn direkt von der [offiziellen ShiftCrypto-Website](https://bitbox.swiss/download/shiftcryptosec-509249B068D215AE.gpg.asc) herunterladen. Es ist wichtig, den Schlüssel von einer unabhängigen Quelle zu beziehen und nicht nur von der Download-Seite selbst.

```bash
# Public Key herunterladen
curl https://bitbox.swiss/download/shiftcryptosec-509249B068D215AE.gpg.asc > shiftcryptosec.asc

# Public Key importieren
gpg --import shiftcryptosec.asc
```

Dies muss nun ebenfalls für die Signatur der Download-Datei geschehen:
Zuerst laden wir die Signatur herunter, um sie anschließend zu überprüfen.

Der Signatur-Dateiname entspricht dem der Software – sie hat zusätzlich die Namensendung `.asc`.
Beachte auch, dass die Signaturdatei im gleichen Ordner wie die Software gespeichert werden muss.

```bash
# Signatur herunterladen
curl https://github.com/BitBoxSwiss/bitbox-wallet-app/releases/download/v4.51.4/BitBox-4.51.4-macOS.dmg.asc > BitBox-4.51.4-macOS.dmg.asc

# Signatur überprüfen
gpg --verify BitBox-4.51.4-macOS.dmg.asc
```

Im Erfolgsfall solltest du folgendes sehen:

```
gpg: Signature made <DATE AND TIME>
gpg:                using RSA key DD09E41309750EBFAE0DEF63509249B068D215AE
gpg: Good signature from "ShiftCrypto Security <security@shiftcrypto.ch>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: DD09 E413 0975 0EBF AE0D  EF63 5092 49B0 68D2 15AE
```

Wichtig ist dabei der Teil `Good signature from "ShiftCrypto Security <security@shiftcrypto.ch>"`.
Die Warnung und der Zusatz `[unknown]` erscheinen, da der Schlüssel in GPG unbestätigt ist.
Dies wäre ein zusätzlicher Schritt, bei dem du bestätigst, dass du diesen Schlüssel auch sicher vom Hersteller direkt bekommen hast.
Die Software kann unabhängig davon installiert werden, da du nun sichergestellt hast, dass sie vom Hersteller signiert wurde.

::: warning ACHTUNG
Sollte die Meldung `Good signature` nicht erscheinen, dann handelt es sich um einen fehlerhaften Download und du solltest die Software nicht installieren.
In dem Fall solltest du dich direkt an den Hersteller wenden und auf dieses Problem aufmerksam machen.
:::

## Beispiel: Specter Desktop App

Weil es so viel Spaß macht, das Ganze nun auch noch mal für die [Specter Desktop App](https://github.com/cryptoadvance/specter-desktop/releases/tag/v2.1.11) (Version 2.1.11).
Die Downloads werden hier direkt auf GitHub angeboten, das Vorgehen ist aber relativ gleich.

![Specter Desktop verifizieren](./specter-desktop-verifizieren.png)

Die Specter-Downloads werden mit dem ["Specter Signer 2026" Public Key](http://keyserver.ubuntu.com/pks/lookup?op=get&search=0x9dc33ca830589de3b3225c26eef5756b2ea42349) signiert. Diesen holst du dir über einen GPG-Keyserver:

```bash
# Public Key über einen Keyserver abrufen
gpg --keyserver keyserver.ubuntu.com --recv-keys 9DC33CA830589DE3B3225C26EEF5756B2EA42349
```

Auch hier ist es gut zu sehen, dass der öffentliche Schlüssel nicht Teil des gleichen GitHub Repositories ist, sondern von einem Keyserver bzw. einer separaten Quelle bezogen wird:
Wäre das Repository kompromitiert, wäre es leicht ebenso auch den Key auszutauschen.
Stattdessen müssten in diesem Fall sowohl das Repository als auch die Schlüsselquelle gehackt werden.

### Prüfsumme und Signatur überprüfen

Du lädst die Software für dein Betriebssystem herunter, damit du die Prüfsumme erstellen kannst:

![Prüfsumme erstellen](./sha256-specter.png)

Da Specter pro Release verschiedenste Dateien veröffentlicht, werden die Prüfsummen und Signaturdateien nicht einzeln angeboten.
Stattdessen werden sie alle gesammelt in der Datei [SHA256SUMS](https://github.com/cryptoadvance/specter-desktop/releases/download/v2.1.11/SHA256SUMS) zusammengefasst.
Die zugehörige Signatur liegt ebenfalls im Release-Ordner als [SHA256SUMS.asc](https://github.com/cryptoadvance/specter-desktop/releases/download/v2.1.11/SHA256SUMS.asc).
Diese Datei ist mit dem "Specter Signer 2026" Schlüssel signiert, so dass mit der Überprüfung der Signatur die Korrektheit der darin enthaltenen Prüfsummen sichergestellt werden kann.

```bash
# Signierte Prüfsummendatei herunterladen
curl https://github.com/cryptoadvance/specter-desktop/releases/download/v2.1.11/SHA256SUMS > SHA256SUMS

# Signatur herunterladen
curl https://github.com/cryptoadvance/specter-desktop/releases/download/v2.1.11/SHA256SUMS.asc > SHA256SUMS.asc

# Signatur überprüfen
gpg --verify SHA256SUMS.asc
```

Im Erfolgsfall sollte die Meldung folgendermaßen aussehen:

```
gpg: Signature made <DATE AND TIME>
gpg:                using RSA key 9DC33CA830589DE3B3225C26EEF5756B2EA42349
gpg: Good signature from "Specter Signer 2026" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 9DC3 3CA8 3058 9DE3 B322  5C26 EEF5 756B 2EA4 2349
```

Wenn du `Good signature` siehst, dann kannst du auch hier wieder von einer validen Signatur ausgehen.

Nun muss nur noch die Prüfsumme gecheckt werden:
Dies geht indem du in der signierten Datei nach dem Ergebnis der `sha256sum` Funktion suchst …

```bash
grep $(sha256sum Specter-v2.1.11.dmg) SHA256SUMS
```

Wenn du die Zeile mit der Prüfsumme siehst ist alles gut:

![Prüfsumme checken](./grep-sha256-specter.png)

Bekommst du keine Ausgabe oder einen Fehler zu sehen, dann ist die Prüfsumme nicht in der signierten Datei vorhanden.
In dem Fall solltest du im Specter Desktop Repository ein Issue anlegen und auf das Problem hinweisen.
