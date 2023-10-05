import React, { useState } from "react";
import { Button, Col, div, Row } from "react-bootstrap";
import imgx from "../../Images/Mask group.png";
import imgA1 from "../../Images/Avatar (3).png";
import imgB1 from "../../Images/Avatar (4).png";
import imgC1 from "../../Images/Avatar (5).png";
import imgy from "../../Images/Subtract (1).png";
import Bookform from "./Bookform";
const Section4 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      images: imgA1,
      content1: "Corey Korsgaard",
      content2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 2,
      images: imgB1,
      content1: "Jakob Aminoff",
      content2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      images: imgC1,
      content1: "Carla Press",
      content2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ]);
  return (
    <div className="pt-2 section4cls mt-md-4 px-lg-5 mx-lg-5">
      <div>
        {/* Get 20% off for student */}
        <Row className="section4clsrow1 justify-content-around mx-md-2 pt-md-2 pb-md-5 mb-md-5 px-lg-5 pb-4 ">
          <Col
            md={10}
            lg={6}
            xs={5}
            className="mt-5 pt-5 mx-lg-0 mx-md-5 mx-lg-0 px-lg-0 pb-3 md:leading-relaxed px-md-3 lg:text-base md:text-3xl"
          >
            <img src={imgy} className="lg:mx-64" />
            <p className="fw-bold pb-3 ">Get 20% off for student</p>
            <h3 className="fw-bold pb-3 lg:text-3xl  md:text-4xl">
              Student discounts available.
            </h3>
            <p className="pb-3  lg:text-3xl  md:text-4xl ">
              Get ready for some fun in the sun!
            </p>

            <ul class="list-disc lg:mx-4 md:mx-5">
              <li>Lorem ipsum dolor sit amet </li>
              <li> Massa quis natoque sit quam </li>
              <li> Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <Button
              className="rounded-5 mt-4"
              style={{ background: "#F27A44", border: "none" }}
            >
              Explore More
            </Button>
          </Col>
          <Col lg={4} md={8} xs={5} className="mt-lg-4 mt-5  pt-lg-0">
            <img
              src={imgx}
              className="mt-5 mt-lg-5 "
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        {/* Bookform row */}
        <Bookform />
        {/* Testiminals row */}
        <Row className="Testiminalsrow  pt-4 px-md-5 pb-4 mx-md-4 mx-lg-5 px-lg-4">
          <p className="text-center mb-4 pt-4 pb-3 lg:text-4xl md:text-4xl">
            Testiminals
          </p>
          <Row className="px-lg-5 justify-content-center" lg={3} md={1}>
            {data.map((dta, ind) => {
              return (
                <>
                  <Col md={8} className="mb-5">
                    <div key={dta.id} className="text-center">
                      <center>
                        <img src={dta.images} width="100px" />
                      </center>
                      <h6 className="pt-2 pb-2 lg:text-base fw-bold mt-3 md:text-3xl">
                        {dta.content1}
                      </h6>
                      <div className="mx-5 px-5 mb-5">
                        <hr />
                      </div>
                      <p className="lg:text-base md:text-3xl">{dta.content2}</p>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Row>
        {/*Row: Student Special: */}
        <Row className="studentrow text-center justify-content-center mt-lg-5  pt-lg-5 mt-3 pb-3">
          <Col lg={5} xs={8} className="px-lg-4 lg:px-4 mt-4">
            <h3 className="lg:text-3xl md:text-3xl fw-bold md:px-4  ">
              Student Special: Discounted rates on tropical getaways!
            </h3>
            <p className="mt-4 lg:text-base md:text-2xl">
              Let's embody your beautiful ideas together, simplify the way you
              visualize your next big things.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section4;
