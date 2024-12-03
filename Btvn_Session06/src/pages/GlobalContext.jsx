import React, { createContext } from "react";
export const MyContext = createContext();
export default function GlobalContext({ children }) {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}
