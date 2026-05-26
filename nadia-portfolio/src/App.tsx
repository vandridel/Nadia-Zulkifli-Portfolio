import { useEffect } from 'react'
import './index.css'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleFaq = (item: Element) => {
    const isActive = item.classList.contains('active')
    document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('active'))
    if (!isActive) item.classList.add('active')
  }

  const services = [
    { icon: '💄', title: 'Bridal Makeup', desc: 'Revolusi look anda di hari bahagia. Full glam dari A-Z untuk pengantin perempuan — trial available.' },
    { icon: '💍', title: 'Engagement Makeup', desc: 'Moment penting deserve lebih. Soft glam yang bikin anda shimmer di acara pertunangan.' },
    { icon: '📸', title: 'Photoshoot & Event', desc: 'Depan kamera atau di majlis — saya adjust look supaya anda nampak terbaik di setiap event.' },
    { icon: '💒', title: 'Package Akad + Sanding', desc: 'Pakej kombo untuk dua-dua acara — jimat dan lengkap. Sesuai untuk pengantin yang nak satu vendor.' },
    { icon: '✈️', title: 'Travel Seluruh Selangor & KL', desc: 'Saya datang ke venue anda. Travel fee sudah termasuk dalam quotation — tiada hidden cost.' },
  ]

  const faqs = [
    { q: 'Berapa harga bridal makeup?', a: 'Harga bergantung pada pakej yang dipilih. Bridal starts dari RM500 Inclusive trial. Package akad + sanding ada diskaun kombo.' },
    { q: 'Travel fee charge sebelum?', a: 'Travel fee untuk kawasan Selangor & KL sudah included dalam quotation. Area luar mungkin ada tambahan kecil.' },
    { q: 'Trial included atau perlu bayar extra?', a: 'Trial tersedia — saya sarankan trial supaya result hari H exceed expectation. Trial fee berasingan.' },
    { q: 'Berapa jam sebelum majlis saya boleh book?', a: 'Idealmente 2-4 bulan sebelum tarikh. Untuktarikh popular (peak season), saya sarankan 6 bulan advance.' },
    { q: 'Kalau saya tak pernah makeup平日 boleh ke?', a: 'Tentu boleh! Saya akan cadang style yang sesuai untuk anda. Bincang masa session — semua boleh adjust.' },
  ]

  return (
    <div className="app">
      {/* NAV */}
      <nav>
        <div className="container nav-container">
          <div className="nav-logo">nadia<span>.glam</span></div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Servis</a></li>
            <li><a href="#process">Proses</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="https://wa.me/60198887766" target="_blank" className="nav-cta">Tempah Sekarang</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="container" style={{ paddingTop: 120, position: 'relative', zIndex: 1 }}>
          <div className="hero-badge reveal">✦ Freelance Makeup Artist — Selangor & KL</div>
          <h1 className="reveal reveal-delay-1">
            Glow Yang <span className="highlight">Bukan Cabaran</span><br />
            — Ianya Hak Anda.
          </h1>
          <p className="hero-sub reveal reveal-delay-2">
            Freelance makeup artist untuk bridal, engagement & event. SayaUBah诧异参照 jadi kenyataan —
            supaya andarasakan yang paling cantik di momento yang matter.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="https://wa.me/60198887766" target="_blank" className="btn-primary">📅 Tempah Temu Janji</a>
            <a href="#services" className="btn-ghost">Lihat Servis →</a>
          </div>
          <div className="hero-stats reveal reveal-delay-4">
            <div><div className="hero-stat-num">200+</div><div className="hero-stat-label">Clients Served</div></div>
            <div><div className="hero-stat-num">5+</div><div className="hero-stat-label">Tahun Pengalaman</div></div>
            <div><div className="hero-stat-num">100%</div><div className="hero-stat-label">Happy Clients</div></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap reveal">
              <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <rect width="400" height="480" rx="24" fill="url(#abg)" />
                <defs>
                  <linearGradient id="abg" x1="0" y1="0" x2="400" y2="480" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="#C026D3" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                {/* Makeup brush icons */}
                <circle cx="200" cy="180" r="60" fill="rgba(255,107,157,0.2)" stroke="rgba(255,107,157,0.5)" strokeWidth="1.5" />
                <circle cx="200" cy="175" r="38" fill="rgba(255,107,157,0.15)" stroke="#f472b6" strokeWidth="1.5" />
                {/* Dress/ gown */}
                <path d="M160 310 Q200 270 240 310 L255 390 Q200 410 145 390 Z" fill="rgba(192,38,211,0.2)" stroke="#f472b6" strokeWidth="1.5" />
                {/* Lipstick / beauty */}
                <circle cx="140" cy="260" r="18" fill="rgba(255,107,157,0.15)" stroke="#f472b6" strokeWidth="1.5" />
                <path d="M140 242 L140 235" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
                <circle cx="260" cy="260" r="18" fill="rgba(192,38,211,0.15)" stroke="#e879f9" strokeWidth="1.5" />
                <path d="M260 242 L260 235" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" />
                {/* Stars */}
                <path d="M80 100 L83 107 L90 107 L84 112 L87 120 L80 115 L73 120 L76 112 L70 107 L77 107 Z" fill="#f472b6" opacity="0.7" />
                <path d="M320 80 L322 85 L327 85 L323 89 L325 95 L320 91 L315 95 L317 89 L313 85 L318 85 Z" fill="#e879f9" opacity="0.6" />
                <path d="M300 380 L302 385 L307 385 L303 389 L305 395 L300 391 L295 395 L297 389 L293 385 L298 385 Z" fill="#f472b6" opacity="0.5" />
              </svg>
            </div>
            <div>
              <div className="section-tag reveal">About</div>
              <h2 className="section-title reveal reveal-delay-1">Saya Nadia Zulkifli,<br />Makeup Artist Anda.</h2>
              <p className="about-text lead reveal reveal-delay-2">
                Passion saya adalah melihat setiap perempuan merasa cantik dan percaya diri di hari yang especiales.
                Sebagai freelance MUA dengan pengalaman lebih 5 tahun, saya menggabungkan teknik profesional
                dengan senibit untuk memahami apa yang ANDA mau.
              </p>
              <p className="about-text reveal reveal-delay-3">
                Dari bridal sehinggalah event casual — setiap look yang saya hasilkan adalah bespoke.
                Saya tidak hanya makeup, sayaUBah诧异参照 jadi kenyataan.
              </p>
              <div className="about-highlights reveal reveal-delay-4">
                <div className="about-highlight"><span className="check">✓</span> Freelance Berdaftar</div>
                <div className="about-highlight"><span className="check">✓</span> Selangor & KL</div>
                <div className="about-highlight"><span className="check">✓</span> Travel Available</div>
                <div className="about-highlight"><span className="check">✓</span> Trial Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-tag reveal">Servis</div>
          <h2 className="section-title reveal reveal-delay-1">Servis yang saya tawarkan</h2>
          <p className="section-sub reveal reveal-delay-2">Setiap perkhidmatan direka untuk memberikan yang terbaik untuk setiap majlis.</p>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`service-card reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="container">
          <div className="section-tag reveal">Mengapa Saya?</div>
          <h2 className="section-title reveal reveal-delay-1">Bukan sekadar MUA —<br />tapi partner anda.</h2>
          <div className="why-grid">
            {[
              { n: '01', t: 'Glow Autentik', d: 'Technique lapisan basal untuk kulit yang shine from within — bukan makeup berat, tapi maximally radiant.' },
              { n: '02', t: 'Produk Premium', d: 'Saya guna jenama premium — Mac, Nars, Huda Beauty. Sesuai untuk semua type kulit.' },
              { n: '03', t: 'Long-Lasting Wear', d: 'Waterproof dan transfer-resistant. Dari morning akad sehingga night do. Settle all day dengan confidence.' },
              { n: '04', t: 'Comfort-First', d: 'Makeup yang rasa ringan dan tak menyumbat pores. Kulit rasa selesa selama berjam-jam.' },
            ].map((w, i) => (
              <div key={i} className={`why-item reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="why-num">{w.n}</div>
                <div className="why-title">{w.t}</div>
                <div className="why-desc">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="section-tag reveal">Proses</div>
          <h2 className="section-title reveal reveal-delay-1">Macam mana kita mula</h2>
          <div className="process-timeline">
            {[
              { n: '1', t: 'WhatsApp saya', d: 'Hantar mesej dengan tarikh majlis dan lokasi. Saya respond dalam 24 jam.' },
              { n: '2', t: 'Consultation', d: 'Bincang style, produk, dan apa yang anda mau. Saya bagi recommend terbaik.' },
              { n: '3', t: 'Trial (optional)', d: 'Nak try sebelum hari H? Book trial session — separados dari pakej utama.' },
              { n: '4', t: 'Hari H', d: 'Saya sampai awal 1.5 jam sebelum acara. Provides touch-up kit untuk sebarang ajustes.' },
            ].map((p, i) => (
              <div key={i} className={`process-step reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="process-step-num">{p.n}</div>
                <div className="process-title">{p.t}</div>
                <div className="process-desc">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-tag reveal">FAQ</div>
          <h2 className="section-title reveal reveal-delay-1">Soalan yang sering ditanya</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="faq-question" onClick={() => {
                  const els = document.querySelectorAll('.faq-item')
                  if (els[i]) toggleFaq(els[i])
                }}>
                  {f.q}
                  <div className="faq-toggle">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="container">
          <div className="cta-box reveal">
            <div className="section-tag">Jom Start</div>
            <h2 className="cta-title">Ready untuk<br /><span className="highlight">Cantik最大化?</span></h2>
            <p className="cta-sub reveal reveal-delay-2">
              Jangan tunggu sampai last minute. Book saya awal — supaya tarikh popular anda pasti dapat.
            </p>
            <div className="cta-actions">
              <a href="https://wa.me/60198887766" target="_blank" className="btn-primary">📅 Tempah Temu Janji Sekarang</a>
            </div>
            <div className="cta-divider"><span>atau</span></div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              Instagram: <a href="https://instagram.com/nadia.glam" target="_blank" style={{ color: 'var(--accent-light)' }}>instagram.com/nadia.glam</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p style={{ marginBottom: 8 }}>nadia.glam — Freelance Makeup Artist, Selangor & KL</p>
          <p>
            <a href="https://instagram.com/nadia.glam" target="_blank">instagram.com/nadia.glam</a>
            {' · '}
            <a href="https://wa.me/60198887766" target="_blank">WhatsApp</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
