import React from "react";
import "./App.css";
import BrandsIntegration from "./components/BrandsIntegration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import TopFold from "./components/TopFold";
import TrendingNfts from "./components/TrendingNfts";

const App = () => {
  return (
    <>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </>
  );
};

export default App;
