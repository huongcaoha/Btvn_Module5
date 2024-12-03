import { Button } from "antd";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  const handlePre = () => {
    navigate(-1);
  };
  return (
    <div>
      Product
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <Link key={item} to={`/product/${item}`}>
          <Button type="primary">product {item}</Button>
        </Link>
      ))}
      <Outlet />
      <Button onClick={handlePre}>Previos</Button>
    </div>
  );
}
