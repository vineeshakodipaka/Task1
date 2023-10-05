import React, { useState } from "react";
import { Button, Card, Col, div, Form, InputGroup, Row } from "react-bootstrap";
import "./Bookform.css";
import imgz from "../../Images/Group 167.png";
import imgy from "../../Images/Subtract (1).png";
const Bookform = () => {
  const [formData, setFormData] = useState({
    City: "",
    Arrival: "",
    Departure: "",
    IncrementDecrementValue: 0,
    IncrementDecrementValue2: 0,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIncrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      IncrementDecrementValue: prevData.IncrementDecrementValue + 1,
    }));
  };
  const handleDecrement = () => {
    if (formData.IncrementDecrementValue > 0) {
      setFormData((prevData) => ({
        ...prevData,
        IncrementDecrementValue: prevData.IncrementDecrementValue - 1,
      }));
    }
  };
  //handleIncrement2
  const handleIncrement2 = () => {
    setFormData((prevData) => ({
      ...prevData,
      IncrementDecrementValue2: prevData.IncrementDecrementValue2 + 1,
    }));
  };

  const handleDecrement2 = () => {
    if (formData.IncrementDecrementValue > 0) {
      setFormData((prevData) => ({
        ...prevData,
        IncrementDecrementValue2: prevData.IncrementDecrementValue2 - 1,
      }));
    }
  };
  return (
    <div className="bookformcls">
      <div>
        <Row
          className="px-lg-5 mx-lg-5 md:ms-16  lg:text-base md:text-3xl md:leading-relaxed justify-content-between  pb-4
         md:flex md:flex-col-reverse  lg:flex-row  "
        >
          <Col
            md={8}
            lg={4}
            className="mx-lg-1 md:ms-8  bookformimgcol  position-relative"
            xs={8}
          >
            <img
              src={imgz}
              className="mt-5  md:ms-16  mt-md-0 pt-lg-4 mt-lg-0"
              style={{ width: "100%" }}
              alt="Booking"
            />
            <div className="ms-lg-5 mx-lg-5 px-lg-5">
              <img
                src={imgy}
                className="ms-lg-5 ps-lg-5  position-absolute end-25 start-50 mt-lg-5 pt-lg-5 top-0"
              />
            </div>
          </Col>
          <Col
            md={9}
            xs={8}
            lg={6}
            className="mt-5  md:ms-8    pt-lg-5 mx-lg-5 px-md-2"
          >
            <Card
              className="p-3 pt-4  md:ms-16   rounded-4 mx-lg-5 "
              style={{
                background: "white",
                border: "none",
                boxShadow: " 0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h5 className="mt-2 fs-3 fw-bold mb-3">Book Now</h5>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <Row className="mb-2">
                <Form
                  className="mt-2 fw-bold bg-white "
                  onSubmit={handleFormSubmit}
                >
                  <Form.Group className="mb-4" as={Col} md={12}>
                    <Form.Label className="formlabel ">CITY</Form.Label>
                    <InputGroup className="rounded-5">
                      <Form.Control
                        required
                        onChange={handleInputChange}
                        name="City"
                        className="labelholder px-4 pb-2 lg:text-base md:text-3xl"
                        type="text"
                        placeholder="placeholder"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Row>
                    <Form.Group
                      className="mb-4 position-relative"
                      as={Col}
                      md={6}
                    >
                      <Form.Label className="formlabel">Arrival</Form.Label>
                      <InputGroup className="rounded-5">
                        <Form.Control
                          name="Arrival"
                          onChange={handleInputChange}
                          className="labelholder px-4 pb-2 lg:text-base md:text-3xl"
                          required
                          type="text"
                          placeholder="10 October"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-4" as={Col} md={6}>
                      <Form.Label className="formlabel">Departure</Form.Label>
                      <InputGroup className="rounded-5">
                        <Form.Control
                          onChange={handleInputChange}
                          name="Departure"
                          className="labelholder lg:text-base md:text-3xl px-4 pb-2"
                          required
                          type="text"
                          placeholder="11 Octobe "
                        />
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  {/* Input field with increment and decrement buttons */}
                  <Row>
                    <Form.Group className="mb-3" as={Col} md={6}>
                      <Form.Label className="formlabel">STAR</Form.Label>
                      <InputGroup className="mb-3">
                        <Button
                          required
                          className="incbtn  fw-bold lg:text-base md:text-3xl"
                          variant="outline-secondary"
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                        <Form.Control
                          required
                          type="text"
                          value={` ${formData.IncrementDecrementValue}`}
                          readOnly
                          className="lg:text-base md:text-3xl"
                        />
                        <Button
                          required
                          variant="outline-secondary"
                          className="decbtn fw-bold lg:text-base md:text-3xl"
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md={6}>
                      <Form.Label className="formlabel">ROOM</Form.Label>
                      <InputGroup className="mb-3">
                        <Button
                          className="incbtn  fw-bold lg:text-base md:text-3xl"
                          variant="outline-secondary"
                          onClick={handleDecrement2}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="text"
                          value={` ${formData.IncrementDecrementValue2}`}
                          readOnly
                          className="lg:text-base md:text-3xl"
                        />
                        <Button
                          variant="outline-secondary"
                          className="decbtn fw-bold lg:text-base md:text-3xl"
                          onClick={handleIncrement2}
                        >
                          +
                        </Button>
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  <Button
                    className="rounded-4 p-3 lg:text-base md:text-2xl"
                    style={{
                      background: "black",
                      color: "white",
                      border: "none",
                    }}
                    type="submit"
                  >
                    BOOK NOW
                  </Button>
                </Form>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Bookform;
