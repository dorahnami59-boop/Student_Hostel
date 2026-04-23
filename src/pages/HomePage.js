import { Link } from 'react-router-dom';
import { features } from '../data/siteData';

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
    </>
  );
}

export default HomePage;
