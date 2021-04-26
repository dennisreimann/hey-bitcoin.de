const { resolve } = require('path')
const preprocessMarkdown = resolve(__dirname, 'preprocessMarkdown')

const extractDescription = text => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_\(\)\[\]]/g, '') : null
}

const baseUrl = 'https://hey-bitcoin.de'
const pageSuffix = '/'

module.exports = {
  title: 'Hey Bitcoin!',
  description: 'Bitcoin Beratung und Entwicklung',
  plugins: [
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description || extractDescription($page._strippedContent),
      author: (_, $site) => ({ name: 'Dennis', twitter: '_d11n_' }),
      tags: $page => ($page.frontmatter.tags || ['Bitcoin', 'Beratung', 'Entwicklung', 'BTCPay Server', 'Bitcoin verdienen']),
      twitterCard: _ => 'summary',
      type: $page => 'article',
      url: (_, $site, path) => `${baseUrl}${path.replace('.html', pageSuffix)}`,
      image: ($page, $site) => `${baseUrl}/card.png`
    }],
    ['clean-urls', {
      normalSuffix: pageSuffix,
      indexSuffix: pageSuffix,
      notFoundPath: '/404.html',
    }],
    ['code-copy', {
      color: '#8F979E',
      backgroundTransition: false,
      staticIcon: true,
      successText: 'Kopiert!'
    }],
    ['sitemap', {
      hostname: baseUrl,
      exclude: ['/404.html']
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom']
  ],
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use(preprocessMarkdown)
      .loader(preprocessMarkdown)
      .end()
  },
  markdown: {
    extendMarkdown(md) {
      md.use(require('markdown-it-abbr'))
    },
    pageSuffix
  },
  themeConfig: {
    domain: baseUrl,
    logo: '/bitcoin.svg',
    search: false,
    smoothScroll: true,
    nav: [
      { text: 'Anleitungen', link: '/anleitung/' },
      { text: 'Fragen und Antworten', link: '/faq/' },
      { text: 'Glossar', link: '/glossar/' },
      { text: 'Links', link: '/links/' }
    ],
    sidebar: [
      {
        title: 'Anleitungen',
        collapsable: false,
        children: [
          '/anleitung/bitcoin-kaufen-was-beachten/',
          '/anleitung/bitcoin-fullnode-raspberry-pi-4/',
          '/anleitung/software-verifizieren/'
        ]
      }
    ]
  },
  locales: {
    '/': {
      lang: 'de-DE'
    }
  }
}
