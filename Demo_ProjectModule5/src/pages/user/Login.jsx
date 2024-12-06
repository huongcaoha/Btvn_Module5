import React, { useContext, useState } from "react";

import { Button, Input, message } from "antd";

import { Cookies } from "react-cookie";
import Header from "../../layout/Header";
import { baseUrl } from "../../apis/instant";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../GlobalContext";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { whoAreYou, setValueWhoAreYou } = useContext(MyContext);

  const resetUser = () => {
    setUser({
      username: "",
      password: "",
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
        const response = await baseUrl.post(
          "api.myService.com/v1/auth/sign-in",
          user,
          {
            headers: {
              Authorization: "",
            },
          }
        );
        const cookie = new Cookies();
        cookie.set("data", response.data);
        const roles = response.data.roles;
        roles.map((element) => {
          if (element.roleName === "ADMIN") {
            navigate("/admin");
            return;
          } else if (element.roleName === "USER") {
            navigate("/");

            return;
          }
        });
        setValueWhoAreYou(roles.map((role) => role.roleName));
      } catch (error) {
        message.error("Login error");
      }
    };
    login();
    resetUser();
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[400px] h-[250px] border m-auto mt-[150px] flex flex-col gap-5 text-center p-5"
      >
        <div>
          <label>Username</label>
          <Input
            name="username"
            value={user.username}
            onChange={(e) => handleChangeValue(e)}
          />
        </div>

        <div>
          <label>Password</label>
          <Input.Password
            name="password"
            value={user.password}
            onChange={(e) => handleChangeValue(e)}
          />
        </div>

        <Button className="w-[100px] m-auto" type="primary" htmlType="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
