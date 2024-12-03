import React, { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function User() {
  const { isLogin } = useContext(MyContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigation("/login");
      message.warning("Bạn cần đăng nhập trước");
    }
  }, [isLogin]);
  return <div>User</div>;
}
