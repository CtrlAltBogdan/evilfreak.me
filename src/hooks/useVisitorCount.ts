import { useEffect, useState } from 'react'
import { community } from '../config/community'

type VisitorCount =
  | { status: 'loading'; count: null }
  | { status: 'success'; count: number }
  | { status: 'error'; count: null }

export function useVisitorCount(): VisitorCount {
  const [visitorCount, setVisitorCount] = useState<VisitorCount>({ status: 'loading', count: null })

  useEffect(() => {
    const controller = new AbortController()

    fetch(community.goatCounter.totalUrl, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Visitor count unavailable')
        return response.json() as Promise<{ count?: string }>
      })
      .then(data => {
        const count = Number(data.count?.replace(/[^0-9]/g, ''))
        if (!Number.isFinite(count)) throw new Error('Invalid visitor count')
        setVisitorCount({ status: 'success', count })
      })
      .catch(error => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setVisitorCount({ status: 'error', count: null })
      })

    return () => controller.abort()
  }, [])

  return visitorCount
}
