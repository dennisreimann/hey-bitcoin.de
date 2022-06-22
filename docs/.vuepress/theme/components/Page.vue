<script setup lang="ts">
import ParentPage from '@vuepress/theme-default/lib/client/components/Page.vue'
</script>

<template>
  <ParentPage>
    <template #content-bottom>
      <div v-if="$page.path?.match(/\/anleitung\/(.+)/)" class="donate">
        <h4>Hat dir der Artikel geholfen?</h4>
        <p>Wenn dir dieser Artikel gefallen hat und du gern Danke sagen möchtest, würde ich mich über ein paar Satoshis
          <a href="lightning:LNURL1DP68GURN8GHJ7AMPD3KX2AR0VEEKZAR0WD5XJTNRDAKJ7TNHV4KXCTTTDEHHWM30D3H82UNVWQHKXUN0WAJX2ER9V9E8G6PN8QSKVTEZ">per Lightning</a> freuen.
        </p>
        <figure>
          <img src="/lnurl.png" alt="LNURL1DP68GURN8GHJ7AMPD3KX2AR0VEEKZAR0WD5XJTNRDAKJ7TNHV4KXCTTTDEHHWM30D3H82UNVWQHKXUN0WAJX2ER9V9E8G6PN8QSKVTEZ">
        </figure>
      </div>
    </template>
  </ParentPage>
</template>

<style scoped>
h4 {
  margin: 3rem 0 0 0!important;
  padding: 0 !important;
}
p {
  margin: 1rem 0 !important;
}
figure {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  margin: 0 !important;
}
img {
  width: 100%;
}
</style>
