import React from "react";
import { Col } from "reactstrap";
import ServicesCard from "./ServicesCard";
import guideImg from "../assets/images/guide.png";
import weatherImg from "../assets/images/weather.png";
import customizationImg from "../assets/images/customization.png";

const ServicesLists = () => {
  const servicesData = [
    {
      imgUrl: weatherImg,
      title: "Calculate Weather",
      desc: "lorem ha na",
    },
    {
      imgUrl: guideImg,
      title: "Best Tour Guide",
      desc: "lorem ha na",
    },
    {
      imgUrl: customizationImg,
      title: "Customization",
      desc: "lorem ha na",
    },
  ];
  return (
    <>
      {servicesData.map((item, index) => {
        return (
          <Col lg="3" key={index}>
            <ServicesCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default ServicesLists;
