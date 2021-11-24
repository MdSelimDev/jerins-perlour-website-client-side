import React from "react";
import { Spinner } from "react-bootstrap";
import "./FullPageLoader.css";

const FullPageLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
};

export default FullPageLoader;
