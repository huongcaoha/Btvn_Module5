import React, { createContext, useState } from "react";
export const MyContext = createContext();
export default function GlobalContext({ children }) {
  const [whoAreYou, setWhoAreYou] = useState([]);

  const setValueWhoAreYou = (array) => {
    setWhoAreYou(array);
  };
  return (
    <MyContext.Provider value={{ whoAreYou, setValueWhoAreYou }}>
      {children}
    </MyContext.Provider>
  );
}
