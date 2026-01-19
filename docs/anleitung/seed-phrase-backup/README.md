# Seed Phrase Backup: Von Papier bis Shamir

Deine Seed Phrase ist dein Vermögen — der Rest ist Technik.
Natürlich solltest du dir auch über Hardware Wallets und zusätzliche Sicherheitsmöglichkeiten wie Passphrases) und MultiSig Gedanken machen — dennoch ist das Backup die einzige Komponente, die im Ernstfall über Verlust oder Rettung entscheidet.
Dieser Artikel gibt dir einen systematischen Überblick über Backup-Methoden und hilft dir, die richtige Strategie für deine individuelle Situation zu finden.

## Die goldene Regel & die drei Säulen

==Erstelle mindestens zwei unabhängige Backups an physisch getrennten Orten, bevor du anfängst, nennenswerte Beträge zu halten.==

*Ein* Backup ist kein Backup — erst Redundanz verschafft dir wirklich Verlässlichkeit.

**Die drei Säulen eines guten Backups**:

1. **Verfügbarkeit**: Du findest es im Stress wieder, auch nach Jahren.
2. **Integrität**: Es überlebt Feuer, Wasser, physische Zersetzung und Zeit.
3. **Vertraulichkeit**: Nur du (und deine Erben) können es nutzen.
    Keine andere Person sollte es finden oder entschlüsseln können.

## Gängige Backup-Methoden im Vergleich

### 1. Papier – Die Baseline

Papier ist der Ausgangspunkt.

**Vorteil**: Es ist günstig, schnell erstellt und bleibt offline.
Es ist leicht zu verstecken und kann relativ unauffällig mit weiteren Unterlagen versteckt werden.

**Probleme**:
Vielfältige Anfälligkeit für Feuer, Wasser, Säure, Verblassen, Faulnis.
Ein durchschnittliches Blatt Papier überlebt einen Hausbrand nicht und verrottet bei Wasserschaden innerhalb von Tagen.

**Best Practice**: Nutze festes, archivierungs-taugliches Papier, lagere es in einem wasserdichten und feuerresistenten Etui.
Erstelle zwei Kopien und bewahre sie getrennt auf — zum Beispiel einen bei dir, einen bei einem vertrauenswürdigen Familienmitglied.

**Lebensdauer**: 5-20 Jahre, je nach Qualität und Lagerung.

### 2. Stahl – Der Standard

Metall-Backups sind die gängige Best Practice.
Es gibt vorgefertigte Stahlplatten und Stempelsets, mit denen du deine Seed Phrase in Metall prägst.

**Vorteil**: Hitzebeständig (mehrere hundert Grad Celsius, überlebt einen Hausbrand), wassergeschützt, zeitstabil, mechanisch robust.

**Probleme**:

- Korrosion: Rost bei billigem Stahl.
- Sieht für Einbrecher potenziell wertvoll aus.
- Teurer als Papier (50-150 €), aber das sollte es dir wohl wert sein.
- Tiefe Kratzer oder unsauberes Stanzen können die Lesbarkeit nach Jahrzehnten beeinträchtigen.

**Best Practice**: Edelstahl ist dein Freund, denn er rostet praktisch nicht.
Achte darauf, dass die Wörter *tief* gestanzt oder graviert sind – oberflächliche Gravuren können bei Hitze verschwinden.
Teste die Lesbarkeit nach einem Jahr.

**Lebensdauer**: 50+ Jahre, wenn du Qualität kaufst.

### 3. Verschlüsselte digitale Backups – Die riskantere Komfortlösung

Digitale Backups sind verlockend: Du kannst sie einfach kopieren, verschlüsseln und an mehreren Orten lagern.
Dabei solltest du aber nicht über Password-Manager nachdenken, sondern wenn dann Veracrypt-Container oder LUKS-verschlüsselte USB-Sticks in Betracht ziehen.

**Probleme**:

- Key-Logger oder andere Datenlecks auf dem System, wo du das Backup erzeugst.
  Ein digitales Backup ist nur so sicher, wie das Gerät, auf dem es erstellt wurde.
- Vergessene Passwörter, denn es ist kein Passwort-Reset möglich.
- Bitrot: Datenverfall auf dem Speichermedium.
- Technologie-Obsoleszenz: Wie steht es um USB-A in 20 Jahren?

**Absolute No-Gos**:

