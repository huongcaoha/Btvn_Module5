import React from "react";

export default function ItemProduct({ item }) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
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
                <h5 className="fw-normal mb-0">{item.quantity}</h5>
              </div>
              <div style={{ width: 80 }}>
                <h5 className="mb-0">${item.price}</h5>
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
