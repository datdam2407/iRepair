import React from 'react';
// import Header from "./components/Header/headerPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../Header/headerPage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../asset/images/logo.png";
import Electric from "../../asset/images/Electric .jpg";
import Plumber from "../../asset/images/Plumber.jpg";
import Car from "../../asset/images/car.png";
import Talk from "../../asset/images/talk.png";
import Gift from "../../asset/images/gift.png";
import "./MainContent.css";



import {
  Row,
  Button,
  Input,
  Col,
  InputGroup,
  Form,
} from "reactstrap";
import {
  faSearch,

} from "@fortawesome/free-solid-svg-icons";
export default function MainContent() {
  return (
    <>
      <Router>

        <Row className="fixed">
          <Col md={{ size: 2, offset: 1 }} className="logo">
            <img src={logo} />
          </Col>
          <Col md={{ size: 2, offset: 1 }} className="search-header">
            <Form
              onSubmit={(e) => {
                // onSubmitSearch(e);
              }}
            >
              <InputGroup>
                <Input type="text" placeholder="Search" id="search"></Input>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                {/* <Button className="border border-gray">               
              </Button> */}
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Header />
        <Col>
          <Row className="menu-service">
            <Col md={1}> </Col>
            <Col md={2}>
              <ul className="nav nav-pills flex-column">
                <li className="nav-link active">List of Serivice</li>
                <li className="nav-item">Plumber</li>
                <li className="nav-item">Housing renovation</li>
                <li className="nav-item">Electrical Appliance</li>
                <li className="nav-item">Locksmith</li>
                <li className="nav-item">Motocycle Repair</li>
                <li className="nav-item">Motocycle Repair</li>
                <li className="nav-item">Motocycle Repair</li>
                <li className="nav-item">Motocycle Repair</li>
              </ul>
            </Col>
            {/* <Col md={1}></Col> */}
            <Col md={6}>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={Plumber} alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={Electric} alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={logo} alt="Third slide" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </Col>
            {/* <Col md={1}></Col> */}
            <Col md={2}>
              <ul className="nav nav-pills flex-column">
                <li className="nav-link active-2">List of Serivice</li>
                <Row>
                  <img className="image-service" src={Plumber} />
                </Row>
                <Row>
                  <img className="image-service" src={Electric} />
                </Row>
              </ul>
            </Col>
            {/* <Col md={2}></Col> */}
          </Row>
          <Row className="fixed-service">
            <Col md={1}> </Col>
            <Col md={3}>
              <div className="support-body1">
                <Row>
                  <Col md={1}></Col>
                  {/* <Col></Col> */}
                  <Col>
                    <img src={Car} />
                    Supporting Online 24/24
                    We are ready to support for you when you have a problem
                  </Col>
                </Row>
                <br />

              </div>
            </Col>
            <Col md={3}>
              <div className="support-body1">
                <Row>
                  <Col md={1}></Col>
                  {/* <Col></Col> */}
                  <Col>
                    <img src={Talk} />
                    Supporting Online 24/24
                    We are ready to support for you when you have a problem
                  </Col>
                </Row>
                <br />
              </div>
            </Col>
            <Col md={3}>
              <div className="support-body1">
                <Row>
                  <Col md={1}></Col>
                  {/* <Col></Col> */}
                  <Col>
                    <img src={Gift} />
                    Daily Gifting
                    More point are waiting for customer and special gift
                  </Col>
                </Row>
                <br />
              </div>
            </Col>
          </Row>
        </Col>
        <Row className="fixed">
          <Col>
            <Switch>
              {/* <Route path="/" exact component={Login2} /> */}
              {/* <Route path="/Admin" component={AdminPage} /> */}
              {/* <Route path="/Admin" component={use} /> */}
            </Switch>
          </Col>
        </Row>
      </Router>
    </>
  )
}
