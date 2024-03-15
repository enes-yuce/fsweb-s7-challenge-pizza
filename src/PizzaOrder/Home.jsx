// Home.jsx

import React from "react";
import Header from "./Header";
import HomeBanner from "../../Assets/mile1-assets/home-banner.png";
import { Button } from "reactstrap";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="backgroundHome">
        <h1 className="home-title">KOD ACIKTIRIR</h1>
        <h2 className="home-subtitle">PİZZA, DOYURUR</h2>
        <Button
          className="mt-2"
          color="warning"
          onClick={() => (window.location.href = "/Siparis")}
        >
          Acıktım
        </Button>
        <img className="col-10" src={HomeBanner} alt="banner" />
      </div>
    </div>
  );
};

export default Home;
