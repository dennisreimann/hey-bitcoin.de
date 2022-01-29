import { defineClientAppEnhance } from '@vuepress/client'
import YouTube from './theme/components/YouTube.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('YouTube', YouTube)
})
