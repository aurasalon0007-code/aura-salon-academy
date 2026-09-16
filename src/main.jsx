import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const WA = 'https://wa.me/917208328842'
const IG = 'https://www.instagram.com/aurasalon_15/'
const MAP = 'https://www.google.com/maps/search/?api=1&query=Asmita%20Meghna%20Mira%20Road%20East%20401107'

const images = [
  { src: 'public/images/salon-1.jpg', alt: 'AURA salon interior' },
  { src: 'public/images/salon-2.jpg', alt: 'AURA styling area' },
  { src: 'public/images/salon-3.jpg', alt: 'AURA salon entrance' },
  { src: 'public/images/salon-4.jpg', alt: 'AURA shampoo area' },
  { src: 'public/images/salon-5.jpg', alt: 'AURA treatment room' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>AURA</a>
          <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Services', 'Gallery', 'Academy', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="btn primary nav-book" href={WA} target="_blank" rel="noreferrer">Book Now</a>
          </div>
          <a className="btn primary desktop-book" href={WA} target="_blank" rel="noreferrer">Book Now</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow">Beauty • Hair • Makeup • Nails</div>
            <h1>AURA</h1>
            <h2>SALON &amp; ACADEMY</h2>
            <p>Where beauty meets artistry. A premium salon experience in Mira Road East, designed around elegant styling, personalised care and professional beauty education.</p>
            <div className="btns">
              <a className="btn primary" href={WA} target="_blank" rel="noreferrer">Book an Appointment</a>
              <a className="btn" href="#gallery">View Our Salon</a>
            </div>
          </div>
          <div className="hero-img"><img src={images[0].src} alt={images[0].alt} /></div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <SectionHead kicker="The AURA experience" title="Luxury, warmth & artistry" text="A dark, gold-accented identity inspired by the salon itself — elegant, welcoming and made to feel special from the first visit." />
          <div className="about">
            <img src={images[1].src} alt={images[1].alt} />
            <div>
              <h3>Beauty designed around you.</h3>
              <p>AURA Salon &amp; Academy brings together beauty, hair, makeup and nail services in a sophisticated environment. Our space is crafted for comfort, confidence and attention to detail.</p>
              <div className="features">
                <Feature title="Premium space" text="Black, gold and warm lighting for a refined experience." />
                <Feature title="Personal care" text="Service focused on your style, occasion and comfort." />
                <Feature title="Academy" text="Professional beauty learning alongside salon services." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <SectionHead kicker="What we offer" title="Our services" text="Explore the AURA menu and contact us for current service availability and pricing." />
          <div className="service-grid">
            <Service title="Hair" text="Hair styling, cuts, treatments, colour and occasion-ready looks." />
            <Service title="Makeup" text="Makeup looks for events, celebrations, photoshoots and special occasions." />
            <Service title="Nails" text="Elegant nail care and finishing for everyday beauty or occasions." />
            <Service title="Beauty" text="Beauty and skincare services in a comfortable, premium setting." />
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <SectionHead kicker="Inside AURA" title="Our salon" text="Real views of the AURA environment, styling stations, treatment space and entrance." />
          <div className="gallery">
            {images.map((image, index) => <figure key={image.src} className={`gallery-item item-${index + 1}`}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}
          </div>
        </div>
      </section>

      <section className="academy" id="academy">
        <div className="container">
          <div className="academy-box">
            <div className="kicker">Learn • Create • Grow</div>
            <h2>AURA Academy</h2>
            <p>Build your beauty skills in a professional salon environment. Contact AURA for current course offerings, schedules and admissions.</p>
            <div className="btns center"><a className="btn primary" href={`${WA}?text=Hi%20AURA%20Salon%20%26%20Academy%2C%20I%20want%20to%20know%20about%20the%20academy%20courses.`} target="_blank" rel="noreferrer">Ask About Courses</a></div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contact">
          <div>
            <div className="kicker">Visit AURA</div>
            <h2>Let's create your look.</h2>
            <p>Ready for your next salon appointment? Message us on WhatsApp or visit us in Mira Road East.</p>
            <ul>
              <li><strong>Phone / WhatsApp:</strong> +91 72083 28842</li>
              <li><strong>Instagram:</strong> @aurasalon_15</li>
              <li><strong>Address:</strong> Shop No. 001/A-Wing, Asmita Meghna, Mira Road, Near Asmita Club, Sector 11, Mira Road East, Mira Bhayandar, Maharashtra 401107</li>
            </ul>
            <div className="btns">
              <a className="btn primary" href={WA} target="_blank" rel="noreferrer">WhatsApp Us</a>
              <a className="btn" href={IG} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className="map">
            <div>
              <strong>Mira Road East</strong>
              <p>Shop No. 001/A-Wing, Asmita Meghna<br />Near Asmita Club, Sector 11<br />Maharashtra 401107</p>
              <a className="btn" href={MAP} target="_blank" rel="noreferrer">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2026 AURA SALON &amp; ACADEMY • BEAUTY | HAIR | MAKEUP | NAILS</footer>
    </>
  )
}

function SectionHead({ kicker, title, text }) {
  return <div className="section-head"><div className="kicker">{kicker}</div><h2>{title}</h2><p>{text}</p></div>
}
function Feature({ title, text }) {
  return <div className="feature"><strong>{title}</strong><span>{text}</span></div>
}
function Service({ title, text }) {
  return <div className="service"><h3>{title}</h3><p>{text}</p></div>
}

createRoot(document.getElementById('root')).render(<App />)
