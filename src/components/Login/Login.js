import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Spinner,
} from "reactstrap";
// import { validPassword } from "../Regex";
import "./Login.css";
// import { post } from "../ReadAPI";
// import backgound from "../../asset/images/repair.svg";
// import userimage from "../../asset/images/man.png";
// import wave from "../../asset/images/wave.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock
} from "@fortawesome/free-solid-svg-icons";

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

  const color = "#B22222";
  const time = 2000;
  let history = useHistory();

  function popUpMessage(message) {
    setResponseMessage(message);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, time);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButton(true);
    setTextBtnLogin(<Spinner size="sm" color="danger" children="" />);
    post("auth/login", {
      username: username,
      password: password,
    })
      .then((res) => {
        setButton(false);
        setTextBtnLogin("Signin");
        // localStorage.setItem("id", res.data.id);
        // localStorage.setItem("username", res.data.username);
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("location", res.data.location);
        // localStorage.setItem("action", "editAsset");
        // localStorage.setItem("action2", "viewDetail");
        // // localStorage.setItem("newPassword", "newPassword");
        // localStorage.setItem("role", res.data.roles[0]);
        // localStorage.setItem("location",res.data.location);
        return res;
      }, (err) => {
        console.log(err.response)
        if (err.response)
          if (err.response.status === 401)
            popUpMessage("Username or password is incorrect. Please try again")
          else
            popUpMessage(err.response.data.message);
        else {
          console.log(err.message)
          popUpMessage(err.message)
        }
        setButton(false);
        setTextBtnLogin("Signin");
      })
      .then((res) => {
        if (res)
          res.data.firstLogin === true
            ? setModal(true)
            : res.data.roles[0] === "ROLE_ADMIN"
              // ? history.push("/Admin")
              // : history.push("/Staff");
              ? window.location.href = "/Admin"
              : window.location.href = "/Staff";
      })
      ;
  }

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
    <div>
    <div class="container">
      <div className="img">
         {/* <img src= {backgound}></img> */}
         {/* <img class="wave" src={wave}/> */}

      </div>
      
      <div className="login-content">
        <div className="Login-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* <img src={userimage}/> */}
          <h2 class="title">Welcome</h2>
          <div class="input-div one">
            <div class="i">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
            <div class="div">
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
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </div>
            <div class="div">
              {/* <h5>Password</h5> */}
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
            </div>
          </div>
          <a className="a-login" href="#">Forgot Password?</a>
          <Button 
            className="login-button"
            // disabled={button}
          >
            {/* {textBtnLogin} */}
            Sign in
          </Button>
          <Button
            className="login-button"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
