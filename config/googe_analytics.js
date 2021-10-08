import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '@/config/gtag'

export const googe_analytics = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
