import React, { useState } from "react";
import img1 from "../../Images/avatar.png";
import img2 from "../../Images/avatar (1).png";
import img3 from "../../Images/avatar (2).png";

import { Button, Card, Col, div, Row } from "react-bootstrap";
const Section2 = () => {
  const [data, setData] = useState([
    {
      imgages: img1,
      text: "Jenny Wilson1",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      imgages: img2,
      text: "Jenny Wilson2",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      imgages: img3,
      text: "Jenny Wilson3",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ]);

  return (
    <div className="pt-2 section2cls pt-md-5 mt-md-4">
      <div>
        <Row className="justify-content-around px-md-5 mx-md-5 pt-5 mt-5 col-xs-1">
          <Col xs={12} lg={5} md={12}>
            {data.map((item, index) => (
              <Card
                className="pt-3 pb-3 mb-3 p-md-2 rounded-4  lg:text-base md:text-3xl md:leading-loose"
                key={index}
                style={{
                  border: "none",
                  boxShadow: " 0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Row className="pt-3 pb-3 ">
                  <Col lg={3} md={4}>
                    <Card.Img
                      className="px-3 pt-md-4 pt-md-2"
                      src={item.imgages}
                      style={{ width: "150px" }}
                    />
                  </Col>

                  <Col lg={6} md={8}>
                    <Card.Text className="fw-bold">{item.text}</Card.Text>
                    <Card.Text>{item.para}</Card.Text>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col
            lg={4}
            xs={12}
            md={12}
            className="section2clstexts mt-5 pt-lg-1 pt-md-4 pt-5  lg:text-base md:text-3xl lg:leading-loose md:leading-loose"
          >
            <h1 className="fw-bold  lg:text-3xl md:text-3xl">
              Tropical Adventure
            </h1>
            <p className="lg:text-2xl md:text-3xl mt-2 mb-2">for Students.</p>
            <p className="fw-bold">
              Student Tropical Vacation: Relax and Recharge
            </p>
            <ul className="list-disc lg:mx-5 md:mx-5">
              <li>Lorem ipsum dolor sit amet </li>
              <li> Massa quis natoque sit quam </li>
              <li> Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
            </ul>
            <Button
              className="rounded-5 mt-2 px-4 mt-lg-4 md:text-base mt-md-4 pt-3 pb-3"
              style={{ background: "#F27A44", border: "none" }}
            >
              Explore More
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section2;
