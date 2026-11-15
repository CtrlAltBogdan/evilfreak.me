import { GitBranch, Mail, MessageCircle, Send } from 'lucide-react'
import { ActFrame } from '../../components/layout/ActFrame'
import { ContactLink } from '../../components/ui/ContactLink'
import { profile } from '../../config/profile'
import { scenes } from '../../config/scenes'
import { AudienceCounter } from '../../components/community/AudienceCounter'
import { PortfolioComments } from '../../components/community/PortfolioComments'

export function Encore() {
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, eventName: 'contact-email', icon: Mail },
    { label: 'GitHub', value: profile.handle, href: profile.github, eventName: 'contact-github', icon: GitBranch },
    { label: 'Telegram', value: profile.telegramHandle, href: profile.telegram, eventName: 'contact-telegram', icon: Send },
    { label: 'Discord', value: profile.discord, copyValue: profile.discord, eventName: 'contact-discord', icon: MessageCircle },
  ]
  return <ActFrame scene={scenes.encore} className="encore"><div className="encore-prelude"><span>Credits ended</span><i /></div><div className="encore-copy reveal"><p>Encore / one more thing</p><h2>Let's build<br />something weird.</h2><span>Full-stack developer focused on web, backend systems and infrastructure.</span></div><AudienceCounter /><PortfolioComments /><section id="contact" className="encore-contact reveal"><div><span>Contact / after hours</span><h2>Stay after<br />the show.</h2></div><div className="encore-links">{contacts.map(contact => <ContactLink key={contact.label} {...contact} />)}</div></section><footer><span>© {new Date().getFullYear()} evilfreak.me</span><span>React / TypeScript / Vite</span><a href="#top">Back to prologue ↑</a></footer></ActFrame>
}
