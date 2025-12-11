# Warum finanzielle Privatsphäre in Bitcoin jeden etwas angeht

Die Bitcoin-Blockchain ist ein offenes Buch.
Lerne wer darin blättert, was sie über dich erfahren können und warum gutes UTXO-Management nichts Paranoides, sondern ein Pflichtprogramm für jeden rationalen Nutzer ist.

## "Ich habe doch nichts zu verbergen!"

Dieser Satz ist die häufigste und gefährlichste Fehleinschätzung, wenn es um finanzielle Privatsphäre geht.
Die zugrundeliegende Annahme ist falsch: ==Es geht nicht darum, etwas Illegales zu verstecken.==
Es geht um die grundlegende Kontrolle über deine persönlichen Informationen.

Stell dir folgende Fragen:

- Warum solltest du deine Kontoauszüge mit allen Einkäufen, Gehaltseingängen und Überweisungen an einer Litfaßsäule in der Innenstadt aushängen?
- Sollten deine Arbeitskollegen genau sehen, wie viel du verdienst, was du für Miete zahlst und wie viel du für Hobbys oder Spenden ausgibst?
- Würdest du es in Ordnung finden, wenn Unternehmen jede deiner finanziellen Entscheidungen protokollieren, analysieren und an Dritte verkaufen?

Die Antwort ist höchstwahrscheinlich "Nein".
Bei traditionellen Banken genießt du diesen Schutz gesetzlich durch Bankgeheimnis und Datenschutzgesetze – auch wenn du "nichts zu verbergen" hast.

Bei Bitcoin ist die Standardeinstellung genau das Gegenteil:
Jede deiner Transaktionen ist standardmäßig öffentlich, unveränderlich und für immer in einer von jedermann einsehbaren Buchführung gespeichert.
Dein "Kontoauszug" hängt bereits an der digitalen Litfaßsäule.

==Die Frage ist nicht, ob du etwas zu verstecken hast, sondern ob du die Kontrolle darüber ausübst, wer deine finanziellen Daten einsehen und auswerten darf.==

## Was auf der Blockchain für immer einsehbar ist

Um die Tragweite zu verstehen, muss man sich dessen bewusst sein, was öffentlich einsehbar ist.
Für jede Bitcoin-Transaktion sind folgende Daten für jeden Menschen mit Internetzugang einsehbar:

- **Beträge:** Wie viel Bitcoin von welcher Adresse an welche Adresse gesendet wurde.
- **Zeitstempel:** Wann die Transaktion stattgefunden hat.
- **Transaktionshistorie:** Jeder einzelne Eingang (Input) einer Transaktion verweist auf eine frühere Ausgabe (Output).
  Das bedeutet: Wer eine deiner Adressen kennt, kann die gesamte Historie aller damit verbundenen Adressen nachverfolgen.
  Man sieht nicht nur eine Transaktion, sondern potenziell auch den damit verbundenen vergangenen und zukünftigen Geldfluss.

Visuell stellt sich das ungefähr so dar:

```:no-line-numbers
Adresse A (0.2 BTC) --> Adresse B (deine Wallet)
Adresse C (0.2 BTC) --> Adresse B (deine Wallet)
                            |
                       Transaktion
                            |
                            --> Adresse D (Zahlbetrag: 0.3 BTC)
                            --> Adresse E (Wechselgeld: 0.1 BTC)
```

Ein Außenstehender, der Adresse B kennt, sieht, dass du 0.4 BTC besitzt.
Er kann verfolgen, dass du die Transaktion ausführst und etwas für 0.3 BTC kaufst.
Er sieht in der Folge auch die 0.1 BTC Wechselgeld auf Adresse E, welche nun noch mindestens zu deiner Wallet gehören.

Da die Bitcoin-Blockchain als transparentes Kassenbuch angelegt ist, sind diese Daten per Definition auch nicht löschbar.
Sie bleiben für immer öffentlich einsehbar und die mit einzelnen Transaktionen und Adressen verbundenen Daten können auch Jahre später noch nachvollzogen werden.

## Wer sieht deine Daten und warum?

