import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Upgrade() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card>
              <div className="header text-center">
                <h4 className="title">This is about azai group</h4>
                <p className="category">
                  Are you looking for more components? Please check our Premium
                  Version of Light Bootstrap Dashboard React.
                </p>
                <br></br>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
