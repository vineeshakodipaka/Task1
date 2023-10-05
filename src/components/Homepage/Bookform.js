import React, { useState } from "react";
import { Button, Card, Col, div, Form, InputGroup, Row } from "react-bootstrap";
import "./Bookform.css";
import imgz from "../../Images/Group 167.png";

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
        <Row className="px-lg-5 px-md-5 mx-lg-5 justify-content-around mx-md-2 pb-4">
          <Col md={5} lg={4} className="" xs={8}>
            <img
              src={imgz}
              className="mt-5 mt-md-0 pt-lg-0 mt-lg-0 "
              style={{ width: "100%" }}
              alt="Booking"
            />
          </Col>
          <Col md={6} xs={8} lg={6} className="mt-5  pt-lg-5 mx-lg-5 px-md-5">
            <Card
              className="p-3 pt-4 pb-4 rounded-4 mx-lg-5 "
              style={{
                background: "white",
                border: "none",
                boxShadow:
                  "0 4.424776077270508px 6.210212707519531px 0 rgba(0, 0, 0, 0.0283)",
              }}
            >
              <h5 className="mt-2 fw-bold">Book Now</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Row className="mb-4 ">
                <Form
                  className="mt-2 fw-bold bg-white "
                  onSubmit={handleFormSubmit}
                >
                  <Form.Group className="mb-3" as={Col} md={12}>
                    <Form.Label className="formlabel">CITY</Form.Label>
                    <InputGroup className="rounded-5">
                      <Form.Control
                        required
                        onChange={handleInputChange}
                        name="City"
                        className="labelholder px-4 pb-2"
                        type="text"
                        placeholder="placeholder"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Row>
                    <Form.Group
                      className="mb-3 position-relative"
                      as={Col}
                      md={6}
                    >
                      <Form.Label className="formlabel">Arrival</Form.Label>
                      <InputGroup className="rounded-5">
                        <Form.Control
                          name="Arrival"
                          onChange={handleInputChange}
                          className="labelholder px-4 pb-2"
                          required
                          type="text"
                          placeholder="10 October"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md={6}>
                      <Form.Label className="formlabel">Departure</Form.Label>
                      <InputGroup className="rounded-5">
                        <Form.Control
                          onChange={handleInputChange}
                          name="Departure"
                          className="labelholder px-4 pb-2"
                          required
                          type="text"
                          placeholder="11 October"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  {/* Input field with increment and decrement buttons */}
                  <Row>
                    <Form.Group className="mb-3" as={Col} md={6}>
                      <InputGroup className="mb-3">
                        <Button
                          required
                          className="incbtn  fw-bold fs-4"
                          variant="outline-secondary"
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                        <Form.Control
                          required
                          type="text"
                          value={`Value: ${formData.IncrementDecrementValue}`}
                          readOnly
                          className="text-center"
                        />
                        <Button
                          required
                          variant="outline-secondary"
                          className="decbtn fw-bold fs-4"
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md={6}>
                      <InputGroup className="mb-3">
                        <Button
                          className="incbtn  fw-bold fs-4"
                          variant="outline-secondary"
                          onClick={handleDecrement2}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="text"
                          value={`Value: ${formData.IncrementDecrementValue2}`}
                          readOnly
                          className="text-center"
                        />
                        <Button
                          variant="outline-secondary"
                          className="decbtn fw-bold fs-4"
                          onClick={handleIncrement2}
                        >
                          +
                        </Button>
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  <Button
                    className="rounded-4 p-3"
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
