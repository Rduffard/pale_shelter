import { useEffect, useState } from "react";
import "./Music.css";
import { tracks } from "../../data/tracks";
import { getPlayCounts, trackPlay } from "../../utils/plays";

function Music() {
  const [playCounts, setPlayCounts] = useState({});

  useEffect(() => {
    getPlayCounts()
      .then((counts) => {
        const mappedCounts = counts.reduce((acc, item) => {
          acc[item.trackId] = item.count;
          return acc;
        }, {});

        setPlayCounts(mappedCounts);
      })
      .catch((err) => {
        console.error("Failed to fetch play counts:", err);
      });
  }, []);

  const handleTrackPlay = (trackId) => {
    const sessionKey = `paleshelter-played-${trackId}`;
    const alreadyTracked = sessionStorage.getItem(sessionKey);

    trackPlay(trackId).then(() => {
      if (!alreadyTracked) {
        setPlayCounts((prev) => ({
          ...prev,
          [trackId]: (prev[trackId] || 0) + 1,
        }));
      }
    });
  };

  return (
    <section className="music-page">
      <div className="music-page__hero">
        <div className="music-page__cover-wrap">
          <img
            className="music-page__cover"
            src="https://storage.googleapis.com/crossworld-storage/paleshelter/images/2026SIMULACRAALBUMARTv2.jpg"
            alt="Simulacra album art"
          />
        </div>

        <div className="music-page__intro">
          <p className="music-page__eyebrow">Pale Shelter</p>
          <h1 className="music-page__title">Simulacra</h1>
          <p className="music-page__subtitle">Studio Release</p>

          <p className="music-page__description">
            A dark electronic release from Pale Shelter. Stream the full record
            below and explore the latest material from the project.
          </p>

          <div className="music-page__meta">
            <div className="music-page__meta-item">
              <span className="music-page__meta-label">Tracks</span>
              <span className="music-page__meta-value">{tracks.length}</span>
            </div>

            <div className="music-page__meta-item">
              <span className="music-page__meta-label">Status</span>
              <span className="music-page__meta-value">Out Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="music-page__section">
        <div className="music-page__section-header">
          <h2 className="music-page__section-title">Track List</h2>
          <p className="music-page__section-copy">
            Stream directly from the site.
          </p>
        </div>

        <div className="music-page__tracks">
          {tracks.map((track, index) => (
            <article key={track.id} className="track-card">
              <div className="track-card__top">
                <div className="track-card__identity">
                  <span className="track-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="track-card__text">
                    <h3 className="track-card__title">{track.title}</h3>
                    <p className="track-card__release">{track.release}</p>
                    <p className="track-card__plays">
                      Plays: {playCounts[track.id] || 0}
                    </p>
                  </div>
                </div>
              </div>

              <audio
                className="track-card__player"
                controls
                preload="metadata"
                src={track.audioUrl}
                onPlay={() => handleTrackPlay(track.id)}
              >
                Your browser does not support the audio element.
              </audio>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Music;
