import { useState } from "react";
import Header from "./component/header/Header";
import Hackathon from "./component/Hackathon";
import ProductManagement from "./component/demoCallAPI/ProductManagement";
import DemoDatePicker from "./component/DemoDatePicker";

function App() {
  return (
    <div>
      {/* <Hackathon /> */}
      {/* <ProductManagement /> */}
      <DemoDatePicker />
    </div>
  );
}

export default App;
