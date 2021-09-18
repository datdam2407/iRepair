
import React from "react";
import {
  Container,
  Row,
  Col,
  Label,
  UncontrolledCarousel,
} from "reactstrap";
// reactstrap components
const carouselItems = [
  {
    src: require("assets/img/Plumber.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/Electric .jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/chester-wade.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];
export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
             
            
        <div className="content-center brand">
        <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
          <h1 className="h1-seo">Azai Repair</h1>
          <h3 className="d-none d-sm-block">
          What problem do you have, I can help you. 
          </h3>
        </div>
      </Container>
    </div>
  );
}
