import React, { useState } from "react";

export default function ({ addSong }) {
  let [input, setInput] = useState("");
  const submit = (event) => {
    event.preventDefault();
    addSong(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={(event) => submit(event)}>
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
