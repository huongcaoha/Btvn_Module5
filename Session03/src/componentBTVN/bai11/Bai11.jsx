import React, { useState } from "react";

export default function Bai11() {
  const users = [
    { id: 1, name: "Nguyễn Văn Luyện", age: 21, phone: "0367508799" },
    { id: 2, name: "Tòng Thị Phóng", age: 31, phone: "0367504123" },
    { id: 3, name: "Rảnh Văn Giỗi", age: 51, phone: "0367508456" },
    { id: 4, name: "Ngọc Trinh", age: 18, phone: "0367508789" },
    { id: 5, name: "Giang Văn Mai", age: 56, phone: "0367508147" },
    { id: 6, name: "Yến ĐT", age: 29, phone: "0367508258" },
    { id: 7, name: "Nguyễn Văn Huyên", age: 61, phone: "0367508369" },
    { id: 8, name: "Nguyễn Văn Nguyên", age: 11, phone: "0367508159" },
    { id: 9, name: "Lò A Sú", age: 53, phone: "0367508357" },
    { id: 10, name: "Trúng Xổ Số", age: 25, phone: "0367508258" },
  ];

  const [valueSearch, setValueSearch] = useState("");
  const [sort, setSort] = useState("name"); // Đặt giá trị mặc định cho sắp xếp
  const [userSearch, setUserSearch] = useState(users); // Khởi tạo với tất cả người dùng

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lọc người dùng
    let filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(valueSearch.toLowerCase()) ||
        user.phone.includes(valueSearch)
    );

    // Sắp xếp người dùng đã lọc
    let sortedUsers = filteredUsers.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "age") return a.age - b.age;
      if (sort === "phone") return a.phone.localeCompare(b.phone);
      return 0;
    });

    setUserSearch(sortedUsers);
  };

  return (
    <div>
      <h1>Đây là bài tập 11</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValueSearch(e.target.value)}
          placeholder="Nhập tên hoặc số điện thoại..."
        />
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="name">Tên</option>
          <option value="age">Tuổi</option>
          <option value="phone">Số điện thoại</option>
        </select>
        <input type="submit" value="Search" />
      </form>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userSearch.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
