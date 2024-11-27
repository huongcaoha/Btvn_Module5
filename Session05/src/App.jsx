import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai1 from "./Btvn/Bai1";
import Bai3 from "./Btvn/Bai3";
import Bai4 from "./Btvn/Bai4";
import Bai5 from "./Btvn/Bai5";
import Bai6 from "./Btvn/Bai6";
import Bai8 from "./Btvn/Bai8";
import Bai12 from "./Btvn/Bai12";
import Demo from "./Btvn/Demo";
import Button from "./component/base/button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Bai1 />
      <Bai3 />
      <Bai4 />
      <Bai5 />
      <Bai6 />
      <Bai8 />
      <Bai12 />
      <Demo /> */}
      <Button />
    </>
  );
}

export default App;
