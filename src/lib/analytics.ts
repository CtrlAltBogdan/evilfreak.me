import { community } from '../config/community'
import { appRoute } from '../config/paths'

type CountData = {
  path?: string
  title?: string
  event?: boolean
}

type GoatCounter = {
  no_onload?: boolean
  count?: (data?: CountData) => void
}

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

let scriptReady: Promise<void> | undefined
let lastPage = ''

function isLocal() {
  return ['localhost', '127.0.0.1', '::1'].includes(location.hostname)
}

function loadGoatCounter() {
  if (isLocal()) return Promise.resolve()
  if (window.goatcounter?.count) return Promise.resolve()
  if (scriptReady) return scriptReady

  window.goatcounter = { ...window.goatcounter, no_onload: true }
  scriptReady = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://gc.zgo.at/count.js'
    script.async = true
    script.dataset.goatcounter = community.goatCounter.endpoint
    script.dataset.goatcounterSettings = JSON.stringify({ no_onload: true })
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('GoatCounter failed to load')), { once: true })
    document.head.append(script)
  })

  return scriptReady
}

export async function trackPageView() {
  if (isLocal()) return
  const path = appRoute()
  if (lastPage === path) return

  try {
    await loadGoatCounter()
    if (!window.goatcounter?.count || lastPage === path) return
    window.goatcounter.count({ path, title: document.title })
    lastPage = path
  } catch {
    // Analytics must never block the portfolio when a privacy tool blocks the script.
  }
}

export async function trackEvent(path: string) {
  if (isLocal()) return
  try {
    await loadGoatCounter()
    window.goatcounter?.count?.({ path, title: path, event: true })
  } catch {
    // Event tracking is optional infrastructure.
  }
}
