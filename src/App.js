import './App.css';

function App() {
  const roomCards = [
    {
      name: 'Single Room',
      price: 'From UGX 450,000 / month',
      description: 'Perfect for students who value privacy, focus, and quiet study time.',
      image: '/images/single-room.jpg',
    },
    {
      name: 'Double Room',
      price: 'From UGX 320,000 / person',
      description: 'A balanced option for comfort and affordability with shared space.',
      image: '/images/double-room.jpg',
    },
    {
      name: 'Triple Room',
      price: 'From UGX 250,000 / person',
      description: 'A budget-friendly choice for students who enjoy community living.',
      image: '/images/triple-room.jpg',
    },
  ];

  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <h1>Delight Students Hostel</h1>
          <a href="#contact" className="nav-cta">
            Reserve Now
          </a>
        </nav>

        <div className="hero-content">
          <p className="badge">Kikoni, Near Makerere University</p>
          <h2>Comfortable, Secure, and Fully Furnished Student Living</h2>
          <p>
            Delight Students Hostel offers quality self-contained rooms in a clean and
            modern environment designed to make student life easier.
          </p>
          <a href="#rooms" className="primary-btn">
            View Room Options
          </a>
        </div>
      </header>

      <main>
        <section className="section about">
          <h3>Why Choose Delight</h3>
          <p>
            Our mission is to provide students with accessible, high-quality accommodation
            that combines comfort, safety, and convenience. Every room is maintained to a
            high standard so each stay is worthwhile.
          </p>
          <div className="feature-grid">
            <article>
              <h4>Clean Spaces</h4>
              <p>Fresh, well-maintained rooms with reliable utilities.</p>
            </article>
            <article>
              <h4>Secure Environment</h4>
              <p>Safe and student-friendly residence near campus.</p>
            </article>
            <article>
              <h4>Flexible Choices</h4>
              <p>Single, double, and triple rooms for different budgets.</p>
            </article>
          </div>
        </section>

        <section id="rooms" className="section rooms">
          <h3>Room Options</h3>
          <div className="room-grid">
            {roomCards.map((room) => (
              <article className="room-card" key={room.name}>
                <img
                  src={room.image}
                  alt={room.name}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <div className="room-body">
                  <h4>{room.name}</h4>
                  <p className="price">{room.price}</p>
                  <p>{room.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h3>Book or Ask a Question</h3>
          <p>Reach us quickly for reservations and availability updates.</p>
          <div className="contact-box">
            <a href="tel:0741081048">Phone: 0741081048</a>
            <a href="mailto:dorahnami592@gmail.com">Email: dorahnami592@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Delight Students Hostel - Comfortable student accommodation in Kikoni.</p>
      </footer>
    </div>
  );
}

export default App;
