import React, { useState } from "react";

export default function Bai3() {
  const listNav = ["Trang chủ", "Sản phẩm", "Giới thiệu", "Liên hệ"];
  const [currentTab, setCurrentTab] = useState(0);
  const handleClick = (value) => {
    setCurrentTab(value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Đây là bài tập 3</h1>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        {listNav.map((nav, index) => (
          <li
            style={{
              marginRight: 50,
              backgroundColor: currentTab === index ? "blue" : "",
              cursor: "pointer",
              color: "red",
            }}
            onClick={() => handleClick(index)}
            key={index}
          >
            {nav}
          </li>
        ))}
      </ul>
      <br />
      <hr />
    </div>
  );
}
