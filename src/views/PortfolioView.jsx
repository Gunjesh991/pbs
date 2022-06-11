import React from "react";
import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";

const PortfolioView = () => {
  const { pid = "" } = useParams();

  return (
    <>
      <div style={{ marginTop: 150 }}></div>
      <div className="safe">
        <Gallery id={pid} />
      </div>
      <div style={{ paddingTop: 50 }}></div>
    </>
  );
};

export default PortfolioView;
