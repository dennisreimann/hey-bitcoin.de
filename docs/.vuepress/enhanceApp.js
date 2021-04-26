// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
const openVideo = embedEl => {
  const lazyAttr = 'data-src'
  const iframe = embedEl.querySelector(`iframe[${lazyAttr}]`)
  if (iframe) {
    const src = iframe.getAttribute(lazyAttr)
    iframe.setAttribute('src', src)
  }
}

const isEnter = e => e.code === 'Enter' || (e.keyCode || e.which) === 13

const handleClick = e => {
  // youtube previews
  if (e.target.matches('.ytEmbed')) {
    e.preventDefault()
    openVideo(e.target)
  }
}

export default ({ router }) => {
  if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
    router.onReady(() => {
      const { app } = router

      // initial page rendering
      app.$once('hook:mounted', () => {
        // temporary fix for https://github.com/vuejs/vuepress/issues/2428
        setTimeout(() => {
          const { hash } = document.location
          if (hash.length > 1) {
            const id = hash.substring(1)
            const element = document.getElementById(id)
            if (element) element.scrollIntoView()
          }
        }, 500)
      })

      document.addEventListener('click', handleClick)
      document.addEventListener('keyup', e => {
        if (isEnter(e)) handleClick(e)
      })
    })
  }
}
