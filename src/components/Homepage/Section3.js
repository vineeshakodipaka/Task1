import React, { useState } from "react";
import imgA from "../../Images/card-image.png";
import imgB from "../../Images/card-image (1).png";
import imgC from "../../Images/card-image (2).png";
import imgD from "../../Images/card-image (3).png";
import menu from "../../Images/Icons.png";
import { Card, Col, div, Row, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./Section3.css";
import { BsFillStarFill } from "react-icons/bs";
const Section3 = () => {
  const [data] = useState([
    {
      id: 1,
      images: imgA,
      content1: "Harvard University",
      content2: "Cambridge,Massachusets,UK",
    },
    {
      id: 2,
      images: imgB,
      content1: "Oxford University",
      content2: "Oxford, England",
    },
    {
      id: 3,
      images: imgC,
      content1: "Stanford University",
      content2: "Stanford, California",
    },
    {
      id: 4,
      images: imgD,
      content1: "Nanyang Technological University",
      content2: "Nanyang Ave,Singapura",
    },
    {
      id: 5,
      images: imgA,
      content1: "Harvard University",
      content2: "Cambridge,Massachusets,UK",
    },
    {
      id: 6,
      images: imgB,
      content1: "Oxford University",
      content2: "Oxford, England",
    },
    {
      id: 7,
      images: imgC,
      content1: "Stanford University",
      content2: "Stanford, California",
    },
    {
      id: 8,
      images: imgD,
      content1: "Nanyang Technological University",
      content2: "Nanyang Ave,Singapura",
    },
  ]);

  const [activeButton, setActiveButton] = useState(0); // State to track active button

  // Ref for slider
  const sliderRef = React.useRef(null);

  // Settings for the slider
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Extra-large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // iPad mini and similar small screens
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  // Function to slide to the next item
  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  // Function to slide to the previous item
  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slide-container  pt-4 pb-4  lg:text-base md:text-3xl">
      <div>
        <Row className="pt-4 mx-md-5 mx-md-4 px-md-5">
          <h4 className="pt-3 pb-4 m-3 fw-bold lg:text-3xl md:text-5xl">
            Our Destinations
          </h4>
          {/* Slider component */}

          <Slider {...settings} ref={sliderRef}>
            {data.map((item, index) => (
              <Col>
                <Card
                  className="rounded-4 m-2 pb-4 position-relative"
                  key={index}
                  style={{
                    border: "",
                    // boxShadow: " 0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Card.Img variant="top" src={item.images} width="100%" />
                  <Row className="justify-content-between position-absolute bottom-40 ">
                    <Col
                      md={1}
                      lg={6}
                      className="lg:text-base md:text-2xl lg:px-0 md:px-5 pb-4"
                    >
                      <Button
                        className="px-3  lg:px-1 pt-2 pb-2 rounded-pill md:mx-8 lg:mx-5 lg:text-base md:text-2xl"
                        style={{
                          border: "none",
                          background: "#FFFFFF",
                          color: "black",
                        }}
                      >
                        <span className="d-flex">
                          4.8
                          <BsFillStarFill style={{ color: "yellow" }} />
                        </span>
                      </Button>
                    </Col>
                    <Col md={1} lg={4}>
                      <Button
                        className="px-4  lg:px-1 pt-2 pb-2 rounded-pill md:mx-16  lg:mx-5  lg:text-base md:text-2xl"
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "white",
                        }}
                      >
                        Explore
                      </Button>
                    </Col>
                  </Row>
                  <Card.Text className="mt-4 fw-bold px-lg-2 px-md-4 pb-2 pt-2">
                    {item.content1}
                  </Card.Text>
                  <Row className="justify-content-between">
                    <Col xs={9}>
                      <Card.Text className="px-2 px-md-4 px-lg-2 pt-4 lg:text-base ">
                        {item.content2}
                      </Card.Text>
                    </Col>
                    <Col xs={3}>
                      <Card.Img src={menu} style={{ width: "40px" }} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Slider>
          {/* Buttons to navigate the slider */}
          <div className="slide-btns mb-3 px-lg-5 px-md-5 justify-content-center mt-5 pb-2">
            <Button
              id="slide-btn"
              onClick={slidePrev}
              className={`slide-btn   ${activeButton === 1 ? "active" : ""}`}
              onMouseEnter={() => setActiveButton(1)}
            >
              <FiArrowLeft className="icon md:text-4xl" />{" "}
              {/* Add class "icon" to the icon */}
            </Button>
            <Button
              className={`slide-btn  ${activeButton === 1 ? "active" : ""}`}
              onMouseEnter={() => setActiveButton(1)}
              id="slide-btn"
              onClick={slideNext}
            >
              <FiArrowRight className="icon  md:text-4xl" />{" "}
              {/* Add class "icon" to the icon */}
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Section3;
