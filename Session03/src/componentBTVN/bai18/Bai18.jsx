import React, { useState } from "react";

export default function Bai18() {
  const arrayColor = [
    "#a0e540",
    "#f3fe0f",
    "#57fc8d",
    "#f6fe0c",
    "#63fa80",
    "#d9b0df",
    "#6a8fae",
    "#cd9254",
    "#6891ba",
    "#319e85",
    "#040403",
    "#f5ffff",
    "#519bed",
    "#d2bfa6",
    "#d8afdf",
    "#59fb8b",
    "#f6ffff",
    "#6891ba",
  ];

  let [color1, setColor1] = useState(0);
  let [color2, setColor2] = useState(1);
  let [color3, setColor3] = useState(2);
  let [color4, setColor4] = useState(3);
  let [color5, setColor5] = useState(4);
  let [color6, setColor6] = useState(5);
  let [color7, setColor7] = useState(6);
  let [color8, setColor8] = useState(7);
  let [color9, setColor9] = useState(8);
  let [color10, setColor10] = useState(9);
  let [color11, setColor11] = useState(10);
  let [color12, setColor12] = useState(11);
  let [color13, setColor13] = useState(12);
  let [color14, setColor14] = useState(13);
  let [color15, setColor15] = useState(14);
  let [color16, setColor16] = useState(15);
  let [color17, setColor17] = useState(16);
  let [color18, setColor18] = useState(17);

  const colors = [
    { value: color1, setValue: setColor1 },
    { value: color2, setValue: setColor2 },
    { value: color3, setValue: setColor3 },
    { value: color4, setValue: setColor4 },
    { value: color5, setValue: setColor5 },
    { value: color6, setValue: setColor6 },
    { value: color7, setValue: setColor7 },
    { value: color8, setValue: setColor8 },
    { value: color9, setValue: setColor9 },
    { value: color10, setValue: setColor10 },
    { value: color11, setValue: setColor11 },
    { value: color12, setValue: setColor12 },
    { value: color13, setValue: setColor13 },
    { value: color14, setValue: setColor14 },
    { value: color15, setValue: setColor15 },
    { value: color16, setValue: setColor16 },
    { value: color17, setValue: setColor17 },
    { value: color18, setValue: setColor18 },
  ];

  return (
    <div>
      <h1>Đây là bài tập 18</h1>
      <div
        style={{
          width: 1000,
          height: 500,
          display: "flex",
          justifyContent: "center", // Căn giữa theo chiều ngang
          alignItems: "center", // Căn giữa theo chiều dọc
          flexWrap: "wrap",
          border: "1px solid black",
        }}
      >
        {colors.map((color, index) => (
          <div
            style={{
              width: "100px", // Đơn vị px
              height: "100px", // Đơn vị px
              backgroundColor: arrayColor[color.value],
              border: "1px solid black",
            }}
            onClick={() => color.setValue(Math.floor(Math.random() * 18))}
            key={index}
          ></div>
        ))}
      </div>
      <hr />
    </div>
  );
}
