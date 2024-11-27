import { Button, Image } from "antd";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartItem() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            height={50}
            width={50}
            className="rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--APtc5Nnz3w43NQTVrDCon1p33k9xWBgGg&s"
          />
          <p>Gái xinh</p>
        </div>

        <div className="flex items-center gap-3">
          <Button size="small">-</Button>
          <span>10</span>
          <Button size="small">+</Button>
          <FaRegTrashAlt />
        </div>
      </div>
    </>
  );
}
