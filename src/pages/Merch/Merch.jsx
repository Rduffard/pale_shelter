import "./Merch.css";

export default function Merch() {
  return (
    <main className="merch-page">
      <section className="merch-page__hero">
        <p className="merch-page__eyebrow">Official Merch</p>

        <h1 className="merch-page__title">Coming Soon</h1>

        <p className="merch-page__subtitle">
          Shirts, physical releases, and more from Pale Shelter are on the way.
        </p>

        <div className="merch-page__panel">
          <p className="merch-page__panel-text">
            We’re putting together a proper merch drop. Check back soon for
            apparel, music, and other goods.
          </p>

          <div className="merch-page__actions">
            <a
              className="merch-page__button merch-page__button--primary"
              href="mailto:paleshelterband@yahoo.com"
            >
              Contact for Orders
            </a>

            <a
              className="merch-page__button merch-page__button--ghost"
              href="/music"
            >
              Explore Music
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
