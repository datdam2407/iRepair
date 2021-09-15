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

export default function Login2() {
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
    
    <div class="container">
		<div class="img">
			<img src="img/bg.svg"/>
		</div>
		<div class="login-content">
			<Form action="index.html">
				<img src="img/avatar.svg"/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login"/>
            </Form>
        </div>
    </div>
  );
}