- Unverschlüsselte Textdatei
- Screenshot in der Smartphone-Galerie
- Cloud-Sync ohne client-seitige Verschlüsselung

**Best Practices**:

- Erstelle das Backup auf einem **airgapped** Gerät, welches nicht online geht.
- Nutze [Tails OS](../tails-os-privatsphaere-betriebssystem/) und Veracrypt mit starker Passphrase.
- Führe jährliche Integritätsprüfungen durch.

**Lebensdauer**: USB-Stick 10 Jahre, SSD 5-10 Jahre – bei korrekter Lagerung und regelmäßigen Checks.

## Aufteilung nach Shamir Secret Sharing

Wenn du dich über Backup-Methoden informierst, kommst du oft auch an der Aufteilung des Backups in mehrere Fragmente vorbei.
Dies ist mit den oben beschriebenen Methoden kombinierbar, birgt jedoch zusätzliche Risiken in Form erhöhrer Komplexität.

Die bekannteste Lösung dafür ist das **Shamir Secret Sharing**:
Es teilt deine Seed Phrase in N Teile auf, von denen M Teile zur Wiederherstellung ausreichen (z.B. 3 von 5).
Klingt zusätzlich sicher und mathematisch elegant, ist aber praktisch komplex.

**Vorteil**: Kein Single Point of Failure. Ideal für Erbregelungen oder wenn du keine einzelne Person mit dem kompletten Seed betrauen willst.

**Probleme**: ==Komplexität ist der größte Feind.==
Man verliert vielleicht den Überblick: War es 2-von-3 oder 3-von-5? Wo war welcher Teil?
Shamir-Teile sind nur so sicher wie ihre Aufbewahrung – ein Teil im Büro und einer im Keller reicht nicht, wenn beide beim selben Einbruch weg sind.

**Typische Fehler**:

- Zu niedrige Schwelle: 2-von-3 ist kaum besser als ein einzelnes Backup, wenn ein Teil gestohlen wird.
- Teile nicht physisch getrennt.
- Fehlende Dokumentation für Erben.
- Wie mit zusätzlicher Passphrase umgehen?

**Best Practice**:

- Mindestens **3-von-5** Teile
- Physisch getrennt über verschiedene Verwahrungsorte.
- Schriftliche, versiegelte Anleitung bei vertrauenswürdiger Person oder einem Anwalt hinterlegen: "Diese 5 Metallplatten sind ein Bitcoin-Backup. 3 davon zusammen stellen den Seed wieder her. Die Passphrase lautet XYZ und liegt separat bei Person B."

**Lebensdauer**: Wie die Medien der Teile (Metall > Papier > USB).

## Passphrase-Backups

