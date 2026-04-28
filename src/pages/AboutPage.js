import { hostelRules, hostelValues, pageImages, teamMembers } from '../data/siteData';

function AboutPage() {
  return (
    <>
      <section className="section">
        <h3>About Delight Students Hostel</h3>
        <img
          className="section-image"
          src={pageImages.about}
          alt="Delight Students Hostel building"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <p>
          Delight Students Hostel is a modern student accommodation in Kikoni near
          Makerere University, dedicated to providing comfortable, clean, and secure
          living spaces.
        </p>
        <p>
          We focus on quality self-contained housing with spacious, fully furnished rooms
          so every student stays in a fresh and practical environment throughout the term.
        </p>
      </section>

      <section className="section">
        <h3>Our Mission</h3>
        <p>
          To make quality student accommodation accessible by combining affordability,
          cleanliness, and safety in one dependable place.
        </p>
        <div className="feature-grid">
          {hostelValues.map((value) => (
            <article key={value.title}>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Who We Serve</h3>
        <p>
          We welcome students looking for a quiet and organized hostel experience near
          campus, whether you are a first-year student or returning for a new semester.
        </p>
      </section>

      <section className="section rules-section">
        <h3>Rules & Regulations</h3>
        <p>To keep Delight Students Hostel safe and comfortable for everyone.</p>
        <div className="rules-list">
          {hostelRules.map((rule) => (
            <div className="rule-item" key={rule}>
              <span className="rule-icon">✓</span>
              <p>{rule}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section team-section">
        <h3>Meet The Team — Group 14</h3>
        <p>The talented people behind this project.</p>

        <div className="team-leader">
          <div className="avatar avatar-leader">{teamMembers[0].initials}</div>
          <h4>{teamMembers[0].name}</h4>
          <span className="leader-badge leader-badge-featured">Group Leader</span>
        </div>

        <div className="team-grid">
          {teamMembers.slice(1).map((member) => (
            <div className="team-card" key={member.name}>
              <div className="avatar">{member.initials}</div>
              <p className="member-name">{member.name}</p>
              {member.isLeader && <span className="leader-badge">Group Leader</span>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
