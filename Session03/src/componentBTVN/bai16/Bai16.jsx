import React, { useState } from "react";

export default function () {
  let [rs, setRs] = useState("");
  let [hight, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRs(weight, hight);
  };

  const handleRs = (weight, height) => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const result = w / (h * h);
    if (result < 18.5) {
      setRs("Kết Quả :  Cân nặng thấp (gầy) !");
    } else if (result >= 18.5 && result <= 24.9) {
      setRs("Kết Quả :Bình thường !");
    } else if (result >= 25 && result <= 29.9) {
      setRs("Kết Quả : Béo phì !");
    } else if (result >= 30 && result <= 34.9) {
      setRs("Kết Quả : Béo phì cấp 1 !");
    } else if (result >= 35 && result <= 39.9) {
      setRs("Kết Quả : Béo phì cấp 2 !");
    } else if (result >= 40) {
      setRs("Kết Quả : Béo phì cấp 3 !");
    }
  };

  return (
    <div>
      <h1>Đây là bài tập 16</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          step="0.01"
          type="number"
          onChange={(event) => setHeight(event.target.value)}
          placeholder="Enter height"
        />
        <input
          step="0.01"
          type="number"
          onChange={(event) => setWeight(event.target.value)}
          placeholder="Enter weight"
        />
        <input type="submit" value="Send" />
      </form>
      <h3>{rs}</h3>
      <hr />
    </div>
  );
}
