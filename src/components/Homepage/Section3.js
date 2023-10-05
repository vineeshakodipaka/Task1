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
const Section3 = () => {
  const [data] = useState([
    {
      id: 1,
      images: imgA,
      content1: "Harvard University",
      content2: "Cambridge,Massachusetts,UK",
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
      content2: "Cambridge,Massachusetts,UK",
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
    <div className="px-lg-5 slide-container px-lg-5 pt-4 pb-4 ">
      <div>
        <Row className="pt-4 mx-md-5 mx-md-4">
          <h4 className="pt-3 pb-4 m-3">Our Destinations</h4>
          {/* Slider component */}

          <Slider {...settings} ref={sliderRef}>
            {data.map((item, index) => (
              <Col className="gap-3">
                <Card
                  className="rounded-4 m-3 pb-3"
                  key={index}
                  style={{
                    border: "none",
                  }}
                >
                  <Card.Img variant="top" src={item.images} />
                  <Card.Text className="fs-6 mt-4 fw-bold px-2  pb-2 pt-2">
                    {item.content1}
                  </Card.Text>
                  <Row className="justify-content-between">
                    <Col xs={9}>
                      <Card.Text className="px-2 fs-6">
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
          <div className="slide-btns mb-3 px-lg-5 px-md-5 justify-content-center mt-2 pb-2">
            <Button className="slide-btn" id="slide-btn" onClick={slidePrev}>
              <FiArrowLeft />
            </Button>
            <Button className="slide-btn" id="slide-btn" onClick={slideNext}>
              <FiArrowRight />
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Section3;
