import { useVisitorCount } from '../../hooks/useVisitorCount'

export function AudienceCounter() {
  const visitors = useVisitorCount()
  const value = visitors.status === 'loading'
    ? '••••••'
    : visitors.status === 'success'
      ? new Intl.NumberFormat('en-US').format(visitors.count)
      : '— —'

  return <section className="audience reveal" aria-labelledby="audience-title">
    <header><p id="audience-title">Audience</p><span><i /> Live archive</span></header>
    <div className={`audience-count audience-count--${visitors.status}`} aria-live="polite">{value}</div>
    <div className="audience-meta"><b>Visits</b><span>The show keeps going.</span></div>
  </section>
}
