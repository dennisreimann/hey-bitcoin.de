# Bitcoin Fullnode mit dem Raspberry Pi 4

Was du für einen Bitcoin Fullnode mit dem Raspberry Pi 4 brauchst und wie du die Einzelteile zusammensetzt.

:::warning Achtung!
Die hier vorgestellte Hardware ist leistungsmäßig nur noch eingeschränkt zu empfehlen.
Wenn du nur einen reinen Bitcoin Fullnode (ohne Lightning und weitere Spielereien) betreiben möchtest, kannst du auch weiterhin einen Raspberry Pi 4 nutzen.

Sollten deine Bedürfnisse aber darüber hinaus gehen und du weitere Anwendungen (bspw. deine eigene Mempool-Instanz) nutzen möchtest, empfehle ich dir den neuen Artikel zur [eigenen Bitcoin Fullnode](../bitcoin-fullnode/).
:::

## Einkaufsliste

- [Raspberry Pi 4 mit 8GB RAM](https://www.amazon.de/Raspberry-Pi-Quad-core-ARMA76-Bits/dp/B0CK2FCG1K)
- [Netzteil für Raspberry Pi 4](https://www.amazon.de/gp/product/B07TMPC9FG)
- [SanDisk Extreme Pro 64GB microSDHC](https://www.amazon.de/dp/B09X7BYSFG)
- [SanDisk Ultra 3D 2TB SSD](https://www.amazon.de/dp/B071KGS72Q)
- [Inateck Festplattengehäuse](https://www.amazon.de/gp/product/B00IJNDBM4)

Beim Gehäuse gibt es mehrere gute Optionen, je nachdem was dir gefällt:

- [Aluminium Passiv-Kühlung](https://www.amazon.de/Miuzei-Geh%C3%A4use-Raspberry-Aluminium-kompatibel/dp/B0983B3WJ7)
- [FLIRC Aluminium Case](https://www.amazon.de/Raspberry-Pi-FLIRC-Case-Aluminium-silber/dp/B07WG4DW52)
- [Transparent mit Lüfter und Kühlkörper](https://www.amazon.de/GeeekPi-Geh%C3%A4use-Raspberry-K%C3%BChlk%C3%B6rper-Schwarz-klar/dp/B07TVLTMX3)

## Wie du die Hardware zusammensetzt

<div class="youtube">
  <iframe
    title="YouTube"
    src="https://www.youtube-nocookie.com/embed/pWJFFLpElT0?autohide=1&modestbranding=1&color=white&rel=0"
    frameborder="0"
    allow="autoplay;encrypted-media;picture-in-picture"
    allowfullscreen
  />
</div>

## Die Software

Als Software für diese Art von Fullnode empfehle ich dir den [RaspiBlitz](https://docs.raspiblitz.org/), da es die Ressourcen-schonendste Variante ist.
Andere Implementierungen wie Umbrel oder StartOS betreibt man mittlerweile lieber mit leistungsfähigerer Hardware, wie in der [neuen Fassung dieses Artikels](../bitcoin-fullnode/) beschrieben.
