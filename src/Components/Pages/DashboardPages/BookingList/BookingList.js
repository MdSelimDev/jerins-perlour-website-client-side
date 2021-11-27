import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import UseAuth from "../../../Shared/context/UseAuth/UseAuth";
import SingleBooking from "./SingleBooking/SingleBooking";

const BookingList = () => {
  const { user } = UseAuth();

  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://polar-meadow-40946.herokuapp.com/order/email?email=${user?.email}`
      )
      .then((resutl) => {
        setOrder(resutl.data);
      });
  }, [user?.email]);

  console.log(order);

  return (
    <div>
      <h1 className="all-head-title text-center py-5">My order List</h1>
      <div>
        <Container>
          <Row>
            {order.map((ord) => (
              <SingleBooking
                key={ord._id}
                setOrder={setOrder}
                order={order}
                data={ord}
              ></SingleBooking>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BookingList;
