import React, { useState } from "react";

export default function () {
  let [text, setText] = useState("");
  let [value, setvalue] = useState("");
  const saveText = (event) => {
    setText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    setvalue(text);
  };
  return (
    <div>
      <h1>Đây là bài tập 10</h1>
      <form onSubmit={(event) => submit(event)}>
        <input type="text" onChange={(event) => saveText(event)} />
        <input type="submit" value="Submit" />
      </form>
      <h3>{value}</h3>
      <hr />
    </div>
  );
}
