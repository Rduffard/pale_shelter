import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <p className="contact-page__eyebrow">Get In Touch</p>

        <h1 className="contact-page__title">Contact</h1>

        <p className="contact-page__subtitle">
          For booking, merch questions, collaborations, or general inquiries,
          reach out and we’ll get back to you.
        </p>

        <div className="contact-page__panel">
          <div className="contact-page__item">
            <span className="contact-page__label">Booking / Contact</span>
            <a
              className="contact-page__value contact-page__value--link"
              href="mailto:paleshelterband@yahoo.com"
            >
              paleshelterband@yahoo.com
            </a>
          </div>

          <div className="contact-page__item">
            <span className="contact-page__label">Band</span>
            <span className="contact-page__value">Pale Shelter</span>
          </div>

          <div className="contact-page__item">
            <span className="contact-page__label">Response</span>
            <span className="contact-page__value">
              We’ll respond as soon as we can.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
