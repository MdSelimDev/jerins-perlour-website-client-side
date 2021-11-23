import React from "react";
import Banner from "../Banner/Banner";
import Facial from "../Facial/Facial";
import HomeContact from "../HomeContact/HomeContact";
import HomeServices from "../HomeServices/HomeServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeServices />
      <Facial />
      <Testimonials />
      <HomeContact />
    </div>
  );
};

export default Home;
