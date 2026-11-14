import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { appPath } from '../config/paths'

const systems = ['Hosting platform', 'Billing', 'Game hosting', 'VPS', 'Server management', 'Support', 'Automation', 'Infrastructure']
const stack = ['PHP', 'JavaScript', 'MySQL', 'Redis', 'Docker', 'Linux']

export function AnonixCaseStudy() {
  return <main className="case-study"><header className="case-study__nav"><a href={appPath()}><ArrowLeft /> evilfreak.me</a><span>Case study / 001</span></header><section className="case-study__hero"><p>Cloud hosting platform</p><div className="anonix-name"><span>ANONIX</span></div><h1>Hosting systems.<br />Made usable.</h1><div className="case-study__actions"><Button href="https://anonix.cloud/en" target="_blank" rel="noreferrer" variant="accent">Open platform <ArrowUpRight /></Button><Button href={appPath()} variant="dark">Back to portfolio</Button></div></section><section className="case-study__overview"><header><span>Overview</span><h2>Product, backend and infrastructure in one system.</h2></header><p>Anonix brings hosting, billing, services and support into a single platform. The work spans customer-facing product flows, backend logic and the infrastructure behind provisioned services.</p></section><section className="case-study__systems">{systems.map((item, i) => <article key={item}><span>0{i + 1}</span><h3>{item}</h3></article>)}</section><section className="case-study__stack"><span>Core stack</span><div>{stack.map(item => <strong key={item}>{item}</strong>)}</div></section></main>
}
