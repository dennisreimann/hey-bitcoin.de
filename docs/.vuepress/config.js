module.exports = {
  title: 'Bitcoin Starter Guide',
  description: 'Bitcoin Starter Guide',
  themeConfig: {
    logo: '/bitcoin.svg',
    nav: [
      {
        text: 'Guide', items: [
          { text: 'Einstieg', link: '/beginner' },
          { text: 'Zwischenschritt', link: '/intermediate' },
          { text: 'Fortgeschritten', link: '/advanced' }
        ]
      },
      { text: 'FAQ', link: '/faq' },
      { text: 'Links', link: '/links' }
    ],
    repo: 'dennisreimann/bitcoin-start',
    sidebar: 'auto'
  }
}
