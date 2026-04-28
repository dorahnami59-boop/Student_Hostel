import { Link } from 'react-router-dom';
import { amenities, bookingSteps, faqItems, features, pageImages } from '../data/siteData';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="badge">Kikoni, Near Makerere University</p>
          <h2>Comfortable, Secure, and Fully Furnished Student Living</h2>
          <p>
            Delight Students Hostel offers quality self-contained rooms in a clean and
            modern environment designed to make student life easier.
          </p>
          <Link to="/rooms" className="primary-btn">
            View Room Options
          </Link>
        </div>
        <img
          className="hero-visual"
          src={pageImages.home}
          alt="Delight Students Hostel main view"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </section>

      <section className="section intro-section">
        <h1 className="hostel-name">DELIGHT STUDENTS HOSTEL</h1>
        <p className="hostel-intro">
          Established in 2026, we provide housing for 150+ Makerere University students
          every semester. It is a safe, affordable student accommodation located in Kikoni —
          a five-minute walk from Makerere University Western Gate.
        </p>
        <div className="intro-contact">
          <p>📍 Plot 15, Kikoni Road</p>
          <a
            href="https://wa.me/256741081048?text=Hello%2C%20I%20would%20like%20more%20information%20about%20Delight%20Students%20Hostel."
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp: 0741081048
          </a>
        </div>
      </section>

      <section className="section why-us-section">
        <h3>Why Choose Us</h3>
        <div className="why-us-grid">
          <article>
            <span className="why-icon">🚶</span>
            <h4>Walkable Distance</h4>
            <p>Short walk to Makerere University</p>
          </article>
          <article>
            <span className="why-icon">📶</span>
            <h4>Free WiFi</h4>
            <p>FREE WiFi and study rooms</p>
          </article>
          <article>
            <span className="why-icon">🛡️</span>
            <h4>24/7 Security</h4>
            <p>Security + CCTV cameras</p>
          </article>
          <article>
            <span className="why-icon">💰</span>
            <h4>Affordable Prices</h4>
            <p>Budget-friendly student rates</p>
          </article>
          <article>
            <span className="why-icon">🤝</span>
            <h4>Friendly Management</h4>
            <p>Helpful and responsive staff</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h3>Popular Amenities</h3>
        <div className="feature-grid">
          {amenities.map((item) => (
            <article key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Hostel Gallery</h3>
        <div className="image-grid">
          {pageImages.gallery.map((image) => (
            <img
              key={image}
              src={image}
              alt="Hostel environment"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <h3>Frequently Asked Questions</h3>
        <p>Quick answers to common questions about staying at Delight Students Hostel.</p>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <details className="faq-card" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section callout">
        <h3>Simple Booking Process</h3>
        <ol className="contact-list">
          {bookingSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="cta-row">
          <Link to="/contact" className="primary-btn">
            Contact for Availability
          </Link>
          <Link to="/rooms" className="secondary-btn">
            Compare Room Types
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
