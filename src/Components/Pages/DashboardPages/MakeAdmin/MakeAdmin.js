import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const { register, reset, handleSubmit } = useForm();

  const HandleMakeAdmin = (d) => {
    console.log(d);
    reset();
  };

  return (
    <div>
      <h1 className="all-head-title text-center py-5">Make An Admin</h1>
      <div className="make-admin-box">
        <form
          onClick={handleSubmit(HandleMakeAdmin)}
          className="bookservice-form-box"
        >
          <input
            type="email"
            {...register("email")}
            placeholder="enter admin email"
            required
          />
          <input
            type="submit"
            value="Make Admin"
            className="common-button text-white border-0"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
