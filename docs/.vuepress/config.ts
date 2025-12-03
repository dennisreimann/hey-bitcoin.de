import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItMark from 'markdown-it-mark'

const __dirname = import.meta.dirname || getDirname(import.meta.url)
const baseUrl = 'https://hey-bitcoin.de'

export default defineUserConfig({
  bundler: viteBundler(),
  title: 'Hey Bitcoin!',
  plugins: [
    seoPlugin({
      hostname: baseUrl,
      author: { name: 'Dennis', url: 'https://d11n.net', email: "mail@d11n.net"}
    }),
    sitemapPlugin({
      hostname: baseUrl,
      excludePaths: ['/404.html'],
    })
  ],
  extendsMarkdown(md) {
    md
      .use(markdownItAbbr)
      .use(markdownItMark)
  },
  locales: {
    '/': {
      lang: 'de-DE'
    },
  },
  theme: defaultTheme({
    logo: '/bitcoin.svg',
    contributors: false,
    lastUpdated: false,
    navbar: [
      { text: 'Anleitungen', link: '/anleitung/' },
      { text: 'Fragen und Antworten', link: '/faq/' },
      { text: 'Glossar', link: '/glossar/' },
      { text: 'Links', link: '/links/' },
    ],
    sidebar: [
      {
        text: 'Anleitungen',
        children: [
          '/anleitung/bitcoin-kaufen-was-beachten/',
          '/anleitung/bitcoin-selber-verwahren/',
          '/anleitung/bitcoin-wallet-grundlagen/',
          '/anleitung/bitcoin-fullnode-raspberry-pi-4/',
          '/anleitung/bitcoin-fullnode-mit-wallet-verbinden/',
          '/anleitung/seedsigner-hardware/',
          '/anleitung/seedsigner-software-seedqr/',
          '/anleitung/lightning-network-zahlungskanal/',
          '/anleitung/lightning-network-routing/',
          '/anleitung/software-verifizieren/',
          '/anleitung/nostr-dezentrale-twitter-alternative/',
        ],
      },
    ],
    locales: {
      '/': {
        next: 'Nächster Artikel',
        prev: 'Vorheriger Artikel',
      },
    },
  }),
  // https://ecosystem.vuejs.press/themes/default/extending.html
  alias: {
    '@theme/VPHome.vue': path.resolve(__dirname, './components/VPHome.vue'),
    '@theme/VPPage.vue': path.resolve(__dirname, './components/VPPage.vue'),
  },
})
