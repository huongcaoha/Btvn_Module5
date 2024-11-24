import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Form from "./components/Form";
import Bai8 from "./componentBTVN/bai8/bai8";
import Bai9 from "./componentBTVN/bai9/Bai9";
import Bai10 from "./componentBTVN/bai10/Bai10";
import Bai11 from "./componentBTVN/bai11/Bai11";
import Bai12 from "./componentBTVN/bai12/Bai12";
import Bai13 from "./componentBTVN/bai13/Bai13";
import Bai14 from "./componentBTVN/bai14/Bai14";
import Bai15 from "./componentBTVN/bai15/Bai15";
import Bai16 from "./componentBTVN/bai16/Bai16";
import Bai17 from "./componentBTVN/bai17/Bai17";
import Bai18 from "./componentBTVN/bai18/Bai18";
import Bai19 from "./componentBTVN/baitap19/Bai19";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bai8 />
      <Bai9 />
      <Bai10 />
      <Bai11 />
      <Bai12 />
      <Bai13 />
      <Bai14 />
      <Bai15 />
      <Bai16 />
      <Bai17 />
      <Bai18 />
      <Bai19 />
    </>
  );
}

export default App;
