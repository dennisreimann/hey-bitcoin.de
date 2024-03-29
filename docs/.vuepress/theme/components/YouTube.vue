<script>

export default {
  name: 'YouTube',

  data() {
    return { src: null }
  },

  props: {
    title: String,
    url: String
  },

  computed: {
    v() {
      const match = this.url.match(/^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/)
      return match && match[1]
    },

    dataSrc() {
      const [, query] = this.url.match(/\?(.*)/) || this.url.match(/.*youtu\.be\/(.*)/)
      const params = query.split('&').reduce((res, param) => {
        let [key, val] = param.split('=')
        if (param === key) {
          key = 'v'
          val = param
        }
        return Object.assign(res, { [key]: val })
      }, {})
      const { v, t } = params
      const path = t ? `${v}?start=${t}` : `${v}?`
      return `https://www.youtube-nocookie.com/embed/${path}&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0`
    }
  },

  methods: {
    openVideo() {
      this.src = this.dataSrc
    }
  },
}
</script>

<template>
  <a
    :href="url"
    :style="`background-image:url(https://img.youtube.com/vi/${v}/hqdefault.jpg)`"
    @click.prevent="openVideo"
  >
    <iframe
      title="YouTube"
      :src="src"
      :data-src="dataSrc"
      frameborder="0"
      allow="autoplay;encrypted-media;picture-in-picture"
      allowfullscreen
    />
  </a>
</template>

<style scoped>
a {
  display: block;
  position: relative;
  margin: 1rem 0 2rem;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  padding-bottom: 56.25%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

a:before {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAERklEQVR4nOWbTWhcVRTHb1IJVoxGtNCNdal2JYJReC6GWuO83PM/59yUS3FRFARdFlwYP1CfiojQWt36sRCUurRIdVFXIn41lAoVdRGrG1M01YpKrWjiYmaSl8ybZJL3cd+YA//NLObd3++eO8x79z5jSq5Gw+8kov0AP8vMR5l1BtBZQM4B8ks75wCdZdYZZj5qLZ4hov2Nht9Z9vhKKSIaB/gI4M4w62KeAO6Mte4lYOq20FxrlqqOibhHmeWbvNC9ZfDX1mLae391aN6limO/gwgvAPJbWeAZuSDingdwXTBw7/0IsyaA/Fkh+KqOkD+YNfHej1QKD+y7iVlOhgLvFqFfNJvNGyuBJ+KDAF8MDd0tgS8y64OlgSdJMsysL4cG7SOHkyQZLhTee7+d2R2rAVy/S+Jd7/32ouBHAP4gNNRGQyTHc/84NhqNywZp5rvjjnnvt21aABFeCQ+RLwAf2hQ8s7sv9OCLk6AHNgQvIrvbfzKCD76g/O6cu7lf/iER/aQGgy448pExZmhdegAPhR9sObFWH1gT3lp7DaA/5bkIgJhZPgsNmz02novj+KqeApj1ubwXWe4kdyeznAgNvTpE/HQmvKqOMeuFogTUVQSRno+iaLRLAJF7uIgL9O4ubgL8aWgB7S44mNX+35YpICUiAvS9sBLkq1WzT+NFffl6AuoiApi6NT37h6sWkBIRZGkQ8YtLgyji6e1mBYTqCEBPG2Naz+0BWQgtoGoRgCzEsd9hAN1X5BfnFZASUfrSAFQNsyZ1FJASUVpHiLinDJG8U2cBZYogkrcNs5waBAGdstbeU9zdqpw0gPwwSAI6VUxHyFlDpOcHUUBBIuYNs14aZAE5RVwyzPr3/0EAEY0TyfGNjBWQvwZ +CTSbehfAH29mrID8bET0+0EUkAd8WYDOmqJ3ecsG30yr9wqRfm6Y+a1BEFDEjHfHvWmY9ck6CygHvBVr8Xhtb4ZE5HZA3y8DvBNA1TjnrmXWf+sioMwZX5V/VHXMGGMMoKdDCxCRvRWBdzKzdHEO+EisilbPyopHYqp6S9UCAsz4iojI7hUDAtyXVQgIDd6KnOoaWNkbI6FaPSuZGyMArsi7MZoloB4zviI/Nhr3X95jltwTRQmoIfgisy5ai+me67OI7fE4nrqjrqfK1t0eby0FPRB6oGVlchL3rgnfrq19RKbVBdhV9IOSwJmfmJi4vi/4ThERitwyCxVAFqydshuCX5awhQ9KtmuIWd8IDZED/nXT77rvVVv6sHRKwjYi91poqP7Dr+Y6JJ1VSZIMA3wkPNy6bX+o8Bcm0sXMdwM8Fxo0A3xORPaWBp6uPXsmbxCRD0NDL0dOANhVCXy6iAjMcjbcrMt3RITKwdMVRdFo+y5yvkL4eWZ+zHt/ZVD4dEVRNGotpst+dZZZH8k86lqn2pIvT/eqrNfn2xuyqYPZ8mv7s8pfn/8Pybm4TIjanscAAAAASUVORK5CYII=") no-repeat center center;
  background-size: auto;
  background-size: 64px 64px;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  transition: all 0.2s ease-out;
  content: '';
  cursor: pointer;
}

a iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}

a iframe[src] {
  display: block;
}
</style>
