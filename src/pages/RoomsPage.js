import { roomCards } from '../data/siteData';

function RoomsPage() {
  return (
    <section className="section">
      <h3>Room Options</h3>
      <p>Choose the room type that fits your comfort and budget.</p>
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
  );
}

export default RoomsPage;
