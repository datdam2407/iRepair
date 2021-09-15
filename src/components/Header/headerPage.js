import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
} from "reactstrap";
import "./headerPage.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../asset/images/logo.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  FormGroup,
  Label,
  Input,
  DropdownItem,
  Spinner,
} from "reactstrap";
import { validPassword } from "../Regex";
// import { postWithToken, postWithTokenParams } from "./ReadAPI";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState(true);
  const [modal, setModalLogOut] = useState(false);
  const [modalChangePassword, setModalChangePassword] = useState(false);
  const toggleChangePassword = () =>
    setModalChangePassword(!modalChangePassword);
  const toggleLogOut = () => setModalLogOut(!modal);
  const [errMessage, setErrMessage] = useState("");
  const [errNewMessage, setErrNewMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const color = "#B22222";

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    oldPassword !== "" &&
    newPassword !== "" &&
    validPassword.test(newPassword) &&
    validPassword.test(oldPassword)
      ? setButton(false)
      : setButton(true);
  }, [oldPassword, newPassword]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setButton(true);
  //   postWithToken(
  //     "api/users?oldPassword=" +
  //       e.target.OldPassword.value +
  //       "&newPassword=" +
  //       e.target.NewPassword.value,
  //     {},
  //     localStorage.getItem("token")
  //   )
  //     .then((res) => {
  //       setButton(false);
  //       if (
  //         res.status === 200 &&
  //         localStorage.getItem("role") === "ROLE_ADMIN"
  //       ) {
  //         window.location = "/admin";
  //       }
  //       if (
  //         res.status === 200 &&
  //         localStorage.getItem("role") === "ROLE_STAFF"
  //       ) {
  //         window.location = "/staff";
  //       }
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 401)
  //         setErrMessage(err.response.data.message);
  //     });
  // }

  const token = localStorage.getItem("token");
  let check;
  if (token === null) {
    check = "NOT_LOGGED_IN";
  } else {
    check = "LOGGED_IN";
  }

  function handleOnChangeOldPass(e) {
    setOldPassword(e.target.value);
    validPassword.test(e.target.value)
      ? setErrMessage("")
      : setErrMessage("Password must be at least 6 characters long");
  }

  function handleOnChangeNewPass(e) {
    setNewPassword(e.target.value);
    validPassword.test(e.target.value)
      ? setErrNewMessage("")
      : setErrNewMessage("Password must be at least 6 characters long");
  }

  return (
    <div className="container-user-list-1">
      <Navbar color="light" light expand="md" style={{ maxHeight: "100%" }}>
        <Col md={2}>
          <NavbarBrand className="header-home" href="#">
            iRepair.
          </NavbarBrand>
        </Col>
        <Col md={2}>
          <NavbarBrand className="header-home" href="#">
            Service
          </NavbarBrand>
        </Col>
        <Col md={2}>
          <NavbarBrand className="header-home" href="#">
            Hotline
          </NavbarBrand>
        </Col>
        <Col md={2}>
          <NavbarBrand className="header-home" href="#">
            Information
          </NavbarBrand>
        </Col>
        <Col md={2}>
          <NavbarBrand className="header-home" href="#">
            Voucher
          </NavbarBrand>
        </Col>
        {/* <Col md={7}></Col> */}
        <Col md={1}>
          <NavbarToggler onClick={toggle} className="mr-auto" />
          {check === "NOT_LOGGED_IN" ? (
            <UncontrolledDropdown></UncontrolledDropdown>
          ) : (
            <Collapse className="dropdown" isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {localStorage.getItem("username") === ""
                      ? "Login"
                      : localStorage.getItem("username")}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <a
                        onClick={() => {
                          // ChangePassword(e);
                          setModalChangePassword(true);
                        }}
                        data-item="Logout"
                        className="nav-links"
                      >
                        Change Password
                      </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a
                        onClick={() => {
                          // Logout(e);
                          setModalLogOut(true);
                        }}
                        data-item="Logout"
                        className="nav-links"
                      >
                        Logout
                      </a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          )}
        </Col>
      </Navbar>
      <Modal isOpen={modalChangePassword} toggle={toggleChangePassword}>
        <ModalHeader
          style={{ color: "#cf2338" }}
          // close={closeBtn(toggleChangePassword)}
        >
          Change Password
        </ModalHeader>
        <Form
          onSubmit={(e) => {
            // handleSubmit(e);
          }}
        >
          <ModalBody>
            <FormGroup>
              <Col>
                <Row>
                  <Col md={4}>
                    <Label for="password">Old Password: </Label>
                  </Col>
                  <Col md={8}>
                    <Input
                      type="password"
                      name="OldPassword"
                      id="OldPassword"
                      placeholder="Old Password"
                      onChange={(e) => {
                        handleOnChangeOldPass(e);
                      }}
                      defaultValue={oldPassword}
                      required
                    />
                  </Col>
                </Row>
                <p
                  id="errPwMessage"
                  style={{
                    color: color,
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "0%",
                    marginBottom: "0%",
                  }}
                >
                  &nbsp;{errMessage}
                </p>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Row>
                  <Col md={4}>
                    <Label for="password">New Password: </Label>
                  </Col>
                  <Col md={8}>
                    <Input
                      type="password"
                      name="NewPassword"
                      id="NewPassword"
                      placeholder="New Password"
                      onChange={(e) => {
                        handleOnChangeNewPass(e);
                      }}
                      defaultValue={newPassword}
                      required
                    />
                  </Col>
                </Row>
                <p
                  id="errNewPwMessage"
                  style={{
                    color: color,
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "0%",
                    marginBottom: "0%",
                  }}
                >
                  &nbsp;{errNewMessage}
                </p>
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button disabled={button} color="danger">
              Save
            </Button>
            <button className="btn--cl" onClick={toggleChangePassword}>
              Cancel
            </button>
          </ModalFooter>
        </Form>
      </Modal>

      <Modal isOpen={modal} toggle={toggleLogOut}>
        <ModalHeader
          style={{ color: "#B22222" }}
          // close={closeBtn(toggleLogOut)}
          // toggle={toggleLogOut}
        >
          Are you sure?
        </ModalHeader>
        <ModalBody>
          <h5>Do you want to log out?</h5>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              setModalLogOut(false);
              window.location.href = "/";
              localStorage.clear();
              sessionStorage.clear();
            }}
          >
            Log out
          </Button>{" "}
          <Button color="secondary" onClick={toggleLogOut}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Header;