import React, { useState } from "react";

export default function Bai14() {
  const [content, setContent] = useState("...");
  return (
    <div>
      <h1>Đây là bài tập 14</h1>
      <div style={{ border: "1px solid black" }}>
        <button
          onClick={() => setContent("Văn Hóa")}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Văn Hóa
        </button>
        <button
          onClick={() => setContent("Thể Thao")}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Thể Thao
        </button>
        <button
          onClick={() => setContent("Du Lịch")}
          style={{ backgroundColor: "green", color: "white" }}
        >
          Du Lịch
        </button>
      </div>
      <h2>{content}</h2>
      <hr />
    </div>
  );
}
