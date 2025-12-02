<script setup lang="ts">
import VPHomeFooter from '@theme/VPHomeFooter.vue'
import VPHomeHero from '@theme/VPHomeHero.vue'
import { Content } from 'vuepress/client'
</script>

<template>
  <main class="vp-home">
    <VPHomeHero />
    <div vp-content>
      <Content />
    </div>
    <VPHomeFooter />
  </main>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/variables' as *;

.vp-home {
  display: block;
  max-width: var(--homepage-width);
  margin: 0 auto;
  padding: var(--navbar-height) 2rem 0;

  @media (max-width: $MQMobileNarrow) {
    padding-inline: 1.5rem;
  }

  [vp-content] {
    margin: 0;
    padding: 0;

    h2 {
      border-bottom: none;
      padding-top: var(--header-offset);
      font-size: 1.35rem;
    }
  }

  .intro {
    text-align: center;
    max-width: 39em;
    margin: 0 auto;

    .primary {
      margin: 1.5rem 0;
      text-decoration: none;
    }
  }
}
</style>
