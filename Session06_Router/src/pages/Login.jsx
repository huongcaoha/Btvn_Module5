import { Button, Input, message } from "antd";
import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { setLogin, username, setValueUsername } = useContext(MyContext);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === "huongcaoha" &&
      e.target.password.value === "123456789"
    ) {
      setLogin(true);
      setValueUsername(e.target.username.value);
      message.success("Login success");
      navigation("/");
    } else {
      setError("username or password fail");
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="w-[500px] h-[250px] border pt-6 flex flex-col gap-7 rounded-lg m-auto mt-[150px] "
      >
        <div className="m-auto">
          <label className="font-semibold">Username </label>
          <br />
          <Input name="username" className="w-[300px]" type="text"></Input>
        </div>

        <div className="m-auto">
          <label className="font-semibold">Password </label>
          <br />
          <Input.Password
            name="password"
            className="w-[300px]"
          ></Input.Password>
          {error ? <p className="text-red-500 text-center">{error}</p> : <></>}
          <br />
          <Link className="text-[#8395ff]" to={"/register"}>
            Register
          </Link>
        </div>

        <Button
          className="w-[100px] h-10 m-auto"
          htmlType="submit"
          type="primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
