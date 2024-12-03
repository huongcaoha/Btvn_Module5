import { Button, Input } from "antd";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParam, setSearchParam] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam({ name: e.target.search.value });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[300px] h-[150px] flex items-center"
      >
        <Input name="search" placeholder="search name student"></Input>
        <Button htmlType="submit">Search</Button>
      </form>

      <h1>Giá trị cảu param : {searchParam.get("name")}</h1>

      <Button type="primary">
        <Link to={"/"}>Go Home</Link>
      </Button>
    </div>
  );
}
