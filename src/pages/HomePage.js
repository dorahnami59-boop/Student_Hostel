import { Link } from 'react-router-dom';
import { amenities, bookingSteps, features } from '../data/siteData';

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
      </section>

      <section className="section">
        <h3>Why Choose Delight</h3>
        <p>
          Our mission is to provide students with accessible, high-quality accommodation
          that combines comfort, safety, and convenience.
        </p>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
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
