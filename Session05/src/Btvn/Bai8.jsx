import React, { useEffect, useState } from "react";

export default function Bai8() {
  const getSeasion = (month) => {
    if (month > 0 && month <= 3) {
      return "Mùa Xuân";
    } else if (month > 3 && month <= 6) {
      return "Mùa Hạ";
    } else if (month > 6 && month <= 9) {
      return "Mùa Thu";
    } else if (month > 9 && month <= 12) {
      return "Mùa Đông";
    } else {
      return "Không Biết";
    }
  };
  const [month, setMonth] = useState(1);
  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    setMonth(currentMonth);
  }, []);
  return (
    <div>
      <h1>Đây là bài tập 8</h1>
      <h3>Bây giờ là tháng : {month}</h3>
      <h3>
        Tháng {month} là : {getSeasion(month)}{" "}
      </h3>
      <br />
      <hr />
    </div>
  );
}
