import axios from "axios";
import React from "react";
import { Col } from "react-bootstrap";
import Swal from "sweetalert2";
import "./SingleBooking.css";

const SingleBooking = ({ data, order, setOrder }) => {
  const HandleDeleteAnOrder = (id) => {
    Swal.fire({
      title: "Do you want Delete Order ?",
      showDenyButton: true,
      confirmButtonText: "Delete Order",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://jerins-perlour-server.up.railway.app/order/${id}`)
          .then((result) => {
            if (result.data.deletedCount) {
              Swal.fire("Deleted!", "Order Succesfully", "success");
              const newOrder = order.filter((datas) => id !== datas._id);
              setOrder(newOrder);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Order", "Can't Delete . Thanks", "info");
      }
    });
  };

  return (
    <Col lg={6} sm={12}>
      <div className="p-5 bg-white single-order-box mb-5">
        <div className="book-order-dashboard d-flex justify-content-between">
          <div>
            <img
              className="single-order-img"
              src={data?.orderdata?.img}
              alt=""
            />
          </div>
          <div>
            <span className="order-review-button">Pending</span>
          </div>
        </div>
        <h3 className="single-order-title">{data?.orderdata?.title}</h3>
        <p className="single-order-description">
          {data?.orderdata?.description}
        </p>
        <button
          onClick={() => HandleDeleteAnOrder(data?._id)}
          className="common-button mb-0 border-0"
        >
          Delete Order <i className="far fa-trash-alt ms-2"></i>
        </button>
      </div>
    </Col>
  );
};

export default SingleBooking;
