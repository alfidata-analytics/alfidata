"use client";

import { useState } from "react";

const services = [
  { icon: "↗", title: "Data Analytics", text: "Turn raw business data into clear trends, patterns and insights that guide better decisions." },
  { icon: "▥", title: "Power BI & Reporting", text: "Interactive dashboards and reports that keep your most important KPIs visible and useful." },
  { icon: "⌘", title: "Data Management", text: "Practical guidance to organise, structure and manage your data accurately and efficiently." },
  { icon: "✦", title: "Strategic Consulting", text: "Move from numbers to action with recommendations grounded in evidence and your business goals." },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <main>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="logo" href="#top" onClick={close}>Alfidata<span>.</span></a>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <div className={`nav-links ${open ? "open" : ""}`}>
            <a href="#about" onClick={close}>About</a>
            <a href="#services" onClick={close}>Services</a>
            <a href="#training" onClick={close}>Training</a>
            <a href="#team" onClick={close}>Team</a>
            <a href="#contact" className="button button-small" onClick={close}>Contact us</a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Papua New Guinea&apos;s data analytics partner</div>
            <h1>Make your data<br />make <em>sense.</em></h1>
            <p>We help organisations transform complex data into practical insights, powerful dashboards and confident business decisions.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Start a conversation <span>↗</span></a>
              <a className="button button-ghost" href="#services">Explore our services</a>
            </div>
            <div className="trust-row">
              <div><strong>PNG</strong><span>Local expertise</span></div>
              <div><strong>100%</strong><span>Client focused</span></div>
              <div><strong>2024</strong><span>Officially launched</span></div>
            </div>
          </div>

          <div className="dashboard" aria-label="Sample analytics dashboard illustration">
            <div className="dash-top"><div><small>Business overview</small><strong>Performance dashboard</strong></div><span className="live"><i /> Live</span></div>
            <div className="kpis">
              <div><small>Revenue</small><strong>K 248K</strong><span>↑ 12.4%</span></div>
              <div><small>Customers</small><strong>1,284</strong><span>↑ 8.1%</span></div>
              <div><small>Target</small><strong>92%</strong><span>On track</span></div>
            </div>
            <div className="chart-card">
              <div className="chart-title"><span>Monthly performance</span><small>Jan — Jun</small></div>
              <div className="chart">
                <span className="gridline g1"/><span className="gridline g2"/><span className="gridline g3"/>
                <svg viewBox="0 0 500 175" role="img" aria-label="Upward performance trend"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7c3aed" stopOpacity=".28"/><stop offset="1" stopColor="#7c3aed" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0,140 C45,130 68,100 112,110 S180,90 220,96 S290,50 332,67 S410,25 500,16 L500,175 L0,175Z"/><path className="line" d="M0,140 C45,130 68,100 112,110 S180,90 220,96 S290,50 332,67 S410,25 500,16"/></svg>
              </div>
            </div>
            <div className="mini-row"><div><i className="donut"/><span><small>Completion</small><strong>78%</strong></span></div><div className="bars"><i/><i/><i/><i/><i/><i/></div></div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="shell about-grid">
          <div><div className="section-tag">Who we are</div><h2>Local understanding.<br/><span>Global standards.</span></h2></div>
          <div className="about-copy"><p className="lead">Alfidata Analytics is a Papua New Guinea-based data analytics service provider helping businesses unlock the value already sitting in their data.</p><p>Founded in January 2023 and officially launched in December 2024, we bridge the gap between raw numbers and decisions people can act on. Every solution is shaped around your organisation, your people and your goals.</p><div className="ticks"><span>✓ PNG local expertise</span><span>✓ Custom data solutions</span><span>✓ Business intelligence focus</span></div></div>
        </div>
      </section>

      <section id="services" className="section light-section">
        <div className="shell">
          <div className="section-head"><div><div className="section-tag">What we do</div><h2>Clarity at every stage<br/>of your data journey.</h2></div><p>From scattered spreadsheets to decision-ready dashboards, we help you build a clearer picture of your business.</p></div>
          <div className="service-grid">{services.map((service, i) => <article className="service-card" key={service.title}><div className="service-number">0{i + 1}</div><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss your needs <span>→</span></a></article>)}</div>
        </div>
      </section>

      <section id="training" className="section training">
        <div className="shell training-grid">
          <div className="training-copy"><div className="section-tag light-tag">Learn with Alfidata</div><h2>Build practical<br/><span>Power BI skills.</span></h2><p>Learn how to clean, model, analyse and visualise data through flexible, self-paced online training designed for real workplace use.</p><ul><li><span>01</span>Learn at your own pace</li><li><span>02</span>Practical, business-focused lessons</li><li><span>03</span>Support from a PNG data professional</li></ul><a className="button" href="mailto:alfidata.analytics.pg@gmail.com?subject=Power%20BI%20Training%20Enquiry">Enquire about training <span>↗</span></a></div>
          <div className="training-card"><div className="card-label">Online learning</div><div className="power-mark"><b>P</b><span>Power BI</span></div><h3>From data to dashboard</h3><p>A clear pathway for professionals who want to confidently create useful business reports.</p><div className="course-progress"><span><i/>Prepare data</span><span><i/>Build models</span><span><i/>Create reports</span><span><i/>Share insights</span></div></div>
        </div>
      </section>

      <section id="team" className="section team">
        <div className="shell team-grid"><div className="portrait-wrap"><div className="portrait-bg"/><img src="https://www.alfidata.tech/alfidata/assets/fiona-profile.png" alt="Fiona Umpa, Founder and CEO of Alfidata Analytics"/></div><div className="team-copy"><div className="section-tag">Leadership</div><blockquote>“Data should not feel complicated. It should help people see what matters and decide what to do next.”</blockquote><h3>Fiona Umpa</h3><p className="role">Founder & CEO</p><p>Fiona is a Papua New Guinean data professional passionate about business intelligence, data visualisation and helping Pacific organisations make stronger evidence-based decisions.</p><a className="text-link" href="https://www.linkedin.com/in/fionaumpa/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a></div></div>
      </section>

      <section id="contact" className="contact"><div className="shell contact-inner"><div><div className="section-tag light-tag">Let&apos;s work together</div><h2>Ready to see what<br/>your data can do?</h2></div><div><p>Tell us what you&apos;re trying to understand, improve or build. We&apos;ll help you find the clearest way forward.</p><a className="button button-light" href="mailto:alfidata.analytics.pg@gmail.com">alfidata.analytics.pg@gmail.com <span>↗</span></a></div></div></section>

      <footer><div className="shell footer-grid"><div><a className="logo logo-light" href="#top">Alfidata<span>.</span></a><p>Data analytics, reporting and training<br/>for smarter business decisions.</p></div><div><strong>Explore</strong><a href="#about">About</a><a href="#services">Services</a><a href="#training">Training</a></div><div><strong>Connect</strong><a href="https://www.facebook.com/AlfidataAnalytics" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.linkedin.com/in/fionaumpa/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.youtube.com/@alfidataanalytics" target="_blank" rel="noreferrer">YouTube</a></div></div><div className="shell footer-bottom"><span>© 2026 Alfidata Analytics. All rights reserved.</span><span>Papua New Guinea</span></div></footer>
    </main>
  );
}
