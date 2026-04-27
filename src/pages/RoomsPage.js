import { Link } from 'react-router-dom';
import { roomCards } from '../data/siteData';

function RoomsPage() {
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
        <div className="cta-row">
          <Link to="/contact" className="primary-btn">
            Reserve a Room
          </Link>
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
