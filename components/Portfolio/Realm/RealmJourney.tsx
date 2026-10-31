'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { TimeLineData, workExperience } from '@/constants/constants';
import { useCalmMotion } from '../Motion';
import RealmCanvas from './RealmCanvas';
import { artifacts, destinations, orders } from './realm-data';

const external = { target: '_blank', rel: 'noopener noreferrer' };

function Chapter({ id, number, title, children, className = '' }: { id: string; number: string; title: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const calm = useCalmMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, .22, .72, 1], [.15, 1, 1, .15]);
  const y = useTransform(scrollYProgress, [0, .22, .72, 1], [65, 0, 0, -45]);
  return <section ref={ref} id={id} className={`world-chapter ${className}`} aria-label={title}>
    <div className="world-chapter-sticky">
      <motion.div className="world-chapter-body" style={calm ? { opacity: 1, y: 0 } : { opacity, y }}>
        <div className="world-chapter-label"><span>{number}</span><i /><p>{title}</p></div>
        {children}
      </motion.div>
    </div>
  </section>;
}

function Archive() {
  const [selected, setSelected] = useState(0);
  const artifact = artifacts[selected];
  return <div className="world-archive-layout">
    <div className="world-copy">
      <p className="world-overline">A collection of things made real</p>
      <h2>The archive<br />of <em>creations.</em></h2>
      <p>Every artifact has a purpose. Choose one to look closer at the work, the decisions, and the systems within.</p>
      <label className="world-select-label" htmlFor="realm-artifact">Choose an artifact</label>
      <select id="realm-artifact" className="world-select" value={selected} onChange={event => setSelected(Number(event.target.value))}>
        {artifacts.map((item, i) => <option key={item.title} value={i}>{String(i + 1).padStart(2, '0')} / {item.title}</option>)}
      </select>
      <div className="world-artifact-paging">
        <button aria-label="Previous artifact" onClick={() => setSelected(i => (i - 1 + artifacts.length) % artifacts.length)}>←</button>
        <span>{String(selected + 1).padStart(2, '0')} <i>/ {artifacts.length}</i></span>
        <button aria-label="Next artifact" onClick={() => setSelected(i => (i + 1) % artifacts.length)}>→</button>
      </div>
    </div>
    <article className="world-artifact" aria-label="Selected artifact">
      <div className="world-artifact-rune" aria-hidden="true">◇</div>
      <div className="world-artifact-content" key={artifact.title}>
        <div className="world-artifact-visual">
          {artifact.image ? <Image src={artifact.image} alt={`${artifact.title} project preview`} fill sizes="(max-width: 767px) 88vw, 48vw" className="object-cover object-top" /> : <div className="world-artifact-inscription" aria-hidden="true"><span>◇</span><p>{artifact.title}</p><small>Source artifact / Desktop & systems</small></div>}
          <span className="world-artifact-corner" aria-hidden="true">{String(selected + 1).padStart(2, '0')}</span>
        </div>
        <div className="world-artifact-description">
          <p className="world-overline">{artifact.type}</p>
          <h3>{artifact.title}</h3>
          <p>{artifact.description}</p>
          <ul aria-label={`${artifact.title} technologies`}>{artifact.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          <div className="world-artifact-links">
            {artifact.visit && <a href={artifact.visit} {...external}>Open creation <span aria-hidden="true">↗</span></a>}
            {artifact.source && <a href={artifact.source} {...external}>Read the source <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
      </div>
    </article>
  </div>;
}

function Abilities() {
  const [selected, setSelected] = useState(0);
  const order = orders[selected];
  return <div className="world-abilities-layout">
    <div className="world-copy">
      <p className="world-overline">The celestial workshop</p>
      <h2>Different powers.<br /><em>One craft.</em></h2>
      <p>Interfaces, application logic, data, and connected systems. Choose a constellation to explore the tools I’ve worked with.</p>
      <div className="world-order-choices" role="group" aria-label="Ability constellations">{orders.map((item, i) => <button key={item.name} aria-pressed={selected === i} onClick={() => setSelected(i)}><span aria-hidden="true">{item.sigil}</span>{item.subtitle}</button>)}</div>
    </div>
    <div className="world-constellation" aria-live="polite">
      <div className="world-constellation-ring" aria-hidden="true" /><div className="world-constellation-ring second" aria-hidden="true" />
      <div className="world-constellation-core"><span>{order.sigil}</span><h3>{order.name}</h3><p>{order.description}</p></div>
      <ul aria-label={order.subtitle}>{order.tools.map((tool, i) => <li key={tool} style={{ '--angle': `${i / order.tools.length * 360}deg`, '--counter-angle': `${-i / order.tools.length * 360}deg` } as CSSProperties}><span>{tool}</span></li>)}</ul>
    </div>
  </div>;
}

function Oaths() {
  const [selected, setSelected] = useState(TimeLineData.length - 1);
  const [expanded, setExpanded] = useState(false);
  const chapter = TimeLineData[selected];
  return <div className="world-oaths-layout">
    <div className="world-copy">
      <p className="world-overline">The person behind the work</p>
      <h2>Still curious.<br /><em>Still becoming.</em></h2>
      <p>I’m Ebuka Duruaku, a software engineer in Lagos, Nigeria. I like understanding the whole thing, from what a person sees to the systems beyond the browser.</p>
      <p>My current focus is going deeper with Rust and backend engineering. Next: a self-hosted backend project to learn deployment, databases, monitoring, and recovery.</p>
      <div className="world-personal-links"><Link href="/lab">The experimental workshop ↗</Link><Link href="/cosmere">A reader’s atlas ↗</Link><Link href="/characters">The character gallery ↗</Link></div>
    </div>
    <div className="world-memory">
      <div className="world-memory-stone" aria-hidden="true"><span>{chapter.year}</span></div>
      <div className="world-memory-copy" aria-live="polite"><p className="world-overline">An inscription from the journey</p><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
      <div className="world-years" role="group" aria-label="Explore my journey">{[...TimeLineData].reverse().map(item => {
        const i = TimeLineData.indexOf(item);
        return <button key={item.year} onClick={() => setSelected(i)} aria-pressed={selected === i} aria-label={`Read chapter: ${item.year}`}><span aria-hidden="true">◇</span><small>{item.year.replace('Around ', '')}</small></button>;
      })}</div>
      <button className="world-record-trigger" aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>{expanded ? 'Close' : 'Read'} the professional record <span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
      {expanded && <div className="world-record">{workExperience.map(item => <article key={item.company}><p>{item.period}</p><h4>{item.company} / {item.role}</h4><p>{item.company === 'D’Accubin' ? 'Refactored legacy code, improved API handling, and implemented React code-splitting and lazy loading. Also worked on OAuth and PKCE authentication across web, React Native, and Expo.' : item.summary}</p><small>{item.technologies.join(' · ')}</small></article>)}</div>}
    </div>
  </div>;
}

export default function RealmJourney() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: root, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', value => { progress.current = value; });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries.find(item => item.isIntersecting);
      if (entry) setActive(destinations.findIndex(destination => destination.id === entry.target.id));
    }, { rootMargin: '-20% 0px -60% 0px' });
    root.current?.querySelectorAll('section.world-chapter').forEach(section => observer.observe(section));
    const destination = destinations.find(item => `#${item.id}` === window.location.hash);
    if (destination) document.getElementById(destination.id)?.scrollIntoView({ behavior: 'instant' });
    return () => observer.disconnect();
  }, []);

  return <main ref={root} className="world-journey" id="realm-journey">
    <RealmCanvas progress={progress} />
    <div className="world-shade" aria-hidden="true" />
    <a href="#realm-archive" className="world-skip">Skip to my work</a>
    <header className="world-header"><a href="#realm-arrival" aria-label="Back to realm arrival" className="world-brand">ed.<span>A WORLDBUILDER’S FIELD NOTES</span></a><span className="world-header-coordinate">LAGOS, EARTH / {new Date().getFullYear()}</span></header>
    <nav className="world-compass" aria-label="Realm destinations">{destinations.map((destination, i) => <a key={destination.id} href={`#${destination.id}`} aria-current={active === i ? 'location' : undefined}><span>{String(i + 1).padStart(2, '0')}</span><i /><span>{destination.name}</span></a>)}</nav>
    <Chapter id="realm-arrival" number="I" title="The Shattered Plains" className="world-arrival">
      <div className="world-copy"><p className="world-overline">Ebuka Duruaku / Software engineer</p><h1>There is always<br /><em>another world</em><br />to build.</h1><p>I build interfaces, applications, and the systems beneath them. This is a journey through my work, told in the language of the worlds I love.</p><a className="world-primary-link" href="#realm-archive">Cross into the archive <span aria-hidden="true">↓</span></a></div>
      <div className="world-scene-note"><span aria-hidden="true">◇</span><p>Stone remembers.<br />Light reveals.</p><small>Scroll to travel through the realm</small></div>
    </Chapter>
    <Chapter id="realm-archive" number="II" title="The Archive"><Archive /></Chapter>
    <Chapter id="realm-orders" number="III" title="The Celestial Workshop"><Abilities /></Chapter>
    <Chapter id="realm-oaths" number="IV" title="The Oathstones"><Oaths /></Chapter>
    <Chapter id="realm-beacon" number="V" title="The Beacon" className="world-final">
      <div className="world-copy"><p className="world-overline">End of the journey / The next beginning</p><h2>A signal across<br /><em>the distance.</em></h2><p>Have a software engineering opportunity or a project in mind? Let’s build something worth using.</p><a className="world-primary-link world-email" href="mailto:Duruakuebuka@gmail.com">Send a spanreed <span aria-hidden="true">↗</span></a><p className="world-address">Duruakuebuka@gmail.com</p><div className="world-contact-links"><a href="https://github.com/D3troit98" {...external}>GitHub ↗</a><a href="https://www.linkedin.com/in/duruaku-ebuka-6b6540137/" {...external}>LinkedIn ↗</a><a href="/documents/Ebuka_Micheal_Duruaku_Resume.pdf" {...external}>Résumé ↗</a></div></div>
      <p className="world-colophon">An independent portfolio inspired by Brandon Sanderson’s Cosmere.<br />© {new Date().getFullYear()} Ebuka Micheal Duruaku · Made with curiosity.</p>
    </Chapter>
    <div className="world-location" aria-hidden="true"><span>ROUTE / {String(active + 1).padStart(2, '0')}</span><p>{destinations[active]?.subtitle}</p><div><motion.i style={{ scaleX: scrollYProgress }} /></div></div>
  </main>;
}
