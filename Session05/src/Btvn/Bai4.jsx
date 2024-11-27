import React, { useEffect, useRef } from "react";

export default function Bai4() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>Đây là bài tập 4</h1>
      <input type="text" ref={inputRef} />
      <br />
      <hr />
    </div>
  );
}
