import React, { useEffect, useState } from "react";
import { baseUrl } from "../../apis/instant";
import { Button, Input, message, Modal, Radio, Table } from "antd";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowForm, setIsShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [category, setCategory] = useState({
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
    let rs = false;
    if (!category.categoryName) {
      setCategoryMessage({
        ...categoryMessage,
        categoryNameMessage: "Category name can not blank",
      });
      rs = true;
    } else {
      setCategoryMessage({
        ...categoryMessage,
        categoryNameMessage: "",
      });
    }
    if (!category.description) {
      setCategoryMessage((pre) => {
        return { ...pre, descriptionMessage: "Description can not blank" };
      });
      rs = true;
    } else {
      setCategoryMessage((pre) => {
        return { ...pre, descriptionMessage: "" };
      });
    }
    return rs;
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCategory((pre) => ({ ...pre, [name]: value }));
    checkBlank();
  };

  const getListCategory = async () => {
    try {
      const response = await baseUrl.get(
        `api.myService.com/v1/admin/categories?page=${currentPage - 1}`
      );

      setTotalPage(response.data.totalPage);
      const newCategories = response.data.categories;
      setCategories(newCategories.map((cate) => ({ ...cate, key: cate.id })));
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getListCategory();
  }, [currentPage]);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination); // Cập nhật trang hiện tại
  };

  const deleteCategory = (id) => {
    const response = baseUrl.delete(
      `api.myService.com/v1/admin/categories/${id}`
    );
    if (response) {
      message.success("delete success");
    }
    setCurrentPage(0);
  };

  const showConfirm = (id) => {
    Modal.confirm({
      title: "Xác Nhận Xóa",
      content: "Bạn có chắc chắn muốn xóa mục này?",
      okText: "Có",
      okType: "danger",
      cancelText: "Không",
      onOk() {
        deleteCategory(id);
      },
      onCancel() {},
    });
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
          <Button onClick={() => showConfirm(record.id)} type="default" danger>
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
      categoryName: "",
      description: "",
      status: true,
    });

    setCategoryMessage({
      categoryName: "",
      description: "",
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (checkBlank()) {
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
          closeForm();
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
        pagination={{
          total: totalPage * 5, // Giả sử mỗi trang có 10 bản ghi
          current: currentPage, // Trang hiện tại
          pageSize: 5, // Số bản ghi trên mỗi trang
          onChange: (page) => {
            handleTableChange(page);
          },
        }}
        // onChange={handleTableChange}
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
            {categoryMessage.categoryNameMessage ? (
              <p className="text-red-600">
                {categoryMessage.categoryNameMessage}
              </p>
            ) : (
              <></>
            )}
          </div>

          <div>
            <label>Description</label>
            <Input
              value={category.description}
              name="description"
              onChange={(e) => handleChangeInput(e)}
            ></Input>
            {categoryMessage.descriptionMessage ? (
              <p className="text-red-600">
                {categoryMessage.descriptionMessage}
              </p>
            ) : (
              <></>
            )}
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
