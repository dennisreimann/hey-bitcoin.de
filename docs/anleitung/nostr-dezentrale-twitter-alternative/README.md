# Nostr: Eine dezentrale Alternative zu Twitter — und mehr …

## Was ist Nostr?

[Nostr](https://nostr.com/) ist ein offenes Protokoll und dezentrales Netzwerk.
Der Name steht für "Notes and Other Stuff Transmitted by Relays", also "Notizen und andere Dinge, die von Relays übertragen werden".

Die Relays sind die Verbindungsknoten des Netzwerks: Sie leiten die an sie gesendeten Daten an alle mit ihnen verbundenen Nutzer weiter.
Ein Relay ist vergleichsweise einfach zu betreiben, so dass man nicht auf eine Drittpartei als Anbieter angewiesen ist und solch ein Relay selbst hosten kann.
Daher ist auch einer der ersten Anwendungsfälle für Nostr ein zensurresistentes soziales Netzwerk — quasi eine dezentrale Alternative zu Twitter.

Nostr ist als Protokoll vielfältig einsetzbar und kann weitaus mehr als nur ein soziales Netzwerk sein.
Es ist im Grunde genommen sehr rudimentär und vergleichsweise einfach aufgebaut — und genau das macht es am Anfang wohl auch so kompliziert:
Deine Identität, deine Nachrichten und deine Verbindungen lassen sich hier nicht an einer Plattform festmachen, sondern an kryptografischen Schlüsseln und frei wählbaren Relays.
Genau darin liegt die Stärke: Da das Netzwerk inzwischen deutlich gewachsen ist und etablierte Clients existieren, fällt der Einstieg heute leichter als je zuvor.

Da der Datenaustausch über offene Standards (die sogenannten NIPs) läuft, entwickelt sich Nostr auch immer mehr zu einer Infrastruktur, welche mit dezentraler Identität, Nachrichten und Bezahlung im Bitcoin-Ökosystem zu tun hat — mehr dazu im Abschnitt [Nostr für Bitcoin-Nutzer](#nostr-für-bitcoin-nutzer-anwendungsfälle-für-privatsphäre-und-selbstsouveränität).

## Wie starte ich mit Nostr?

Da Nostr dezentral ist, gibt es nicht die eine Plattform auf der man sich anmeldet.
Stattdessen benötigt man einen Client, um mit dem Netzwerk zu interagieren.
Clients sind jeweils Apps, die die Verbindung zu Relays herstellen und die dort verfügbaren Daten in einer Ansicht aufbereiten.

### Apps

Inzwischen gibt es eine ganze Reihe ausgereifter Clients:

**Handy (nativ):**

- [Amethyst](https://github.com/vitorpamplona/amethyst) (Android): sehr feature-reich und mit der aktivsten Entwicklung der Android-Clients.
- [Primal](https://primal.net/) (iOS & Android): der aktuell meistgenutzte Client, vom Design her an Twitter angelehnt, mit integrierter Lightning-Wallet für Zaps.
- [Damus](https://damus.io/) (iOS): die Pionier-App von William Casarin, schlank und weiterhin aktiv gepflegt.
- [Wisp](https://github.com/barrydeen/wisp) (iOS & Android): minimaler und nutzerfreundlicher Client.


**Browser:**

- [primal.net](https://primal.net/) und [snort.social](https://snort.social/) sind optisch an Twitter angelehnt; [noStrudel](https://nostrudel.ninja/) ist ein mächtiger Client für fortgeschrittene Nutzer.
- [Coracle](https://coracle.social/) richtet sich eher an erfahrene Nutzer, die auch Relays und Relais-Listen im Blick haben.
- [White Noise](https://www.whitenoise.chat/) und [0xChat](https://0xchat.com/) sind auf verschlüsseltes Messaging spezialisiert (siehe unten).

### Schlüssel

Neben der Dezentralität und Zensurresistenz gibt es viele weitere Parallelen zu Bitcoin.
Eine weitere davon sind die Schlüssel als Identität:
Statt einem Account hast du einen privaten Schlüssel (nsec) und einen öffentlichen Schlüssel (npub).

Der öffentliche Schlüssel kann wie ein Benutzername behandelt werden:
Er ist deine persönliche Kennung über die dich andere identifizieren.
Der private Schlüssel hingegen ist wie dein Passwort zu sehen:
Mit ihm werden deine Nachrichten signiert und sollte er öffentlich bekannt werden, ist die damit verbundene Identität kompromitiert, da der private Schlüssel vollen Zugriff liefert.
Ein privater Schlüssel lässt sich mit [NIP-49](https://github.com/nostr-protocol/nips/blob/master/49.md) verschlüsselt sichern – vergleichbar damit, deine Nostr-Identität mit einer zusätzlichen Passphrase zu sichern.

### Eine Identität anlegen

Lass deinen privaten Schlüssel möglichst **nie im Browser** generieren oder hinterlegen.
Moderne Clients bieten Signer-Integrationen an, die den privaten Schlüssel isoliert von der eigentlichen App verwalten:

- [Amber](https://amber.green/) (Android) hält den nsec auf dem Gerät und gibt ihn nicht an Clients weiter – der Schlüssel verlässt dein Handy nie.
- Die [Alby-Erweiterung](https://getalby.com/) (Browser) verwaltet deinen Schlüssel in der Erweiterung und kann ihn gezielt für einzelne Anwendungen freigeben; sie kann die Identität auch mit einem Lightning-Wallet koppeln.
- [nsecBunker](https://github.com/kindlyfire/nsecbunker) (NIP-46) stellt den Schlüssel als "Bunker" bereit, sodass sich Clients über eine eigene, kontrollierbare Schnittstelle signieren lassen.

Generiere deine Identität am besten direkt in einem dieser Signer und importiere sie dort von Anfang an.
So kannst du auch verhindern, dass Kopien deines nsec in Zwischenablagen, Logs oder (Browser-)Extensions landen, die damit nichts zu tun haben.

## Nostr nutzen

Sobald du deine App, einen Schlüssel und die damit verbundene Identität hast, kann es auch schon losgehen …

### Leute finden

In den meisten Apps siehst du eine Timeline, wie du sie von Twitter kennst:
Sie stellt die Nachrichten der Leute denen du folgst — standardmäßig folgst du erstmal nur dir selbst.
Dementsprechend solltest du also erst einmal ein paar Leute finden, denen du folgen kannst.
Die Suche in Primal und Amethyst ist dafür gut geeignet; grundsätzliche Nachrichten durchsuchst du mit [nostr.band](https://nostr.band/).

Mein Pubkey ist [`npub14j7wc366rf8efqvnnm8m68pazy04kkj8fgu6uqumh3eqlhfst0kqrngtpf`](https://primal.net/p/npub14j7wc366rf8efqvnnm8m68pazy04kkj8fgu6uqumh3eqlhfst0kqrngtpf) und du kannst bspw. auch in meinem Profil sehen, wem ich folge und dich von dort aus weiter inspirieren lassen.
Ansonsten über die Suche das Hashtag **#Plebchain** nutzen, um weitere Bitcoiner zu finden.

### Personen markieren

Was auf Twitter die Handles sind, sind auf Nostr die öffentlichen Schlüssel:
Den öffentlichen Schlüssel einer Person findest du im jeweiligen Profil.
Um Personen zu markieren, musst du das @-Symbol vor den öffentlichen Schlüssel setzen.

### Beiträge/Notizen referenzieren

Analog zum Retweet kann man in Nostr auch bestehende Notizen referenzieren und sie so "boosten".
Dafür verwendet man wie beim Markieren von Personen das @-Symbol vor der Notiz-ID.
An die ID kommst du, indem du die Notiz länger drückst und im darauf folgenden Menü die Notiz-ID kopierst.

### Was bedeuten die Emojis?

Es gibt einige Emojis mit speziellen Bedeutungen/Funktionen:
🤙 steht bspw. für Like — ⚡ ist ein Zap, also eine Lightning-Zahlung, die mit einem öffentlichen Like kombiniert werden kann.
Zaps sind inzwischen die Standard-"Bewertung" auf Nostr: statt eines leeren Likes kann jeder Beitrag direkt mit Sats bewertet werden.

### Lightning und Zaps

Der integrierte Werttransfer ist einer der Gründe, warum Nostr für Bitcoiner so selbstverständlich geworden ist:

- **Zaps (NIP-57):** Ein Zap ist eine Lightning-Zahlung an den Autor einer Notiz, die zugleich als öffentliches Like zählt.
- **Nostr Wallet Connect (NIP-47):** Du verbindest deine Lightning-Wallet (z. B. Alby Hub, Primal Wallet oder eine eigene Node) per verschlüsselter Verbindung mit deinem Client und legst Budget-Limits fest.
- **Lightning Address:** Eine Lightning Address in deinem Profil erlaubt es dir, auch außerhalb von Nostr Spenden zu empfangen.

### Direktnachrichten

Direktnachrichten in Nostr sind dank der Schlüssel-Basiertheit der Nutzerprofile ohne weiteres Zutun verschlüsselt.
Modern ist dabei der Standard [NIP-17](https://github.com/nostr-protocol/nips/blob/master/17.md) ("Gift Wrap"): Die Nachricht wird mehrschichtig verschlüsselt, sodass für Relay-Betreiber weder der Inhalt noch Absender und Empfänger erkennbar sind – die Nachricht sieht für sie wie ein "Geschenk" an eine unbekannte Adresse aus.
Ältere Clients verwenden teils noch das Vorgängerformat NIP-04.
Wenn du sehr auf Privatsphäre achten willst, nutze einen auf Messaging spezialisierten Client wie [White Noise](https://www.whitenoise.chat/) – dort rotieren auch die Metadaten besser.

### Relays

Die Apps haben jeweils eine Vorauswahl an Relays eingestellt, du kannst diese nach Belieben erweitern oder entfernen.
Eine Liste öffentlicher Relays findest du auf [nostr.watch](https://nostr.watch/) und du siehst dort auch, zu welchen Relays du eine gute Verbindung hast.
Seit [NIP-65](https://github.com/nostr-protocol/nips/blob/master/65.md) kannst du eine eigene "Relay-Liste" veröffentlichen, in der du festlegst, wo du schreibst und wo du liest – damit bestimmst du selbst, wer deine Daten für dich vorhält.

Unter `wss://nostr.einundzwanzig.space` betreiben wir bspw. für die Einundzwanzig Community ein eigenes Relay.

Wenn du selbst ein Relay aufsetzen möchtest, gibt es inzwischen mehrere sehr solide Optionen:
[nostream](https://github.com/Cameri/nostream) ist weiterhin eine beliebte, produktionsreife Wahl, [strfry](https://github.com/hoytech/strfry) gilt als besonders performant.
Wer maximale Selbstsouveränität will, betreibt sein eigenes "persönliches Relay" auf der eigenen Hardware – dafür gibt es sogar spezielle Software (siehe [HAVEN](#haven--nostr-vault--dein-eigenes-persönliches-relay)).

### IP-Adresse und Privatsphäre

Relay-Betreiber können die IP-Adressen der Benutzer sehen, da die Verbindung zu einem Relays direkt auf Socket-Basis hergestellt wird.
Deine IP-Adresse ist eine eindeutige numerische Kennung deiner Internetverbindung.
Sie dient deinem Internetanbieter zur Identifizierung und gibt auch Rückschlüsse über deinen Standort.

Dementsprechend kann auch der Relay-Betreiber dich über deine Profilinformationen und Notizen identifizieren und deine Aktivitäten verfolgen.
Dies ist aktuell keine gängige Praxis, aber diese Informationen könnten in Zukunft für verschiedenste Zwecke verwendet werden — so wie man dies auch von zentralen Social Media Plattformen kennt (gezieltes Ausspielen von Werbung oder anderweitige Monetarisierung deiner Daten).

Gleiches gilt für die Hoster von Bildern und anderen Medieninhalten:
Da diese in Nostr auf verschiedensten Servern gehostet werden, stehen den Betreibern dieser Server auch die Informationen der abrufenden Clients zur Verfügung.
Moderne Clients setzen dafür den offenen [Blossom](https://github.com/hzrd149/blossom)-Standard ein, bei dem du die Medien auf eigenen oder frei wählbaren Servern ablegst.

Wie auch sonst beim Surfen im Netz kannst du hier ein virtuelles privates Netzwerk (VPN – siehe unseren [VPN-Leitfaden](../vpn-leitfaden/)) oder das Tor-Netzwerk verwenden, um deine IP-Adresse zu maskieren.

## Dein eigenes Profil

### Deine Identität verifizieren

Da in Nostr alles dezentral ist, gibt es keine kanonische Instanz, die Identitäten sicherstellt.
Da die Identität nicht an einen eindeutigen Benutzernamen gebunden ist, kann jeder Benutzer ein Schlüsselpaar generieren und seinen Benutzernamen und sein Bild nach Belieben ändern.
Selbst auf zentralen Plattformen wie Twitter ist dieser über leicht abgewandelte Handles durchführbare Identitätsdiebstahl gängige Praxis.

Um dem zu begegnen gibt es innerhalb von Nostr den [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) Standard, mit dem du dich mittels DNS/einer Domain ausweisen kannst:
Unter einer speziellen Adresse deiner Domain wird eine Datei hinterlegt (`/.well-known/nostr.json`), in der die Kombination von öffentlichem Schlüssel und Name hinterlegt ist.
Da diese Daten nur vom Domainbesitzer verwaltet werden können, kann darüber sichergestellt werden, dass Leute auch wirklich die sind, die sie vorgeben zu sein.
In der [nostr.json von Einundzwanzig](https://einundzwanzig.space/.well-known/nostr.json) findest du ein praktisches Beispiel und unsere Pubkeys sowie das Relay.

### Lightning Address hinzufügen

Wenn du eine [Lightning Address](https://lightningaddress.com/) oder ein LNURL hast, kannst du diese in deinem Profil hinterlegen, um Spenden zu erhalten.
Dies wird in deinem Profil als Lightning-Button dargestellt, welcher automatisch die Lightning Wallet des Nutzers öffnet, der dir Sats schicken möchte.
Deine Lightning Address wird dir von deinem Wallet-Anbieter oder deiner eigenen Node (z. B. über LNBits oder Alby Hub) zugewiesen.

## Nostr für Bitcoin-Nutzer

Nostr ist inzwischen weit mehr als ein Twitter-Klon — es ist eine offene Signatur- und Nachrichtenschicht, auf der im Bitcoin-Umfeld viele spannende Projekte aufbauen.
Gemeinsam ist ihnen allen: keine Identität über Telefonnummer oder E-Mail, keine zentrale Plattform, die deine Daten besitzt, offene Standards und Bezahlung über Lightning.

### HAVEN & Nostr Vault – dein eigenes persönliches Relay

Das konsequenteste Beispiel für Nostr-Selbstsouveränität ist [HAVEN](https://github.com/barrydeen/haven) (kurz für *High Availability Vault for Events on Nostr*): ein Open-Source-Relay, das du **auf deiner eigenen Hardware** betreibst.
Dein Gerät oder dein Server wird dabei selbst zum Relay – deine Notizen, Chats und sogar ecash-Guthaben liegen bei dir und nicht bei irgendeinem Drittanbieter.

HAVEN bündelt gleich vier Relay-Funktionen in einem: einen privaten Bereich nur für dich, einen Chat-Relay nur für deine verschlüsselten Nachrichten, ein Inbox-Relay, das deine erwähnten Beiträge aus dem Netz einsammelt, sowie dein öffentliches Outbox-Relay – dazu kommt ein integrierter Blossom-Medien-Server.
Backups machst du als portablen JSONL-Export und kannst sie auf eigene Speicher sichern.

Mit [Nostr Vault](https://github.com/btcforplebs/nostr-vault) bzw. [nostrvault.app](https://nostrvault.app/) gibt es eine native App für Mac und iPhone, mit der das persönliche Relay direkt in deinem Gerät läuft.
Zusammen mit [NIP-65](https://github.com/nostr-protocol/nips/blob/master/65.md) (eigene Relay-Listen) ergibt sich damit ein Setup, in dem du bestimmst, wer deine Daten kurzfristig für dich vorhalten darf – die Plattform bist du selbst.

### BitChat: Mesh-Messaging ohne Accounts und ohne Server

[BitChat](https://apps.apple.com/us/app/bitchat-mesh/id6748219622) ist ein von Block (u. a. Jack Dorsey) initiierter Messenger, der komplett ohne Accounts, Telefonnummern und zentrale Server auskommt.
Die App ist für iOS und macOS im [App Store](https://apps.apple.com/us/app/bitchat-mesh/id6748219622) sowie für Android im [Play Store](https://play.google.com/store/apps/details?id=com.bitchat.droid) erhältlich, der [Quellcode](https://github.com/permissionlesstech/bitchat) ist öffentlich einsehbar.
Er kombiniert zwei Transporte: **Bluetooth-Mesh** in deiner Nähe (alle Geräte, die BitChat haben, bilden lokal ein Mesh-Netzwerk) und **Nostr** als Weg ins Internet, um entfernte Kontakte zu erreichen.
Die Nachrichten sind Ende-zu-Ende-verschlüsselt, und weil die verschlüsselten Pakete über das lokale Mesh wandern können, funktioniert BitChat auch **ohne Internet** – sehr robust für Katastrophenfälle, Events oder Gegenden mit schwacher Infrastruktur.
Für Bitcoin-Nutzer interessant: Hier wird ein zensurresistenter Messenger real, der nicht einmal mehr von Relays abhängig ist, sondern nur noch von deinen Geräten und denen deiner Freunde.

### White Noise: Gruppen-Chats auf Nostr

[White Noise](https://www.whitenoise.chat/) ist ein Messenger, der Nostr als Transport nutzt und die Verschlüsselung konsequent auf Gruppen erweitert.
Statt einfacher Ende-zu-Ende-Verschlüsselung kommt das **MLS-Protokoll (Messaging Layer Security)** zum Einsatz.
White Noise kommt ohne Telefonnummer aus, verlangt keine zentrale Identität, und Medien werden über den offenen Blossom-Standard auf eigenen Servern abgelegt.
Damit lässt es sich als Alternative zu Signal oder Telegram sehen, bei dem kein Unternehmen als zentrale Instanz dahintersteht.

### Buzz: Team-Workspace für Menschen und KI-Agenten

[Buzz](https://buzz.xyz/) ist ein von Block entwickeltes, selbst hostbares Team-Werkzeug, das komplett auf Nostr aufbaut (NIP-29-Gruppen-Relays).
Es soll klassische Workspaces wie Slack oder Discord ablösen – nur ohne zentrale Plattform und offen für alle, die an den Kanälen teilnehmen wollen.
In Buzz sitzen nicht nur Menschen, sondern auch KI-Agenten in denselben Kanälen.

Agenten haben dabei eine eigene Nostr-Identität, signieren ihre Nachrichten mit einem Schlüssel, und ihre automatisierten Aktionen lassen sich über Lightning bezahlen.
So zeigt sich gut, wohin "Agentic Workflows" gehen können: offene, nachvollziehbare Zusammenarbeit zwischen Menschen und Maschinen auf einer Basis, die dem Team selbst gehört.
Wer Buzz für sein Team testen will, nimmt die [Open-Source-Version](https://github.com/block/buzz) und hostet sein [eigenes Buzz-Relay](https://engineering.block.xyz/blog/run-your-own-buzz-relay).

### Zaps, Nostr Wallet Connect und eCash

Über das bloße Posten hinaus ist Nostr auch zu einem Bezahl- und Wallet-Standard geworden:

- **Zaps (NIP-57)** machten "Bezahlen statt Liken" zum Standard (siehe oben).
- **Nostr Wallet Connect (NIP-47)** verbindet beliebige Clients mit deiner Lightning-Wallet unter festen Budget-Limits.
- **eCash-Wallets (NIP-60)** bringen [Cashu](https://cashu.space/)-Tokens auf Nostr: Dein Guthaben liegt als kryptographisches Versprechen eines Mint vor und lässt sich in Nostr-Events sichern (z. B. über ein persönliches Relay wie HAVEN).
  Selbst wenn Plattformen ausfallen, bleibt dein Geld in deinem Besitz, solange du deine Keys hast.

Auch klassisches Publizieren bleibt gepflegt: Lange Artikel (NIP-23) und Plattformen wie [Stacker News](https://stacker.news/) oder der [Eiunundzwanzig Aggregator](https://discover.einundzwanzig.space/) zeigen, dass Nostr als Content- und Diskussionsschicht für die Bitcoin-Community fest etabliert ist.

## Weitere Links und Anwendungsfälle

- [nostr.net](https://www.nostr.net/): Übersicht zu Clients, Relays, Tools, Tutorials, etc.
- [nostr.com](https://nostr.com/): offizielles Protokoll-Portal mit Übersicht über das Ökosystem
- [nostr.band](https://nostr.band/): Suchmaschine und Trends für Nostr
- [Jester](https://jesterui.github.io/): Schach über Nostr spielen
- [Nvote](https://nvote.co/): Dezentraler News-Service à la Reddit oder HackerNews
- [Stacker News](https://stacker.news/): Bitcoin-Nachrichten & Diskussion mit Zaps als Anreiz
- [Wavlake](https://www.wavlake.com/): Musik auf Nostr veröffentlichen und direkt unterstützen
- [zap.stream](https://zap.stream/): Livestreaming mit Zaps direkt im Chat
- [Shopstr](https://www.shopstr.store/): P2P-Marktplatz auf Basis von Nostr
