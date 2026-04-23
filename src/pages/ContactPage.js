function ContactPage() {
  return (
    <section className="section">
      <h3>Contact and Reservations</h3>
      <p>
        Reach us directly for room availability, booking support, or any information about
        moving into Delight Students Hostel.
      </p>

      <div className="contact-grid">
        <div className="contact-box">
          <h4>Get In Touch</h4>
          <a href="tel:0741081048">Phone: 0741081048</a>
          <a href="mailto:dorahnami592@gmail.com">Email: dorahnami592@gmail.com</a>
          <p>Location: Kikoni, near Makerere University, Kampala</p>
        </div>

        <div className="contact-box">
          <h4>Office Hours</h4>
          <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
          <p>Sunday: 10:00 AM - 4:00 PM</p>
          <p>Urgent calls are handled outside office hours.</p>
        </div>

        <div className="contact-box">
          <h4>Booking Requirements</h4>
          <ul className="contact-list">
            <li>Preferred room type (Single, Double, or Triple)</li>
            <li>Expected move-in date</li>
            <li>Student name and active phone contact</li>
            <li>Parent or guardian contact (optional)</li>
          </ul>
        </div>

        <div className="contact-box">
          <h4>How Booking Works</h4>
          <ol className="contact-list">
            <li>Contact us by phone or email.</li>
            <li>Confirm available room options and pricing.</li>
            <li>Reserve your preferred room.</li>
            <li>Receive final check-in guidance.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
