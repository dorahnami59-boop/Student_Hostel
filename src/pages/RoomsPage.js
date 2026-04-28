import { useState } from 'react';
import { Link } from 'react-router-dom';
import { roomCards } from '../data/siteData';

function RoomsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    moveInDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section">
        <h3>Room Options</h3>
        <p>
          Choose the room type that best matches your comfort level, privacy preference,
          and monthly budget.
        </p>
        <div className="room-grid">
          {roomCards.map((room) => (
            <article className="room-card" key={room.name}>
              <img
                src={room.image}
                alt={room.name}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <div className="room-body">
                <h4>{room.name}</h4>
                <p className="price">{room.price}</p>
                <p>{room.description}</p>
                <Link to="/contact" className="card-btn">
                  Inquire Now
                </Link>
                <a href="tel:0741081048" className="card-btn card-btn-call">
                  Call Now
                </a>
                <a
                  href="https://wa.me/256741081048?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20room%20at%20Delight%20Students%20Hostel."
                  className="card-btn card-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Before You Reserve</h3>
        <div className="feature-grid">
          <article>
            <h4>Room Availability</h4>
            <p>
              Availability changes quickly during semester opening periods. Contact us
              early to secure your preferred option.
            </p>
          </article>
          <article>
            <h4>Viewing and Confirmation</h4>
            <p>
              You can contact us to request current photos, details, and booking guidance
              before check-in.
            </p>
          </article>
          <article>
            <h4>Need Help Choosing?</h4>
            <p>
              We can recommend the best room type based on your budget and desired level
              of privacy.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="booking-form-wrap">
          <h3>Book a Room</h3>
          <p>Fill in the form below and we will get back to you within 24 hours.</p>

          {submitted ? (
            <div className="form-success">
              <h4>Thank you, {formData.name || 'there'}!</h4>
              <p>Your booking request has been received. We will contact you shortly to confirm availability.</p>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Preferred Room
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select room type</option>
                    <option value="Single">Single Room</option>
                    <option value="Double">Double Room</option>
                    <option value="Triple">Triple Room</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>
                  Expected Move-in Date
                  <input
                    type="date"
                    name="moveInDate"
                    value={formData.moveInDate}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Additional Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or questions..."
                  rows="4"
                />
              </label>

              <button type="submit" className="primary-btn">
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
