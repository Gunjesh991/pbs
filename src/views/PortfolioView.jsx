import React from "react";
import Gallery from "../components/Gallery";

const PortfolioView = () => {
  return (
    <>
      <div style={{ marginTop: 120 }}></div>
      <Gallery
        links={Array(80)
          .fill(0)
          .map((_, index) => `/portfolio/Gallery-photos (${index + 1}).jpg`)}
      />
      <div style={{ paddingTop: 50 }}></div>
    </>
  );
};

export default PortfolioView;
