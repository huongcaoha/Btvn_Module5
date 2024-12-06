import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./views/Count";
import Random from "./views/Random";
import ChangeTheme from "./views/ChangeTheme";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChangeTheme = (e) => {
    dispatch({
      type: "theme",
      payload: e.target.value,
    });
  };
  return (
    <div
      style={{ backgroundColor: `${theme}`, width: "100%", height: "100vh" }}
    >
      <Count />
      <Random />
      <ChangeTheme />

      <select name="" id="" onChange={(e) => handleChangeTheme(e)}>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
    </div>
  );
}

export default App;
