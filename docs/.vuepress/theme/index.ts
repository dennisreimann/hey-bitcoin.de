import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-hey-bitcoin',
    extends: defaultTheme(options),
    alias: {
      '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/Page.vue': path.resolve(__dirname, './components/Page.vue'),
    }
  }
}
