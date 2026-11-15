import { useEffect } from 'react'
import { trackPageView } from '../../lib/analytics'

export function Analytics() {
  useEffect(() => {
    void trackPageView()
    const trackNavigation = () => void trackPageView()
    window.addEventListener('popstate', trackNavigation)
    return () => window.removeEventListener('popstate', trackNavigation)
  }, [])

  return null
}
