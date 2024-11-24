import React, { useState } from "react";

export default function ItemProduct({ item }) {
  let [quantity, setQuantity] = useState(item.quantity - 1);
  let rootPrice = item.price;
  let price = rootPrice * quantity;
  const up = () => {
    setQuantity(quantity + 1);
  };

  const down = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  onClick={() => alert(item.productName)}
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="img-fluid rounded-3"
                  alt="Shopping item"
                  style={{ width: 65 }}
                />
              </div>
              <div className="ms-3">
                <h5>{item.productName}</h5>
                <p className="small mb-0">{item.description}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: 50 }}>
                <h5 className="fw-normal mb-0">
                  <button onClick={() => up()}>+</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={() => down()}>-</button>
                </h5>
              </div>
              <div style={{ width: 80 }}>
                <h5 className="mb-0">${price}</h5>
              </div>
              <a href="#!" style={{ color: "#cecece" }}>
                <i className="fas fa-trash-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
