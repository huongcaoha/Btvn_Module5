import React from "react";

export default function Header() {
  return (
    <div className="bg-[#edf2fa] w-full h-[60px] flex justify-between px-12 text-xl">
      <ul className="flex justify-center items-center gap-10 ">
        <li className="hover:text-orange-300">Trang chủ</li>
        <li className="hover:text-orange-300">Danh mục</li>
        <li className="hover:text-orange-300">About us</li>
      </ul>

      <ul className="flex justify-center items-center gap-3">
        <li>123</li>
        <li>456</li>
        <li>789</li>
      </ul>
    </div>
  );
}
