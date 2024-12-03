import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{ transition: "all 1s linear", zIndex: 100 }}
      className={
        scrollY === 0
          ? "w-full h-[60px] bg-[#d9d9d9] relative transition-all duration-2000 ease-linear flex justify-around items-center"
          : "fixed w-full h-[60px] text-[#000000] bg-white flex justify-around items-center transition-all duration-2000 ease-linear"
      }
    >
      <div>
        <h3>+ Contact us</h3>
      </div>

      <div>
        <a href="">
          <ul
            style={{
              transition: "all 0.5s linear",
            }}
            className={
              scrollY === 0
                ? "-ml-[300px] flex justify-center items-center scale-150 gap-[60px] text-[200px] text-white absolute mt-[10px]"
                : "flex justify-center items-center gap-2 font-semibold text-3xl"
            }
          >
            <li>G</li>
            <li>U</li>
            <li>C</li>
            <li>C</li>
            <li>I</li>
          </ul>
        </a>
      </div>

      <ul className="flex justify-center gap-5  text-2xl items-center pt-2">
        <li className="hover:text-[#df09b2]">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#df09b2]">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:text-[#df09b2]">
          <Link to="/about">About us</Link>
        </li>
        <li className="hover:text-[#df09b2]">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
