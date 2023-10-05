import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <Footer />
    </div>
  );
};

export default Home;
