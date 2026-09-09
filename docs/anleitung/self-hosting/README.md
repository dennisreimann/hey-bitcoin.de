# Self-Hosting: Deine Daten gehören dir

Deine E-Mails, dein Kalender, deine Fotos, deine Dokumente:
All das liegt vermutlich bei Google, Apple, Microsoft oder einem der vielen Cloud-Anbieter.
Bequem ist das zweifellos, doch die Rechnung zahlst du nicht nur mit Geld, sondern vor allem mit deinen Daten:
Wer den Hosting-Dienst betreibt, kann deine Inhalte einsehen, auswerten, für KI-Training verwenden und mit weiteren Daten verknüpfen.

**Self-Hosting** ist der Gegenentwurf:
Du betreibst die Dienste, die sonst "die Cloud" für dich bereitstellen.
Auf eigener Hardware, bei dir zu Hause.
Fotos landen nicht mehr auf fremden Servern, sondern auf deinem eigenen.
Dein Kalender synchronisiert sich über deinen Server, dein Passwort-Tresor liegt in deinem Netzwerk.

Klingt nach einem Projekt für IT-Profis?
Das war es lange Zeit, ist es aber mittlerweile nicht mehr, denn die Software ist einsteigerfreundlicher denn je.
Vielleicht kennst du das Prinzip schon:
Deine [Bitcoin Fullnode](../bitcoin-fullnode/) ist bereits Self-Hosting.
Wer bei Bitcoin auf eigene Infrastruktur und damit auch Privatsphäre setzt, kann das Prinzip noch verallgemeinern: =="meine Daten, mein Server"==.

In diesem Artikel lernst du, warum sich Self-Hosting lohnt, welche Apps sich bewährt haben, wie du stückweise umziehst und worauf du bei Hardware, Backups und Sicherheit achten solltest.

## Was braucht es dafür?

Was früher unsexy nach "Server im Keller" klang, ist heute ein stromsparender Mini-PC von der Größe eines Buchs.
Das reicht für den Anfang und wahrscheinlich darüber hinaus völlig aus.

Der Grundgedanke ist simpel:
Dienste wie Google Photos, iCloud, Dropbox oder Kalender-Dienste sind nichts weiter als Software auf fremder Hardware.
All diese Software ist auch für dein eigenes Gerät verfügbar:
Die meisten als kostenlose und quelloffene Projekte, die von großen Communities gepflegt werden.

Der Unterschied liegt in der Kontrolle:
Bei der Cloud vertraust du darauf, dass ein Anbieter deine Daten sicher lagert, nicht einliest, nicht verkauft, nicht weitergibt und seinen Dienst nicht einfach einstellt.
Beim Self-Hosting entfällt dieses Vertrauensproblem, denn **du** betreibst den Dienst und entscheidest, was mit deinen Daten passiert.

