import { createContext, useState } from "react";

export const MyContext = createContext();

export default function GlobalContext({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  const setValueUsername = (username) => {
    setUsername(username);
  };
  const setLogin = (status) => {
    setIsLogin(status);
  };
  return (
    <MyContext.Provider
      value={{ setLogin, isLogin, setValueUsername, username }}
    >
      {children}
    </MyContext.Provider>
  );
}
