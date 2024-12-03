import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      ProductDetail
      <h3>product detail : {id}</h3>
    </div>
  );
}
