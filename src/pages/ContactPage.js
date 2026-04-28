import { useState } from 'react';
import { pageImages } from '../data/siteData';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
    <section className="section">
      <h3>Contact and Reservations</h3>
      <p>
        Reach us directly for room availability, booking support, or any information about
        moving into Delight Students Hostel.
      </p>
      <img
        className="section-image"
        src={pageImages.contact}
        alt="Hostel contact and reception area"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

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

      <div className="booking-form-wrap">
        <h3>Send Us a Message</h3>
        <p>Have a question or need more information? Reach out and we will reply promptly.</p>

        {submitted ? (
          <div className="form-success">
            <h4>Thank you, {formData.name || 'there'}!</h4>
            <p>Your message has been sent. We will get back to you as soon as possible.</p>
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
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                required
              />
            </label>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactPage;
