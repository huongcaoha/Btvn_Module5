import React, { useState } from "react";

export default function () {
  const arrayCharacter = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ".",
    " ",
  ];
  let generateText = () => {
    let text = "";
    for (let i = 0; i <= 100; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCharacter.length);
      text += arrayCharacter[randomIndex];
    }
    return text;
  };

  let [text, setText] = useState(generateText);

  const changeText = () => {
    setText(generateText);
  };
  return (
    <>
      <h1>Đây là bài số 9</h1>
      <p>{text}</p>
      <button onClick={changeText}>Change Text</button>
      <hr />
    </>
  );
}
