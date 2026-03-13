import { useEffect, useState } from "react";
import "./Shows.css";
import shows from "../../data/shows";

function formatDate(dateString) {
  const date = new Date(dateString);

  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = date.getDate();

  return { month, day };
}

export default function Shows() {
  const [activeFlyer, setActiveFlyer] = useState(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setActiveFlyer(null);
      }
    }

    if (activeFlyer) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeFlyer]);

  return (
    <>
      <main className="shows-page">
        <section className="shows-page__hero">
          <p className="shows-page__eyebrow">Live</p>

          <h1 className="shows-page__title">Shows</h1>

          <p className="shows-page__subtitle">
            Catch Pale Shelter live. More dates will be announced soon.
          </p>
        </section>

        <section className="shows-page__list">
          {shows.map((show) => {
            const { month, day } = formatDate(show.date);

            return (
              <div key={show.id} className="shows-page__card">
                {show.flyerImage && (
                  <button
                    type="button"
                    className="shows-page__flyer-wrap shows-page__flyer-button"
                    onClick={() => setActiveFlyer(show)}
                    aria-label={`Preview flyer for ${show.venue}`}
                  >
                    <img
                      src={show.flyerImage}
                      alt={`${show.venue} show flyer`}
                      className="shows-page__flyer"
                    />
                  </button>
                )}

                <div className="shows-page__info">
                  <div className="shows-page__date">
                    <span className="shows-page__month">{month}</span>
                    <span className="shows-page__day">{day}</span>
                  </div>

                  <div className="shows-page__details">
                    <h3 className="shows-page__venue">{show.venue}</h3>
                    <p className="shows-page__location">
                      {show.city}, {show.state}
                    </p>
                  </div>

                  <div className="shows-page__actions">
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        className="shows-page__button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tickets
                      </a>
                    ) : (
                      <span className="shows-page__button shows-page__button--disabled">
                        TBA
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {shows.length === 0 && (
            <p className="shows-page__more">No upcoming shows announced yet.</p>
          )}
        </section>
      </main>

      {activeFlyer && (
        <div
          className="shows-modal"
          onClick={() => setActiveFlyer(null)}
          role="presentation"
        >
          <div
            className="shows-modal__content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Flyer preview for ${activeFlyer.venue}`}
          >
            <button
              type="button"
              className="shows-modal__close"
              onClick={() => setActiveFlyer(null)}
              aria-label="Close flyer preview"
            >
              ×
            </button>

            <img
              src={activeFlyer.flyerImage}
              alt={`${activeFlyer.venue} show flyer`}
              className="shows-modal__image"
            />
          </div>
        </div>
      )}
    </>
  );
}
