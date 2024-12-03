import { Button, Input, Modal, Table } from "antd";
import React, { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { DatePicker, Space } from "antd";

export default function Hackathon() {
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [inputFullName, setInputFullName] = useState("");
  const [inputDOB, setInputDOB] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });
  const [error, setError] = useState("");
  const [showFormDelete, setShowFormDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [emailUpdate, setEmailUpdate] = useState("");
  const saveEmployees = (employees) => {
    localStorage.setItem("employees", JSON.stringify(employees));
    setEmployees(employees);
  };
  const [inputSearch, setInputSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);

  const handleSearch = () => {
    if (inputSearch) {
      setIsSearch(true);
      const rs = employees.filter((e) =>
        e.email.toLowerCase().includes(inputSearch.trim())
      );
      setResultSearch(rs);
    } else {
      setIsSearch(false);
    }
  };

  const closeFormAdd = () => {
    setError("");
    setShowFormAdd(false);
    resetInput();
    setIsUpdate(false);
  };

  const checkEmailExist = (event) => {
    setInputEmail(event.target.value);
    let emailExist = employees.some((e) => e.email === event.target.value);
    if (isUpdate && emailExist && event.target.value === emailUpdate.email) {
      emailExist = false;
    }
    if (emailExist) {
      setError("Email đã tồn tại");
    } else {
      setError("");
    }
  };

  const openFormDelete = (id) => {
    setShowFormDelete(true);
    setIdDelete(id);
  };

  const deleteEmployees = (id) => {
    const newEmployees = employees.filter((e) => e.id !== id);
    saveEmployees(newEmployees);
    setShowFormDelete(false);
  };

  const resetInput = () => {
    setInputFullName("");
    setInputDOB("");
    setInputEmail("");
    setInputAddress("");
  };

  const handleUpdate = (employee) => {
    setInputFullName(employee.fullName);
    setInputDOB(employee.birthDate);
    setInputEmail(employee.email);
    setInputAddress(employee.address);
    setIsUpdate(true);
    setShowFormAdd(true);
    setEmailUpdate(employee);
  };

  const handleStatus = (id) => {
    const newEmployees = employees.map((e) => {
      if (e.id === id) {
        return { ...e, status: !e.status };
      } else {
        return e;
      }
    });
    saveEmployees(newEmployees);
  };

  const addEmployee = () => {
    let emailExist = employees.some((e) => e.email === inputEmail);
    if (isUpdate && emailExist && inputEmail === emailUpdate.email) {
      emailExist = false;
    }

    if (emailExist) {
      setError("Email đã tồn tại !");
    } else {
      let newEmployees = [];
      if (isUpdate) {
        const newEmployee = {
          key: emailUpdate.id,
          id: emailUpdate.id,
          fullName: inputFullName.trim(),
          birthDate: inputDOB,
          email: inputEmail.trim(),
          address: inputAddress.trim(),
          status: true,
        };
        newEmployees = employees.map((e) => {
          if (e.id === newEmployee.id) {
            return newEmployee;
          } else {
            return e;
          }
        });
      } else {
        const newEmployee = {
          key: new Date().getTime(),
          id: new Date().getTime(),
          fullName: inputFullName.trim(),
          birthDate: inputDOB,
          email: inputEmail.trim(),
          address: inputAddress.trim(),
          status: true,
        };
        newEmployees = [...employees, newEmployee];
      }
      saveEmployees(newEmployees);
      resetInput();
      setShowFormAdd(false);
      setError("");
    }
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ Và Tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <h3>{record.status ? "Đang hoạt động" : "Ngưng hoạt động"}</h3>
      ),
    },
    {
      title: "Chức năng",
      key: "action",
      render: (text, record) => (
        <span className="flex gap-3">
          {record.status ? (
            <Button onClick={() => handleStatus(record.id)} type="primary">
              Chặn
            </Button>
          ) : (
            <Button onClick={() => handleStatus(record.id)} type="primary">
              Bỏ chặn
            </Button>
          )}
          <Button type="primary" onClick={() => handleUpdate(record)}>
            Sửa
          </Button>
          <Button onClick={() => openFormDelete(record.id)} type="" danger>
            Xóa
          </Button>
        </span>
      ),
    },
  ];

  const handleCancel = () => {
    setShowFormDelete(false);
  };

  return (
    <div className="px-[250px] py-[60px]">
      <div className="flex justify-between">
        <h2>Nhân Viên</h2>
        <Button onClick={() => setShowFormAdd(true)} type="primary">
          Thêm mới nhân viên
        </Button>
      </div>

      <div className="flex justify-end mt-6">
        <Input
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          className="w-[300px]"
          placeholder="Tìm kiếm theo email"
        ></Input>
        <Button onClick={handleSearch} className="ml-3">
          <TfiReload />
        </Button>
      </div>

      {/* bảng employee */}
      <Table
        className="mt-5"
        columns={columns}
        dataSource={isSearch ? resultSearch : employees}
        pagination={{ pageSize: 5 }}
      />
      <Modal
        className="flex flex-col gap-4 items-center"
        open={showFormAdd}
        title="Thêm nhân viên"
        onCancel={() => closeFormAdd()}
        footer={[
          <Button key="back" onClick={() => closeFormAdd()}>
            Đóng
          </Button>,

          isUpdate ? (
            <Button key="submit" type="primary" onClick={() => addEmployee()}>
              Sửa
            </Button>
          ) : (
            <Button key="submit" type="primary" onClick={() => addEmployee()}>
              Thêm
            </Button>
          ),
        ]}
      >
        <div>
          <label>Họ và tên :</label>
          <Input
            value={inputFullName}
            required
            onChange={(event) => setInputFullName(event.target.value)}
            placeholder="Họ và tên"
          />
        </div>

        <div>
          <label>Ngày sinh :</label>
          <Input
            value={inputDOB}
            required
            onChange={(event) => setInputDOB(event.target.value)}
            type="date"
          ></Input>
        </div>

        <div>
          <label>Email :</label>
          <Input
            type="email"
            value={inputEmail}
            required
            onChange={(event) => checkEmailExist(event)}
            placeholder="Email"
          />
        </div>

        <div>
          <label>Địa chỉ :</label>
          <Input
            value={inputAddress}
            required
            onChange={(event) => setInputAddress(event.target.value)}
            placeholder="Địa chỉ"
          />
        </div>
        {error ? <h3 className="text-red-500">{error}</h3> : <></>}
      </Modal>
      <Modal
        className="flex flex-col gap-4 items-center"
        open={showFormDelete}
        title="Cảnh báo"
        onCancel={handleCancel}
        onOk={() => deleteEmployees(idDelete)}
      >
        <p>Bạn có chắc chắn muốn xóa chứ ?</p>
      </Modal>
    </div>
  );
}
