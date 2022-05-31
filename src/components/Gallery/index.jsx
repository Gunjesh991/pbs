import React from "react";

import "./gallery.css";

const Gallery = ({ links = [] }) => {
  return (
    <div className="gallery" style={{ height: "fit-content" }}>
      <div className="gallery__container">
        <div className="gallery__wrapper">
          {links.map((_link, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url('${encodeURI(_link)}')`,
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
