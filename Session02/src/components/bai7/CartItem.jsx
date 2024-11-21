import React from "react";
import ItemProduct from "./ItemProduct";

const carts = [
  {
    id: 1,
    productName: "Iphone 11 pro",
    description: "256GB, Navy Blue",
    quantity: 2,
    price: 900,
  },
  {
    id: 2,
    productName: "Iphone 11 pro",
    description: "256GB, Navy Blue",
    quantity: 2,
    price: 900,
  },
  {
    id: 3,
    productName: "Iphone 11 pro",
    description: "256GB, Navy Blue",
    quantity: 2,
    price: 900,
  },
  {
    id: 4,
    productName: "Iphone 11 pro",
    description: "256GB, Navy Blue",
    quantity: 2,
    price: 900,
  },
];

export default function CartItem() {
  return (
    <>
      {carts.map((item) => (
        <ItemProduct key={item.id} item={item} />
      ))}
    </>
  );
}