Finanziellen Daten sind wertvoll.
Eine Vielzahl von Akteuren hat Interesse daran, sie zu lesen und auszuwerten.
Dies ist auch gut in folgender Visualisierung zu erkennen, mit der Rebecca Ricks einmal [Paypal's Datenweitergabe an Drittanbieter](https://www.paypal.com/de/legalhub/paypal/third-parties-list) dargestellt hatte ([Quelle](https://www.infosecurity.us/blog/2018/1/22/becca-ricks-how-paypal-shares-your-data), das Original ist mittlerweile leider offline).

!["How Paypal Shares Your Data"](./paypal.png)

Wie sieht solch eine Liste von Akteuren im Bitcoin-Kosmos aus und wie nutzen sie die öffentlich verfügbaren Daten der Blockchain?

### Unternehmen & Blockchain-Analysten

- **Was sie tun:** Diese Firmen (z.B. Chainalysis, CipherTrace) haben sich darauf spezialisiert, die Blockchain zu durchforsten und mit Heuristiken und Algorithmen (Clusteranalyse) Wallet-Adressen zu Personen und Unternehmen zu verbinden.
  Sie erstellen detaillierte Profile über das Transaktionsverhalten.
- **Warum:** Sie verkaufen diese Erkenntnisse als "Compliance-Lösungen" an Börsen, Banken und Regierungen.
  Zunehmend werden diese Daten auch für Marketingzwecke angeboten.
- **Das Risiko für dich:** Ablehnung oder De-Platforming.
  Eine Börse könnte dein Konto sperren, weil du Bitcoin an einen Dienst gesendet hast, den sie als "riskant" einstuft.
  Dies geschieht zum Beispiel, wenn ein Zusammenhang mit einem CoinJoin oder einem Gambling-Service erkannt wird.

### Börsen & Finanzdienstleister

- **Was sie tun:** Wenn du Bitcoin auf einer KYC-Börse kaufst, verknüpfen diese deine Identität mit der Auszahlungsadresse.
  Sie verfolgen, wohin die Coins fließen und sind teils verpflichtet, diese Daten im Rahmen regulatorischer und strafrechtlicher Maßnahmen mit staatlichen Behörden zu teilen.
- **Warum:** Um regulatorische Auflagen ([KYC und Anti-Geldwäsche Richtlinien](/glossar/#kyc-und-aml)) zu erfüllen.
- **Das Risiko für dich:** Du verlierst die Kontrolle über deine Privatsphäre.
  Jede Transaktion, die von dieser initialen Adresse ausgeht, kann über diese Daten zu dir zurückverfolgt werden.
  Du handelst nicht mehr pseudonym.

### Geschäftspartner, Familie, neugierige Personen

- **Was sie tun können:** Wenn jemand nur eine deiner Bitcoin-Adressen kennt (weil du ihm Geld geschickt hast oder sie öffentlich geteilt wurde), kann er deine gesamte Transaktionshistorie der damit verbundenen [UTXOs](../utxo-management/) einsehen.
- **Warum:** Neugier, Missgunst, oder im schlimmsten Fall Erpressung.
- **Das Risiko für dich:** Du kannst keine diskreten finanziellen Entscheidungen mehr treffen.
  Jede Spende, jede Investition, jeder Verkauf wird potenziell zur öffentlichen Angelegenheit.

### Kriminelle Akteure

- **Was sie tun:** Sie suchen nach "reichen" Wallets, die viel Wert angesammelt haben.
- **Das Risiko für dich:** Zielgerichtete Angriffe, von Phishing-E-Mails ("Wir haben eine Sicherheitswarnung für Ihre Wallet Adresse bc1q...") bis hin zur physischen Bedrohung, der sogenannten "5$-Wrench-Attacke".
  Warum sich die Mühe machen, deine Wallet zu hacken, wenn man dich mit einem einfachen Schraubenschlüssel bedrohen kann?

### Übergriffige Regierungen oder Entitäten

Gesetze, Regulatorik und politische Systeme ändern sich.
Was heute legal und steuerfrei ist, könnte morgen besteuert, stark reguliert oder sogar verboten werden.
Die Blockchain-Vergangenheit lässt sich nicht löschen.
Eine heute getätigte Transaktion könnte in zehn Jahren ungeahnte Konsequenzen haben.

## So schadet dir mangelnde Privatsphäre im Alltag

Theorie ist gut, aber machen wir es mit ein paar potenziellen Praxisbeispielen greifbaren:

- **Dein Gehalt:** Du bekommst deine Arbeit in Bitcoin bezahlt.
  Bei der Ausgabe deines monatlichen Gehalts-UTXOs gilt es extra Vorkehrungen zu treffen, so dass die Empfänger nicht nachvollziehen können, wie viel du verdient hast.
- **Die Spende:** Du unterstützest eine politische Bewegung, eine Menschenrechtsorganisation oder eine kontroverse NGO.
  Ohne finanzielle Privatsphäre machst du dich und deine Unterstützung angreifbar.
- **Der einfache Verkauf an einen Freund:** Du verkaufst Bitcoin von deiner KYC-Börse an einen Freund.
  Die Börse hat nun deine Identität mit der Adresse deines Freundes verknüpft.
  Du hast unfreiwillig auch die Privatsphäre deines Freundes kompromittiert.

## Vom Pseudonym zur Person

Oft hört man: "Aber Bitcoin ist doch anonym!" — dies ist jedoch ein gefährliches Missverständnis:
==Bitcoin ist **pseudonym**, nicht **anonym**.==

- **Pseudonymität:** Du handelst unter einem Decknamen, in diesem Fall deiner Bitcoin-Adresse.
  Solange niemand weiß, wer hinter `bc1q...xyz` steckt, bist du "anonym".
- **Der Deanonymisierungs-Dominoeffekt:** Sobald diese Adresse auch nur **ein einziges Mal** mit deiner realen Identität verknüpft wird (durch einen KYC-Kauf, eine Verknüpfung auf deiner Website, eine Überweisung an einen bekannten Freund), ist die Pseudonymität gebrochen.
  Analysefirmen können dir nun mit hoher Wahrscheinlichkeit alle anderen Adressen zuordnen, die mit dieser Adresse interagiert haben.

## Was tun? Privatsphäre ist ein Prozess, kein Zustand

Der beste Zeitpunkt, um mit dem Schutz deiner finanziellen Privatsphäre zu beginnen, war gestern. Der zweitbeste Zeitpunkt ist jetzt. Es ist kein Alles-oder-Nichts-Spiel, sondern eine Reihe von Maßnahmen, die deine Position auf dem "Privatsphäre-Spektrum" verbessern.

**Beginne mit diesen grundlegenden Schritten, die hier in verschiedenen Artikeln detailliert beschrieben werden:**

1. **Vermeide Adressen-Wiederverwendung:** Nutze für jeden Empfang eine frische Adresse aus deiner Wallet.
  Dies erschwert es enorm, deine Transaktionen miteinander zu verknüpfen.
2. **Praktiziere [UTXO-Management](../utxo-management/) & Coin Control:** Trenne deine Bitcoin-Quellen (KYC-Käufe und Non-KYC-Erwerb, Sparplan, etc.).
  Vermeide es, sie in einer Transaktion zu vermischen.
3. Verwende [deine eigene Bitcoin-Node](../bitcoin-fullnode/): Indem du dich mit deinem eigenen Node verbindest, verhinderst du, dass du deine Wallet-Daten und Netzwerk-Abfragen an fremde Server schickst.
4. **Nutze [Sparrow Wallet](../sparrow-wallet/) und label deine UTXOs:** Halte in deiner Wallet fest, woher deine Bitcoin stammen.
  So behältst du den Überblick und kannst fundierte Entscheidungen treffen.

Fortgeschrittene Techniken wie die Nutzung von CoinJoin, PayJoin oder dem **Lightning-Netzwerk** bieten noch stärkere Privatsphäre-Garantien und sind nach den genannten Basics der nächste Schritt auf deiner Reise.

## Finanzielle Privatsphäre ist dein gutes Recht

==Offenheit und Unveränderlichkeit der Blockchain sind die größte Stärke für das Vertrauen in Bitcoin, aber gleichzeitig die größte Herausforderung für unsere individuelle finanzielle Freiheit.==

Gute finanzielle Privatsphäre zu praktizieren ist **kein verdächtiges, sondern ein rationales und souveränes Verhalten.**
Es ist die logische Konsequenz daraus, die volle Kontrolle über dein Eigentum auch wirklich auszuüben.

Es geht nicht darum, etwas zu verstecken.
**Es geht darum, die Hoheit darüber zu behalten, was du wem, wann und warum offenlegst.**
Das ist ein fundamentales Recht, welches es im digitalen Zeitalter zu bewahren gilt.
Fange an, es für dich einzufordern.
