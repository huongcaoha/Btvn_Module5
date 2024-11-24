import React, { useState } from "react";

export default function Bai12() {
  const images = [
    <img
      style={{ width: 500, height: 500 }}
      src="https://artena.vn/wp-content/uploads/2024/09/anh-gai-xinh-7T0UqcA.jpg"
      className="d-block w-100"
      alt="..."
    />,
    <img
      style={{ width: 500, height: 500 }}
      src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-5.jpg"
      className="d-block w-100"
      alt="..."
    />,
    <img
      style={{ width: 500, height: 500 }}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJItGuvX3U-RpNRTQW9J3T11xWi2v8W_AVQ&s"
      alt="..."
    />,
  ];
  const next = () => {
    if (image == 2) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };

  const previos = () => {
    if (image == 0) {
      setImage(2);
    } else {
      setImage(image - 1);
    }
  };
  const [image, setImage] = useState(0);
  return (
    <>
      <h1>Đây là bài tập 12</h1>
      {images[image]}
      <br />
      <button onClick={next}>Previus</button>
      <button onClick={previos}>Next</button>
      <hr />
    </>
  );
}
