const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-hey-bitcoin',
  extends: '@vuepress/theme-default',
  alias: {
    '@theme/Home.vue': path.resolve(__dirname, 'components/Home.vue'),
  },
}
