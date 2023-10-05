import React from "react";
import { Button, Col, div, Row } from "react-bootstrap";
import imga from "../../Images/Group 171.png";
import imgb from "../../Images/Group 173 (2).png";
const Section1 = () => {
  return (
    <div className="pt-4 section1cls">
      <div className="section1cls">
        <Row
          xs={1}
          md={2}
          className="justify-content-around  lg:text-base md:text-2xl  px-lg-5 mx-lg-3 px-md-4 pt-3 pb-3 pb-lg-5"
        >
          <Col md={5} lg={6} xs={8} className=" mt-md-5 pt-3 pt-md-5 ">
            <div className="md:leading-loose">
              <p className="fw-bold ">Discover the beauty of the tropics</p>
              <h1 className="fw-bold mt-lg-2 ">Tropical</h1>
              <h1 className="fw-bold mt-2 mb-2">Destinations</h1>
              <h2>For Student</h2>
            </div>
            {/* <p>
              <span className="fs-1 fw-bold">Tropical Destinations</span>
              <span className="fs-2 fw-bolder"> For Student</span>
            </p> */}
            <p className="mt-lg-5 fs-5 mb-lg-5">
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
              bibendum integer rutrum nisi. A nec nisl vitae{" "}
            </p>
            <Button
              className="rounded-5 fs-4 mt-2 mb-2 px-4 pt-2 pb-2"
              style={{ background: "#F27A44", border: "none" }}
            >
              SignUp
            </Button>
          </Col>
          <Col md={4} lg={4} xs={8}>
            <img src={imga} style={{ width: "100%" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section1;
