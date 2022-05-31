import React from "react";

import "./gallery.css";

const Gallery = ({ links = [] }) => {
  console.log({ links });
  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__wrapper">
          {links.map((_link, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${_link})`,
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