Im Abschnitt zur [Hardware](#hardware-der-passende-einstieg) erfährst du, was deine Optionen für ein zukunftssicheres Setup sind.

## Gute Gründe für Self-Hosting

### Privatsphäre: Wer liest eigentlich mit?

Der wichtigste Grund ist die Privatsphäre deiner persönlichen Daten:

- **E-Mails** enthalten Kontoauszüge, Rechnungen, Arzttermine, Verträge und private Korrespondenz — oft ein weitreichender Einblick in dein privates Leben.
- **Kalender** verraten, wann du wo bist, wen du triffst und wie dein Alltag aussieht.
- **Fotos** zeigen dein Zuhause, deine Familie, deine Reisen — und werden bei großen Anbietern per Bilderkennung analysiert, mit Metadaten angereichert und teils für das Training künstlicher Intelligenz verwendet.

Je bequemer du bist, umso weitreichender bist du analysierbar:
Nutzt du aus Komfort bspw. einen der großen Anbieter für all deine Daten, sammelt sich all das in einem zentralen Profil.
Selbst wenn die Inhalte geschützt sind, bleiben die **Metadaten** aussagekräftig:
Mit wem kommunizierst du, wann, wie oft, aus welcher Region?
Wer die Daten sammelt, kann sie auch verlieren, weiterverkaufen oder für staatlichen Zugriff öffnen.
Wie weit solche Überlegungen reichen, haben wir im Artikel zur [finanziellen Privatsphäre](../finanzielle-privatsphaere/) bereits diskutiert — dieselben Prinzipien gelten für deine Alltagsdaten.

Beim Self-Hosting liegt dieses Wissen in deinen Händen und deinem Netzwerk.
Niemand scannt deine Fotos, niemand wertet deine Termine aus, niemand trainiert ein Sprachmodell mit deinen E-Mails — außer du selbst, wenn es dir nützt.

### Souveränität und Unabhängigkeit

Cloud-Dienste sind nie **dein** Eigentum:

- **Account-Sperrungen:** Ein Algorithmus meldet einen Verstoß, dein Account samt Fotos und Dokumenten ist weg und der Support antwortet bestenfalls mit Floskeln.
- **Dienstabschaltungen:** Die [Killed by Google](https://killedbygoogle.com/)-Liste führt hunderte eingestellte Produkte. Wo landen deine Daten, wenn dein Anbieter das Handtuch wirft oder von einem Konkurrenten übernommen wird?
- **Preisänderungen:** Gratis-Tarife werden beschnitten, Speicher wird teurer, Features wandern ins Abo.
- **Vendor Lock-in:** Der Umzug zu einem anderen Anbieter ist oft bewusst schwer gemacht.

### Kosten auf lange Sicht

Gut gerechnete Cloud-Abos summieren sich:
Ein Familien-Speicherplan, ein Foto-Abo, ein Notizdienst — schnell kommen ein paar hundert Euro pro Jahr zusammen.
Gegenüber steht beim Self-Hosting eine einmalige Hardware-Investition und ein geringer Stromverbrauch.
Die Rechnung geht nicht in jedem Fall auf — Zeit für Setup und Wartung eingerechnet — aber über einige Jahre gesehen hosten die meisten Menschen deutlich günstiger.

### Lerneffekt und Kontrolle

Wer selbst hostet, versteht, wie E-Mail, Synchronisation, Backups und das Internet überhaupt funktionieren.
Dieses Wissen ist wertvoll, macht unabhängiger und zahlt direkt auf deine digitale Souveränität ein.
Und nicht zuletzt: Du kannst jeden Dienst exakt so konfigurieren, wie es zu dir passt.
Ohne Features, die niemand will, und ohne Funktionalitäten, die der Anbieter bewusst weglässt.

## Anwendungsfälle und Apps (Stand 2026)

Die Landschaft der Self-Hosting-Software ist riesig.
Hier sind die bewährten Werkzeuge für die wichtigsten Anwendungsfälle — allesamt quelloffen, aktiv gepflegt und mit ordentlichen Apps für Handy und Browser.

### Fotos: Immich

Der Klassiker unter den Umzugsgründen: Fotos aus der Cloud holen.
Mit [Immich](https://immich.app/) bekommst du:

- Automatischer Hintergrund-Upload von iOS und Android
- Zeitleiste, Alben, Kartenansicht
- Gesichtserkennung und semantische Suche ("Strand 2023", "Geburtstag")
- Freigabe von Alben an Familie und Freunde

Immich zählt zu den beliebtesten Open-Source-Projekten überhaupt und entwickelt sich rasant weiter.
Die Alternative [PhotoPrism](https://www.photoprism.app/) setzt einen anderen Fokus auf Katalogisierung und ist etwas genügsamer bei der Hardware.

### Dateien, Kalender und Kontakte: Nextcloud

[Nextcloud](https://nextcloud.com/) ist das Schweizer Taschenmesser:
Dateisynchronisation wie bei Dropbox, Kalender und Kontakte via CalDAV/CardDAV, Notizen, Office-Kollaboration und Videokonferenzen.
Ein ausreichend dimensionierter Nextcloud-Server kann gleich mehrere Cloud-Dienste ersetzen.

Wenn du nur Kalender und Kontakte selbst hosten willst, reichen auch schlanke Spezialisten:
[Radicale](https://radicale.org/) oder [Baïkal](https://sabre.io/baikal/) sind minimal im Verbrauch und synchronisieren problemlos mit allen Geräten.

Für die reine Dateisynchronisation zwischen deinen Geräten ist [Syncthing](https://syncthing.net/) eine elegante Alternative:
Statt eines zentralen Servers synchronisieren sich die Geräte direkt untereinander.

### Passwörter: Vaultwarden

Ein Passwort-Manager ist Teil der Basis digitaler Souveränität und damit ein idealer Self-Hosting-Kandidat.
[Vaultwarden](https://github.com/dani-garcia/vaultwarden) ist eine schlanke Implementierung des Bitwarden-Servers:
Alle offiziellen Bitwarden-Apps funktionieren unverändert, aber dein Tresor liegt bei dir statt in der Bitwarden-Cloud.
Der Ressourcenbedarf ist winzig, selbst auf einem älteren Mini-PC läuft Vaultwarden nebenbei mit.

### Dokumente: Paperless-ngx

[paperless-ngx](https://docs.paperless-ngx.com/) verwandelt deinen Aktenberg in eine durchsuchbare Datenbank:
Dokumente einscannen, Texterkennung läuft automatisch, Tags und Korrespondenten werden gelernt.
"Wo ist die Garantieurkunde der Waschmaschine?" ist damit eine Suchanfrage statt Graben in einer Kiste im Keller.

### Medien: Jellyfin, Navidrome und Audiobookshelf

- [Jellyfin](https://jellyfin.org/) ist dein eigenes Netflix:
  Filme und Serien aus deiner Sammlung, gestreamt auf TV, Handy und Browser.
  Ohne Abo und ohne, dass ein Streamingdienst dein Sehverhalten protokolliert.
- [Navidrome](https://www.navidrome.org/) streamt deine Musiksammlung (kompatibel mit allen Subsonic-Apps).
- [Audiobookshelf](https://www.audiobookshelf.org/) organisiert Hörbücher und Podcasts.

Gerade hier ist der Trend deutlich:
Die wiederholten Preiserhöhungen bei Plex haben 2025/2026 viele Nutzer zu Jellyfin gebracht.

### Smart Home: Home Assistant

[Home Assistant](https://www.home-assistant.io/) ist die lokale Steuerzentrale für das Zuhause:
Lampen, Thermostate, Sensoren und Kameras laufen ohne Cloud-Zwang eines jeden Herstellers.
"Local first" ist genau das, was Smart Home eigentlich sicher und privat macht.

### Werbeblocker: Pi-hole und AdGuard Home

[Pi-hole](https://pi-hole.net/) und [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) blockieren Werbung und Tracker zentral per DNS.
Für **alle** Geräte im Netzwerk, inklusive Fernseher und Smart-Home-Zubehör, die sich nicht per Browser-Plugin schützen lassen.
Beide sind extrem genügsam und damit der perfekte erste Dienst:
Pi-hole läuft nebenbei auf dem ältesten Raspberry Pi und punktet mit riesiger Community und unzähligen Blocklisten, AdGuard Home bringt eine komfortablere Oberfläche und verschlüsseltes DNS (DoH/DoT) mit.

### Fernzugriff: WireGuard und Tailscale

[WireGuard](https://www.wireguard.com/) und [Tailscale](https://tailscale.com/) schaffen sichere Verbindungen in dein Heimnetz (dazu später mehr im [Abschnitt Sicherheit](#sicherheit-keine-offenen-turen)).
Tailscale nimmt dafür einen Vermittlerdienst des Herstellers in Anspruch — wer das vermeiden will, betreibt die Koordination selbst mit [Headscale](https://github.com/juanfont/headscale).

### Finanzen: Actual Budget

Ausgerechnet die Finanzen legen die meisten Leute bei einer Drittanbieter-App ab.
Dabei sind Kontoumsätze und Budgetpläne mindestens so sensibel wie E-Mails.
[Actual Budget](https://actualbudget.com/) ist eine lokale Budgetverwaltung nach dem Umschlagprinzip:
Jeder Euro bekommt vorab einen Job, die Synchronisation läuft Ende-zu-Ende-verschlüsselt über deinen Server.
Für Freunde der doppelten Buchführung ist [Firefly III](https://firefly-iii.org/) die ausgereiftere, wenn auch technischere Wahl.

### Notizen: Joplin

Notiz-Abos sind der unterschätzte Klassiker unter den Cloud-Kosten — die Antwort heißt [Joplin](https://joplinapp.org/):
Eine quelloffene Notiz-App für Handy und Desktop, die Ende-zu-Ende-verschlüsselt über deinen eigenen Server synchronisiert (Nextcloud oder WebDAV).
Wer es minimalistisch mag, findet mit [Memos](https://www.usememos.com/) eine leichtgewichtige Alternative im Microblogging-Stil.

### Benachrichtigungen: ntfy

Wenn deine Dienste dich wissen lassen wollen, dass ein Backup durchgelaufen ist oder ein Update wartet, geht das üblicherweise über die Push-Infrastruktur von Google oder Apple.
[ntfy](https://ntfy.sh/) dreht das um:
Ein einfacher HTTP-Aufruf schickt die Nachricht an deinen eigenen ntfy-Server, die Handy-Apps empfangen sie.
Einfach genug, um sie in jedes Backup-Skript einzubauen.
Auch viele Self-Hosting-Apps sprechen ntfy direkt an, so dass die ganze Hausüberwachung ohne fremde Push-Infrastruktur läuft.

### Monitoring: Uptime Kuma

Wenn ein Dutzend Dienste laufen, willst du auch wissen, ob sie das noch tun.
[Uptime Kuma](https://uptime.kuma.pet/) überwacht deine Dienste per HTTP(S), TCP, Ping und Docker-Socket, zeigt den Status auf einer hübschen Statusseite an und alarmiert dich — gerne auch per [ntfy](#benachrichtigungen-ntfy).
Damit erfährst du als Self-Hosting-Support-Team von Ausfällen, bevor deine Familie sie bemerkt.

### Weitere Werkzeuge für den Alltag

- [Linkwarden](https://linkwarden.app/) archiviert Lesezeichen komplett (Screenshot, PDF-Snapshot, Metadaten) — gegen Link-Rot und ohne dass ein Browser-Anbieter deine Sammlung mitliest.
- [FreshRSS](https://freshrss.org/) ist dein eigener Feed-Reader: Nachrichten und Podcast-Abos gehen nur zwischen dir und der Quelle hin und her.
- [Stirling-PDF](https://stirlingpdf.com/) ist die lokale PDF-Werkstatt: zusammenführen, komprimieren, OCR — dokumentsensible Vorgänge gehören nicht auf irgendeinen Online-Konverter.
- [Forgejo](https://forgejo.org/) ist eine eigene Git-Plattform (die Software hinter Codeberg) — für alle, die auch Code und Issues selbst verwahren wollen.

### Und Bitcoin?

Deine Fullnode ist Self-Hosting in Reinform — du hast die Blockchain lokal und verlässt dich nicht auf fremde Server.
Wer etwas tiefer einsteigen will, hostet zusätzlich eine eigene [Mempool-Instanz](../bitcoin-fullnode/) oder wie beim [Nostr-Ökosystem](../nostr-dezentrale-twitter-alternative/) eigene Relays.

### Der Schatzkasten: awesome-selfhosted

Diese Liste ist nur ein Anfang.
Die kuratierte Sammlung [awesome-selfhosted](https://awesome-selfhosted.net/) führt hunderte Projekte:
Von RSS-Readern über Rezeptverwaltungen bis zur eigenen Videoüberwachung.
Ein Blick lohnt sich, bevor du für irgendetwas ein Abo abschließt.

## Stück für Stück: Stückwerk schlägt Nichtstun

Der häufigste Fehler ist der Versuch, alles auf einmal umzuziehen:
Dienste, Daten, Domain, Mail — ein Wochenende, ein Umzug, ein Desaster.
So startet das Projekt nicht, so endet es im Frust.

Besser ist das Gegenteil:
==Ein Use Case nach dem anderen, in Ruhe, mit Rückweg.==

1. **Starte mit etwas Unkritischem.**
   Fotos (Immich) oder Passwörter (Vaultwarden) sind perfekt:
   Die Daten sind wichtig, aber der Betrieb ist einfach, und das Cloud-Original bleibt zunächst unangetastet bestehen.
   Den Altbestand holst du bei Google bspw. per [Google Takeout](https://takeout.google.com/) und importierst ihn anschließend bei Immich.
2. **Parallelbetrieb ist dein Sicherheitsnetz.**
   Betreibe beides erst einmal parallel:
   Fotos werden nach wie vor in die Cloud gesichert **und** landen bei Immich.
   Wenn nach Wochen der Praxis alles sitzt, folgt die Kündigung des Abos — nicht vorher.
3. **Nächster Use Case.**
   Kalender und Kontakte (Nextcloud oder Radicale) sind der natürliche nächste Schritt, danach Dateisynchronisation.
4. **E-Mail zuletzt.**
   Die Mail-Umstellung ist die komplexeste Baustelle (siehe [Abschnitt E-Mail](#smtp-warum-e-mail-schwer-selbst-zu-hosten-ist)) und muss nicht zwangsläufig Teil deines Projekts werden.

Realistischer Zeithorizont:
Wochen bis Monate, kein Wochenendprojekt.
Das ist kein Mangel, sondern ein Feature.
Jeder umgezogene Dienst läuft danach dauerhaft, und du verlierst durch den Parallelbetrieb nichts, falls ein Schritt doch nicht passt.

Und wenn du am Ende bei "ein paar Diensten" stehen bleibst statt bei "allem selbst gehostet"?
Auch das ist ein Gewinn:
Jeder migrierte Dienst ist ein Stück Souveränität, das du zurückgewonnen hast.

## Hardware: Der passende Einstieg

Nun zum Hardware-Teil.
Verschiedene Wege führen zum Ziel, jeweils mit unterschiedlichen Kompromissen aus Komfort, Kosten und Kontrolle.

### Option 1: Synology <Badge type="tip" text="Für Einsteiger" vertical="middle" />

Ein [Synology](https://www.synology.com/)-NAS ist der denkbar einfachste Einstieg:

- Gerät kaufen, Festplatten einbauen, Assistent durchklicken — nach einer Stunde läuft das Ding.
- Das Betriebssystem **DSM** bringt fertige Apps mit:
  Photo Station bzw. Synology Photos, Drive für Dateien, Kalender-Server, Hyper Backup.
  Ein komplettes Ökosystem ohne Kommandozeile.
- Stabil, leise, sparsam, mit gutem Support und großer Community.

Die Kehrseiten:

- **Preis:** Synology ist im Verhältnis teuer, für die Hardware zahlst du einen Aufpreis.
- **Lock-in:** DSM ist proprietär.
  2025 sorgte Synology für Unmut, als neue Plus-Modelle zunächst nur mit Synology-zertifizierten Laufwerken vollständig funktionierten.
  Nach massiver Kritik wurde die Beschränkung für klassische Festplatten mit DSM 7.3 weitgehend zurückgenommen — bei NVMe-SSDs gilt sie weiterhin.
  Das Vertrauen hat gelitten und es bleibt das grundsätzliche Risiko, dass der Hersteller die Freiheiten erneut beschneidet.
- **Grenzen:** Für ambitionierte Setups (viele Dienste, Virtualisierung, lokale KI) stoßen die kleinen Modelle schnell an Leistungsgrenzen.

Wer maximale Einfachheit will und Abstriche bei der Kontrolle akzeptiert, macht mit einem Synology nichts falsch.
Als Ausgangspunkt ist es insbesondere für Einsteiger sinnvoll.

### Option 2: Mini-PC als NAS <Badge type="tip" text="Für Fortgeschrittene" vertical="middle" />

Die flexiblere Alternative:
Ein moderner Mini-PC oder ein selbst gebauter Rechner mit einem Mainboard, das mehrere Festplatten aufnimmt.

- **Vorteile:** Volle Hardware-Freiheit, deutlich mehr Rechenleistung pro Euro, übliche PC-Komponenten (einfach zu erweitern und zu tauschen), kaum Mehrverbrauch:
  10–30 Watt im Leerlauf sind realistisch; übers Jahr grob 30–100 Euro Strom.
- **Betriebssystem:** Du installierst ein Server-Betriebssystem deiner Wahl (siehe unten) und betreibst deine Dienste als Container.
- **Nachteil:** Ein wenig Handarbeit — Installation, Updates und Erste-Hilfe laufen über die Kommandozeile bzw. Web-Oberflächen der Software.

| Komponente                | **Empfehlung (Stand 2026)** | **Warum?** |
| :---                      | :---                        | :---       |
| **CPU (Prozessor)**       | Intel i5 der 8.–10. Generation (gebraucht) oder Intel N100/N150 | Der entscheidende Punkt bei Intel: **QuickSync** transkodiert für Jellyfin nahezu ohne CPU-Last (AV1-Decode ab Gen 11). AMD funktioniert auch, verliert aber diesen Vorteil. Gebrauchte Business-Minis sind der Preis-Leistungs-Sieger; die sparsame N100-Klasse genügt für reine Datei- und Backup-Dienste locker. |
| **Arbeitsspeicher**       | 16-32 GB | Docker und NAS laufen mit 8 GB — doch Virtualisierung (Proxmox), ZFS-Cache und kleine LLMs (Ollama) machen 16 GB zur realistischen Untergrenze für dieses Niveau. Gebrauchte Business-Minis lassen sich günstig auf 32 GB aufrüsten. |
| **SSD (System & Dienste)** | NVMe, ab 500 GB | Proxmox, Container und datenbanklastige Dienste wie Immich profitieren deutlich — NVMe ist 2026 kaum teurer als SATA-SSD und der Standard. |
| **HDD (Datenverwahrung)** | Ab 4 TB, mindestens zwei | Für Fotos, Medien und Dokumente: NAS-Platten mit **CMR-Aufzeichnung** (WD Red Plus, IronWolf, Toshiba N300) oder refurbished Enterprise-Platten (z. B. Seagate Exos) fürs beste €/TB. SMR-Platten sind für RAID/ZFS ungeeignet — beim Kauf auf die Aufzeichnungsart achten! Plane Redundanz ein (bspw. zwei HDDs als Spiegel) und lies unten den [Backup-Abschnitt](#backups-der-wichtigste-absatz-im-artikel): Redundanz ist kein Backup! |
| **Netzwerk**              | 2,5-Gigabit-LAN, kabelgebunden | 2,5 GbE ist 2026 Standard auf aktuellen Boards und gebrauchten Business-Minis — genau richtig für große Backups und Mediatheken-Zugriffe. 1 GbE reicht für den Einstieg; mehr lohnt erst, wenn Switch und Endgeräte mitspielen. |

#### NAS-Betriebssysteme im Überblick

Auf einem Mini-PC bzw. Eigenbau-NAS entscheidet das Betriebssystem über den Komfort:

| System | Charakter | Passt für |
| --- | --- | --- |
| Plain Linux + Docker | Maximale Kontrolle | Wer genau wissen will, was läuft |
| [OpenMediaVault](https://www.openmediavault.org/) | NAS-Werkzeugkasten auf Debian-Basis | Einsteiger, die ein klassisches NAS mit Dateifreigaben und ein paar Diensten wollen |
| [TrueNAS](https://www.truenas.com/) | Enterprise-NAS mit ZFS | Datensicherheit, Snapshots für denjenigen, der "richtige" Storage-Technik will |
| [Unraid](https://unraid.net/) | Flexibel, unkompliziert, kostenpflichtig | Docker-Fans mit gemischten Festplatten |

Praktisch alle Dienste aus dem Abschnitt oben gibt es als [Docker](https://www.docker.com/)-Container.
Ein `docker-compose.yml` pro Dienst, und schon ist alles reproduzierbar und updatesicher beschrieben.
Wer die Kommandozeile scheut, nutzt eine Verwaltungs-App wie [Umbrel OS](https://umbrel.com/umbrelos) oder [Runtipi](https://runtipi.io/), die Container-Installationen per Klick anbietet.

### Option 3: Der Single-Board-Computer <Badge type="danger" text="Notlösung" vertical="middle" />

Ein Raspberry Pi mit externer Festplatte mag wie der minimalistische Einstieg erscheinen.
Für Fotos mit Gesichtserkennung, Virtualisierung oder große Mediensammlungen fehlt es aber an Leistung.
Sinnvoll als Lern- und Bastelgerät oder für einzelne schlanke Dienste wie Pi-hole oder Vaultwarden.

## Proxmox: Virtualisierung als Fundament

Wenn aus "einem Dienst" erst "ein Stapel Dienste" wird, lohnt sich ein Blick auf [Proxmox VE](https://www.proxmox.com/de/proxmox-virtual-environment) — eine freie Virtualisierungsplattform auf Debian-Basis, die im Home-Lab mittlerweile Standard ist.

Die Idee:
Statt alle Dienste direkt auf einem System zu installieren, bekommst du **Virtuelle Maschinen (VMs)** und **Container (LXC)**:
Jeder Dienst bekommt seine eigene, isolierte Umgebung.

Die Vorteile:

- **Isolation:** Ein fehlerhaftes Update oder ein kompromittierter Dienst betrifft nur seine eigene VM, nicht das ganze System.
- **Snapshots:** Vor jedem Experiment und Update einen Schnappschuss machen.
  Falls etwas schiefgeht, ist der alte Zustand Sekunden später zurück.
- **Rückgängig machen:** Dienste lassen sich löschen und neu aufsetzen, ohne das Basissystem anzufassen.
- **Proxmox Backup Server (PBS):** Das passende Backup-System, das VMs inkrementell und dedupliziert sichert.
  Ideal auch für die Remote-Backups aus dem nächsten Abschnitt.

Ehrlicherweise:
Proxmox ist kein Einsteiger-Thema.
Wer mit Docker Compose und einem einzigen System glücklich wird, braucht keine Virtualisierung.
Aber der Weg "erst Docker, dann Proxmox" ist der natürliche Wachstumspfad.
Und wer ohnehin gern experimentiert, wird die Snapshot-Sicherheit kaum mehr missen wollen.

## Wichtige Grundlagen und Stolperfallen

### Backups: Der wichtigste Absatz im Artikel

Ganz gleich, wie du hostest:
Ohne Backup ist Self-Hosting gefährlicher als jede Cloud, denn **deine** Platte kann auch sterben — und dann sind die Daten weg, die sonst der Cloud-Anbieter doppelt und dreifach gespiegelt hätte.

Eine bewährte Formel ist die **3-2-1-Regel**:

- **3** Kopien der Daten
- auf **2** verschiedenen Medientypen
- wovon **1** Kopie außer Haus liegt (remote/offsite)

Für die Umsetzung:

- **Lokal:** Snapshots und regelmäßige Backups auf eine zweite Platte oder ins NAS selbst.
- **Remote:** Verschlüsselte Backups zu einem Freund, in die Familie oder zu einem Speicheranbieter.
  Werkzeuge wie [BorgBackup](https://www.borgbackup.org/) oder [restic](https://restic.net/) verschlüsseln und deduplizieren automatisch.
  Die Cloud bekommt nur verschlüsselte Daten.
  Auch Synology (Hyper Backup) und Proxmox Backup Server bringen eigene Mechanismen mit.
- **RAID ist kein Backup!**
  Ein Festplattenverbund schützt vor dem Ausfall einer Platte, nicht vor Löschen, Ransomware, Blitzeinschlag oder Diebstahl.
- **Eine Kopie offline oder unveränderlich.**
  Ransomware und verunglückte Synchronisierungen erfassen alles, was aus dem Netzwerk erreichbar ist:
  Eine regelmäßig aktualisierte, aber vom Netz getrennte Kopie (oder ein unveränderlicher Snapshot) überlebt so einen Worst Case.
- **Restores testen!**
  Ein Backup, aus dem du nie etwas wiederhergestellt hast, ist ein Gerücht.
  Probiere einmal pro Quartal, eine Datei oder einen ganzen Dienst wiederherzustellen.

### SMTP: Warum E-Mail schwer selbst zu hosten ist

E-Mail ist ein Sonderfall und der einzige Bereich, bei dem ich dir rate, Self-Hosting gut zu durchdenken oder bewusst auszulassen.

Das Problem ist nicht die Technik, sondern das **Vertrauen**:
Wenn dein Heimserver eine Mail an Gmail, Outlook & Co. schickt, muss sie dort ankommen.
Das tun ausgehende Mails von privaten IP-Adressen aber in der Regel nicht:

- Viele Internetanbieter **blockieren den Versand-Port 25** für Privatkunden grundsätzlich.
- Die **IP-Reputation** deiner Heimat-IP ist unbekannt oder schlecht.
  Deine Mails landen im Spam-Ordner oder werden abgelehnt.
- **SPF, DKIM und DMARC** müssen korrekt eingerichtet sein, damit Mailserver deine Absenderdomain authentifizieren.
- Eine **Blacklist-Eintragung** der eigenen IP macht den Versand für Wochen unzuverlässig.

Der Empfang ist die einfachere Richtung, denn dort gibt es kein Reputationsthema.
Er setzt aber voraus, dass eingehende Mails dein Netz überhaupt erreichen:
Auf deiner Domain muss ein MX-Eintrag zeigen, und der eingehende Port 25 muss bei dir erreichbar sein.
Auch dafür gibt es Internetanbieter, die den Port sperren, also prüfe das vorab.

Deine Optionen, von einfach bis ambitioniert:

1. **E-Mail beim Spezialisten lassen.**
   Ein bezahlter, datenschutzfreundlicher Mailanbieter ist keine Schande.
   Auch das ist bewusste Souveränität, statt Google zu nutzen.
2. **Hybrid-Ansatz.**
   Postfächer und Speicher selbst hosten, den **Versand über ein Relay** des Providers abwickeln.
   Die Software ([Mailcow](https://mailcow.email/), [Mailu](https://mailu.io/), [Stalwart](https://stalw.art/)) unterstützt das.
3. **Mittlerer Weg: ein kleiner gemieteter Server.**
   Ein VPS (virtueller Server) bei einem Hoster hat eine feste IP und keinen gesperrten Versand-Port.
   Damit entfällt das Reputationsthema weitgehend.
   Die Daten liegen dann zwar nicht mehr im eigenen Haus, aber auf deinem eigenen, dedizierten System statt bei einem der großen Anbieter.
4. **Volles Self-Hosting.**
   Machbar, aber nur mit eigener Domain, sauberem Setup, festen IPs bzw. Relay und der Bereitschaft, sich um Reputation und Zustellung zu kümmern.
   [Mail-in-a-Box](https://mailinabox.email/) macht es so einfach wie möglich, wobei "einfach" jedoch relativ ist.

Praktischer Tipp für den Einstieg:
Migriere zuerst alles **um** deine Mails herum (Kalender, Fotos, Dateien), und behandle E-Mail als eigenes, späteres Projekt.

### Sicherheit: Keine offenen Türen

Deine Dienste solltest du auch unterwegs erreichen können, jedoch ohne dabei alles öffentlich ins Internet zu stellen.
Ein paar Grundregeln halten Angreifer außen vor:

- **Keine offenen Port-Forwardings für Dienste.**
  Wer jeden Dienst einzeln durch den Router nach außen öffnet, schafft nur unnötige Angriffsflächen.
  Besser: Der Fernzugriff läuft über ein **VPN** — [WireGuard](https://www.wireguard.com/) oder [Tailscale](https://tailscale.com/) verbinden dein Handy verschlüsselt mit dem Heimnetz, als wärst du zu Hause.
  Die Dienste selbst lauschen nur im Heimnetz.
- **Zwei-Faktor-Authentifizierung überall**, wo eine Anmeldung möglich ist.
- **Updates einspielen.**
  Ein regelmäßig geplantes Update reicht meist.
  Container machen das dank Reproduzierbarkeit unkompliziert.
- **Reverse Proxy mit TLS.**
  Ein zentraler Eintrittspunkt (z. B. Nginx, Caddy, Traefik) besorgt für jeden Dienst ein Zertifikat von [Let's Encrypt](https://letsencrypt.org/) und verschlüsselt den Verkehr.
- **Festplatten verschlüsseln.**
  Mit LUKS verschlüsselst du die Laufwerke des Servers.
  Wird dir die Hardware gestohlen, liegen die Daten unlesbar vor.
- **SSH nur mit Schlüssel.**
  Falls du den Server remote wartest: Anmeldung nur mit Public-Key, Passwort-Login deaktivieren.
- **Nur was nötig ist, läuft überhaupt.**
  Jeder zusätzliche Dienst ist eine zusätzliche Angriffsfläche, weniger ist sicherer.

### Betrieb zu Hause: Strom, Lärm, Familie

Noch ein paar realistische Rahmenbedingungen:

- **Stromverbrauch:** Ein sparsames Setup verbraucht 10–30 Watt im Leerlauf.
  Rechne mit grob 30–100 Euro Stromkosten pro Jahr, je nach Tarif und Hardware.
- **Lautstärke und Standort:** Ein Mini-PC ist fast lautlos, ein 4-Bay-NAS mit mehreren Platten hört man leise summen.
  Keller, Schrank oder Arbeitszimmer — den Standort solltest du mit Bedacht wählen.
- **Verfügbarkeit:** Dein Heimnetz ist kein Rechenzentrum.
  Bei Stromausfall oder ISP-Störung sind die Dienste offline.
  Für die meisten Anwendungsfälle verkraftbar, aber gut zu wissen.
  Eine kleine **USV** (unterbrechungsfreie Stromversorgung) überbrückt kurze Ausfälle und verhindert unsauberes Herunterfahren.
- **Rechtlicher Rahmen:** Für die private Nutzung im eigenen Haushalt ist der Aufwand gering.
  Stellst du Dienste aber Dritten über deine eigene Domain öffentlich bereit, wirf einen Blick auf die Pflichten aus Datenschutz und ggf. Impressum.
- **Der Familienfaktor:** Der wichtigste Punkt zum Schluss!
  Wenn deine Dienste für Mitbewohner und Familie funktionieren sollen, müssen sie **einfacher** sein als die Cloud-Konkurrenz.
  Sonst flüchten alle zurück zu Google und dein Projekt gilt als gescheitert.
  Investiere Zeit in die Nutzererfahrung, richte Accounts für alle ein und sei bereit, als Support-Team zur Verfügung zu stehen.

## Pros und Cons im Überblick

| Vorteile | Nachteile |
| --- | --- |
| Privatsphäre: Niemand liest deine Mails, Fotos und Termine mit | Zeitaufwand für Einrichtung und Pflege |
| Souveränität: Keine Account-Sperrungen, keine Dienstabschaltungen | Verantwortung für Sicherheit und Updates liegt bei dir |
| Keine Abo-Kosten, planbare langfristige Preise | Anfangsinvestition in Hardware |
| Volle Kontrolle über Konfiguration und Daten | Abhängigkeit vom Heimnetz (Strom, Internet) |
| Lerneffekt und Verständnis der eigenen Infrastruktur | Kein professioneller Support, du bist der Support |
| Daten bleiben in deinem Hausnetz, kein KI-Trainingsfutter | Backups und Restore-Disziplin müssen gelebt werden |

## Fazit

Self-Hosting ist kein Alles-oder-nichts-Unternehmen, sondern eine Richtung:
Weg von der Abhängigkeit von Konzernen, hin zur Verantwortung für die eigenen Daten.

Die drei wichtigsten Erkenntnisse in Kürze:

1. **Stückwerk schlägt Nichtstun.**
   Ein einziger umgezogener Dienst — ob Fotos, Passwörter oder Kalender — ist ein echter Gewinn.
   Der Rest kann folgen, wenn Zeit und Lust da sind.
2. **Backups zuerst denken.**
   Ohne die 3-2-1-Regel mit einer Kopie außer Haus ist Eigenverantwortung nur Datenverlust auf Raten.
3. **E-Mail ist (noch) der berüchtigte Sonderfall.**
   Es gibt gute Gründe, E-Mail bewusst beim Spezialisten zu lassen und alles andere selbst zu hosten.

Und wenn du schon eine [Fullnode](../bitcoin-fullnode/) betreibst:
Herzlichen Glückwunsch, du hostest bereits selbst und kennst viele der wichtigen Punkte.
Jetzt fehlt nur noch der Rest deiner Daten auf demselben Weg.
