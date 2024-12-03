import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./component/pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import Shop from "./component/pages/Shop";
import AboutUs from "./component/pages/AboutUs";
import SlideHero from "./component/pages/SlideHero";

function App() {
  return (
    <>
      <Header />

      <SlideHero />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
