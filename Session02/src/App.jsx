import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai4 from "./components/bai4";
import Bai5 from "./components/Bai5";
import Bai6 from "./components/Bai6";
import Bai7 from "./components/bai7/Bai7";
import Bai8 from "./components/Bai8";
import Bai9 from "./components/bai9/Bai9";
import Input from "./components/bai10/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bai4 />
      <Bai5></Bai5>
      <Bai6 />
      <Bai7 />
      <Bai8 />
      <Bai9 />
      <Input />
    </>
  );
}

export default App;
