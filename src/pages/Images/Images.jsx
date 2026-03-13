import { useEffect, useState } from "react";
import "./Images.css";
import images from "../../data/images";

const filters = [
  { label: "All", value: "all" },
  { label: "Band Members", value: "band-members" },
  { label: "Group Shots", value: "group-shots" },
  { label: "Live Shots", value: "live-shots" },
];

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function getFilteredImages(filterValue) {
  return filterValue === "all"
    ? images
    : images.filter((image) => image.category === filterValue);
}

export default function Images() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    const filtered = getFilteredImages(activeFilter);
    setDisplayImages(shuffleArray(filtered));
  }, [activeFilter]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const handleFilterClick = (filterValue) => {
    if (filterValue === activeFilter) {
      const filtered = getFilteredImages(filterValue);
      setDisplayImages(shuffleArray(filtered));
      return;
    }

    setActiveFilter(filterValue);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="images-page">
      <section className="images-page__hero">
        <p className="images-page__eyebrow">Gallery</p>

        <h1 className="images-page__title">Images</h1>

        <p className="images-page__subtitle">
          Live shots, band photos, and moments from Pale Shelter.
        </p>

        <div
          className="images-page__filters"
          role="tablist"
          aria-label="Image categories"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`images-page__filter-link ${
                activeFilter === filter.value
                  ? "images-page__filter-link--active"
                  : ""
              }`}
              onClick={() => handleFilterClick(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="images-page__gallery-section">
        <div className="images-page__gallery">
          {displayImages.map((image) => (
            <button
              key={image.id}
              className="images-page__card"
              type="button"
              onClick={() => openModal(image)}
              aria-label={`Open image: ${image.caption || image.alt}`}
            >
              <img
                className="images-page__image"
                src={image.src}
                alt={image.alt}
              />

              {image.caption && (
                <div className="images-page__overlay">
                  <span className="images-page__caption">{image.caption}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="images-page__modal"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="images-page__modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="images-page__close"
              type="button"
              onClick={closeModal}
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              className="images-page__modal-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
            />

            {selectedImage.caption && (
              <p className="images-page__modal-caption">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
