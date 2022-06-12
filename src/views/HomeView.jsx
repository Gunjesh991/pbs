import React from "react";
import Gallery from "../components/Gallery";
import LandingBanner from "../components/Landing";

const HomeView = () => {
  return (
    <>
      <LandingBanner />
      <div className="safe">
        <Gallery
          links={Array(6)
            .fill(0)
            .map((_, index) => `/featured_optimized/${index + 1}.JPG`)}
        />
      </div>
    </>
  );
};

export default HomeView;
