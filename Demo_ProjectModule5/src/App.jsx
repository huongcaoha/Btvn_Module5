import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import Shop from "./pages/user/Shop";
import AboutUs from "./pages/user/AboutUs";
import { Header } from "antd/es/layout/layout";
import SlideHero from "./layout/SlideHero";

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
