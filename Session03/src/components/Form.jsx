import React, { useState } from "react";

export default function () {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <h3>{userName}</h3>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          placeholder="username"
        />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
      </form>
    </div>
  );
}
