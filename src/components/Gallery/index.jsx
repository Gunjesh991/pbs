import React from "react";

import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__wrapper">
          {Array(6)
            .fill(0)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(/featured_optimized/${index + 1}.jpg)`,
                  }}
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
