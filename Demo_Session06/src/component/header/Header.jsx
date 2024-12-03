import { Image, Input } from "antd";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

export default function Header() {
  return (
    <div className="w-full bg-slate-300 px-10 py-1 flex justify-around">
      <ul>
        <li>
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src="data:image/png;base64,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"
          ></Image>
        </li>
        <li>
          <Input width={50} placeholder="Tìm kiếm trên facebook"></Input>
        </li>
      </ul>

      <ul className="flex justify-center items-center">
        <li>
          <IoMdHome size={40} color="#0866ff" />
        </li>
        <li>
          <MdVideoLibrary size={40} color="#0866ff" />
        </li>
      </ul>
      <ul></ul>
    </div>
  );
}
