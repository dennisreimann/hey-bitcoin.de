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
        text: 'Die ersten Schritte',
        children: [
          '/anleitung/bitcoin-kaufen-was-beachten/',
          '/anleitung/bitcoin-selber-verwahren/',
          '/anleitung/bitcoin-wallet-grundlagen/',
          '/anleitung/utxo-management/',
          '/anleitung/finanzielle-privatsphaere/',
        ],
      },
      {
        text: 'Der Praxisstart',
        children: [
          '/anleitung/bitcoin-fullnode/',
          '/anleitung/sparrow-wallet/',
          '/anleitung/bitcoin-fullnode-mit-wallet-verbinden/',
        ],
      },
      {
        text: 'SeedSigner',
        children: [
          '/anleitung/seedsigner-hardware/',
          '/anleitung/seedsigner-software-seedqr/',
        ],
      },
      {
        text: 'Lightning Netzwerk',
        children: [
          '/anleitung/lightning-network-zahlungskanal/',
          '/anleitung/lightning-network-routing/',
        ],
      },
      {
        text: 'Sonstiges',
        children: [
          '/anleitung/software-verifizieren/',
          '/anleitung/nostr-dezentrale-twitter-alternative/',
          '/anleitung/grapheneos-sicherheit-privatsphaere/',
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