Wenn du eine [Passphrase](../bitcoin-wallet-grundlagen/#die-passphrase-ein-verstecktes-tresorfach) nutzt, ist sie **genauso wichtig** wie die Seed Phrase.
Sie ist **kein Ersatz** für ein Backup, sondern ein **zusätzlicher Schutz**.
Ohne Passphrase ist die Seed Phrase wertlos – und umgekehrt.

**Regeln für Passphrase-Backups**:

- **Niemals am selben Ort** wie die Seed Phrase
- **Nicht auf demselben Metall** stempeln (sonst hat der Dieb alles)
- **Test-Recovery mit Passphrase** ist Pflicht!
- **Klare Trennung kommunizieren**: "Seed Phrase liegt im Tresor zu Hause, Passphrase beim Anwalt in versiegelten Umschlag."
- **Auffindbarkeit und Dokumentation**: Du erstellst ein Shamir-Backup der Seed, aber die Passphrase steht nur in deinem Kopf. Stirbst du, sind die Coins weg – egal wie gut das Shamir-Backup ist. Deine Erben haben 4 von 5 Teilen, aber ohne Passphrase nichts.

## Bedrohungsmodelle

### Typische Verlustszenarien

- **Hausbrand**: Papier weg, Metallplatte überlebt (wenn nicht direkt im Herd des Feuers). Digitales Backup im selben Raum schmilzt.
- **Einbruch**: Metallplatte sieht wertvoll aus und wird mitgenommen. Verschlüsseltes USB-Backup bleibt sicher – wenn der Dieb das Passwort nicht kennt.
- **Wasserschaden**: Papier verrottet, Metall bleibt, ein USB-Drive ist in Gefahr sofern es nicht absolut wasserdicht verpackt wurde.
- **Eigenes Versagen**: Zu komplexes Setup, kein eigenes Test-Recovery, Passphrase vergessen.
- **Erbschaft**: Familie findet nur ein Backup, aber keine dazugehörigen Passwörter und Anleitung oder wissen nicht, was damit anzufangen ist.

### Die tödlichsten Fehler

1. **Backup am selben Ort wie Seed**: Metallplatte im Schreibtisch, Hardware Wallet im selben Raum.
2. **Nur ein Backup**: Redundanz ist keine Option, sondern Pflicht.
3. **Kein Recovery-Test**: Erstelle deine Wallet, lösche und stelle sie wieder her – und das *bevor* echte Coins darauf liegen.
4. **Komplexes Setup ohne klare Dokumentation**: Was bedeutet "Shamir mit 3-von-5" für deine Erben? Was ist Shamir? Welche 5 Teile? Wo?
5. **Digitales Backup auf Online-Rechner**: Erstelle das Backup auf einem Gerät, welches definitiv nicht online geht.

## Entscheidungsmatrix: Welche Methode für wen?

| Methode | Kosten | Komplexität | Sicherheit | Option für |
|---------|--------|-------------|------------|---------------|
| Papier | € | Niedrig | Mittel | Anfänger (<0,01 BTC) |
| Metall | €€ | Mittel | Hoch | Standard-Nutzer (>0,01 BTC) |
| Digital | €€ | Hoch | Mittel-Hoch | Technisch affine Nutzer |
| Shamir | €€€ | Hoch | Hoch | Fortgeschrittene Nutzer |

## Erbschaftsplanung

Ein Backup ist nur so gut wie die Fähigkeit deiner Erben, es zu nutzen. Die technisch perfekte Lösung ist wertlos, wenn deine Familie sie nicht findet oder missversteht.

**Checkliste für Erb-Anweisungen**:

- **Physische Verortung**: Wo genau liegen die Backups? (Tresor, Bankfach, Anwalt, vertrauenswürdiger Freund)
- **Wiederherstellungsanleitung**: Schriftlich, Schritt-für-Schritt, mit Screenshots oder Fotos
- **Werkzeuge**: Welche Software/Hardware wird benötigt? (Sparrow, BitBox, Electrum, etc.)
- **Kontaktperson**: Wer hilft technisch? (Vertrauensperson, nicht unbedingt Erbe)
- **Zeitfaktor und Komplexität**: Wie lange dauert die Wiederherstellung? Vermeide Passphrases, Multi Signatur und Shamir, wenn deine Erben keine Kompetenz haben.

:::tip Auch hier ist die Trennung wichtig!
Hinterlege die Anleitung **nicht** zusammen mit dem Backup. Sonst weiß ein Einbrecher auch, was er damit anfangen muss. Ein versiegelter Umschlag im Schließfach oder beim Anwalt ist besser als ein Zettel neben der Metallplatte.
:::

## Praxis-Checkliste für dein Backup-Setup

**Direkt**:

- Hast du **zwei** physische Backups?
- Sind sie an **zwei** verschiedenen Orten?
- Hast du **mindestens ein Metall-Backup**? → Behandle dies als Blocker. Alles andere kann warten.

**Diesen Monat**:

- Recovery-Test mit deiner Wallet durchgeführt (Wiederherstellung aus dem Backup)
- Falls genutzt: Passphrase-Backup getestet
- Integrität der digitalen Medien geprüft (USB-Stick einstecken, öffnen, prüfen)

**Dieses Jahr**:

- Erb-Anweisungen aktualisiert
- Backup-Orte überprüft (noch vorhanden? noch sicher?)
- Neue Backup-Technologie evaluiert (z.B. Multi Signatur, wenn dein Vermögen gewachsen ist)

## Fazit: Backup ist keine Einmal-Aktion

Das perfekte Backup gibt es nicht – nur das passende für dein Bedrohungsmodell.
Starte mit **Metall + Metall** und erweitere es, wenn du die Grundlagen sicher beherrschst.
Ein einfaches, gut getestetes Backup schlägt ein komplexes, das du im Stress falsch bedienst.

**Wichtiger**: Ein Backup, das du nicht verstehst, ist kein Backup.
Wenn Shamir zu komplex ist, bleib bei Metall. Wenn du keine Airgap-Umgebung für digitale Backups hast, lass es ganz.

==Teste deine Wiederherstellung regelmäßig und evaluiere dein Backup-Setup jährlich!==
