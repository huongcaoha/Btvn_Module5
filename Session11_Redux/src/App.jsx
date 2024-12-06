import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./view/Counter";
import UserList from "./view/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
      <UserList />
    </>
  );
}

export default App;
