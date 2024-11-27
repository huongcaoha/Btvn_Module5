import React, { useEffect, useRef, useState } from "react";
import { IoMdCart } from "react-icons/io";
import ListCart from "./ListCart";

export default function Header() {
  const [isShowCart, setIsShowCart] = useState(false);
  const refCart = useRef(null);

  const handleClickOutside = (event) => {};

  const handleTogger = () => {
    setIsShowCart(!isShowCart);
  };
  return (
    <header className="w-full h-[64px] fixed top-0 z-50 bg-orange-500 flex  justify-between px-20 py-5 text-white">
      <ul className="flex gap-10">
        <li>Trang chủ</li>
        <li>Sản phẩm</li>
      </ul>

      <div className="relative">
        <IoMdCart
          onClick={handleTogger}
          size={30}
          className="cursor-pointer hover:text-blue-300 transition-all"
        />
        <div className="absolute top-[-8px] right-[-10px] text-[12px] px-1 bg-red-500 rounded-lg l">
          10
        </div>
        {isShowCart ? <ListCart ref={refCart} /> : <></>}
      </div>
    </header>
  );
}
