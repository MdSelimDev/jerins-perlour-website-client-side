import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import AddService from "../DashboardPages/AddService/AddService";
import Book from "../DashboardPages/Book/Book";
import BookingList from "../DashboardPages/BookingList/BookingList";
import MakeAdmin from "../DashboardPages/MakeAdmin/MakeAdmin";
import ManageService from "../DashboardPages/ManageService/ManageService";
import OrderList from "../DashboardPages/OrderList/OrderList";
import Review from "../DashboardPages/Review/Review";
import "./Admin.css";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-main-box">
        <Row>
          <Col lg={2}>
            <div className="dashboard-list-main position-fixed">
              <div className="dashboard-list">
                <Link to="book">
                  <i className="fas fa-shopping-cart"></i> Book
                </Link>
              </div>
              <div className="dashboard-list">
                <Link to="bookinglist">
                  <i className="fas fa-hdd"></i> Booking List
                </Link>
              </div>
              <div className="dashboard-list">
                <Link to="review">
                  <i className="fas fa-comment-dots"></i> Review
                </Link>
              </div>
              <div className="dashboard-list">
                <Link to="orderlist">
                  <i className="fas fa-list-alt"></i> Order List
                </Link>
              </div>
              <div className="dashboard-list">
                <Link to="addservice">
                  <i className="fas fa-plus"></i> Add Service
                </Link>
              </div>
              <div className="dashboard-list">
                <Link to="makeadmin">
                  <i className="fas fa-user-plus"></i> Make Admin
                </Link>
              </div>
              <div className="dashboard-list">
                <Link to="manageservice">
                  <i className="fas fa-th-large"></i> Manage Service
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={10}>
            <div>
              <div className="router-item">
                <Routes>
                  <Route path="dashboard" element={<Book />} />
                  <Route path="book" element={<Book />} />

                  <Route path="bookinglist" element={<BookingList />} />
                  <Route path="review" element={<Review />} />
                  <Route path="orderlist" element={<OrderList />} />
                  <Route path="addservice" element={<AddService />} />
                  <Route path="makeadmin" element={<MakeAdmin />} />
                  <Route path="manageservice" element={<ManageService />} />
                </Routes>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Admin;
