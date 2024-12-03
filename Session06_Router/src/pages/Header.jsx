import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "./MyContext";
import { Button, message } from "antd";

export default function Header() {
  const { isLogin, username, setLogin, setValueUsername } =
    useContext(MyContext);

  const handleLogout = () => {
    setLogin(false);
    setValueUsername("");
    message.success("Logout success");
  };

  return (
    <header className="bg-[#edf2fa] w-full h-[60px]">
      <ul className="flex justify-center items-center pt-4 gap-5 text-2xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">List Product</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {!isLogin ? (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        ) : (
          <li>
            <Button onClick={handleLogout} className="text-blue-400">
              Logout
            </Button>
          </li>
        )}

        <li>
          <NavLink to="/user/profile">Profile</NavLink>
        </li>

        <li className="text-blue-500">
          {username ? `Xin chào : ${username}` : ""}
        </li>
      </ul>
    </header>
  );
}
