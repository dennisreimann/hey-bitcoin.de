import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext'
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
    markdownExtPlugin({
      breaks: false,
      gfm: true
    }),
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
          '/anleitung/seed-phrase-backup/',
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
        text: 'Multi-Signatur',
        children: [
          '/anleitung/seedsigner-hardware/',
          '/anleitung/seedsigner-software-seedqr/',
          '/anleitung/specter-diy-hardware-wallet/',
          '/anleitung/multisig-bitcoin-wallet/',
          '/anleitung/multisig-wallet-mit-sparrow/',
        ],
      },
      {
        text: 'Lightning Netzwerk',
        children: [
          '/anleitung/lightning-network-zahlungskanal/',
          '/anleitung/lightning-network-routing/',
          '/anleitung/lightning-network-privatsphaere/',
        ],
      },
      {
        text: 'Tails OS',
        children: [
          '/anleitung/tails-os-privatsphaere-betriebssystem/',
          '/anleitung/tails-os-sparrow-wallet/',
          '/anleitung/tails-os-veracrypt-digitales-backup/',
        ],
      },
      {
        text: 'Sonstiges',
        children: [
          '/anleitung/software-verifizieren/',
          '/anleitung/vpn-leitfaden/',
          '/anleitung/grapheneos-sicherheit-privatsphaere/',
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
