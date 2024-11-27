import React from "react";
import CartHearder from "./CartHearder";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

export default function ListCart() {
  return (
    <div className="absolute border w-[500px] right-[-80px] max-h-[600px] rounded-md bg-slate-600 p-5 shadow-md top-11">
      <CartHearder />

      <div className="py-3 flex-col gap-6 max-h-[450px] min-h-[450px] overflow-auto mt-3">
        {<p className="text-center text-4 ">Chưa có sản phẩm trong giỏ hàng</p>}
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <CartFooter />
    </div>
  );
}
