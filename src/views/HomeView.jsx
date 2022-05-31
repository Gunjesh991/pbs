import React from "react";
import Gallery from "../components/Gallery";
import LandingBanner from "../components/Landing";

const HomeView = () => {
  return (
    <>
      <LandingBanner />
      <Gallery
        links={Array(6)
          .fill(0)
          .map((_, index) => `/featured_optimized/${index + 1}.JPG`)}
      />
    </>
  );
};

export default HomeView;
