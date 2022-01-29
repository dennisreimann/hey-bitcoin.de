<template>
  <main
    class="home"
    :aria-labelledby="data.title !== null ? 'main-title' : null"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 id="main-title">
        {{ data.title }}
      </h1>

      <p class="description">
        {{ data.description }}
      </p>
    </header>

    <div class="info">
      <Content class="theme-default-content custom" />
    </div>

    <div
      v-if="data.features && data.features.length"
      class="features hero"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
        <p
          v-if="feature.actionText && feature.actionLink"
          class="action"
        >
          <AutoLink
            class="action-button"
            :item="feature.actionLink"
          />
        </p>
      </div>
    </div>

    <p
      v-if="data.actionText && data.actionLink"
      class="action hero"
    >
      <AutoLink
        class="action-button"
        :item="actionLink"
      />
    </p>

    <div class="info">
      <p>Seit ich 2017 angefangen habe, mich tiefergehend mit dem Thema zu beschäftigen lässt es mich nicht mehr los.
        Mittlerweile ist Bitcoin mein Vollzeit-Job und ich helfe bei mehreren Open Source Projekten in diesem Bereich.
        Hauptsächlich arbeite ich dabei mit an <a href="https://btcpayserver.org" target="_blank" rel="noopener noreferrer">BTCPay
        Server</a>, einer Plattform die Verkäufern das Empfangen von Bitcoin-Zahlungen ermöglicht.</p>
      <p>Da Bitcoin für mich mehr als nur der Job ist, bin ich zusammen mit vier Freunden Teil von
        <a href="https://einundzwanzig.space" target="_blank" rel="noopener noreferrer">Einundzwanzig</a>, dem Bitcoin-Podcast:
        Einmal in der Woche besprechen wir die aktuellen Geschehnisse in Bitcoin und verwandten Themen.
        Daneben produzieren wir zusätzlich Interviews und weitere Inhalte, um das Wissen unter die Leute zu bringen.
        In unserem <a href="https://einundzwanzig.shop/" target="_blank" rel="noopener noreferrer">Online-Shop</a> verkaufen wir
        Fanartikel und akzeptieren nur hartes Geld. 😉</p>
    </div>

    <div class="footer">
      <p v-if="data.footer">{{ data.footer }}</p>
      <p>
        <a href="mailto:mail@dennisreimann.de?subject=Hey Bitcoin">Dennis Reimann</a> ·
        <a href="https://dennisreimann.de/dennisreimann.asc">PGP Pubkey (<small><code>F768 60F8 449D 2F39</code></small>)</a> ·
        <a href="https://dennisreimann.de/kontakt.html" target="_blank">Impressum</a>
      </p>
    </div>
  </main>
</template>

<script>
import AutoLink from '@theme/AutoLink.vue'
import { useSiteData } from '@vuepress/client'

const siteData = useSiteData()

export default {
  name: 'Home',

  components: { AutoLink },

  computed: {
    data () {
      return {
        ...siteData.value,
        ...this.$page.frontmatter
      }
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style scoped>
main.home .hero .description {
  margin: 0 auto;
}

.info {
  max-width: 50em;
  margin: 2.5rem auto;
}
</style>
