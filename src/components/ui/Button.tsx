import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: 'accent' | 'light' | 'dark' }
export function Button({ children, variant = 'light', className = '', ...props }: Props) {
  return <a className={`brutal-button brutal-button--${variant} ${className}`} {...props}>{children}</a>
}
