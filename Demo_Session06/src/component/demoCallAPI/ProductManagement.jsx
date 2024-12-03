import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Button, Image, message } from "antd";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm state loading
  const [error, setError] = useState(null); // Thêm state error
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (showProductDetail) {
      const fetchProductDetail = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/api.myService.com/v1/products/1"
          );
          setProductDetails(response.data);
        } catch (err) {
          setError(err.message); // Cập nhật state với lỗi nếu có
        } finally {
          setLoading(false); // Đặt loading thành false khi hoàn tất
        }
      };
      fetchProductDetail();
    }
  }, [showProductDetail]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api.myService.com/v1/products"
        );
        setProducts(response.data.products); // Cập nhật state với dữ liệu nhận được
      } catch (err) {
        setError(err.message); // Cập nhật state với lỗi nếu có
      } finally {
        setLoading(false); // Đặt loading thành false khi hoàn tất
      }
    };
    fetchProducts(); // Gọi hàm fetch
  }, []);

  const showDetail = () => {
    message.success("show success !");
    setShowProductDetail(true);
  };

  if (loading) return <div>Loading...</div>; // Hiển thị Loading khi đang tải
  if (error) return <div>Error: {error}</div>; // Hiển thị lỗi nếu có

  return (
    <div className="">
      <Header />
      {console.log(productDetails)}
      <h1 className="text-4xl text-center mt-5">List Product</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  p-[50px] gap-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-[250px] h-[300px] border shadow-lg rounded-xl"
          >
            <div className="bg-[url('https://duhocsunny.edu.vn/wp-content/uploads/2023/02/Ve-dep-diu-dang-cua-gai-Han-Quoc.jpg')]  bg-cover bg-center h-[200px] w-full"></div>
            <h3 className="text-center text-xl font-bold text-orange-400 mt-3">
              {product.productName}
            </h3>
            <div className="flex mt-3">
              <Button
                onClick={() => showDetail()}
                className="m-auto"
                type="primary"
              >
                View Product Detail
              </Button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
