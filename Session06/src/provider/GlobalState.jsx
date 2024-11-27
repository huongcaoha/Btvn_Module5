import React, { useState } from "react";
import products from "../data.json";
import Header from "../Component/Header";
import ListProduct from "../Component/ListProduct";
export const cartContex = React.createContext();
export default function GlobalState() {
  const [carts, setCarts] = useState(() => {
    return JSON.parse(localStorage.getItem("carts")) || [];
  });

  const saveCarts = (carts) => {
    setCarts(carts);
    localStorage.setItem("carts", JSON.stringify(carts));
  };

  const addToCart = (product) => {
    const indexProduct = carts.findIndex((pro) => pro.id === product.id);
    if (indexProduct >= 0) {
      const newCarts = carts.map((pro) => {
        if (pro.id === product.id) {
          return { ...pro, quantity: pro.quantity + 1 };
        } else {
          return pro;
        }
      });
      saveCarts(newCarts);
    } else {
      const newCarts = [...carts, { ...product, quantity: 1 }];
      saveCarts(newCarts);
    }
  };
  return (
    <cartContex.Provider value={{ products, addToCart }}>
      <Header />
      <ListProduct />
    </cartContex.Provider>
  );
}
