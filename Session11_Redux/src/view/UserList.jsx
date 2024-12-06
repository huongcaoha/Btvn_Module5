import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../redux/slices/userSlice";

export default function UserList() {
  const { status, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);
  return (
    <div>
      {status === "pending" && <div>Loading...</div>}
      <h3>List User </h3>

      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
}
