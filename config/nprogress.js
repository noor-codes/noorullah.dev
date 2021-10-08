import NProgressBar from 'nprogress'
import router from 'next/router'

export const nprogress = () => {
  router.events.on('routeChangeStart', () => {
    NProgressBar.start()
  })

  router.events.on('routeChangeComplete', () => {
    NProgressBar.done()
  })

  router.events.on('routeChangeError', () => {
    NProgressBar.done()
  })
}
