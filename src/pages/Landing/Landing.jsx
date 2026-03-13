import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <section className="landing">
      <div className="landing__content">
        <img
          className="landing__logo"
          src="https://storage.googleapis.com/crossworld-storage/paleshelter/images/logowhite.png"
          alt="Pale Shelter"
        />

        <div className="landing__news">
          <h2>Upcoming News</h2>
          <p className="landing__headline">New Album: Simulacra</p>

          <Link to="/music" className="landing__album-link">
            <img
              className="landing__album-art"
              src="https://storage.googleapis.com/crossworld-storage/paleshelter/images/2026SIMULACRAALBUMARTv2.jpg"
              alt="Simulacra Album Art"
            />
          </Link>

          <Link to="/music" className="landing__release">
            Out Now
          </Link>
        </div>

        <div className="landing__links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://spotify.com" target="_blank" rel="noreferrer">
            Spotify
          </a>
        </div>

        <Link to="/music" className="landing__enter">
          Enter
        </Link>
      </div>
    </section>
  );
}

export default Landing;
