# Tails OS: Ein Privatsphäre-Betriebssystem

[Tails OS](https://tails.net/) ist eine Linux-Distribution mit einem radikalen Konzept: **Digitale Amnesie**.
Nach jedem Herunterfahren vergisst es alles, was du getan hast.
Dieses Betriebssystem ist darauf ausgelegt, **keine digitalen Fußabdrücke** zu hinterlassen und deine Identität selbst auf potenziell kompromittierten Geräten zu schützen.

In diesem Artikel erfährst du, wie Tails funktioniert, warum es ein wichtiges Werkzeug für digitale Souveränität ist und wie du es für sensibelste Aufgaben einsetzen kannst.

## Das Problem der digitalen Spuren

Wenn du einen Computer benutzt, hinterlässt du unausweichlich Spuren:
Browserverläufe, temporäre Dateien, Systemprotokolle, Caches.
Selbst wenn du den Inkognito-Modus nutzt oder den Verlauf löschst — moderne Forensik-Tools können oftmals zurückverfolgen, was du getan hast.

In einer digitalisierten Welt, wo Profiling durch Unternehmen, staatliche Überwachung und autoritäre Regime eine Bedrohung darstellen, ist es zunehmend wichtig, eine Lösung zu haben, um diese Spuren zu vermeiden oder zu minimieren.

Das Problem ist technisch tief verwurzelt:
Herkömmliche Betriebssysteme sind darauf ausgelegt, alles zu protokollieren und zu speichern.
Dies dient der Bequemlichkeit (bspw. "Zuletzt genutzte Dateien" oder "Suchanfragen dieser Woche"), nicht jedoch deiner Privatsphäre.
Selbst Verschlüsselung schützt nicht vor den Spuren, die auf der Festplatte zurückbleiben.

Die Lösung ist ein Betriebssystem, das dieses Grundprinzip umkehrt, um digitale Spuren zu vermeiden:
==Statt alles zu speichern, speichert es *nichts*. Statt dich zu identifizieren, macht es dich unsichtbar.==

## Was ist Tails OS?

**Tails OS** (The Amnesic Incognito Live System) ist im Gegensatz zu üblichen Sicherheitswerkzeugen kein Zusatz — es ist ein komplettes Betriebssystem für digitale Privatsphäre.
Es läuft vollständig von einem USB-Stick und hinterlässt nach dem Herunterfahren **keinerlei Spuren** auf dem verwendeten Computer.

Die wichtigsten technischen Grundprinzipien lauten zusammengefasst:

- **Live-System aus RAM**: Läuft komplett im Arbeitsspeicher, ohne Festplattenzugriff
- **Keine persistenten Spuren**: Alle Aktivitäten werden beim Herunterfahren gelöscht
- **Tor by Default**: Jeglicher Internetverkehr wird automatisch über das Tor-Netzwerk geroutet
- **Integrierte Verschlüsselung**: Werkzeuge für PGP, LUKS und sichere Löschung
- **Sicherheitshärtung**: Sandboxing, Read-only-System, unsichere Dienste deaktiviert

## Wann ist Tails die richtige Wahl?

Tails ist ein Spezialwerkzeug für Situationen höchster Sicherheitsanforderungen.

**Es wurde geschaffen für**:

- Journalistische Recherchen in repressiven Regimen
- Whistleblowing und sensible Dokumentenübertragung
- Sichere Kommunikation unter Aktivisten

**Allgemeinere Einsatzszenarien**:

- Bitcoin-Transaktionen auf potenziell kompromittierten Geräten
- Umgehung von Internetzensur
- Sicherheitschecks auf Keylogger oder Spyware

**Es ist ungeeignet für**:

- Alltägliche Aufgaben (Office, Medienkonsum)
- Leistungsintensive Aufgaben
- Dauerhafte Arbeitsumgebungen

## Entscheidende Vorteile

- **Absolute Spurenlosigkeit**: Nach dem Herunterfahren sind alle Aktivitäten, temporären Dateien und Browserverläufe **dauerhaft gelöscht**. Selbst forensische Untersuchungen finden keine Rückstände.

- **Anonymität durch Tor**: Jede Verbindung läuft über mindestens drei zufällige Tor-Knoten. Deine echte IP-Adresse bleibt für Websites und Dienste unsichtbar.

- **Immunität gegen lokale Kompromittierung**: Selbst wenn der Host-PC mit Malware infiziert ist (Keylogger, Screen-Capture), kann diese Tails nicht ausspähen, da es isoliert im RAM läuft.

- **Hardwareunabhängigkeit**: Läuft auf fast jedem x86_64-Rechner ab 2005 ohne Installation

### Integrierte Sicherheitswerkzeuge

- **Tor Browser**: Anonymes Surfen mit vorinstallierten Schutz-Addons
- **KeePassXC**: Passwortmanager für sichere Zugangsdaten
- **OnionShare**: Sichere Dateiübertragung über Tor
- **MAT**: Metadaten-Entfernung aus Dokumenten
- **GnuPG**: E-Mail- und Dateiverschlüsselung
- **Electrum Wallet**: Bitcoin-Transaktionen

:::tip Fehlt da nicht was?
In einem weiterne Artikel sehen wir uns bald an, wie man auch Sparrow Wallet unter Tails OS nutzen kann.
:::

## Die praktischen Grenzen

- **Performance-Einschränkungen**:
    Da alles vom USB-Stick und aus dem RAM läuft, ist Tails spürbar langsamer als native Systeme.
- **Hardware-Kompatibilität**:
    Nicht alle WLAN-Karten, Drucker oder Grafikchips werden optimal unterstützt.
- **Eingeschränkte Offline-Nutzung**:
    Viele Funktionen erfordern Tor-Verbindung und sind ohne Internet stark eingeschränkt.
- **Unkomfortabilität**:
    Dokumente, Browser-Lesezeichen und Systemeinstellungen werden nach jedem Neustart zurückgesetzt.
    Die standardmäßig fehlende Persistenz ist Feature und Bequemlichkeits-Bug zugleich.
- **Lernkurve**:
    Umgang mit PGP-Verschlüsselung und Linux-Basiskonzepten erfordert Einarbeitung.

## Schritt-für-Schritt: Tails einrichten und nutzen

### Voraussetzungen

- USB-Stick (mind. 8 GB, empfohlen 32 GB)
- Vertrauenswürdiger Computer zur Erstellung
- Stabile Internetverbindung

### Anleitung

1. **Image herunterladen**: [tails.net/install](https://tails.net/install/index.de.html)
2. **Signatur verifizieren**: Anleitung auf der Website befolgen
3. **Stick erstellen**:
   - Windows/macOS: Tails Installer oder BalenaEtcher
   - Linux: `dd`-Befehl oder GNOME Disks
4. **Booten**:
   - USB einstecken
   - Rechner neu starten
   - Boot-Menü aufrufen (macOS: mit der <kbd>Alt</kbd>-Taste, ansonsten meist F10/F12/Esc)
   - USB-Laufwerk auswählen
5. **Einstellungen**: Sprache und Tastaturlayout wählen
6. **Sicherheitseinstellungen**:
   - Tor-Verbindung prüfen
   - MAC-Adressen-Spoofing aktivieren
   - Optionale Persistenz-Partition einrichten (nur für erfahrene Nutzer)

### Arbeitsablauf: Wie du Tails für Bitcoin-Transaktionen sicher nutzt

Wenn du Tails für sensible Bitcoin-Transaktionen oder zum Schutz deiner Finanzdaten verwenden möchtest, ist ein sorgfältiger Arbeitsablauf entscheidend. Hier sind die Schritte, die du befolgen solltest:

1. **Sichere Hardware:** Stelle sicher, dass du eine vertrauenswürdige Hardware verwendest.
    Ein dedizierter Computer oder ein Laptop, der nur für Tails und sensible Aktivitäten genutzt wird, ist ideal.
2. **Tails-USB-Stick erstellen:** Erstelle einen Tails-USB-Stick, indem du das Tails-Image auf einen USB-Stick schreibst.
    Verwende hierfür einen vertrauenswürdigen Computer.
3. **Tails starten:** Stecke den USB-Stick in deinen Computer, starte den Computer neu und wähle den USB-Stick als Boot-Gerät aus.
    Tails startet nun und du gelangst in die Tails-Umgebung.
4. **Tor-Verbindung:** Starte die Tor-Verbindung, um sicherzustellen, dass du anonym unterwegs bist.
    Der Tor-Browser ist standardmäßig auf Tails installiert und bietet eine sichere Möglichkeit, das Internet zu nutzen.
5. **Bitcoin-Wallet:** Öffne deine Bitcoin-Wallet-Software (Electrum ist voinstalliert, Sparrow kann man sich persistieren), und stelle sicher, dass sie korrekt konfiguriert ist.
6. **Transaktionen durchführen:** Führe deine Bitcoin-Transaktionen durch, indem du die Wallet-Software nutzt.
    Achte darauf, dass du die richtigen Empfangsadressen und Beträge verwendest.
7. **System herunterfahren:** Wenn du mit deinen Transaktionen fertig bist, fahre das System herunter.
    Tails löscht automatisch alle Daten und Spuren, die während der Sitzung erstellt wurden.

## Sicherheitspraktiken

Handle nach diesen fundamentalen Regeln, um Risiken zu minimieren:

- **Persistenz mit Vorsicht nutzen**: Nur für unkritische Daten, starkes Passwort
- **Keine Browser-Addons installieren**: Kompromittiert Anonymität
- **System regelmäßig updaten**: Bei jedem Start auf Aktualisierungen prüfen
- **Dateien doppelt verschlüsseln**: Selbst im Persistenten Speicher

Achte auf folgende **Warnsignale**:

- Unerklärliche Verbindungsabbrüche
- Ungewöhnlich hohe CPU-Last
- Fehlgeschlagene Update-Versuche
- Warnmeldungen des Tor-Browsers oder der Tor-Verbindung

## Digitale Selbstverteidigung in einer transparenten Welt

==Tails OS ist mehr als ein Werkzeug - es ist eine **philosophische Position gegen die Überwachungsgesellschaft**.==
Es gibt dir die Macht zurück, in einer Welt der totalen Transparenz unsichtbar zu bleiben.

Die Einrichtung ist dank detaillierter Anleitungen selbst für Linux-Neulinge machbar.
Die wahre Herausforderung liegt in der disziplinierten Anwendung der Sicherheitspraktiken.
Bist du bereit, die Extrameile zu gehen, gewinnst du Gewissheit, dass deine digitalen Handlungen privat bleiben.

In Zeiten von Vorratsdatenspeicherung und angestrebter Chatkontrolle ist Tails kein Nischenwerkzeug mehr:
Es ist eine Notwendigkeit für jeden, der digitale Souveränität ernst nimmt.
Als Teil eines Ökosystems mit [VPN](../vpn-leitfaden/), [GrapheneOS](../grapheneos-sicherheit-privatsphaere/) und [Nostr](../nostr-dezentrale-twitter-alternative/) verschafft es dir einen großen Spielraum.
