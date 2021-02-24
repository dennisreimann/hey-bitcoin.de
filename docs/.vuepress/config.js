module.exports = {
  title: 'Hey Bitcoin!',
  description: 'Bitcoin Beratung und Entwicklung',
  themeConfig: {
    logo: '/bitcoin.svg',
    nav: [
      // {
      //   text: 'Guide', items: [
      //     { text: 'Einstieg', link: '/beginner' },
      //     { text: 'Zwischenschritt', link: '/intermediate' },
      //     { text: 'Fortgeschritten', link: '/advanced' }
      //   ]
      // },
      // { text: 'FAQ', link: '/faq' },
      { text: 'Links', link: '/links' }
    ],
    sidebar: 'auto',
    search: false,
    smoothScroll: true
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'de-DE'
    }
  }
}
