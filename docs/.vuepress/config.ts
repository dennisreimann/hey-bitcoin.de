import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'

const extractDescription = (text) => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_\(\)\[\]]/g, '') : null
}

const baseUrl = 'https://hey-bitcoin.de'
const pageSuffix = '/'

export default defineUserConfig({
  title: 'Hey Bitcoin!',
  description: 'Bitcoin Beratung und Entwicklung',
  plugins: [
    [
      require('vuepress-plugin-seo'),
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) =>
          $page.frontmatter.description ||
          extractDescription($page._strippedContent),
        author: (_, $site) => ({ name: 'Dennis', twitter: '_d11n_' }),
        tags: ($page) =>
          $page.frontmatter.tags || [
            'Bitcoin',
            'Beratung',
            'Entwicklung',
            'BTCPay Server',
            'Bitcoin verdienen',
          ],
        twitterCard: (_) => 'summary',
        type: ($page) => 'article',
        url: (_, $site, path) =>
          `${baseUrl}${path.replace('.html', pageSuffix)}`,
        image: ($page, $site) => `${baseUrl}/card.png`,
      },
    ],
    [
      'clean-urls',
      {
        normalSuffix: pageSuffix,
        indexSuffix: pageSuffix,
        notFoundPath: '/404.html',
      },
    ],
    [
      'sitemap',
      {
        hostname: baseUrl,
        exclude: ['/404.html'],
      },
    ],
  ],
  extendsMarkdown(md) {
    md.use(require('markdown-it-abbr'))
  },
  locales: {
    '/': {
      lang: 'de-DE',
    },
  },
  theme: localTheme({
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
          '/anleitung/bitcoin-fullnode-raspberry-pi-4/',
          '/anleitung/seedsigner-hardware/',
          '/anleitung/seedsigner-software-seedqr/',
          '/anleitung/software-verifizieren/',
        ],
      },
    ],
  })
})
