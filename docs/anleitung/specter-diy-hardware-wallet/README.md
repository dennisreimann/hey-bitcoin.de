# Specter: Die selbstgebaute Hardware-Wallet

Der Specter ist eine quelloffene Hardware-Wallet, die du aus handelsüblichen Standard-Komponenten selbst zusammenbauen kannst.
Er funktioniert air-gapped per QR-Code, ist von Grund auf auf [MultiSig-Setups](../multisig-bitcoin-wallet/) ausgelegt und verwahrt deinen Seed bevorzugt auf einer **SmartCard**.

## Specter im Detail: DIY und Shield

Die [Specter Hardware Wallet](https://specter.solutions/hardware/) ist ein Open-Source-Selbstbau-Projekt unter der Schirmherrschaft der [Specter Association](https://specter.solutions/contact) und die konsequente Umsetzung des Mantras "don't trust, verify":

- **Nur Standard-Elektronik**: Kein proprietärer Chip, keine NDA-konstruierte Blackbox, alle Bauteile sind dokumentiert und frei bestellbar.
- **Jede Zeile Code offen**: Firmware, Hardware-Design und Software sind quelloffen. Du kannst das Gerät nachvollziehen, prüfen und von Grund auf selber zusammenbauen.
- **Bitcoin-only**: Keine Altcoins, keine unnötige Angriffsfläche.

### Die wichtigsten Eigenschaften

Der Specter vereint viele Funktionen, die ihn zu einem vollwertigen Keystore für fortgeschrittene Setups machen:

- **MultiSig-Wallets als Hauptfokus**: Das Gerät ist ausdrücklich als Keystore für MultiSig-Wallets konzipiert. Du kannst damit mehrere Schlüssel und Wallets parallel verwalten.
- **Air-Gapped per QR-Code**: Die Kommunikation läuft vollständig über QR-Codes und die eingebaute Kamera. Kein WLAN, kein Bluetooth, Einsatz einer SD-Karte optional.
- **Verschiedene Entropy-Quellen**: Der Seed kann aus Münzwürfen, Touchscreen-Timing und Hardware-TRNG generiert werden.
- **Großer Touchscreen**: Ein 4″ Farbdisplay mit komfortabler Eingabefunktion ohne Mini-Tastatur.
- **Secure Bootloader und Reproduzierbare Builds**: Nur signierte Firmware bootet; manipulierte Images werden abgelehnt. Du kannst die Firmware selbst kompilieren und mit dem offiziellen Release abgleichen.
- **SmartCard-Verwahrung**: Dein Seed liegt auf einer herausnehmbaren SmartCard. Die Karte ist PIN-geschützt und sperrt sich bei zu vielen Fehlversuchen.

### Der Unterschied: Specter-DIY und Specter Shield

Der Name "Specter-DIY" steht für das **Basismodul** der Hardware-Wallet:
Ein STM Discovery Board mit Touchscreen, Kamera und microSD-Slot.
Das Basismodul allein hat **keinen SmartCard-Slot**.
Dein Seed gelangt nur temporär in den Speicher, entweder über manuelle Eingabe oder via [SeedQR](#seedqr-die-alternative-ohne-smartcard).
Es wäre auch möglich, den Seed verschlüsselt persistent im Speicher oder auf einer SD-Karte abzulegen, davon wird jedoch explizit abgeraten.

Die **SmartCard-Verwahrung** ist an eine Erweiterungsplatine gekoppelt, welche den **integrierten SmartCard-Slot** mitbringt.
Die SmartCard ist also erst in der Kombination *Specter-DIY + Erweiterungsplatine* verfügbar, was dann als **Specter Shield** bezeichnet wird.

## Die SmartCard: Dein Seed in der Hand

Das Verwahrungsmodell der SmartCard sieht folgendermaßen aus:

- Die **Seed-Entropie** liegt auf der SmartCard, nicht im Gerät.
  Sie wird **nie im internen Flash** der Specter-Hardware gespeichert.
- Der Zugriff auf den Schlüssel ist durch die **Card-PIN** geschützt.
- Den **Lockout** setzt die Karte selbst durch: Bei zu vielen Fehlversuchen sperrt sie sich dauerhaft.
- Die Karte lässt sich herausnehmen und separat aufbewahren.

Damit bietet die SmartCard einen echten Hardware-Schutz, ohne dass dein Seed irgendwo im Gerät landet:
Wer das Gerät stiehlt, hat nur die Hardware. Wer die Karte stiehlt, kommt ohne PIN nicht weiter.

:::tip Gerätegebunden oder portabel?
Die SmartCard gibt es in zwei Varianten:

- **verschlüsselt** ist sie an dein konkretes Gerät gebunden und mit anderen Specter unbrauchbar.
- **portabel** funktioniert die SmartCard nach PIN-Eingabe auf jedem Specter Shield.

Welche Variante für dein Setup sinnvoll ist, hängt davon ab, ob du sie auf einem einzigen Gerät nutzen oder auch auf ein Ersatzgerät ausweichen können möchtest.
:::

### Secure Element — aber herausnehmbar

Klassische Hardware-Wallets verbauen ein fest eingelötetes Secure Element.
Specter wählt mit der SmartCard einen anderen Weg:

- **Kein Blackbox-Bauteil im Gerät selbst**, die Basis ist vollständig transparent und nachvollziehbar.
- **Die SmartCard ist das Secure-Element**, welches du selbst einsteckst und jederzeit wieder herausnehmen kannst.
  So bekommst du den PIN-Lockout-Mechanismus klassischer Wallets, ohne einem versiegelten Chip vertrauen zu müssen.
  Der Chip sitzt auf der Karte und gehört dir.
- **Multi-User über verschiedene Karten nutzbar**, da jeder Nutzer seinen Seed mit einer eigenen SmartCard mitbringen kann.

## SeedQR: Die Alternative zur SmartCard

Wenn du auf deinem Specter-DIY keine SmartCard verwenden möchtest, kannst du den Seed klassisch **air-gapped per SeedQR** verwalten.
Dabei wird dein Seed als QR-Code [auf Papier oder Stahl übertragen](../seedsigner-software-seedqr/#seedqr-der-private-schlussel-als-qr-code):

- Der Seed wird als **SeedQR** ausgedruckt oder auf eine Stahlplatte gestanzt.
- Bei jedem Einschalten liest die Kamera den SeedQR ein. Kein manuelles Tippen, keine Schreibfehler.
- Nach dem Ausschalten ist der Seed weg: Das Gerät speichert ihn nur temporär im Arbeitsspeicher.

:::tip Hinweis
Der SeedQR-Workflow ist eine vollwertige, aber sekundäre Option.
Die SmartCard ist bequemer, denn der Seed muss nicht ständig neu eingelesen werden.
Außerdem wird der Seed zusätzlich mit PIN und Lockout geschützt.
Wie genau du einen SeedQR erstellst, wird ausführlich im [SeedSigner-Artikel](../seedsigner-software-seedqr/#seedqr-der-private-schlussel-als-qr-code) erklärt.
:::

Ob mit SmartCard oder SeedQR: Der Specter kann seinen Seed auch vollständig "amnesisch" halten.
Der Seed liegt dann nur im Arbeitsspeicher und verschwindet beim Ausschalten.
Wird dir das Gerät gestohlen, hat der Dieb damit **nichts** in der Hand: keinen Seed, keinen Zugriff auf deine Coins.

## Software: Firmware, Bootloader und Updates

Für den Betrieb brauchst du die Specter-DIY-Firmware. Die wichtigsten Punkte:

1. **Firmware herunterladen** vom [offiziellen Release-Kanal](https://github.com/cryptoadvance/specter-diy/releases).
2. **Verifizieren**: Achte auf die signierten Release-Images und [verifiziere die Software](../software-verifizieren/).
3. **Secure Bootloader installieren**: Beim Erst-Flash wird der Bootloader gesetzt, welcher anschließend nur signierte Firmware startet.
4. **Updates**: Nachfolgende Versionen werden sicher über den Bootloader eingespielt.

:::warning Wichtig
Nutze aus Sicherheitsgründen den [Secure Bootloader](https://github.com/cryptoadvance/specter-diy/blob/master/docs/security-model.md) und keine unkontrollierten Zwischenstände. Das Projekt hat für regelmäßige Updates einen klaren, signierten Prozess.
:::

## Konfiguration und erste Schritte

Nach dem Zusammenbau und der Installation der Firmware:

1. **Key erzeugen**: Leg dir einen frischen Seed an — inklusive optionaler [Passphrase](../bitcoin-wallet-grundlagen/#die-passphrase-ein-verstecktes-tresorfach).
2. **Seed verwahren**: Nutzt du die Kombination mit dem [Specter Shield](#die-smartcard-dein-seed-in-der-hand), stecke deine SmartCard in den Slot und richte die Card-PIN ein — die [SeedQR-Variante](#seedqr-die-alternative-ohne-smartcard) als Backup kannst du zusätzlich erstellen.
3. **Wallet hinzufügen**: Importiere deinen Wallet-Descriptor per QR-Code, SD-Karte oder Datei.
4. **Mit Sparrow verbinden**: Der [Sparrow Wallet](../sparrow-wallet/)-Artikel erklärt, wie du das Gerät als air-gapped Keystore importierst.

## Hardware: Kosten und Bezug

Der Specter-DIY ist auch als **Bausatz ohne Löten** verfügbar:

- **Einzelteile**: STM32F469 Discovery Board + Touchscreen + Kamera + microSD — insgesamt etwa **100–160 €** je nach Bezugsquelle.
- **Bausatz/fertig**: Beim deutschen Anbieter [ClavaStack](https://clavastack.com/de/specter-diy) bekommst du ihn als Komplett-Set.
  Entweder fertig zusammengebaut oder als Steck-Bausatz (15–30 Minuten Aufbau, kein Lötkolben nötig) ab ca. **165 €**.
  Die Shield-Erweiterung und SmartCards gibt es dort ebenfalls.

## Fazit und Einordnung: Der Specter im Vergleich

Der Specter kann sehr gut alleinstehend als Hardware-Wallet verwendet werden.
Auf Grund seiner Eigenschaften ist er aber auch eine sehr gute Wahl, um neben **anderen Hardware-Wallets** seinen Platz in einem [MultiSig-Setup](../multisig-bitcoin-wallet/) einzunehmen.
Dies sieht man auch gut, wenn man ihn mit anderen Hardware-Wallets vergleicht und die Eigenschaften gegenüberstellt:

| | **Specter** | **[SeedSigner](../seedsigner-hardware/)** | **BitBox02** |
| :--- | :--- | :--- | :--- |
| Anbindung | Air-gapped per QR | Air-gapped per QR | USB (Pairing) |
| Seed-Verwahrung | SmartCard oder SeedQR | SeedQR | Intern (nicht entnehmbar) |
| Secure Element | Auf der SmartCard (entnehmbar) | Nein | Ja |
| Fullnode-Anschluss | Über Sparrow | Über Sparrow | Über Sparrow oder BitBox-App |
| MultiSig | Ja (Hauptfokus) | Ja (bis drei Schlüssel) | Ja |
| WLAN/Bluetooth | Nein | Nein (bei Pi Zero v1.3) | Nein |
