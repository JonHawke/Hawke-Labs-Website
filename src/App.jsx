import { useState } from 'react'
import Logo from './components/Logo.jsx'
import { services, projects, CONTACT_EMAIL } from './data.js'

export default function App() {
  const [filter, setFilter] = useState('All')
  const shown = projects.filter(p => filter === 'All' || p.type === filter)
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="brand"><Logo size={34} /><span>HAWKE <b>LABS</b></span></a>
        <nav>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-sm">Get in touch</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-logo"><Logo size={140} /></div>
          <p className="eyebrow">Independent app &amp; game studio</p>
          <h1>We build apps &amp; games<br /><span className="grad">people love to use.</span></h1>
          <p className="lead">Hawke Labs designs and develops sharp, modern mobile apps, web tools and games, from idea to launch.</p>
          <div className="cta">
            <a href="#projects" className="btn">See our work</a>
            <a href="#services" className="btn btn-ghost">What we do</a>
          </div>
        </section>

        <section id="services" className="section">
          <p className="eyebrow">Services</p>
          <h2>What we do</h2>
          <div className="grid">
            {services.map(s => (
              <article key={s.title} className="card">
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">Projects</p>
          <h2>Our work</h2>
          <div className="filters">
            {['All', 'App', 'Game'].map(f => (
              <button key={f} className={f === filter ? 'chip active' : 'chip'} onClick={() => setFilter(f)}>{f === 'All' ? 'All' : f + 's'}</button>
            ))}
          </div>
          <div className="grid">
            {shown.map(p => (
              <a key={p.name} href={p.link} className="card project">
                <div className="thumb" style={{ '--h': p.hue }}><span>{p.name[0]}</span></div>
                <div className="meta"><span className="pill">{p.type}</span><span className="status">{p.status}</span></div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="section banner">
          <h2>Have an idea?</h2>
          <p>Let's build something great together.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn">{CONTACT_EMAIL}</a>
        </section>
      </main>

      <footer className="footer">
        <span className="brand small"><Logo size={22} /> HAWKE <b>LABS</b></span>
        <span>© {new Date().getFullYear()} Hawke Labs. All rights reserved.</span>
      </footer>
    </>
  )
}
