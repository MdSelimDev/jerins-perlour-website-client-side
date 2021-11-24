import React from "react";
import UseAuth from "../../../Shared/context/UseAuth/UseAuth";
import FullPageLoader from "../../../Shared/FullPageLoader/FullPageLoader";
import Banner from "../Banner/Banner";
import Facial from "../Facial/Facial";
import HomeContact from "../HomeContact/HomeContact";
import HomeServices from "../HomeServices/HomeServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const { loader } = UseAuth();

  return (
    <div>
      <Banner />
      <HomeServices />
      <Facial />
      <Testimonials />
      <HomeContact />
      {loader && <FullPageLoader />}
    </div>
  );
};

export default Home;
