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
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    },
    {
      imgages: img2,
      text: "Jenny Wilson2",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing...1212",
    },
    {
      imgages: img3,
      text: "Jenny Wilson3",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing...4545444",
    },
  ]);

  return (
    <div className="pt-2 section2cls">
      <div>
        <Row className="justify-content-around px-lg-5 mx-lg-5 pt-5 mt-5">
          <Col md={5} lg={5}>
            {data.map((item, index) => (
              <Card
                className="pt-3 pb-3 mb-3 p-md-2 rounded-4"
                key={index}
                style={{
                  border: "none",
                  boxShadow:
                    "0 3.1255478858947754px 5.925629615783691px 0 rgba(0,0,0,0.0364)",
                }}
              >
                <Row className="pt-3 pb-3">
                  <Col lg={3} xs={3}>
                    <Card.Img
                      className="px-3"
                      src={item.imgages}
                      style={{ width: "100px" }}
                    />
                  </Col>
                  <Col lg={6} xs={6}>
                    <Card.Text className="fw-bold">{item.text}</Card.Text>
                    <Card.Text>
                      <h6>{item.para}</h6>
                    </Card.Text>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col md={5} lg={4} className="section2clstexts mt-5 pt-md-1 pt-5">
            <h1>Tropical Adventure </h1>
            <p className="fs-2">for Students.</p>
            <p className="fw-bold">
              Student Tropical Vacation: Relax and Recharge
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet </li>
              <li> Massa quis natoque sit quam </li>
              <li> Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
            </ul>
            <Button
              className="rounded-5 mt-2 px-4 pt-3 pb-3"
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
