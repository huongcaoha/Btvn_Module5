import React, { useEffect, useState } from "react";
import { baseUrl } from "../../apis/instant";
import { Button, Input, message, Modal, Radio, Table } from "antd";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowForm, setIsShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [category, setCategory] = useState({
    id: "",
    categoryName: "",
    description: "",
    status: true,
  });

  const [categoryMessage, setCategoryMessage] = useState({
    categoryNameMessage: "",
    descriptionMessage: "",
    statusMessage: "",
  });

  const checkBlank = () => {
    if (!category.categoryName) {
      setCategory({
        ...categoryMessage,
        categoryNameMessage: "Category name can not blank",
      });
      return true;
    }
    if (!category.description) {
      setCategory({
        ...categoryMessage,
        descriptionMessage: "Description can not blank",
      });
      return true;
    }
    return false;
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCategory((pre) => ({ ...pre, [name]: value }));
  };

  const getListCategory = async () => {
    try {
      const response = await baseUrl.get(
        "api.myService.com/v1/admin/categories"
      );
      const newCategories = response.data.categories;
      setCategories(newCategories.map((cate) => ({ ...cate, key: cate.id })));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getListCategory();
  }, []);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current); // Cập nhật trang hiện tại
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      render: (_, __, index) => (currentPage - 1) * 5 + index + 1,
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => (value ? "Active" : "InActive"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-3">
          <Button type="primary">Edit</Button>
          <Button type="default" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const openForm = () => {
    setIsShowForm(true);
  };

  const closeForm = () => {
    setIsShowForm(false);
    setCategory({
      id: "",
      categoryName: "",
      description: "",
      status: true,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (checkBlank) {
      message.error("Create category error");
    } else {
      try {
        const response = baseUrl.post(
          "api.myService.com/v1/admin/categories",
          category
        );
        if (response) {
          message.success("Create category success");
          getListCategory();
        }
      } catch (error) {
        message.error("create category error");
      }
    }
  };

  return (
    <div className=" w-full p-[100px] ">
      <h1 className="m-7 text-center text-4xl font-bold">LIST CATEGORIES</h1>
      <div className="flex justify-end items-center p-8">
        <Button
          className="w-[150px] h-[40px]"
          type="primary"
          onClick={openForm}
        >
          Add New Category
        </Button>
      </div>
      <Table
        className="w-[80%] m-auto"
        dataSource={categories}
        columns={columns}
        pagination={{ pageSize: 5 }}
        onChange={handleTableChange}
      />

      <Modal
        onCancel={closeForm}
        open={isShowForm}
        footer={false}
        title={isUpdate ? "Form Update Category" : "Form Create Category"}
      >
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          className="flex flex-col gap-5 text-center"
        >
          <div>
            <label>Category name</label>
            <Input
              value={category.categoryName}
              name="categoryName"
              onChange={(e) => handleChangeInput(e)}
            ></Input>
          </div>

          <div>
            <label>Description</label>
            <Input
              value={category.description}
              name="description"
              onChange={(e) => handleChangeInput(e)}
            ></Input>
          </div>

          <div>
            <label className="mr-5">Status : </label>
            <Radio.Group
              value={category.status}
              name="status"
              onChange={(e) => handleChangeInput(e)}
            >
              <Radio checked={true} value={true}>
                Active
              </Radio>
              <Radio value={false}>InActive</Radio>
            </Radio.Group>
          </div>

          <div className="flex m-auto">
            <Button
              htmlType="submit"
              type="primary"
              className="w-[150px] h-[40px]"
            >
              {isUpdate ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
