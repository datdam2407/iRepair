import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Alert,
} from "reactstrap";
import { validPassword } from "../Regex";
import "./Login.css";
// import { post } from "../ReadAPI";
// import FirstLogin from "./FirstLogin";
import logo1 from "../images/logo.png"
// import logo from "./asset/images/logon.png";

export default function Login() {
  const [button, setButton] = useState(true);
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [textBtnLogin, setTextBtnLogin] = useState("Sign in");

//   useEffect(() => {
//     username !== "" && password !== "" && validPassword.test(password)
//       ? setButton(false)
//       : setButton(true);
//   }, [username, password]);

//   const color = "#B22222";
//   const time = 2000;
//   let history = useHistory();

//   function popUpMessage(message) {
//     setResponseMessage(message);
//     setAlert(true);
//     setTimeout(() => {
//       setAlert(false);
//     }, time);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setButton(true);
//     setTextBtnLogin(<Spinner size="sm" color="danger" children="" />);
//     post("auth/login", {
//       username: username,
//       password: password,
//     })
//       .then((res) => {
//         setButton(false);
//         setTextBtnLogin("Login");
//         localStorage.setItem("id", res.data.id);
//         localStorage.setItem("username", res.data.username);
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("location", res.data.location);
//         localStorage.setItem("action", "editAsset");
//         localStorage.setItem("action2", "viewDetail");
//         // localStorage.setItem("newPassword", "newPassword");
//         localStorage.setItem("role", res.data.roles[0]);
//         localStorage.setItem("location",res.data.location);
//         return res;
//       },(err) => {
//         console.log(err.response)
//         if(err.response)
//         if(err.response.status === 401)
//           popUpMessage("Username or password is incorrect. Please try again")
//           else
//            popUpMessage(err.response.data.message);
//         else
//         {
//           console.log(err.message)
//           popUpMessage(err.message)
//         }
//         setButton(false);
//         setTextBtnLogin("Login");
//       })
//       .then((res) => {
//         if(res)
//         res.data.firstLogin === true
//           ? setModal(true)
//           : res.data.roles[0] === "ROLE_ADMIN"
//           // ? history.push("/Admin")
//           // : history.push("/Staff");
//           ? window.location.href = "/Admin"
//           : window.location.href = "/Staff";
//       })
//       ;
//   }

  function handleOnChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleOnChangePass(e) {
    setPassword(e.target.value);
    validPassword.test(e.target.value)
      ? setErrMessage("")
      : setErrMessage("Password must be at least 6 characters long");
  }

  return (
    <div className="col-login">
      {/* <Row className="row mt-5">
        {" "}
        <Col className="col-login" xs={4} md={4} sm={4}></Col>
        <Col xs={4} md={4} sm={4}>
          {logo1}
        </Col>
        <Col xs={4} md={4} sm={4}></Col>
      </Row> */}
      <Form
        className="Login"
        onSubmit={(e) => {
        //   handleSubmit(e);
        }}
      >
        <Row className="row">
          <Col xs={3} md={3} sm={3}></Col>
          <Col xs={6} md={6} sm={6}>
            <FormGroup>
              <div style={{ textAlign: "center" }} for="username"> Username: </div>
              <Input
              
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={(e) => {
                  handleOnChangeUsername(e);
                }}
                defaultValue={username}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={3} md={3} sm={3}></Col>
        </Row>
        <Row className="row">
          <Col xs={3} md={3} sm={3}></Col>
          <Col xs={6} md={6} sm={6}>
            <FormGroup>
            <div style={{ textAlign: "center" }} for="password"> Password: </div>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  handleOnChangePass(e);
                }}
                defaultValue={password}
                required
              />
              <p
                id="errPwMessage"
                style={{
                //   color: color,
                  fontSize: "12px",
                  textAlign: "right",
                  marginTop: "0%",
                  marginBottom: "0%",
                }}
              >
                &nbsp;{errMessage}
              </p>
            </FormGroup>
          </Col>
          <Col xs={3} md={3} sm={3}></Col>
        </Row>
        <Row className="row">
          {" "}
          <Col xs={3} md={3} sm={3}></Col>
          <Col xs={6} md={6} sm={6}>
              
            <Button className = "abc"
              id="login"
              disabled={button}
            //   style={{ width: "100%", background: color }}
            >
              {textBtnLogin}
            </Button>
            <br/>
            <br/>
            <Button 
              id="sign-up"
            //   disabled={button}
            //   style={{ width: "100%", background: color }}
            >
              Sign up
            </Button>
          </Col>
          <Col xs={3} md={3} sm={3}></Col>
        </Row>
        <Row className="row">
          {" "}
          <Col xs={3} md={3} sm={3}></Col>
          <Col xs={6} md={6} sm={6}>
            <Alert isOpen={alert}>{responseMessage}</Alert>
          </Col>
          <Col xs={3} md={3} sm={3}></Col>
        </Row>
      </Form>
      {/* <FirstLogin open={modal} /> */}
    </div>
  );
}