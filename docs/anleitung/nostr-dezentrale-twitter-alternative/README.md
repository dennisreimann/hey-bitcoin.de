# Nostr: Eine dezentrale Alternative zu Twitter — und mehr …

## Was ist Nostr?

[Nostr](https://nostr.com/) ist ein offenes Protokoll und dezentrales Netzwerk.
Der Name steht für "Notes and Other Stuff Transmitted by Relays", also "Notizen und andere Dinge, die von Relays übertragen werden".

Die Relays sind die Verbindungsknoten des Netzwerks: Sie leiten die an sie gesendeten Daten an alle mit ihnen verbundenen Nutzer weiter.
Ein Relay ist vergleichsweise einfach zu betreiben, so dass man nicht auf eine Drittpartei als Anbieter angewiesen ist und solch ein Relay selbst hosten kann.
Daher ist auch einer der ersten Anwendungsfälle für Nostr ein zensurresistentes soziales Netzwerk — quasi eine dezentrale Alternative zu Twitter.

Nostr ist als Protokoll vielfältig einsetzbar und kann weitaus mehr als nur ein soziales Netzwerk sein.
Es im Grunde genommen sehr rudimentär und vergleichsweise einfach aufgebaut — und genau das macht es am Anfang wohl auch so kompliziert:
Da dezentrale Netzwerke sich in der Nutzung stark von zentralen Plattformen unterscheiden, versuche ich dir hier die nötigen Dinge für einen möglichst praktischen Einstieg zu vermitteln …

## Wie starte ich mit Nostr?

Da Nostr dezentral ist, gibt es nicht die eine Plattform auf der man sich anmeldet.
Stattdessen benötigt man einen Client, um mit dem Netzwerk zu interagieren.
Clients sind jeweils Apps, die die Verbindung zu Relays herstellen und die dort verfügbaren Daten in einer Ansicht aufbereiten.

### Apps

Momentan ist alles noch sehr in den Kinderschuhen, aber es gibt bereits gut funktionierende Clients sowohl als native Mobile-Apps:

- [Damus](https://damus.io/) für iOS
- [Nostros](https://github.com/KoalaSat/nostros) für Android

Als auch Browser-basierte Web-Apps:

- [nostr.rocks](https://nostr.rocks/) und [astral.ninja](https://astral.ninja) sind an Twitter angelehnt
- [anigma.io](https://anigma.io/) erinnert an Telegram

Damus ist die momentan am besten funktionierende und am weitesten entwickelte App, daher werde ich die meisten praktischen Dinge hier im Bezug auf Damus beschreiben.
Bevor wir aber damit loslegen, noch ein weiterer wichtiger Punkt zum Start …

### Schlüssel

Neben der Dezentralität und Zensurresistenz gibt es viele weitere Parallelen zu Bitcoin.
Eine weitere davon sind die Schlüssel als Identität:
Statt einem Account hast du einen privaten Schlüssel (nsec) und einen öffentlichen Schlüssel (npub).

Der öffentliche Schlüssel kann wie ein Benutzername behandelt werden:
Er ist deine persönliche Kennung über die dich andere identifizieren.
Der private Schlüssel hingegen ist wie dein Passwort zu sehen:
Mit ihm werden deine Nachrichten signiert und sollte er öffentlich bekannt werden, ist die damit verbundene Identität kompromitiert, da der private Schlüssel vollen Zugriff liefert.

### Eine Identität anlegen

Die meisten Apps bieten dir beim ersten Öffnen an, entweder einen bestehenden Schlüssel zu importieren oder einen neuen zu generieren.
Da der private Schlüssel recht sensitiv ist, würde ich davon abraten, ihn im Browser zu generieren oder auch dort zu hinterlegen.
Erst kürzlich gab es eine Sicherheitslücke in Anigma, bei der Schlüssel geleaked sind — die damit verbundenen Identităten sind daraufhin unbrauchbar.

Wenn du deine Identität im Browser nutzen möchtest, kannst du das Risiko zumindest durch das Nutzen des neuen [Nostr-Feature in Alby](https://guides.getalby.com/overall-guide/alby-browser-extension/features/nostr) zu minimieren:
[Alby](https://getalby.com/) ist eine Lightning Browser-Erweiterung, die dir auch erlaubt, deinen privaten Nostr-Schlüssel zu verwalten und ihn für einzelne Anwendungen freizugeben.
Du kannst den Schlüssel direkt in Alby generieren oder deinen bestehenden Schüssel importieren.
Dein Schlüssel hat üblicherweise das nsec-Format, für den Import in Alby muss er aber ins Hex-Format konvertiert werden:
Dies kann du bspw. mit dem [Damus Key-Tool](https://damus.io/key) machen — was allerdings auch wieder im Browser, online und somit eher unsicher ist …

Du siehst es ist alles noch etwas früh und es gibt vieles zu verbessern, es tut sich aber auch einiges:
Beim [SeedSigner](../seedsigner-hardware/) wird bspw. auch schon an der [Schlüsselverwaltung für Nostr](https://www.nostr.guru/e/72bc12b1b7cf412a968c882057cdbaf4d0eed0d4959a1f66e6a251bfcf91c3a3) gearbeitet.

## Nostr nutzen

Sobald du deine App, einen Schlüssel und die damit verbundene Identităt hast, kann es auch schon losgehen …

### Leute finden

In Damus und den meisten anderen Apps siehst du eine Timeline, wie du sie von Twitter kennst:
Sie stellt die Nachrichten der Leute denen du folgst — standardmäßig folgst du erstmal nur dir selbst.
Dementsprechend solltest du also erst einmal ein paar Leute finden, denen du folgen kannst.
Je nach App kannst du in der globalen Timeline deiner Relays anfangen zu suchen, ansonsten findest du hier auch eine Übersicht der [am meisten gefolgten Personen](https://nostr.io/stats).

Mein Pubkey ist [`acbcec475a1a4f9481939ecfbd1c3d111f5b5a474a39ae039bbc720fdd305bec`](https://www.nostr.guru/p/acbcec475a1a4f9481939ecfbd1c3d111f5b5a474a39ae039bbc720fdd305bec) und du kannst bspw. auch in meinem Profil sehen, wem ich folge und dich  von dort aus weiter inspirieren lassen.
Ansonsten über die Suche das Hashtag **#Plebchain** nutzen, um weitere Bitcoiner zu finden.

### Personen markieren

Was auf Twitter die Handles sind, sind auf Nostr die öffentlichen Schlüssel:
Den öffentlichen Schlüssel einer Person findest du im jeweiligen Profil.
Um Personen zu markieren, musst du das @-Symbol vor den öffentlichen Schlüssel setzen.

### Beiträge/Notizen referenzieren

Analog zum Retweet kann man in Nostr auch bestehende Notizen referenzieren und sie so "boosten".
Dafür verwendet man wie beim Markieren von Personen das @-Symbol vor der Notiz-ID.
An die ID kommt man in Damus bspw. indem man die Notiz länger drückt — im darauf folgenden Menü kann man die Notiz-ID kopieren.

### Bilder und Videos posten

Medien-URLs werden verarbeitet und als Bilder angezeigt.
Im Moment ist es in den meisten Clients nicht möglich, Bilder und Videos direkt hochzuladen.
Das Bild muss erst irgendwo gehostet werden, bevor man es verwendet werden kann.
Du kannst dafür bspw. folgende kostenlose öffentliche Bild-Hosting-Dienste verwenden:

- [nostr.build](https://nostr.build)
- [postimages.org](https://postimages.org)
- [imgbb.com](https://imgbb.com)

Um mehrere Bilder in einem einzigen Beitrag anzuzeigen, poste einfach die jeweiligen Bild-URLs.
Je nach App werden sie dann als Galerie oder Karussell dargestellt.

### Was bedeuten die Emojis?

Es gibt einige Emojis mit speziellen Bedeutungen/Funktionen:
🤙 steht bspw. für Like — ⚡ für Sats.

### Lighting

Du kannst auch eine Lightning Invoice posten, die je nach App entsprechend dargestellt wird und auch direkt bezahlt werden kann:
Öffne deine Lightning Wallet, generiere eine neue Invoice mit dem entsprechenden Betrag und kopieren Sie in deine Notiz.
Wenn du Glück hast, wird sie auch direkt von Jack bezahlt. 😉

### Direktnachrichten

Direktnachrichten in Nostr sind dank der Schlüssel-Basiertheit der Nutzerprofile ohne weiteres Zutun verschlüsselt.
Zu beachten ist dabei allerdings, dass die Metadaten dieser Nachrichten über die Relays öffentlich verbreitet werden.
Der Inhalt der Direktnachricht ist für Außenstehende nicht lesbar, aber Metadaten wie Absender, Empfänger und Datum können öffentlich eingesehen werden.

### Suche

Wenn du nach Inhalten suchen oder sie ffentlich verlinken möchtest, kannst du [brb.io](https://brb.io/search) nutzen:
Das ist ein Service von Coinkite, mit dem du Nutzer und Notizen suchen kannst und der dir die Details dazu darstellt.
Ein weiterer solcher Nostr Explorer ist ansonsten noch [nostr.guru](https://www.nostr.guru/).

### Relays

Die Apps haben jeweils eine Vorauswahl an Relays eingestellt, du kannst diese nach Belieben erweitern oder entfernen.
Eine Liste öffentlicher Relays findest du auf [nostr.watch](https://nostr.watch) und du siehst dort auch, zu welchen Relays du eine gute Verbindung hast.
Unter `wss://nostr.einundzwanzig.space` betreiben wir bspw. für die Einundzwanzig Community ein eigenes Relay.

Wenn du selbst ein Relay aufsetzen möchtest, scheint momentan [nostream](https://github.com/Cameri/nostream) die am meisten empfohlene Software zu sein.
Es gibt einige Open Source Relays, dies ist aber wohl die performateste und produktionsreifste Option.

### IP-Adresse und Privatsphăre

Relay-Betreiber können die IP-Adressen der Benutzer sehen, da die Verbindung zu einem Relays direkt auf Socket-Basis hergestellt wird.
Deine IP-Adresse ist eine eindeutige numerische Kennung deiner Internetverbindung.
Sie dient deinem Internetanbieter zur Identifizierung und gibt auch Rückschlüße über deinen Standort.

Dementsprechend kann auch der Relay-Betreiber dich über deine Profilinformationen und Notizen identifizieren und deine Aktivităten verfolgen.
Dies ist aktuell keine gängige Praxis, aber diese Informationen könnten in Zukunft für verschiedenstee Zwecke verwendet werden — so wie man dies auch von zentralen Social Media Plattformen kennt (gezieltes Ausspielen von Werbung oder anderweitige Monetarisierung deiner Daten).

Gleiches gilt für die Hoster von Bildern und anderen Medieninhalten:
Da diese in Nostr auf verschiedensten Servern gehostet werden, stehen den Betreibern dieser Server auch die Informationen der abrufenden Clients zur Verfügung.

Wie auch sonst beim Surfen im Netz, kannst du auch hier ein virtuelles privates Netzwerk (VPN) oder das Tor-Netzwerk verwenden, um deine IP-Adresse zu maskieren.

## Dein eigenes Profil

### Deine Identität verifizieren

Da in Nostr alles dezentral ist, gibt es keine kanonische Instanz, die Identitäten sicherstellt.
Da die Identität nicht an einen eindeutigen Benutzernamen gebunden ist, kann jeder Benutzer ein Schlüsselpaar generieren und seinen Benutzernamen und sein Bild nach Belieben ändern.
Selbst auf zentralen Plattformen wie Twitter ist dieser über leicht abgewandelte Handles durchführbare Identitätsdiebstahl gängige Praxis.

Um dem zu begegnen gibt es innerhalb von Nostr den [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) Standard, mit dem du dich mittels DNS/einer Domain ausweisen kannst:
Unter einer speziellen Adresse deiner Domain wird eine Datei hinterlegt (`/.well-known/nostr.json`), in der die Kombination von öffentlichem Schlüssel und Name hinterlegt ist.
Da diese Daten nur vom Domainbesitzer verwaltet werden können, kann darüber sichergestellt werden, dass Leute auch sind, wer sie vorgeben zu sein.

Es gibt mehrere Anleitungen dazu, wie du die NIP-05 Verifizierung einrichten kannst (siehe bspw. [NVK](https://nvk.org/n00b-nip5) oder [metasikander](https://gist.github.com/metasikander/609a538e6a03b2f67e5c8de625baed3e)).
In der [nostr.json von Einundzwanzig](https://einundzwanzig.space/.well-known/nostr.json) findest du ein praktisches Beispiel und unsere Pubkeys sowie das Relay.

### Lightning Address hinzufügen

Wenn du eine [Lightning Addresse](https://lightningaddress.com/) oder LNURL hast, kannst du diese in deinem Profil hinterlegen, um Spenden zu erhalten.
Dies wird in deinem Profil als Lightning-Button dargestellt, welcher automatisch die Lightning Wallet des Nutzers öffnet, der dir Sats schicken möchte.

## Weitere Links und Anwendungsfälle

- [Nostr.net](https://www.nostr.net/): Übersicht zu Clients, Relays, Tools, Tutorials, etc.
- [Jester](https://jesterui.github.io/): Schach über Nostr spielen
- [Nvote](https://nvote.co/): Dezentraler News-Service a la Reddit oder HackerNews
