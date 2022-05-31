import React from "react";
import Gallery from "../components/Gallery";

const PortfolioView = () => {
  return (
    <>
      <Gallery
        links={Array(20)
          .fill(0)
          .map((_, index) => `/portfolio/Gallery-photos (${index + 1}).jpg`)}
      />
    </>
  );
};

export default PortfolioView;
