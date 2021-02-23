<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
    </header>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.features && data.features.length"
      class="features"
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
          <NavLink
            class="action-button"
            :item="feature.actionLink"
          />
        </p>
      </div>
    </div>

    <p
      v-if="data.actionText && data.actionLink"
      class="action"
    >
      <NavLink
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
      <p>Dennis Reimann | <a href="https://dennisreimann.de/kontakt.html" target="_blank">Kontakt &amp; Impressum</a></p>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
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

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
  .theme-default-content
    p:first-child
      text-align center
  .action
    text-align center
  .action-button
    display inline-block
    font-size 1.2rem
    color #fff
    background-color $accentColor
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)
    &:hover
      background-color lighten($accentColor, 10%)
  p
    max-width 47em
    margin-left auto
    margin-right auto
  .info,
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin 2.5rem 0 .5rem
  .features
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    border-top 1px solid $borderColor
    padding 2.5rem
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
    .action-button
      font-size 1rem
      padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
