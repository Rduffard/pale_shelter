import "./About.css";

const quickFacts = [
  { label: "Location", value: "New Orleans, Louisiana" },
  { label: "Formed", value: "2018" },
  { label: "Genre", value: "Alternative Rock / Post-Emo / Rock" },
  { label: "Debut Album", value: "AMNESTY" },
];

const socials = [
  {
    label: "Spotify",
    url: "https://open.spotify.com/artist/2rrl6d6AQ73RanJg4lE76W",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/palesheltermusic",
  },
  // add these later if you want
  // { label: "Instagram", url: "https://instagram.com/..." },
  // { label: "Bandcamp", url: "https://paleshelter2.bandcamp.com" },
];

export default function Epk() {
  return (
    <main className="epk">
      <section className="epk__hero">
        <div className="epk__overlay" />
        <div className="epk__hero-content">
          <p className="epk__eyebrow">Electronic Press Kit</p>
          <h1 className="epk__title">Pale Shelter</h1>
          <p className="epk__tagline">
            New Orleans alternative rock with post-emo tension, atmosphere, and
            emotional weight.
          </p>

          <div className="epk__hero-actions">
            <a
              className="epk__button epk__button--primary"
              href="https://open.spotify.com/artist/2rrl6d6AQ73RanJg4lE76W"
              target="_blank"
              rel="noreferrer"
            >
              Listen on Spotify
            </a>
            <a className="epk__button" href="mailto:paleshelterband@yahoo.com">
              Booking / Press
            </a>
          </div>
        </div>
      </section>

      <section className="epk__section epk__section--intro">
        <div className="epk__grid epk__grid--intro">
          <article className="epk__card">
            <p className="epk__kicker">One-Line Bio</p>
            <p className="epk__highlight">
              Pale Shelter is a New Orleans alternative rock band blending
              post-emo intensity, atmospheric guitar work, and emotionally
              driven songwriting.
            </p>
          </article>

          <article className="epk__card">
            <p className="epk__kicker">Quick Facts</p>
            <dl className="epk__facts">
              {quickFacts.map((fact) => (
                <div className="epk__fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section className="epk__section">
        <div className="epk__grid epk__grid--main">
          <article className="epk__panel">
            <p className="epk__kicker">Band Bio</p>
            <h2 className="epk__heading">About Pale Shelter</h2>
            <div className="epk__copy">
              <p>
                Pale Shelter is an independent rock band from New Orleans,
                Louisiana, formed in 2018. The band’s sound pulls from
                alternative rock, post-emo, and heavier melodic influences,
                balancing atmosphere with impact.
              </p>
              <p>
                Built around emotionally driven songwriting, layered guitars,
                and dynamic shifts between restraint and release, Pale Shelter
                aims for songs that feel immersive rather than disposable. Their
                material moves between tension, vulnerability, and catharsis
                without losing its sense of melody.
              </p>
              <p>
                Their debut album, <em>AMNESTY</em>, helped define that identity
                and laid the foundation for the project’s evolving sound. Pale
                Shelter continues to build its catalog while expanding its
                visual and live presence.
              </p>
            </div>
          </article>

          <aside className="epk__panel">
            <p className="epk__kicker">Music</p>
            <h2 className="epk__heading">Featured Artist Embed</h2>
            <div className="epk__embed-wrap">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/2rrl6d6AQ73RanJg4lE76W?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Pale Shelter Spotify Player"
              />
            </div>

            <div className="epk__links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="epk__text-link"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="epk__section">
        <div className="epk__grid epk__grid--two">
          <article className="epk__panel">
            <p className="epk__kicker">Press Photos</p>
            <h2 className="epk__heading">Media Assets</h2>
            <p className="epk__body">
              Add high-resolution band photos, live shots, promo images, and
              album art here. You can later swap this section for a downloadable
              press kit zip or a cloud storage folder.
            </p>

            <div className="epk__photo-grid">
              <div className="epk__photo-placeholder">Band Photo</div>
              <div className="epk__photo-placeholder">Live Photo</div>
              <div className="epk__photo-placeholder">Promo Shot</div>
              <div className="epk__photo-placeholder">Album Art</div>
            </div>
          </article>

          <article className="epk__panel">
            <p className="epk__kicker">Contact</p>
            <h2 className="epk__heading">Booking / Press</h2>
            <div className="epk__contact">
              <p className="epk__body">
                For booking, press inquiries, features, or collaborations:
              </p>

              <a
                className="epk__contact-link"
                href="mailto:paleshelterband@yahoo.com"
              >
                paleshelterband@yahoo.com
              </a>

              <div className="epk__links epk__links--stack">
                <a
                  href="https://open.spotify.com/artist/2rrl6d6AQ73RanJg4lE76W"
                  target="_blank"
                  rel="noreferrer"
                  className="epk__text-link"
                >
                  Spotify
                </a>
                <a
                  href="https://www.facebook.com/palesheltermusic"
                  target="_blank"
                  rel="noreferrer"
                  className="epk__text-link"
                >
                  Facebook
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
