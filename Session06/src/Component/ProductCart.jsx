import React, { useContext } from "react";
import { Button } from "antd";
import { cartContex } from "../provider/GlobalState";
export default function ProductCart({ product }) {
  const { addToCart } = useContext(cartContex);
  return (
    <>
      <li className="border rounded-md shadow-sm">
        <div
          className={`max-h-[200px] min-h-[200px] bg-[url('${product.image}')] bg-no-repeat bg-contain`}
        ></div>
        <div className="p-5 flex flex-col gap-3 items-center">
          <h3>{product.productName}</h3>
          <p>{product.price} VNĐ</p>
          <Button
            onClick={() => addToCart(product)}
            type="primary"
            className="w-full h-9"
          >
            Add to cart
          </Button>
        </div>
      </li>
    </>
  );
}
