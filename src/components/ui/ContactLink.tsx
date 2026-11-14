import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

type ContactLinkProps = {
  label: string
  value: string
  href?: string
  copyValue?: string
  icon: LucideIcon
}

export function ContactLink({ label, value, href, copyValue, icon: Icon }: ContactLinkProps) {
  const [copied, setCopied] = useState(false)

  if (copyValue) {
    const copy = async () => {
      await navigator.clipboard.writeText(copyValue)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    }

    return <button type="button" className="contact-link" onClick={copy} aria-label={`Copy Discord username ${copyValue}`}><Icon /><b>{label}</b><small>{value}</small><span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span></button>
  }

  return <a className="contact-link" href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon /><b>{label}</b><small>{value}</small><ArrowUpRight /></a>
}
